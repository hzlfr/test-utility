// --- OVLÁDÁNÍ TEMAT (DARK MODE) ---
const themeBtn = document.getElementById('theme-toggle-btn');

// Načíst uloženou preferenci
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

themeBtn.onclick = function() {
    document.body.classList.toggle('dark-mode');
    
    // Uložit volbu
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// --- LOGIKA APLIKACE ---
let activeQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswersLog = [];
let userResponses = []; // Pole pro uložení odpovědí v Test módu
let currentSubjectKey = ''; // Uložení klíče předmětu pro ukládání chyb

let config = {
    isTestMode: false,
    isRandom: true
};

window.onload = function() {
    // Znovu zkontrolujeme theme při načtení
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    if (typeof database === 'undefined') {
        alert("Chyba: Soubor data.js nebyl nalezen! Ujisti se, že je ve stejné složce.");
        return;
    }
    
    // Naplnění selectu
    const select = document.getElementById('subject-select');
    for (const key in database) {
        const option = document.createElement('option');
        option.value = key;
        option.text = database[key].title;
        select.appendChild(option);
    }

    // Reset výběru na výchozí hodnotu (aby nezůstalo viset z minula)
    select.value = "";

    // Aktualizace slideru pro případ, že si prohlížeč pamatuje výběr po refreshi
    updateMaxQuestions();
    checkErrorHistory();
};

function updateMaxQuestions() {
    const select = document.getElementById('subject-select');
    const key = select.value;
    
    // Aktualizujeme stav tlačítka chyb při každé změně předmětu
    checkErrorHistory();
    
    if (!key) return;
    
    // Zobrazit tlačítko pro přehled otázek, jakmile je vybrán předmět
    document.getElementById('preview-controls').classList.remove('hidden');
    
    // Specifické chování pro Zemědělství (skrytí testu, zvýraznění kartiček)
    const btnQuiz = document.getElementById('btn-start-quiz');
    const btnFlash = document.getElementById('btn-start-flashcards');
    const btnErrors = document.getElementById('practice-errors-btn');
    const rowTestMode = document.getElementById('row-testmode');

    if (key === 'zemedelstvi') {
        btnQuiz.classList.add('hidden');
        btnErrors.classList.add('hidden');
        btnFlash.classList.remove('hidden');
        rowTestMode.classList.add('hidden');
        btnFlash.innerText = "Spustit kartičky";
        btnFlash.className = "btn"; // Změna na primární styl
    } else {
        btnQuiz.classList.remove('hidden');
        btnErrors.classList.remove('hidden');
        btnFlash.classList.add('hidden');
        rowTestMode.classList.remove('hidden');
    }

    const totalAvailable = database[key].questions.length;
    document.getElementById('max-q-label').innerText = totalAvailable;
    const input = document.getElementById('set-count');
    const slider = document.getElementById('q-slider');
    
    input.max = totalAvailable;
    slider.max = totalAvailable;
    
    // Nastaví defaultně max, nebo nechá uživatelovu hodnotu pokud je menší
    if(parseInt(input.value) > totalAvailable) {
        input.value = totalAvailable;
        slider.value = totalAvailable;
    }
}


function syncInputs(val) {
    // Zajistí, že se hodnota propíše do obou prvků (slider i číslo)
    document.getElementById('set-count').value = val;
    document.getElementById('q-slider').value = val;
}

function quitQuiz() {
    document.getElementById('quiz-interface').classList.add('hidden');
    document.getElementById('menu-box').classList.remove('hidden');
}

function resetToMenu() {
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('menu-box').classList.remove('hidden');
}

function startQuiz(isErrorMode = false) {
    const select = document.getElementById('subject-select');
    const subjectKey = select.value;
    currentSubjectKey = subjectKey;

    if (!subjectKey) {
        alert("Prosím, vyber nejdříve předmět!");
        return;
    }

    const requestedCount = parseInt(document.getElementById('set-count').value);
    config.isRandom = document.getElementById('set-random').checked;
    config.isTestMode = document.getElementById('set-testmode').checked;

    // Hluboká kopie dat
    let sourceData = JSON.parse(JSON.stringify(database[subjectKey].questions));
    
    // Zamíchání odpovědí u každé otázky (aby nebyly vždy na stejném místě)
    sourceData.forEach(q => {
        const combined = q.options.map((opt, i) => ({
            text: opt,
            isCorrect: q.correct.includes(i)
        }));
        
        shuffleArray(combined);
        
        q.options = combined.map(o => o.text);
        q.correct = combined.map((o, i) => o.isCorrect ? i : -1).filter(i => i !== -1);
    });

    if (isErrorMode) {
        // --- LOGIKA PRO REŽIM CHYB ---
        const stats = JSON.parse(localStorage.getItem('quiz_error_stats')) || {};
        const subjectStats = stats[subjectKey] || {};
        
        // Vyfiltrujeme jen otázky, kde je počet chyb > 0
        sourceData = sourceData.filter(q => (subjectStats[q.id] || 0) > 0);
        
        if (sourceData.length === 0) {
            alert("Skvělá práce! Pro tento předmět nemáš žádné zaznamenané chyby.");
            return;
        }

        if (config.isRandom) {
            shuffleArray(sourceData);
        } else {
            // Seřadíme sestupně podle počtu chyb (nejvíce chyb nahoře)
            sourceData.sort((a, b) => (subjectStats[b.id] || 0) - (subjectStats[a.id] || 0));
        }
    } else if (config.isRandom) {
        shuffleArray(sourceData);
    }

    const maxQ = sourceData.length;
    const finalCount = (requestedCount > 0 && requestedCount <= maxQ) ? requestedCount : maxQ;
    activeQuestions = sourceData.slice(0, finalCount);

    currentIndex = 0;
    score = 0;
    userAnswersLog = [];
    userResponses = new Array(activeQuestions.length).fill(null); // Reset odpovědí

    document.getElementById('menu-box').classList.add('hidden');
    document.getElementById('quiz-interface').classList.remove('hidden');
    document.getElementById('quiz-title').innerText = database[subjectKey].title;
    document.getElementById('total-q').innerText = activeQuestions.length;
    document.getElementById('progress-bar-container').innerHTML = ''; // Vymazat progress bar

    // Nastavení zobrazení podle módu
    // Tlačítko mapy a navigátor dostupný vždy
    document.getElementById('nav-toggle-btn').classList.remove('hidden');
    document.getElementById('question-navigator').classList.add('hidden');
    renderNavigator();

    if (config.isTestMode) {
        document.getElementById('progress-bar-container').classList.add('hidden'); // V testu skryjeme barevný bar
    } else {
        document.getElementById('progress-bar-container').classList.remove('hidden');
    }

    loadQuestion();
}

function loadQuestion() {
    const qData = activeQuestions[currentIndex];
    document.getElementById('current-q').innerText = currentIndex + 1;
    document.getElementById('question').innerText = qData.question;

    const optionsUl = document.getElementById('options');
    optionsUl.innerHTML = '';
    
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'none';
    feedback.className = 'feedback'; 

    const btn = document.getElementById('action-btn');
    
    if (config.isTestMode) {
        // TEST MÓD
        btn.innerText = (currentIndex === activeQuestions.length - 1) ? "Dokončit test" : "Další otázka";
        btn.onclick = handleTestModeNext; 
    } else {
        // PROCVIČOVÁNÍ
        if (userResponses[currentIndex]) {
            // Pokud už bylo zodpovězeno, zobrazíme feedback a tlačítko pro posun (bez skórování)
            const currentQ = activeQuestions[currentIndex];
            const correctAnswers = [...currentQ.correct].sort();
            const userAnswers = userResponses[currentIndex];
            const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);

            if (isCorrect) {
                feedback.className = 'feedback correct';
                feedback.innerHTML = 'Správně!';
            } else {
                feedback.className = 'feedback wrong';
                const correctText = correctAnswers.map(i => currentQ.options[i]).join('<br>');
                feedback.innerHTML = `Špatně.<br>Správná odpověď:<br><span class="correct-answer-highlight">${correctText}</span>`;
            }
            feedback.style.display = 'block';

            btn.innerText = (currentIndex === activeQuestions.length - 1) ? "Zobrazit výsledky" : "Další otázka";
            btn.onclick = function() { currentIndex++; (currentIndex < activeQuestions.length) ? loadQuestion() : showResults(); };
        } else {
            btn.innerText = "Zkontrolovat";
            btn.onclick = handlePracticeCheck; 
        }
        btn.style.display = 'block';
    }

    // Aktualizace navigace (zvýraznění aktivní bublinky)
    updateNavigator();

    const inputType = qData.correct.length > 1 ? 'checkbox' : 'radio';
    
    qData.options.forEach((opt, index) => {
        const li = document.createElement('li');
        li.className = 'option-item';
        
        const input = document.createElement('input');
        input.type = inputType;
        input.name = 'quiz-option';
        input.value = index;
        
        // Pokud je procvičování a uživatel už odpověděl, zakážeme změnu
        if (!config.isTestMode && userResponses[currentIndex]) {
            input.disabled = true;
            
            // Zvýraznění odpovědi, aby byla čitelná i když je disabled
            if (userResponses[currentIndex].includes(index)) {
                li.style.opacity = "1";
                li.style.fontWeight = "bold";
                li.style.border = "1px solid currentColor";
                li.style.borderRadius = "5px";
            } else {
                li.style.opacity = "0.5";
            }
        }
        
        li.onclick = (e) => {
            if (input.disabled) return;
            
            if(e.target !== input) {
                if (inputType === 'radio') {
                    document.querySelectorAll('input[name="quiz-option"]').forEach(i => i.checked = false);
                    input.checked = true;
                } else {
                    input.checked = !input.checked;
                }
            }
        };

        const label = document.createElement('span');
        label.innerText = opt;

        li.appendChild(input);
        li.appendChild(label);
        optionsUl.appendChild(li);

        // Obnovení odpovědi, pokud už byla vybrána
        if (userResponses[currentIndex] && userResponses[currentIndex].includes(index)) {
            input.checked = true;
        }
    });
}

// Funkce pro TEST MÓD (ukládání stavu a navigace)
function handleTestModeNext() {
    saveCurrentResponse();

    currentIndex++;
    if (currentIndex < activeQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function saveCurrentResponse() {
    const userInputs = document.querySelectorAll('input[name="quiz-option"]:checked');
    const values = Array.from(userInputs).map(i => parseInt(i.value)).sort();
    
    // Uložíme odpověď (nebo null, pokud nic nevybral)
    userResponses[currentIndex] = values.length > 0 ? values : null;
}

// Funkce pro PROCVIČOVÁNÍ (s okamžitou zpětnou vazbou)
function handlePracticeCheck() {
    const userInputs = document.querySelectorAll('input[name="quiz-option"]:checked');
    if (userInputs.length === 0) {
        alert("Vyber odpověď!");
        return;
    }

    const userAnswers = Array.from(userInputs).map(i => parseInt(i.value)).sort();
    
    // Uložíme odpověď i v procvičovacím režimu pro potřeby mapy
    userResponses[currentIndex] = userAnswers;
    updateNavigator();

    // Zablokování možností po odpovědi
    document.querySelectorAll('input[name="quiz-option"]').forEach(input => {
        input.disabled = true;
        const li = input.parentElement;
        if (input.checked) {
            // Zvýraznění právě vybrané odpovědi
            li.style.opacity = "1";
            li.style.fontWeight = "bold";
            li.style.border = "1px solid currentColor";
            li.style.borderRadius = "5px";
        } else {
            li.style.opacity = "0.5";
        }
    });

    const currentQ = activeQuestions[currentIndex];
    const correctAnswers = [...currentQ.correct].sort();

    const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers);
    const feedback = document.getElementById('feedback');
    const btn = document.getElementById('action-btn');

    updateProgressBar(isCorrect);

    if (isCorrect) {
        score++;
        feedback.className = 'feedback correct';
        feedback.innerHTML = 'Správně!';
        removeError(currentSubjectKey, currentQ.id); // Odstranit chybu, pokud uživatel odpověděl správně
    } else {
        feedback.className = 'feedback wrong';
        saveError(currentSubjectKey, currentQ.id); // Uložit chybu
        const correctText = correctAnswers.map(i => currentQ.options[i]).join('<br>');
        feedback.innerHTML = `Špatně.<br>Správná odpověď:<br><span class="correct-answer-highlight">${correctText}</span>`;
    }
    
    feedback.style.display = 'block';

    btn.innerText = (currentIndex === activeQuestions.length - 1) ? "Zobrazit výsledky" : "Další otázka";
    btn.onclick = function() {
        currentIndex++;
        if (currentIndex < activeQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    };
}

function showResults() {
    document.getElementById('quiz-interface').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');

    // Pokud je Test mód, musíme teprve teď spočítat skóre
    if (config.isTestMode) {
        score = 0;
        userAnswersLog = [];
        
        activeQuestions.forEach((q, index) => {
            const userSelected = userResponses[index] || [];
            const correct = [...q.correct].sort();
            const isCorrect = JSON.stringify(userSelected) === JSON.stringify(correct);
            
            if (isCorrect) {
                score++;
                removeError(currentSubjectKey, q.id); // Odstranit chybu při správné odpovědi
            }
            else {
                // V test módu ukládáme chyby až na konci
                saveError(currentSubjectKey, q.id);
            }

            userAnswersLog.push({
                question: q.question,
                options: q.options,
                userSelected: userSelected,
                correct: correct,
                isCorrect: isCorrect
            });
        });
    }

    const total = activeQuestions.length;
    const percent = Math.round((score / total) * 100);
    
    document.getElementById('final-score').innerText = `${score} / ${total}`;
    document.getElementById('percentage-score').innerText = `Úspěšnost: ${percent} %`;

    const reportContainer = document.getElementById('detailed-report');
    reportContainer.innerHTML = ''; 
    
    // Report chyb se zobrazí jen pokud byl Test mód a byly nějaké chyby
    if (config.isTestMode && score < total) {
        reportContainer.classList.remove('hidden');
        const h3 = document.createElement('h3');
        h3.innerText = "Chybně zodpovězené otázky:";
        reportContainer.appendChild(h3);

        userAnswersLog.forEach((log, index) => {
            if (!log.isCorrect) {
                const div = document.createElement('div');
                div.className = 'error-item';
                
                const qTitle = document.createElement('span');
                qTitle.className = 'error-question';
                qTitle.innerText = `${index + 1}. ${log.question}`;
                
                const correctTxt = log.correct.map(i => log.options[i]).join(', ');
                const userTxt = log.userSelected.map(i => log.options[i]).join(', ');

                div.innerHTML = `
                    <div class="report-item-header">${qTitle.outerHTML}</div>
                    <div class="report-user-answer">Tvoje odpověď: ${userTxt}</div>
                    <div class="report-correct-answer">Správně: ${correctTxt}</div>
                `;
                reportContainer.appendChild(div);
            }
        });
    } else {
        reportContainer.classList.add('hidden');
    }
}

function updateProgressBar(isCorrect) {
    const container = document.getElementById('progress-bar-container');
    const segment = document.createElement('div');
    segment.className = isCorrect ? 'progress-segment correct' : 'progress-segment wrong';
    
    // Šířka dílku = 100% děleno celkovým počtem otázek
    const widthPercent = 100 / activeQuestions.length;
    segment.style.width = '0%'; // Start na 0 pro animaci
    
    container.appendChild(segment);
    
    // Malé zpoždění pro spuštění CSS transition
    setTimeout(() => {
        segment.style.width = widthPercent + '%';
    }, 10);
}

// --- Funkce pro navigaci (Bublinky) ---
function renderNavigator() {
    const nav = document.getElementById('question-navigator');
    nav.innerHTML = '';
    activeQuestions.forEach((_, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'nav-bubble';
        bubble.innerText = index + 1;
        bubble.onclick = () => goToQuestion(index);
        nav.appendChild(bubble);
    });
}

function toggleNavigator() {
    const nav = document.getElementById('question-navigator');
    nav.classList.toggle('hidden');
}

function updateNavigator() {
    const bubbles = document.querySelectorAll('.nav-bubble');
    bubbles.forEach((b, i) => {
        b.className = 'nav-bubble'; // Reset
        if (i === currentIndex) b.classList.add('active');
        if (userResponses[i] && userResponses[i].length > 0) {
            b.classList.add('answered');
            
            if (!config.isTestMode) {
                const q = activeQuestions[i];
                const correct = JSON.stringify([...q.correct].sort());
                const user = JSON.stringify([...userResponses[i]].sort());
                
                if (correct === user) b.classList.add('nav-correct');
                else b.classList.add('nav-wrong');
            }
        }
    });
}

function goToQuestion(index) {
    if (config.isTestMode) {
        saveCurrentResponse(); // Uložit aktuální před odchodem
    }
    currentIndex = index;
    // Po kliknutí na číslo otázky mapu zase schováme, aby nezavazela
    document.getElementById('question-navigator').classList.add('hidden');
    loadQuestion();
}

// --- Funkce pro zobrazení všech otázek a odpovědí ---
function showAllQuestions() {
    const select = document.getElementById('subject-select');
    const subjectKey = select.value;
    if (!subjectKey) return;

    const data = database[subjectKey];
    
    const questionsToShow = data.questions;

    document.getElementById('review-subject-title').innerText = `${data.title} - Přehled otázek (zobrazeno ${questionsToShow.length})`;
    
    const container = document.getElementById('questions-list-container');
    container.innerHTML = '';

    questionsToShow.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'review-item';
        
        const qText = document.createElement('span');
        qText.className = 'review-question';
        qText.innerText = `${index + 1}. ${q.question}`;
        item.appendChild(qText);

        q.options.forEach((opt, i) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'review-option';
            optDiv.innerText = opt;
            
            if (q.correct.includes(i)) {
                optDiv.classList.add('is-correct');
            }
            item.appendChild(optDiv);
        });
        container.appendChild(item);
    });

    document.getElementById('menu-box').classList.add('hidden');
    document.getElementById('all-questions-view').classList.remove('hidden');
}

function closeAllQuestions() {
    document.getElementById('all-questions-view').classList.add('hidden');
    document.getElementById('menu-box').classList.remove('hidden');
}

// --- Práce s chybami (LocalStorage) ---
function saveError(subjectKey, questionId) {
    let stats = JSON.parse(localStorage.getItem('quiz_error_stats')) || {};
    if (!stats[subjectKey]) stats[subjectKey] = {};
    // Zvýšíme počítadlo chyb pro danou otázku
    stats[subjectKey][questionId] = (stats[subjectKey][questionId] || 0) + 1;
    localStorage.setItem('quiz_error_stats', JSON.stringify(stats));
    checkErrorHistory();
}

function removeError(subjectKey, questionId) {
    let stats = JSON.parse(localStorage.getItem('quiz_error_stats')) || {};
    if (stats[subjectKey] && stats[subjectKey][questionId]) {
        delete stats[subjectKey][questionId];
        // Pokud už v předmětu nejsou žádné chyby, můžeme smazat i klíč předmětu (volitelné)
        if (Object.keys(stats[subjectKey]).length === 0) {
            delete stats[subjectKey];
        }
        localStorage.setItem('quiz_error_stats', JSON.stringify(stats));
        checkErrorHistory();
    }
}

function checkErrorHistory() {
    const statsStr = localStorage.getItem('quiz_error_stats');
    const stats = statsStr ? JSON.parse(statsStr) : {};

    // 2. Tlačítko "Procvičovat chyby" (Specifické pro vybraný předmět)
    const practiceBtn = document.getElementById('practice-errors-btn');
    const select = document.getElementById('subject-select');
    const subjectKey = select.value;
    
    // Zjistíme, zda má aktuální předmět nějaké chyby (počet > 0)
    let subjectHasErrors = false;
    if (subjectKey && stats[subjectKey]) {
        for (const qId in stats[subjectKey]) {
            if (stats[subjectKey][qId] > 0) {
                subjectHasErrors = true;
                break;
            }
        }
    }

    if (subjectHasErrors) {
        practiceBtn.className = 'btn btn-warning';
        practiceBtn.innerText = 'Procvičovat chyby';
        practiceBtn.disabled = false;
        practiceBtn.title = "Zobrazí pouze otázky, ve kterých jsi v minulosti chyboval(a)";
    } else {
        practiceBtn.className = 'btn btn-green-outline';
        practiceBtn.innerText = 'Žádné chyby k procvičování';
        practiceBtn.disabled = true;
        practiceBtn.title = "V tomto předmětu zatím nemáš žádné zaznamenané chyby.";
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- FLASHCARDS LOGIKA ---

function startFlashcards() {
    const select = document.getElementById('subject-select');
    const subjectKey = select.value;
    currentSubjectKey = subjectKey;

    if (!subjectKey) {
        alert("Prosím, vyber nejdříve předmět!");
        return;
    }

    const requestedCount = parseInt(document.getElementById('set-count').value);
    config.isRandom = document.getElementById('set-random').checked;

    // Hluboká kopie dat
    let sourceData = JSON.parse(JSON.stringify(database[subjectKey].questions));
    
    if (config.isRandom) {
        shuffleArray(sourceData);
    }

    const maxQ = sourceData.length;
    const finalCount = (requestedCount > 0 && requestedCount <= maxQ) ? requestedCount : maxQ;
    activeQuestions = sourceData.slice(0, finalCount);

    currentIndex = 0;

    document.getElementById('menu-box').classList.add('hidden');
    document.getElementById('flashcards-interface').classList.remove('hidden');
    document.getElementById('fc-subject-title').innerText = database[subjectKey].title;

    document.getElementById('fc-navigator').classList.add('hidden');
    renderFcNavigator();
    
    loadFlashcard();
}

function loadFlashcard() {
    if (currentIndex >= activeQuestions.length) return;

    const qData = activeQuestions[currentIndex];
    const card = document.getElementById('flashcard-card');
    const front = card.querySelector('.flashcard-front');
    
    // Reset otočení bez animace (aby neproblikla odpověď nové karty)
    front.style.transition = 'none';
    card.classList.remove('flipped');
    void card.offsetWidth; // Vynutit překreslení
    front.style.transition = '';

    document.getElementById('fc-current').innerText = currentIndex + 1;
    document.getElementById('fc-total').innerText = activeQuestions.length;

    // Přední strana
    document.getElementById('fc-front-text').innerText = qData.question;

    // Zadní strana (správné odpovědi)
    const correctOptions = qData.correct.map(i => qData.options[i]);
    let backHtml = correctOptions.length === 1 
        ? `<div style="font-size: 1.2em; font-weight: bold;">${correctOptions[0]}</div>`
        : `<ul style="text-align: left; padding-left: 20px;">${correctOptions.map(o => `<li>${o}</li>`).join('')}</ul>`;
    
    document.getElementById('fc-back-text').innerHTML = backHtml;

    updateFcNavigator();

    // Aktualizace tlačítka Další na poslední kartě
    const btnNext = document.getElementById('fc-next-btn');
    if (currentIndex === activeQuestions.length - 1) {
        btnNext.innerHTML = "Zamíchat a znovu &#8635;";
        btnNext.classList.add('btn-warning');
    } else {
        btnNext.innerHTML = "Další &#10095;";
        btnNext.classList.remove('btn-warning');
    }
}

function flipCard() {
    document.getElementById('flashcard-card').classList.toggle('flipped');
}

function nextFlashcard() {
    if (currentIndex < activeQuestions.length - 1) {
        currentIndex++;
        loadFlashcard();
    } else {
        // Jsme na konci -> zamíchat a znovu
        shuffleArray(activeQuestions);
        currentIndex = 0;
        loadFlashcard();
    }
}

function prevFlashcard() {
    if (currentIndex > 0) {
        currentIndex--;
        loadFlashcard();
    }
}

function quitFlashcards() {
    document.getElementById('flashcards-interface').classList.add('hidden');
    document.getElementById('menu-box').classList.remove('hidden');
}

// --- Navigace pro Flashcards ---
function renderFcNavigator() {
    const nav = document.getElementById('fc-navigator');
    nav.innerHTML = '';
    activeQuestions.forEach((_, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'nav-bubble';
        bubble.innerText = index + 1;
        bubble.onclick = () => goToFlashcard(index);
        nav.appendChild(bubble);
    });
}

function toggleFcNavigator() {
    document.getElementById('fc-navigator').classList.toggle('hidden');
}

function updateFcNavigator() {
    const bubbles = document.querySelectorAll('#fc-navigator .nav-bubble');
    bubbles.forEach((b, i) => {
        b.className = 'nav-bubble'; // Reset
        if (i === currentIndex) b.classList.add('active');
    });
}

function goToFlashcard(index) {
    currentIndex = index;
    document.getElementById('fc-navigator').classList.add('hidden');
    loadFlashcard();
}
