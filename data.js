// data.js - Zde jsou uloženy všechny otázky

const database = {
   /* "pedagogika1": {
        title: "Pedagogika I",
        questions: [
            {
        id: 1,
        question: "Pojem 'tekuté časy' souvisí s:",
        options: [
            "psychoanalýzou",
            "existencialismem",
            "postmodernismem"
        ],
        correct: [2]
    },
    {
        id: 2,
        question: "Který/é termín/y se nepoužívá/jí v reformní pedagogice? (označ všechny správné odpovědi)",
        options: [
            "Přijetí dítěte takového, jaké je.",
            "Tolerance pasivity dítěte.",
            "Respektování přirozeného vývoje dítěte.",
            "Důraz na maximální rozvoj dítěte po stránce intelektuální."
        ],
        correct: [1, 3]
    },
    {
        id: 3,
        question: "Která oblast didaktického materiálu není obsažena v systému Marie Montessori?",
        options: [
            "Jazykový materiál",
            "Biologický materiál",
            "Smyslový materiál",
            "Materiál ke kosmické výchově"
        ],
        correct: [1]
    },
    {
        id: 4,
        question: "Mezi tzv. moderní alternativní školy patří: (zaškrtni všechny možnosti)",
        options: [
            "Program 'Začít spolu'",
            "Lesní škola",
            "Scioškola",
            "Waldorfská škola"
        ],
        correct: [0, 1, 2]
    },
    {
        id: 5,
        question: "Senzitivní fázi označujeme...a používá ji….",
        options: [
            "Zvýšená citlivost pro danou činnost - Daltonský plán.",
            "Zvýšená citlivost pro danou činnost - M. Montessori.",
            "Zaměření učitele na činnost, která se dítěti líbí - M. Montessori.",
            "Zvýšená citlivost, kdy si učitel uvědomuje tento fakt a snaží se předejít situacím, kdy by dítě mohlo přecitlivěle reagovat - M. Montessori."
        ],
        correct: [1]
    },
    {
        id: 6,
        question: "Které pojmy charakterizují moderní alternativu 'Začít spolu'. (zaškrtněte všechny možnosti)",
        options: [
            "Centra aktivit",
            "Ranní kruh",
            "Práce s chybou, chyba je brána jako součást vzdělávacího procesu",
            "Hodnocení probíhá známkou"
        ],
        correct: [0, 1]
    },
    {
        id: 7,
        question: "Základní principy 'Daltonského plánu' (zaškrtněte všechny možnosti)",
        options: [
            "Svoboda",
            "Radost",
            "Odpovědnost",
            "Pravdivost"
        ],
        correct: [0, 2]
    },
    {
        id: 8,
        question: "Prvním systematickým zpracováním slovně názorného vyučování je didaktický systém:",
        options: [
            "J. F. Herbart",
            "J. Dewey",
            "J. A. Komenský",
            "J. Locke"
        ],
        correct: [2]
    },
    {
        id: 9,
        question: "Autorem problémové metody je:",
        options: [
            "W. Kilpatrick",
            "S. Vrána",
            "J. Dewey",
            "V. Prihoda"
        ],
        correct: [2]
    },
    {
        id: 10,
        question: "Který pojem není typický pro R. Steinera?",
        options: [
            "Epocha",
            "Antroposofie",
            "Polarizace pozornosti",
            "Využívání přírodních materiálů"
        ],
        correct: [2]
    },
    {
        id: 11,
        question: "Který princip neužívala M. Montessori ve svých školách?",
        options: [
            "Vlastní objevování poznatků samotným dítětem",
            "Práce s chybou",
            "Hromadnou organizační formu při vyučování"
        ],
        correct: [2]
    },
    {
        id: 12,
        question: "Autorem projektové metody je:",
        options: [
            "W. Kilpatrick",
            "O. Kádner",
            "J. Dewey",
            "V. Příhoda"
        ],
        correct: [0]
    },
    {
        id: 13,
        question: "Pro antické vnímání výchovy je typické:",
        options: [
            "Hledání individuální cesty k Bohu.",
            "Hledání odpovědnosti k obci (polis) a jejím zákonům",
            "Hledání cesty k nalezení všeobecné metody poznání."
        ],
        correct: [1]
    },
    {
        id: 14,
        question: "Myšlenku přirozené společenské hierarchie (nerovnosti) a odstupňované výchovy přináší:",
        options: [
            "Tomáš Akvinský",
            "Augustinus Aurelius",
            "J. A. Komenský"
        ],
        correct: [0]
    },
    {
        id: 15,
        question: "Komenského ucelená idea výchovné přeměny světa je obsažena ve spise:",
        options: [
            "Didaktika česká",
            "Vícenásobná porada o nápravě věcí lidských",
            "Labyrint světa a ráj srdce"
        ],
        correct: [1]
    },
    {
        id: 16,
        question: "Myšlenku, že „lidská mysl je bílým papírem, bez jakýchkoliv tiskových typů, beze všech idejí\" vyslovil:",
        options: [
            "J. J. Rousseau",
            "F. Bacon",
            "J. Locke"
        ],
        correct: [2]
    },
    {
        id: 17,
        question: "Myšlenku, že „Všechno jest dobré, jak vychází a rukou původce všech věcí; vše zvrhá se v rukou člověka\" vyslovil:",
        options: [
            "J. J. Rousseau",
            "F. Bacon",
            "J. Locke"
        ],
        correct: [0]
    },
    {
        id: 18,
        question: "Vzdělávací princip: 'Pomoz mi, abych to mohl udělat sám', je typický pro koncepci:",
        options: [
            "R. Steinera",
            "C. Freineta",
            "M. Montessori"
        ],
        correct: [2]
    },
    {
        id: 19,
        question: "Pokud budeme vnímat pedagogiku jako normativní vědu, bude to znamenat:",
        options: [
            "bude se snažit vytyčovat nebo i předpisovat ideální podobu toho, čeho se má výchovou jedinců dosáhnout.",
            "Sloužit pro definování a objasňování jevů v edukační realitě, poskytovat výklad o struktuře a fungování těchto jevů.",
            "Bude založena na výzkumu a na poznatcích jím produkovaných."
        ],
        correct: [0]
    },
    {
        id: 20,
        question: "Pojem „vševěda\" je spojen s dilem:",
        options: [
            "Petra Chelčického",
            "Jana Husa",
            "J. A. Komenského"
        ],
        correct: [2]
    },
    {
        id: 21,
        question: "Mezi základní pedagogické disciplíny patří:",
        options: [
            "Obecná pedagogika, Pedagogická a Školní psychologie, Teorie výchovy, Didaktika.",
            "Obecná pedagogika, Dějiny pedagogiky a dějiny školství, Sociologie výchovy, Didaktika.",
            "Obecná pedagogika, Dějiny pedagogiky a dějiny školství, Teorie výchovy, Didaktika."
        ],
        correct: [2]
    },
    {
        id: 22,
        question: "Vyberte slovo, které je v pedagogických souvislostech ekvivalentem slova 'funkcionální výchova':",
        options: [
            "Institucionální",
            "nepřímá",
            "Formativní"
        ],
        correct: [1]
    },
    {
        id: 23,
        question: "Pro tradiční pojetí výchovy je typický:",
        options: [
            "Subjekto-subjektový vztah vychovatele a vychovávaného",
            "Subjekto-objektový vztah vychovatele a vychovávaného",
            "Objekto-objektový vztah vychovatele a vychovávaného"
        ],
        correct: [1]
    },
    {
        id: 24,
        question: "Pojem 'makroprostředí' označuje:",
        options: [
            "Širší společnost, ve kterém žijeme.",
            "Osoby blízké, které nás výchovně ovlivňují.",
            "Školní třídu a vztahy mezi spolužáky v něm."
        ],
        correct: [0]
    },
    {
        id: 25,
        question: "Kdo byl představitelem tzv. pokusných škol v 20. a 30. letech 20. století?",
        options: [
            "L. N. Tolstoj",
            "E. Štorch",
            "L. S. Vygotskij"
        ],
        correct: [1]
    },
    {
        id: 26,
        question: "Jaká z těchto alternativních škol se řadí mezi „klasické\" reformní školy 20-30 let 20. století?",
        options: [
            "Škola hrou",
            "Začít spolu",
            "Daltonská (daltonský plán)"
        ],
        correct: [2]
    },
    {
        id: 27,
        question: "Johann Heinrich Pestalozzi je pedagogem, který:",
        options: [
            "Založil nový systém německého školství",
            "Pracoval s dětmi-sirotky a realizoval praktickou pedagogickou činnost",
            "Publikoval teoretické práce, které ovlivnily vytvoření tzv. tradiční pedagogiky"
        ],
        correct: [1]
    },
    {
        id: 28,
        question: "Jedním ze zakladatelů české vědecké pedagogiky byl:",
        options: [
            "T. G. Masaryk",
            "G. A. Lindner",
            "Z. Nejedlý"
        ],
        correct: [1]
    },
    {
        id: 29,
        question: "Jean-Jacques Rousseau lze vnímat jako zastánce tzv..",
        options: [
            "Přirozené výchovy",
            "Scholastické výchovy",
            "Filantropické výchovy"
        ],
        correct: [0]
    },
    {
        id: 30,
        question: "Který pojem není typický pro R. Steinera?",
        options: [
            "Epocha",
            "Antroposofie",
            "Polarizace pozornosti"
        ],
        correct: [2]
    },
    {
        id: 31,
        question: "Který z vyjmenovaných výroků nepatří Montessoriové?",
        options: [
            "Dítě je tvůrcem sebe sama.",
            "Pomoz mi, abych to dokázal sám.",
            "Každé dítě potřebuje pevné vedení, aby mohlo být vzděláváno efektivně."
        ],
        correct: [2]
    },
    {
        id: 32,
        question: "Kdo z níže uvedených usiloval o prosazení vysokoškolského vzdělání pro učitele škol obecných a měšťanských škol v třicátých letech dvacátého století:",
        options: [
            "O. Chlup",
            "V. Příhoda",
            "G. A. Lindner",
            "F. Čada"
        ],
        correct: [0, 1]
    },
    {
        id: 33,
        question: "Jak si Komenský představoval elementární či pacholečí školu? Vyberte jen jedno tvrzení, které je pravdivé.",
        options: [
            "Na tomto stupni nechtěl, aby se používaly učebnice.",
            "Výukové hodiny měly probíhat v mateřském jazyce.",
            "Chtěl mít ve třídě jen málo dětí, aby se učitel mohl věnovat každému individuálně.",
            "Školy měly být umístěny v nejbližším větším městě."
        ],
        correct: [1]
    },
    {
        id: 34,
        question: "Cílem primární socializace je především:",
        options: [
            "Připravit dítě pro svět práce",
            "Položit základy pro celkový rozvoj osobnosti",
            "Naučit dítě číst a psát",
            "Naučit dítě slušnému chování"
        ],
        correct: [1]
    },
    {
        id: 35,
        question: "Záměrná výchova a uvědomělé sebeutváření jsou:",
        options: [
            "Intencionální formou výchovy",
            "Funkcionální formou výchovy",
            "Bezděčným pedagogickým procesem",
            "Nepřímým pedagogickým procesem"
        ],
        correct: [0]
    },
    {
        id: 36,
        question: "Myšlenku, 'Nenávidím knihy; už nás jen naučí o tom, co známe... Když už se bez knih neobejdeme, upozorňuji tedy na jednu, která po mém soudu podává nejzdařilejší pojednání o přirozené výchově. Bude to tedy první kniha, kterou si přečte... Má to snad být Aristoteles, Plinius nebo Buffon? Nikoli, je to Robinson Crusoe.' vyslovil:",
        options: [
            "J. J. Rousseau - Emil čili o výchově",
            "J. A. Komenský - Velká didaktika",
            "M. Montessori - Objevování dítěte"
        ],
        correct: [0]
    },
    {
        id: 37,
        question: "Myšlenku, 'Všeobecné umění, jak učit všecky všemu. A to učit spolehlivě, aby se výsledek musil dostavit. A učit lehce, tj. aby přitom ani vyučující, ani žáci neměli žádné potíže, nýbrž spíše aby to obojím působilo největší příjemnost. A učit důkladně, ne povrchně nebo naoko, nýbrž přiváděním k pravému vzdělání, ušlechtilým mravům a vroucí zbožnosti.' vyslovil:",
        options: [
            "J. J. Rousseau - Emil čili o výchově",
            "J. A. Komenský - Velká didaktika",
            "M. Montessori - Objevování dítěte"
        ],
        correct: [1]
    },
    {
        id: 38,
        question: "Pojem pedagogizace prostředí označuje:",
        options: [
            "Neutralizaci negativních vlivů na výchovu (např. umístění kamerového systému)",
            "Vyrovnání nedostatků výchovného prostředí (např. zajištění náhradní rodinné péče)",
            "Využití úprav prostředí jako výchovného prostředku (např. uspořádání učebny pro skupinovou výuku)"
        ],
        correct: [2]
    },
    {
        id: 39,
        question: "Mezi intencionální formy výchovy nepatří:",
        options: [
            "Posilování těch osobnostních rysů, které se podílejí na utváření zdravého živ. stylu",
            "Vydání řádu třídy zakazujícího nežádoucí chování",
            "Oddělení agresora a oběti při vyšetřování šikany"
        ],
        correct: [0]
    },
    {
        id: 40,
        question: "Tendence vnímat výchovu dítěte jen jako cestu k specifické kariéře, bez ohledu na jeho potřeby a zájmy, lze označit za:",
        options: [
            "Výchovný individualismus",
            "Výchovný hédonismus",
            "Výchovný objektivismus"
        ],
        correct: [1]
    },
    {
        id: 41,
        question: "Pojem viabilita v pedagogice souvisí:",
        options: [
            "Se schopností člověka využívat potenciálu přírody pro výchovné účely",
            "Se schopností člověka mít kolem sebe pozitivní přátelské vazby",
            "Se schopností člověka vybrat si cíl a věnovat úsilí pro jeho dosažení"
        ],
        correct: [2]
    },
    {
        id: 42,
        question: "Jaká oblast didaktického materiálu není obsazena v systému, který Marie Montessori?",
        options: [
            "jazykový materiál",
            "biologický materiál",
            "smyslový materiál"
        ],
        correct: [1]
    },
    {
        id: 43,
        question: "Myšlenku, „měli bychom se co nejvíce snažit o to, aby každá pomůcka měla v sobě zabudovanou určitou schopnost kontroly chyby. Jako příklad můžeme uvést trojrozměrné vkládací tvary. Skládají se z dřevěného hranolu s otvory pro válečky odstupňovaných odměrů, které se liší buď výškou, nebo průměrem\" vyslovil:",
        options: [
            "J. J. Rousseau - Emil čili o výchově",
            "J. A. Komenský - Velká didaktika",
            "M. Montessori - Objevování dítěte",
            "J.A. Komenský - Informatorium"
        ],
        correct: [2]
    },
    {
        id: 44,
        question: "Myšlenku, „učitelé, když budou přívětiví a laskaví a nebudou žáky od sebe odpuzovat žádnou drsností, nýbrž vábit je k sobě otcovským smýšlením, chováním, když jim budou doporučovat učení(....), když pochválí časem pilnější žáky\" vyslovil:",
        options: [
            "J. J. Rousseau - Emil čili o výchově",
            "J. A. Komenský - Velká didaktika",
            "M. Montessori - Objevování dítěte",
            "J.A. Komenský - Informatorium"
        ],
        correct: [1]
    },
    {
        id: 45,
        question: "Dílo „Brána jazyků otevřená\" sloužila jako:",
        options: [
            "Filozofický text o vzniku světa",
            "Učebnice latinského jazyka pro žáky a studenty",
            "Učebnice českého jazyka pro žáky",
            "Pouhé spisy o cestách J. A. Komenského"
        ],
        correct: [1]
    },
    {
        id: 46,
        question: "Uvedené dílo je od autora? „Špatně se tedy starají o chlapce ti, kteří je nutí do učení proti jejich vůli. Neboť co si z toho konečně slibují? Nepřijímá-li žaludek pokrmy s chutí, a přece mu dávají, nic z toho nemůže vzejít než nechutenství a zvracení anebo aspoň špatné zažívání, porucha zdraví. Naproti tomu lačný žaludek přijímá chtivě všechno, cokoli mu dáš.... Horlivost v učení záleží na vůli, která se nedá nutit....\"",
        options: [
            "J. J. Rousseau",
            "J. A. Komenský",
            "J. F. Herbart",
            "J. H. Pestalozzi"
        ],
        correct: [1]
    },
    {
        id: 47,
        question: "Výše vedená ukázka je z díla:",
        options: [
            "Informatorium Školy mateřské",
            "Velká didaktika",
            "Emil čili o výchově",
            "Kterak Gertruda své děti vyučuje"
        ],
        correct: [1]
    },
    {
        id: 48,
        question: "Pojem makroprostředí v sobě zahrnuje:",
        options: [
            "Rodinné prostředí",
            "Prostředí blízkých osob",
            "Velké prostředí"
        ],
        correct: [2]
    },
    {
        id: 49,
        question: "Který níže jmenovaný pedagog nevycházel z pragmatismu?",
        options: [
            "S. Vrána",
            "J. Dewey",
            "V. Prihoda",
            "O. Chlup"
        ],
        correct: [3]
    },
    {
        id: 50,
        question: "Prvorepublikoví učitele na měšťanských školách se většinou vzdělávali:",
        options: [
            "Na filozofické fakultě",
            "Na učitelských ústavech",
            "Na pedagogických fakultách",
            "Na preparandách"
        ],
        correct: [1]
    },
    {
        id: 51,
        question: "Co je to „osvojené kurikulum\"?",
        options: [
            "To, co učitel skutečně ve třídě realizuje",
            "Testy, zkoušky",
            "Řeší základní koncepce otázky",
            "To, co se žáci skutečně naučí"
        ],
        correct: [3]
    },
    {
        id: 52,
        question: "Styl výuky na waldorfských školách se liší od klasických škol... (Najdi jedno tvrzení, které není správné.)",
        options: [
            "Uspořádání výuky do epoch, absence učebnic.",
            "Po celou dobu slovní hodnocení, známkování přibývá v osmé třídě.",
            "Děti jsou rozdělovány do tříd podle nadání a zájmu.",
            "Po celých devět let studia by měl žáka provázet jeden třídní učitel."
        ],
        correct: [2]
    },
    {
        id: 53,
        question: "Zlínské školství ve třicátých letech dvacátého století využívalo školskou koncepci (Jednotné vnitřně diferencované školy) navrženou...",
        options: [
            "O. Chlup",
            "V. Příhodou",
            "J. Uhrem",
            "S. Vránou"
        ],
        correct: [1]
    },
    {
        id: 54,
        question: "Myšlenku, že: „lidská mysl je bílým papírem, bez jakýchkoliv tiskových typů, beze všech idejí\" vyslovil:",
        options: [
            "J. J. Rousseau",
            "F. Bacon",
            "J. Locke",
            "J. Dewey"
        ],
        correct: [2]
    },
    {
        id: 55,
        question: "Waldorfské školství reprezentují tyto pojmy (musí odpovídat všechny pojmy):",
        options: [
            "Epocha, eurytmie, slavnosti během roku, bodové známkování.",
            "Eurytmie, slavnosti, antropologie, epocha, slavnosti během roku. Antroposofie, přírodní materiály, eurytmie, epocha, slavnosti během roku.",
            "Antroposofie, Přírodní materiály, eurytmie, epocha, slavnosti během roku.",
            "Přírodní materiály, třídy tvořené s věkově smíšenou dětskou skupinou, eurytmie, epocha, slavnosti během roku."
        ],
        correct: [2]
    },
    {
        id: 56,
        question: "Z jakého filozofického směru vychází následně výuková metoda, kterou prosazoval americký filozof a pedagog John Dewey?",
        options: [
            "Z pozitivismu",
            "Z herbartismu",
            "Z neo-pragmatismu",
            "Z pragmatismu"
        ],
        correct: [3]
    },
    {
        id: 57,
        question: "Kdo je představitelem 'Daltonského plánu'?",
        options: [
            "H. Parkhustová",
            "J. Dewey",
            "W. Kilpatrick",
            "L. V. Zankov"
        ],
        correct: [0]
    },
    {
        id: 58,
        question: "V. Příhoda za I. republiky navrhoval školu:",
        options: [
            "Školu jednotnou",
            "Školu jednotnou vnitřně diferencovanou",
            "Školu jednotnou vnitřně nediferencovanou",
            "Školu vycházející z myšlenek Tolstého"
        ],
        correct: [1]
    },
    {
        id: 59,
        question: "Učitelské ústavy byly zavedeny v roce:",
        options: [
            "1774",
            "1849",
            "1869",
            "1883"
        ],
        correct: [2]
    },
    {
        id: 60,
        question: "Který z následujících zákroků nepatří mezi nedirektivní zákroky:",
        options: [
            "Učitel mění tempo výuky",
            "Učitel požádá žáka, aby přestal vyrušovat",
            "Učitel požádá žáka, aby smazal tabuli",
            "Učitel pochválí žáka nebo žáky, kteří spolupracují"
        ],
        correct: [3]
    },
    {
        id: 61,
        question: "Středověká univerzita byla obvykle tvořena ze čtyř fakult. Která z následně uvedených k nim nepatřila:",
        options: [
            "Pedagogická",
            "Lékařská",
            "Teologická",
            "Právnická"
        ],
        correct: [0]
    },
    {
        id: 62,
        question: "Kdo patřil mezi představitele pokusných škol 20. let dvacátého století:",
        options: [
            "L. V. Zankov",
            "Z. Nejedlý",
            "L. N. Tolstoj",
            "E. Štorch"
        ],
        correct: [3]
    },
    {
        id: 63,
        question: "Kdo v níže jmenovaných usiloval o prosazení vysokoškolského vzdělání pro učitele škol obecných a měšťanských škol ve třicátých letech dvacátého století (Možnost více správných odpovědí):",
        options: [
            "O. Chlup",
            "V. Příhoda",
            "G. A. Lindner"
        ],
        correct: [0, 1]
    },
    {
        id: 64,
        question: "Myšlenku, že: 'Všechno jest dobré, jak vychází z rukou původce všech věcí, vše zvrhá se v rukou Člověka' vyslovil:",
        options: [
            "J.J. Rousseau",
            "F. Bacon",
            "J. Locke",
            "R. Steiner"
        ],
        correct: [0]
    },
    {
        id: 65,
        question: "Pojem 'vševěda' je spojen s dílem:",
        options: [
            "Petra Chelčického",
            "Jana Husa",
            "J. A. Komenského",
            "C. Freineta"
        ],
        correct: [2]
    },
    {
        id: 66,
        question: "Kurikulárním dokumentem vytvářeným na státní rovině je:",
        options: [
            "Školní vzdělávací program",
            "Rámcový vzdělávací program",
            "Učební plán",
            "Časově-tematický plán"
        ],
        correct: [1]
    },
    {
        id: 67,
        question: "Označte, jaké tvrzení se nejvice vymyká charakteru alternativni Skoly:",
        options: [
            "Škola usiluje o celkovy vyvoj žáka.",
            "Činnost učitele je určující.",
            "Škola je chápána jako 'malá komunita'.",
            "Vyznacuje se důslednou spolupráci s rodiči."
        ],
        correct: [1]
    },
    {
        id: 68,
        question: "Pod pedagogickými principy chápeme:",
        options: [
            "Postupy vedoucí k dosažení stanoveného cíle",
            "Způsob pedagogické organizace výchovné činnosti vychovávatelů a vychovávaných",
            "Jednotlivé postupy nebo způsoby činnosti vychovávatelů a vychovávaných",
            "Nejobecnější podmínky optimalizující výchovně vzdělávací činnost"
        ],
        correct: [3]
    },
    {
        id: 69,
        question: "'Trojjediný systém' znamená:",
        options: [
            "Jde o unikátní systém, který využívala 'Škola práce na Kladně'",
            "Jedná se o didaktickou metodu, která se využívala u dětí od první poloviny 19. století pro nácvik psaní a čtení",
            "Jedná se o systém učňovské výuky, který se uplatňoval například v Sezimově Ústí, kde byla pobočka baťovských učňovských škol",
            "Tento systém v pedagogice neexistuje"
        ],
        correct: [2]
    },
    {
        id: 70,
        question: "Kdo z následujících osob nebyl inspirací nebo východiskem pro vznik pokusných škol ve 20. letech 20. století?",
        options: [
            "Marie Montessori",
            "Rudolf Steiner",
            "Eduard Štorch",
            "Lev Nikolajevič Tolstoj"
        ],
        correct: [3]
    },
    {
        id: 71,
        question: "Jak se jmenovala kniha, kterou sepsala Ellen Keyová?",
        options: [
            "Desetiletí dítěte",
            "Století dítěte",
            "Tisíciletí dítěte",
            "Doba dítěte"
        ],
        correct: [1]
    },
    {
        id: 72,
        question: "Mezi moderní alternativní školy patří: (zaškrtni všechny možnosti):",
        options: [
            "Program 'Začít spolu'",
            "Lesní škola",
            "Obecná a občanská škola",
            "Waldorfská škola"
        ],
        correct: [0, 1]
    },
    {
        id: 73,
        question: "Pojem funkční gramotnost označuje:",
        options: [
            "Dovednost číst a psát",
            "Připravenost aplikovat v praxi získané vědomosti a dovednosti",
            "Soubor vědomostí, dovedností, názorů, postojů a hodnot"
        ],
        correct: [1]
    },
    {
        id: 74,
        question: "Pojem socializace označuje:",
        options: [
            "Získávání znalostí a dovedností",
            "Celoživotní proces utváření a vývoje člověka ve společenskou bytost",
            "Soubor norem, hodnot, postojů a vzorců chování",
            "Záměrný cílevědomý proces výchovy"
        ],
        correct: [1]
    },
    {
        id: 75,
        question: "Pojetí tzv. transmisivní školy, resp. Tradiční výuky, nepopisuje jeden z níže uvedených výroků, jaký?",
        options: [
            "Učitel jako reprezentant toho, co má žák umět, ale neumí, co má vědět, ale neví!",
            "Učitel jako někdo, kdo je povinen hledat příčiny malé píle, zkoumat, jak píli vzbudit",
            "Učitel jako někdo, kdo žákovi předkládá učivo k naučení, zkouší to a hodnotí! Neúspěch je pak dán žákem samým, jeho neschopnost se naučit."
        ],
        correct: [1]
    },
    {
        id: 76,
        question: "Kvalitativní aspekt hodnocení žáka ve škole v sobě zahrnuje:",
        options: [
            "Sledování a rozvíjení znalosti žáků",
            "Sledování a rozvíjení kompetencí žáků",
            "Testování a známkování prospěchu žáků"
        ],
        correct: [1]
    },
    {
        id: 77,
        question: "Pocit 'vrženosti' do světa je spojen:",
        options: [
            "S psychoanalýzou",
            "S existencialismem",
            "S postmodernismem"
        ],
        correct: [1]
    },
    {
        id: 78,
        question: "Pojem resilience označuje:",
        options: [
            "Nezdolnost, schopnost odolávat zátěži",
            "Schopnost vysoké sebekontroly",
            "Schopnost osvobození se od požadavků a vlivů druhých"
        ],
        correct: [0]
    },
    {
        id: 79,
        question: "Bloomova taxonomie kognitivních cílů představuje:",
        options: [
            "třídění úrovně náročnosti cílů, které klademe na žáky v procesu učení",
            "klasifikaci výchovných a vzdělávacích cílů",
            "hierarchicky uspořádaný systém kognitivních cílů výuky",
            "koncept klasifikace cílů programovaného učení a vyučování"
        ],
        correct: [2]
    },
    {
        id: 80,
        question: "Mezinárodní výzkumy PISA u žáků nezkoumají",
        options: [
            "matematickou gramotnost",
            "přírodovědnou gramotnost",
            "sociální gramotnost",
            "jazykovou gramotnost"
        ],
        correct: [2]
    },
    {
        id: 81,
        question: "Teorii jazykového kódu vypracoval a ověřil:",
        options: [
            "Johann Friedrich Herbart",
            "Basil Bernstein",
            "John Dewey",
            "Lev Semjonovič Vygotskij"
        ],
        correct: [1]
    },
    {
        id: 82,
        question: "Pedeutologie se zabývá:",
        options: [
            "pedagogickým výzkumem",
            "výchovou rizikových a sociálně znevýhodněných skupin",
            "učitelskou profesí",
            "pedagogickou prognostikou"
        ],
        correct: [2]
    },
    {
        id: 83,
        question: "Legitimní autorita učitele je dána:",
        options: [
            "jeho vlastnostmi",
            "jeho sociální rolí",
            "jeho vzděláním",
            "jeho vztahem k žákům"
        ],
        correct: [1]
    },
    {
        id: 84,
        question: "Hodnocení žáků známkou ve výuce nemá funkci:",
        options: [
            "motivační",
            "informační",
            "prognostickou",
            "srovnávací"
        ],
        correct: [2]
    },
    {
        id: 85,
        question: "Autorem teorie psychosociálního vývoje člověka, která je dělena do osmi stádií, je:",
        options: [
            "Erik H. Erikson",
            "Jean Piaget",
            "Robert L. Selman",
            "Lawrence Kohlberg"
        ],
        correct: [0]
    },
    {
        id: 86,
        question: "Pojem kurikulum můžeme v pedagogice charakterizovat jako:",
        options: [
            "obsah veškeré zkušenosti, kterou žáci získávají ve škole a v činnostech, ke škole se vztahujících, a také její plánování, hodnocení;",
            "vývoj školní edukace;",
            "obsah vzdělávání;",
            "moderní vyučovací metodu využívanou ve společenskovědních předmětech."
        ],
        correct: [0]
    },
    {
        id: 87,
        question: "Pojem, který souvisí s koncepcí Lva Semjonoviče Vygotského, je:",
        options: [
            "peer program",
            "asocianista",
            "zóna nejbližšího vývoje",
            "pedocentrismus"
        ],
        correct: [2]
    },
    {
        id: 88,
        question: "Pojem projektové kurikulum vyjadřuje:",
        options: [
            "zařazování krátkých projektových prvků do výuky;",
            "ucelené vzdělávací projekty, plány;",
            "strukturovaný životopis;",
            "strategii studijní dráhy žáka."
        ],
        correct: [1]
    },
    {
        id: 89,
        question: "Jak se nazývají nové závazné dokumenty, které na státní úrovni stanovují školám cíle a obsah vzdělávání?",
        options: [
            "rámcové vzdělávací programy",
            "školní vzdělávací programy",
            "standardy vzdělávání",
            "školní osnovy"
        ],
        correct: [0]
    },
    {
        id: 90,
        question: "Jak jsou souhrnně označovány Jenská, Waldorfská, Montessori a Daltonská škola?",
        options: [
            "inovativní školy;",
            "alternivativní školy;",
            "speciální školy;",
            "moderní školy."
        ],
        correct: [1]
    },
    {
        id: 91,
        question: "Reformní pedagogické hnutí je svým vznikem datováno v období:",
        options: [
            "18. století;",
            "na konci 20. století;",
            "na přelomu 19. a 20. století;",
            "je předmětem současné školské reformy"
        ],
        correct: [2]
    },
    {
        id: 92,
        question: "Pro které typy škol je závazný Rámcový vzdělávací program pro základní vzdělávání (RVP ZV)?",
        options: [
            "mateřské školy;",
            "základní školy;",
            "základní školy a poslední ročník mateřské školy;",
            "základní školy a první čtyři roky osmiletých gymnázií."
        ],
        correct: [3]
    },
    {
        id: 93,
        question: "Složitý myšlenkový proces (operace), který odhlíží od nepodstatných znaků a vyčleňuje důležité znaky, se nazývá:",
        options: [
            "generalizace",
            "abstrakce",
            "analogie",
            "dedukce"
        ],
        correct: [1]
    },
    {
        id: 94,
        question: "Adekvátně pojatá výchova připravuje jedince na následující sociální role (označte nejméně vhodnou odpověď):",
        options: [
            "člověk, který je schopen prosadit vlastní zájem proti ostatním",
            "člověk, který je schopen se občansky angažovat",
            "člověk, který je schopen působit jako zaměstnanec",
            "člověk, který je schopen zodpovědně použít různé druhy dopravy"
        ],
        correct: [0]
    },
    {
        id: 95,
        question: "Mezi vnější funkcionální faktory ve školní výchově patří:",
        options: [
            "působení učitele při výuce",
            "kultura školy",
            "vrozené předpoklady žáka",
            "zvnitřněná proměna žáka dosáhnout dobrého výkonu"
        ],
        correct: [1]
    },
    {
        id: 96,
        question: "Zamyslete se nad následující situací a určete, jaký druh učitelské autority tento učitel používá: Učitel se obrátí k žákům: 'Vážně jste mně zklamali. Promarňujete svůj čas a i čas školy. K tomu škola není. Škola je o učení. Všichni společně neseme za to odpovědnost. A teď přestaňte otálet a začněte pracovat!'",
        options: [
            "přirozená",
            "odborná",
            "legitimní",
            "behavioristická"
        ],
        correct: [2]
    },
    {
        id: 97,
        question: "Stav, kdy některá z objektivně významných potřeb není dlouhodobě uspokojována, se označuje jako:",
        options: [
            "krize",
            "frustrace",
            "deprivace",
            "coping"
        ],
        correct: [2]
    },
    {
        id: 98,
        question: "Zvolte nejvýstižnější charakteristiku pojmu syndrom CAN :",
        options: [
            "bití a týrání dítěte",
            "domácí násilí",
            "důsledky nepodnětného rodinné prostředí pro dítě",
            "poškození tělesného a duševního stavu a vývoje dítěte v důsledku týrání, zneužívání, zanedbávání"
        ],
        correct: [3]
    },
    {
        id: 99,
        question: "Demence vzniká:",
        options: [
            "jako důsledek stárnutí",
            "je vrozená",
            "jako důsledek mentální retardace",
            "na základě organického postižení CNS"
        ],
        correct: [3]
    },
    {
        id: 100,
        question: "Trpím bludy a halucinacemi, pravděpodobně mám:",
        options: [
            "stres",
            "psychózu",
            "poruchu osobnosti",
            "mentální retardaci"
        ],
        correct: [1]
    },
    {
        id: 101,
        question: "Vyčerpání fyzických a psychických sil, ztráta zájmu o práci, lhostejnost v profesionálních postojích se označuje pojmem:",
        options: [
            "zátěž",
            "burn-out syndrom",
            "frustrace",
            "coping"
        ],
        correct: [1]
    },
    {
        id: 102,
        question: "Kdy byla založena pedagogická fakulta v ČB:",
        options: [
            "1897",
            "1950",
            "1948",
            "2001"
        ],
        correct: [2]
    },
    {
        id: 103,
        question: "Kdy byla založena Karlova Univerzita:",
        options: [
            "1497",
            "1348",
            "1349",
            "1312"
        ],
        correct: [1]
    },
    {
        id: 104,
        question: "Co se stalo v letech 2001-2004 ve školství:",
        options: [
            "Rozvoj kompetencí napříč předměty (8 kompetencí pro život)",
            "Zaměření na klíčové kompetence a průřezová témata (RVP, ŠVP, Bílá kniha - reforma kurikula)",
            "Nové typy škol (např. 8letá gymnázia)."
        ],
        correct: [1]
    },
    {
        id: 105,
        question: "Jména 4 fakult po založení Karlovy Univerzity:",
        options: [
            "artistická, právnická, lékařská, teologická",
            "pedagogická, právnická, rybářská, léčebná",
            "teologická, jazyková, právnická, lékařská"
        ],
        correct: [0]
    },
    {
        id: 106,
        question: "Co bude nového ve Strategii 2030+:",
        options: [
            "Rozvoj kompetencí napříč předměty (8 kompetencí pro život)",
            "Vstup alternativ do systému",
            "Omezení na dílčí rysy (např., vzdělávání pro konkurenceschopnost)"
        ],
        correct: [0]
    },
    {
        id: 107,
        question: "Pojem anomie popisuje:",
        options: [
            "pocit zklamání a skepse ve vztahu k možnostem realizovat v daných společenských podmínkách své cíle, plány. prosadit se;",
            "nízkou odolnost proti stresu a zátěži:",
            "tendenci růstu násilí ve společnosti."
        ],
        correct: [0]
    },
    {
        id: 108,
        question: "Výchova je v diskurzu současné pedagogiky (např. dle Pedagogické encyklopedie) chápána jako cílevědomé a záměrné působení na vychovávaného:",
        options: [
            "a to zejména přímým působením na vlastnosti osobnosti;",
            "a to zejména ponecháním co největší svobody dítěti a nezasahování do jeho vývoje",
            "a to zejména cestou vytváření a ovlivňování podmínek pro rozvoj dítěte a mladých lidí"
        ],
        correct: [2]
    },
    {
        id: 109,
        question: "Který sociologický myslitel se zabýval pojmem Anomie a popsal ji jako stav, kde společnost trpí nedostatkem normativních pravidel a hodnot?",
        options: [
            "K. Marx",
            "M. Weber",
            "E. Durkheim"
        ],
        correct: [2]
    }
            
        ]
    },
    

    "psychologie_7ps1": {
        title: "Psychologie (7PS1/POSZ)",
        questions: [
            // --- VERZE A ---
            {
                id: 1,
                question: "Melancholika lze definovat jako:",
                options: [
                    "Stabilního extroverta",
                    "Labilního extroverta",
                    "Labilního introverta",
                    "Stabilního introverta"
                ],
                correct: [2]
            },
            {
                id: 2,
                question: "Morálka, hodnoty, svědomí jsou v psychice člověka tématem:",
                options: [
                    "Charakteru",
                    "Sociální inteligence",
                    "Rysů osobnosti",
                    "Vloh"
                ],
                correct: [0]
            },
            {
                id: 3,
                question: "Který výrok o emoční inteligenci NEPLATÍ:",
                options: [
                    "Emoční inteligence nám umožňuje poznat, co právě cítíme.",
                    "Emoční inteligence nám umožňuje efektivněji pracovat s naší psychikou.",
                    "Emoční inteligence nám umožňuje kontrolovat naše emoce.",
                    "Emoční inteligence je vrozená, napříč věkem neměnná."
                ],
                correct: [3]
            },
            {
                id: 4,
                question: "Inteligence (v obecném pojetí) NEPŘEDSTAVUJE schopnost:",
                options: [
                    "... myslet racionálně, jednat účelně",
                    "... efektivně řešit nově vzniklé / obtížné situace",
                    "... přizpůsobit se",
                    "... zdravého vývoje charakteru a temperamentu"
                ],
                correct: [3]
            },
            {
                id: 5,
                question: "Rysy osobnosti...",
                options: [
                    "Jsou trvalé, stabilní projevy chování, lze je dobře vymezit / popsat v protipólech.",
                    "Vyjadřují intenzitu reakcí na podněty a odolnost.",
                    "Představují osobnost z pohledu morálních kritérií.",
                    "Patří k naší adaptační výbavě - chrání integritu ega."
                ],
                correct: [0]
            },
            {
                id: 6,
                question: "Pokud čl. jedná dle vlastních norem, ale svými vnitřními pravidly jde proti proudu za každou cenu ('vzdor pro vzdor'), hlásí se k ideálům, ale nemá pro ně citlivost, jde o:",
                options: [
                    "Amorální charakter",
                    "Účelově zaměřený charakter",
                    "Komfortní charakter",
                    "Iracionální vědomý charakter"
                ],
                correct: [3]
            },
            {
                id: 7,
                question: "Jerome Kagan je spojovaný:",
                options: [
                    "S temperamentovou teorií (super-rysy).",
                    "S temperamentovou teorií, která se opírá o způsoby reagování na nové podněty.",
                    "S typologií charakteru.",
                    "S konceptem emoční inteligence."
                ],
                correct: [1]
            },
            {
                id: 8,
                question: "Temperament NELZE definovat jako:",
                options: [
                    "Trvalé charakteristiky člověka, které ovlivňují průběh jednání a chování",
                    "Charakteristiky člověka, které vyjadřují intenzitu reakcí na podnět",
                    "Vrozené dispozice osobnosti",
                    "Charakteristiky člověka, které souvisí s morálkou, výchovou a vlastními zkušenostmi"
                ],
                correct: [3]
            },
            {
                id: 9,
                question: "Psychoticismus (H. Eysenck) - co pro něj NEPLATÍ (čím se tito lidé nevyznačují):",
                options: [
                    "Obtížně vycházejí s druhými lidmi, mají sníženou sociální citlivost",
                    "Bývají egocentričtí a impulzivní",
                    "Mají nízký super-rys 'sílu ega'",
                    "Mají vysoký super-rys 'lability' (čím více psychoticismu, tím více lability)"
                ],
                correct: [3]
            },
            {
                id: 10,
                question: "Daniel Goleman ve své teorii Emoční inteligence:",
                options: [
                    "Nezohledňuje sociální dovednosti a empatii člověka",
                    "Vymezil sociální kompetence (sebeuvědomění, sebekontrola, motivace, empatie, sociální dovednosti)",
                    "Vymezil čtyři úrovně emoční inteligence dle Mayera a Saloveye",
                    "Dělí inteligenci na fluidní a krystalickou"
                ],
                correct: [1]
            },
            {
                id: 11,
                question: "Postoje vs. názory: jaký je jejich vztah?",
                options: [
                    "Pojmy označují totéž",
                    "Postoje vznikají z názorů; jsou komplexnější (nesou v sobě emoci)",
                    "Postoj je emočně neutrální, názor nikoliv",
                    "Názory v sobě nesou emoční náboje, postoje jsou objektivnější"
                ],
                correct: [1]
            },
            {
                id: 12,
                question: "Učitel je přesvědčený, že průměrný žák má potenciál, což vede ke skutečnému zlepšení žáka. Jde o:",
                options: [
                    "Labeling",
                    "Golem efekt",
                    "Shaping/Tvarování",
                    "Pygmalion efekt"
                ],
                correct: [3]
            },
            {
                id: 13,
                question: "Externalizací problému se rozumí:",
                options: [
                    "Pokud učitel vztahuje problém ne na žáka a jeho osobnost, ale na danou činnost / nežádoucí projev chování",
                    "Pokud učitel vztáhne problémové chování přímo na osobnost žáka",
                    "Pokud učitel za zdroj problémového chování označí jiného původce",
                    "Pokud učitel nepříjemnou situaci zlehčí"
                ],
                correct: [0]
            },
            {
                id: 14,
                question: "Metoda 'ocenit alespoň něco' (chvála za dílčí úspěchy, ignorace neúspěchu) se nazývá:",
                options: [
                    "Shaping",
                    "Labeling",
                    "Golem efekt",
                    "Mobbing"
                ],
                correct: [0]
            },
            {
                id: 15,
                question: "Žák získává sebehodnoty z vnějškově pozorovatelných charakteristik (je hezčí/silnější). To odpovídá:",
                options: [
                    "Mladšímu školnímu věku",
                    "Staršímu školnímu věku",
                    "Adolescenci",
                    "Srovnávání se primárně neodvíjí od věku"
                ],
                correct: [0]
            },
            {
                id: 16,
                question: "Žák, který se lépe učí to, kde vidí jasný výsledek, jdou mu kolektivní práce a hůře udrží pozornost u stereotypní činnosti, bude:",
                options: [
                    "Stabilní",
                    "Labilní",
                    "Introvertní",
                    "Extravertní"
                ],
                correct: [3]
            },
            {
                id: 17,
                question: "Informace o žákovi 'z druhé ruky', pověst třídy atd. se nutně NEPODEPISUJE na:",
                options: [
                    "Na syndromu vyhoření",
                    "Na tzv. labelingu/nálepkování žáka",
                    "Na výskytu pygmalion efektu",
                    "Na učitelových postojích"
                ],
                correct: [0]
            },
            {
                id: 18,
                question: "Žák, který (až) nekriticky přijímá učitelovy názory ohledně toho, co je dobré / špatné se vyznačuje:",
                options: [
                    "Heteronomní morálkou",
                    "Autonomní morálkou",
                    "Amorálním charakterem",
                    "Racionálně altruistickým charakterem"
                ],
                correct: [0]
            },
            {
                id: 19,
                question: "Vztah k neživým věcem: To, jak žák zachází se školními pomůckami se vztahuje k:",
                options: [
                    "Charakteru",
                    "Inteligenci",
                    "Temperamentu",
                    "Vlohám"
                ],
                correct: [0]
            },
            {
                id: 20,
                question: "Nadané dítě s přidruženou poruchou (např. ADHD, dyslexie), kde učitel vnímá spíše limity, označujeme jako:",
                options: [
                    "Dítě s tzv. utajeným nadáním",
                    "Dítě s tzv. dvojí výjimečností",
                    "Dítě s tzv. náročným nadáním",
                    "Samostatně nadaném dítěti"
                ],
                correct: [1]
            },
            // --- VERZE B ---
            {
                id: 21,
                question: "Sangvinika lze definovat jako:",
                options: [
                    "Stabilního extroverta",
                    "Labilního extroverta",
                    "Labilního introverta",
                    "Stabilního introverta"
                ],
                correct: [0]
            },
            {
                id: 22,
                question: "Charakter NELZE definovat jako:",
                options: [
                    "Vrozené a trvalé charakteristiky člověka, které ovlivňují průběh jednání a chování",
                    "Vlastnosti člověka, které souvisí s morálkou, výchovou a zkušenostmi",
                    "Vlastnosti člověka, které se vztahují k lidem, k věcem, k práci",
                    "Část psychiky, která souvisí se sebeobrazem"
                ],
                correct: [0]
            },
            {
                id: 23,
                question: "Základní emoce jsou:",
                options: [
                    "Hrdost, radost, naděje, vina, zoufalství, smutek",
                    "Radost, něha, strach, smutek, hněv, naděje",
                    "Radost, překvapení, strach, hnus (znechucení), hněv, smutek",
                    "Strach, zoufalství, vina, stud, hnus, žárlivost"
                ],
                correct: [2]
            },
            {
                id: 24,
                question: "Fluidní a krystalickou inteligenci můžeme nejlépe definovat jako:",
                options: [
                    "Krystalická je G-faktor, Fluidní jsou dílčí schopnosti.",
                    "Krystalická je vrozená, Fluidní je o zkušenostech.",
                    "Fluidní je praktická, Krystalická je abstraktní.",
                    "Fluidní je orientace v nových situacích (biologická), Krystalická je těžící ze zkušeností a učení."
                ],
                correct: [3]
            },
            {
                id: 25,
                question: "Rychlost reakce na podněty, odolnost, vnější výraz a délka trvání duševních zážitků se vztahuje k:",
                options: [
                    "Inteligenci",
                    "Percepci",
                    "Charakteru",
                    "Temperamentu"
                ],
                correct: [3]
            },
            {
                id: 26,
                question: "Dominance-Submisivita, Svědomitost, Přívětivost-Hostilita... Pojmy patří k:",
                options: [
                    "Obranným mechanismům",
                    "Charakterovým vlastnostem",
                    "Rysům osobnosti",
                    "Projevům temperamentu"
                ],
                correct: [2]
            },
            {
                id: 27,
                question: "H. J. Eysenck popsal tzv. super-rysy osobnosti:",
                options: [
                    "OCEAN (Otevřenost, Extroverze...)",
                    "Extroverze-Introverze, Stabilita-Labilita, Psychoticismus",
                    "Extroverze, Úzkostnost, Strnulost...",
                    "Dominance, Submise, Emoční stabilita..."
                ],
                correct: [1]
            },
            {
                id: 28,
                question: "Pětifaktorový model osobnosti (OCEAN/Big Five) popisuje:",
                options: [
                    "Otevřenost vůči zkušenosti, Extroverze, Přívětivost, Svědomitost, Neuroticismus",
                    "Extroverze, Introverze, Stabilita, Labilita, Psychoticismus",
                    "Cattellovy faktory",
                    "Eysenckovy faktory"
                ],
                correct: [0]
            },
            {
                id: 29,
                question: "John D. Mayer a Peter Salovey ve své teorii Emoční inteligence:",
                options: [
                    "Zohledňují sociální dovednosti a empatii (jako Goleman)",
                    "Vymezili sociální kompetence",
                    "Vymezili čtyři úrovně EI (Vnímání, Podpora myšlení, Analýza, Regulace)",
                    "Dělí inteligenci na fluidní a krystalickou"
                ],
                correct: [2]
            },
            {
                id: 30,
                question: "Nadané děti, které svůj talent 'maskují', aby nevyčnívaly, označujeme jako:",
                options: [
                    "Dítě s tzv. utajeným nadáním",
                    "Dítě s tzv. dvojí výjimečností",
                    "Dítě s tzv. náročným nadáním",
                    "Samostatně nadané dítě"
                ],
                correct: [0]
            },
            {
                id: 31,
                question: "Schopnosti vs. vlohy: který výrok NEPLATÍ:",
                options: [
                    "Schopnosti se rozvíjejí na základě vloh",
                    "Schopnosti se projevují kvalitou a rychlostí osvojení",
                    "Schopnosti můžeme dělit na vrozené nadání, talent a genialitu (toto jsou úrovně rozvoje, ne druhy schopností)",
                    "Schopnosti můžeme dělit na intelektové, psychomotorické a perceptivní"
                ],
                correct: [2]
            },
            {
                id: 32,
                question: "K ukazatelům intelektového nadání u dětí NEPATŘÍ:",
                options: [
                    "Umí se zabavit sami",
                    "Píší si deník",
                    "S vrstevníky vymýšlí nové hry, jsou 'tahouni'",
                    "Rozvinutý cit pro spravedlnost"
                ],
                correct: [3]
            },
            {
                id: 33,
                question: "Pygmalion/Golem efekt (sebenaplňující se proroctví) v praxi souvisí NEJVÍCE s:",
                options: [
                    "S postoji pedagoga",
                    "S morálkou pedagoga",
                    "Se sociální inteligencí pedagoga",
                    "S délkou praxe"
                ],
                correct: [0]
            },
            {
                id: 34,
                question: "Pokud pedagog označí za problém ne žáka, ale pouze jeho činnost (externalizace), slouží to k:",
                options: [
                    "Zamezení prožitku hanby a demotivaci žáka",
                    "Zavírání očí před špatnými vlastnostmi (Golem)",
                    "Zlehčení problému (Shaping)",
                    "Probouzení pocitu viny (Pygmalion)"
                ],
                correct: [0]
            },
            {
                id: 35,
                question: "Na radostný podnět žák reaguje 'živě' (dlouhý smích, výrazná mimika). Jde o projevy:",
                options: [
                    "Charakteru",
                    "Temperamentu",
                    "Sebeovládání",
                    "Morálky"
                ],
                correct: [1]
            },
            {
                id: 36,
                question: "Vývoj sebeobrazu: Žák přestává hledět na vnějškové znaky a začíná zohledňovat vnitřní charakteristiky. K tomu dochází typicky:",
                options: [
                    "V mateřské škole",
                    "Na prvním stupni",
                    "Na druhém stupni (starší školní věk / pubescence)",
                    "Až v adolescenci"
                ],
                correct: [2]
            },
            {
                id: 37,
                question: "Žák, který upřednostňuje individuální činnost, je pasivnější a vadí mu hluk:",
                options: [
                    "Stabilní",
                    "Labilní",
                    "Introvertní",
                    "Extravertní"
                ],
                correct: [2]
            },
            {
                id: 38,
                question: "Učitel je přesvědčen, že žák na předmět nemá (i když objektivně má), a žák se skutečně zhorší. Jde o:",
                options: [
                    "Labeling",
                    "Golem efekt",
                    "Shaping",
                    "Pygmalion efekt"
                ],
                correct: [1]
            },
            {
                id: 39,
                question: "Žák, který opravuje učitele, hledá vlastní řešení a nesnáší zavedené postupy, vykazuje chování:",
                options: [
                    "Nastupující pubescence",
                    "Nastupující adolescence",
                    "Vysoce tvořivého dítěte",
                    "Dítěte se 'samostatným nadáním'"
                ],
                correct: [2]
            },
            {
                id: 40,
                question: "Žákovi záleží na splnění slibu a povinnosti. Jde o téma:",
                options: [
                    "Charakteru",
                    "Vůle",
                    "Inteligence",
                    "Temperamentu"
                ],
                correct: [0]
            }
        ]
    },
    "zemedelstvi": {
        title: "Zemědělství a Geografie",
        questions: [
            {
                id: 1,
                question: "Jaké faktory ovlivňují vodní erozi na orné půdě a jakým způsobem?",
                options: [
                    "Svažitost (sklon) – čím větší, tím větší eroze. Přívalové deště. Zrnitost a absorpční schopnost půdy. Propustnost podloží. Zemědělské postupy (nevhodná orba po spádnici, širokořádkové plodiny jako kukuřice). Lidská činnost (stavba cest)."
                ],
                correct: [0]
            },
            {
                id: 2,
                question: "Definujte zemědělství a vyjmenujte hlavní zemědělské vědy.",
                options: [
                    "Vědomé obhospodařování půdy za účelem zajištění potravin a surovin. Hlavní součásti: rostlinná a živočišná výroba. Vědy: Agronomie, zemědělská ekonomika, zootechnika."
                ],
                correct: [0]
            },
            {
                id: 3,
                question: "Faktor šlechtění zemědělských plodin – co je cílem a jaké jsou možnosti?",
                options: [
                    "Cílem je zvýšení výnosu, kvality a odolnosti (mráz, sucho, nemoci, škůdci). Možnosti: výběr, křížení, roubování, genetické transformace."
                ],
                correct: [0]
            },
            {
                id: 4,
                question: "Přiřaďte k jednotlivým biomům světové půdní typy.",
                options: [
                    "Tajga: podzoly. Listnaté lesy mírného pásu: hnědé lesní půdy. Stepi: černozemě. Sušší stepi: kaštanové půdy. Polopouště: písčité šedé půdy. Savany: červenožluté půdy. Tropické deštné lesy: laterity (červené půdy)."
                ],
                correct: [0]
            },
            {
                id: 5,
                question: "Popište škálu kardinálních bodů dosažitelnosti vody v půdě (xs až xp) a další faktory.",
                options: [
                    "xs (hyne suchem) -> -s (poškozena suchem) -> +n (málo vody) -> ++ (optimální) -> +p (nadbytek) -> -p (poškozena nadbytkem) -> xp (hyne mokrem). Další faktory: vývojová fáze, teplota, podzemní voda, hloubka kořenů, srážky, expozice svahu."
                ],
                correct: [0]
            },
            {
                id: 6,
                question: "Chemická hnojiva – rozdělení a nevýhody.",
                options: [
                    "Rozdělení: Fosforečná (z fosfátů), draselná, hořečnatá, vápenatá, dusíkatá (ledek, močovina), kombinovaná (NPK). Nevýhody: Toxicita půdy, hromadění těžkých kovů, eutrofizace vod (řasy a sinice vyčerpají kyslík)."
                ],
                correct: [0]
            },
            {
                id: 7,
                question: "Cukrová řepa – klimatické podmínky a využití.",
                options: [
                    "Mírný pás (Francie, Rusko, ČR - Polabí). Zpracovává se v cukrovarech (kampaň září-prosinec) na cukr, melasu (líh/krmivo) a řízky. Nať se zapravuje do půdy."
                ],
                correct: [0]
            },
            {
                id: 8,
                question: "Charakterizujte zvířata: Jak, Lama, Sob.",
                options: [
                    "Jak: Mohutný tur, dlouhá srst, hory nad 3000 m (Tibet, Nepál). Lama: Andy, mimochodník, vlna a nošení nákladů. Sob: Severské oblasti (Skandinávie, Sibiř), parohy má i samice, v zimě migruje na jih."
                ],
                correct: [0]
            },
            {
                id: 9,
                question: "Typologie světového zemědělství – uveďte příklady.",
                options: [
                    "Klimaticky podmíněné, Pedologicky podmíněné, Biomy podmíněné. Samozásobitelské (rotační, nomádské). Tržní (mléčné, obilnářské, rančerské, plantážní)."
                ],
                correct: [0]
            },
            {
                id: 10,
                question: "Popište pícninářskou výrobní oblast ČR.",
                options: [
                    "Nad 600 m n. m. (horská území, Šumava, Vysočina, Jeseníky). Teplota 5-6°C, srážky >700 mm. Převažují louky, pastviny, chov skotu a ovcí na maso. Pícniny (jetel, vojtěška)."
                ],
                correct: [0]
            },
            {
                id: 11,
                question: "Druhy pastvin a luk, rozdíl mezi nimi.",
                options: [
                    "Pastviny: spásány zvířaty (umělé i přírodní - stepi, savany). Louky: pravidelně sečeny (1-3x ročně), dělí se na vlhké, středně suché a suché."
                ],
                correct: [0]
            },
            {
                id: 12,
                question: "Půdní typy ČR a jejich úrodnost.",
                options: [
                    "Černozemě (velmi úrodné), Hnědozemě (úrodné), Ilimerizované (střední), Rendziny (na vápencích), Písčité půdy (zúrodněné), Hnědé lesní/Kambizemě (střední, převažují), Podzoly (málo úrodné), Oglejené/Glejové (nutno odvodnit), Nivní/Lužní (úrodné)."
                ],
                correct: [0]
            },
            {
                id: 13,
                question: "Vliv sněhu a větru na zemědělství.",
                options: [
                    "Sníh: Zdroj vody při tání (zavlažování), izolace ozimů proti vymrznutí. Vítr: Opylování, ale i poléhání obilnin a větrná eroze (odnos ornice)."
                ],
                correct: [0]
            },
            {
                id: 14,
                question: "Co je to pluriaktivita zemědělců?",
                options: [
                    "Kombinace práce v zemědělství a mimo něj. Např. v zimě práce v lese, řemesla, agroturistika, služby. Dříve tzv. kovozemědělci."
                ],
                correct: [0]
            },
            {
                id: 15,
                question: "Ječmen – přírodní podmínky pěstování a využití.",
                options: [
                    "Sušší subtropy (krátká vegetační doba), severské oblasti (Norsko, Kanada), horské oblasti (Tibet), úrodný mírný pás. Využití: potravinářský, sladovnický (pivo), krmný."
                ],
                correct: [0]
            },
            {
                id: 16,
                question: "Sója – zařazení a producenti.",
                options: [
                    "Olejnatá luštěnina (zrnina), bohatá na bílkoviny. Producenti: Brazílie, USA, Argentina, Čína, Indie."
                ],
                correct: [0]
            },
            {
                id: 17,
                question: "Velbloudi – druhy a rozšíření.",
                options: [
                    "Jednohrbý (dromedár): Sahara, Arábie, Indie (teplo). Dvouhrbý (drabař): Střední Asie, Mongolsko, Čína (chladnější). Nejvíce v Somálsku a Sahelu."
                ],
                correct: [0]
            },
            {
                id: 18,
                question: "Vymezení tajgy pomocí států.",
                options: [
                    "Kanada (Yukon, Britská Kolumbie, Ontario, Quebec), Aljaška, Skandinávie, Finsko, Rusko (Sibiř, povodí Obu, Jeniseje, Leny)."
                ],
                correct: [0]
            },
            {
                id: 19,
                question: "Vyjmenujte typy tržního zemědělství.",
                options: [
                    "Tržní smíšené, mléčné, obilnářské, rančerské, mediteránní, zahradnické, plantážní."
                ],
                correct: [0]
            },
            {
                id: 20,
                question: "Druhy pozemků v zemědělské (ZK) a venkovské krajině (VK).",
                options: [
                    "ZK: zemědělské pozemky, cesty, remízky, vodní plochy. VK: zahrnuje ZK + venkovská sídla, komunikace, menší lesy."
                ],
                correct: [0]
            },
            {
                id: 21,
                question: "Negativa chemických hnojiv a proces eutrofizace.",
                options: [
                    "Hromadění těžkých kovů, toxicita. Eutrofizace: Splach hnojiv do vod -> množení řas a sinic -> úbytek kyslíku -> úhyn ryb a zhoršení kvality vody."
                ],
                correct: [0]
            },
            {
                id: 22,
                question: "Důvody zásahů státu a EU do zemědělství.",
                options: [
                    "Ochrana trhu (cla/kvóty), snížení intenzity (ekologie), ochrana kulturní krajiny, podpora venkovských komunit a znevýhodněných oblastí (LFA), soběstačnost, hygiena."
                ],
                correct: [0]
            },
            {
                id: 23,
                question: "Rýže – podmínky pěstování a producenti.",
                options: [
                    "Vlhké tropy a subtropy, monzunové oblasti, pěstební bazény, teplo. S. hranice 46° s.š. Producenti: Čína, Indie, Indonésie, Brazílie."
                ],
                correct: [0]
            },
            {
                id: 24,
                question: "Skot – význam pro produkci mléka a masa, stavy v ČR.",
                options: [
                    "90 % světového mléka, 30 % masa. V ČR stavy klesly (z 3,5 mil. na 1,4 mil.), mléko stabilní (vyšší dojivost). Transhumance = sezónní přesun na pastviny."
                ],
                correct: [0]
            },
            {
                id: 25,
                question: "Bavlník – podmínky a producenti.",
                options: [
                    "Střídání vlhka a sucha (při zrání), teplo. Problém: nutnost chemie a závlah (zasolování). Producenti: USA, Čína, Indie, Pákistán, Střední Asie, Brazílie."
                ],
                correct: [0]
            },
            {
                id: 26,
                question: "Co je to akvakultura a kde se nejvíce loví ryby?",
                options: [
                    "Akvakultura = farmový chov vodních organismů. Nejvíce ryb v chladných mořích (více kyslíku a planktonu). Statistika FAO dle oblastí oceánů."
                ],
                correct: [0]
            },
            {
                id: 27,
                question: "Samozásobitelské rotační zemědělství.",
                options: [
                    "Nízká technika, vypalování lesa, přesun polí po vyčerpání (10-15 let). Amazonie, střední Afrika, JV Asie."
                ],
                correct: [0]
            },
            {
                id: 28,
                question: "Obilnářská výrobní oblast ČR – charakteristika.",
                options: [
                    "41 % orné půdy, pahorkatiny (Třebíčsko, Plzeňsko, střední Čechy). Teplota 7-8,5 °C, srážky 550-700 mm. Pěstování: obilí, řepka, kukuřice na zeleno."
                ],
                correct: [0]
            },
            {
                id: 29,
                question: "Trvalé zemědělské kultury v ČR.",
                options: [
                    "Louky, pastviny, sady, vinice, chmelnice."
                ],
                correct: [0]
            },
            {
                id: 30,
                question: "Azonální půdní typy a jejich vhodnost pro orbu.",
                options: [
                    "Nivní (u řek, úrodné), Lužní (dále od řek, úrodné), Glejové (mokřady, nutno odvodnit), Rendziny (kras, kamenité, méně vhodné), Solončaky (slané, nevhodné)."
                ],
                correct: [0]
            },
            {
                id: 31,
                question: "Pšenice – podmínky, výnosy a exportéři.",
                options: [
                    "Černozemě ve stepích, srážky cca 500 mm. Výnosy v EU cca 5 t/ha. Exportéři: USA (tvrdá pšenice), Rusko, Kanada, Francie, Ukrajina."
                ],
                correct: [0]
            },
            {
                id: 32,
                question: "Řepka olejka – nároky a producenti.",
                options: [
                    "Mírný pás, pahorkatiny (v ČR hojná). Využití: olej (potraviny, bionafta), medonosná. Producenti: Kanada, Čína, EU (Francie, Německo, Polsko, ČR)."
                ],
                correct: [0]
            },
            {
                id: 33,
                question: "Největší producenti koření a plodin (pepř, vanilka, mák, kmín).",
                options: [
                    "Pepř: Indie, Vietnam. Vanilka: Madagaskar, Indonésie. Mák: ČR, Turecko (legální), Zlatý trojúhelník (ilegální). Kmín: ČR, Německo."
                ],
                correct: [0]
            },
            {
                id: 34,
                question: "Buvol vodní – užitky.",
                options: [
                    "Tah (rýžoviště), mléko (mozzarella), maso, jízda, kůže, hnůj. Vlhké tropy/subtropy."
                ],
                correct: [0]
            },
            {
                id: 35,
                question: "Rybolov v Atlantiku – hlavní oblasti.",
                options: [
                    "SV Atlantik (Island, Norsko), SZ Atlantik (Newfoundland), Východní centrální (z. Afrika). Loví se sledi, tresky, sardinky."
                ],
                correct: [0]
            },
            {
                id: 36,
                question: "Hlavní obilniny v zemědělských výrobních oblastech ČR.",
                options: [
                    "Kukuřičná: kukuřice na zrno. Řepařská: pšenice. Obilnářská: pšenice/ječmen. Bramborářská: žito/oves/triticale. Pícninářská/Horská: oves."
                ],
                correct: [0]
            },
            {
                id: 37,
                question: "Vývoj produkce v ČR po roce 1989 (řepka, řepa, prasata, brambory, víno).",
                options: [
                    "Řepka: Roste (biopaliva). Řepa: Klesá (zrušení cukrovarů). Prasata: Klesá (levný dovoz). Brambory: Klesá (nižší spotřeba). Víno: Rozloha vinic roste."
                ],
                correct: [0]
            },
            {
                id: 38,
                question: "Faktor pracovní síly v zemědělství.",
                options: [
                    "Rozvojové země: 70-80 % lidí v zemědělství. Vyspělé (ČR, USA): 1-3 %. Problém stárnutí farmářů a nezájmu mladých, potřeba vyšší kvalifikace."
                ],
                correct: [0]
            },
            {
                id: 39,
                question: "Agroklimatické charakteristiky (vegetační období a konstanta).",
                options: [
                    "Délka vegetačního období: počet dnů s teplotou nad 10°C. Vegetační teplotní konstanta: součet denních teplot od zasetí po dozrání."
                ],
                correct: [0]
            }
        ] 
     }, */
    "autoskola_c": {
        title: "Otázky z Ovládání a údržby vozidla - skupina C",
        questions: [
            {
                id: 1,
                question: "Popište úkony kontroly vozidla před jízdou",
                options: [
                    "- kontrola poškození karoserie (ostré hrany, poškozená skla...)\n- kontrola úniku provozních kapalin (benzín, nafta, olej motorový, olej převodový, olej hydraulický, brzdová kapalina, chladící kapalina)\n- kontrola funkčnosti a těsnosti vzduchové soustavy\n- kontrola funkce stěračů, ostřikovačů, klaksonu…\n- kontrola osvětlení - funkčnost jednotlivých druhů vnějšího osvětlení\n- poškození jednotlivých světlometů\n- kontrola pneumatik - zda nejsou opotřebené pod přípustnou mez\n- jejich nahuštění\n- zda nejsou poškozené (zpuchřelé, proražené...)\n- kontrola povinné výbavy vozidla a lékárny\n- kontrola množství motorového oleje (pomocí měrky, olej musí být mezi ryskami)\n- kontrola napnutí klínového řemenu (nesmí být příliš volný - neměl by se promáčknout o více než 1,5cm)\n- kontrola množství chladící kapaliny (dolévat destilovanou vodu nebo nemrznoucí směs)\n- kontrola množství brzdové kapaliny (v případě častého úbytku je nutné provést odbornou kontrolu brzdové soustavy)\n- doplnění kapaliny v ostřikovačích"
                ],
                correct: [0]
            },
            {
                id: 2,
                question: "Popište kontrolu tlaku v pneumatikách a hloubku dezénu",
                options: [
                    "- tlak huštění pneumatik stanovuje výrobce vozidla a pneumatiky a je uveden v návodu k obsluze vozidla\n- před měřením tlaku odšroubujeme kryt ventilku\n- na ventilek nasadíme tlakoměr a přitlačíme\n- ručička tlakoměru ukáže hodnotu tlaku v pneumatice\n- podle potřeby upravíme tlak v pneumatice upuštěním nebo dohuštěním\n- hloubku měříme hloubkoměrem, nebo dle měrných bodů na pneumatice"
                ],
                correct: [0]
            },
            {
                id: 3,
                question: "Popište obsah kontroly kol a pneu. a faktory ovlivňující jejich životnost",
                options: [
                    "- kontrolujeme nahuštění, hloubku dezénu, poškození pláště (proražení, zpuchřelost …), utažení kola\n- podhuštěná pneu. se opotřebuje na krajích a špatně drží stopu\n- přehuštěná pneu. se opotřebuje uprostřed a odskakuje\n- poškozená pneu. se může během jízdy roztrhnout a způsobit tak dopravní nehodu\n- povolené kolo se může během jízdy zcela uvolnit a může upadnout\n- faktory jsou zejména huštění, způsob jízdy, terén, geometrie nápravy, tlumiče…"
                ],
                correct: [0]
            },
            {
                id: 4,
                question: "Jaké jsou nejčastější příčiny poškození plášťů pneu. a jejich projevy",
                options: [
                    "- propíchnutí nebo proražení - pneu. uchází\n- podhuštění - opotřebování na krajích běhounu\n- přehuštění - opotřebování uprostřed běhounu\n- proražení vnitřních vrstev při neopatrném najetí na obrubník - vyboulení pneu."
                ],
                correct: [0]
            },
            {
                id: 5,
                question: "Popište postup při výměně kola",
                options: [
                    "- že máme prázdnou pneumatiku poznáme za jízdy podle toho, že vozidlo bude \"táhnout k jedné straně\", při průjezdu zatáčkou bude \"plavat\"..., na stojícím vozidle prázdnou pneumatiku vidíme\n- pokud dojde k defektu pneumatiky během jízdy, je zapotřebí bezpečně zastavit na krajnici (příp. u kraje vozovky)\n- vypneme motor a zajistíme vozidlo proti pohybu (a to i na rovině) zařazením rychlostního stupně, zatažením ruční brzdy, příp. s použitím klínů (cihla, dlažební kostka, kámen, poleno)\n- pokud po zastavení nestojíme na parkovišti nebo odpočívadle zapneme varovná směrová světla a umístíme v předepsané vzdálenosti od vozidla výstražný trojúhelník\n- z vozidla vyndáme zvedák, klíč na kola a rezervní kolo\n- u prázdného kola sejmeme ochranný kryt kola (poklici)\n- povolíme všechny šrouby na kole (dokud vozidlo stojí na zemi)\n- řádně umístíme zvedák a zvedáme dokud se prázdné kolo nezvedne nad vozovku (pokud musíme vozidlo zvedat na nezpevněné komunikaci je vhodné zvedák podložit pevnou podložkou, např. prknem, aby nedošlo k zatlačení zvedáku do země)\n- po zvednutí kola vyšroubujeme všechny šrouby a provedeme výměnu kola\n- kolo zajistíme všemi šrouby a šrouby lehce dotáhneme křížovým způsobem\n- vozidlo spustíme ze zvedáku opět na zem\n- křížovým způsobem dotáhneme pevně všechny šrouby na kole\n- preventivně přeměříme tlak v rezervní pneumatice a případně jej upravíme na předepsaný tlak\n- uklidíme zvedák, prázdné kolo, poklici a nezapomeneme na výstražný trojúhelník\n- po ujetí cca 20 km (na bezpečném místě) opět křížovým způsobem dotáhneme všechny šrouby na kole a nasadíme ochrannou poklici\n- nezapomeneme v co nejkratší době nechat opravit prázdné kolo\n- pokud se ve vozidle používá jako rezerva kolo zvláštní konstrukce nesmíme zapomenout dodržet pokyny výrobce rezervního kola (např. omezená rychlost) a u prvního pneuservisu raději opravíme normální kolo a namontujeme jej zpět na vozidlo\n- !!! na vozidle LIAZ jsou na levé straně vozidla šrouby s LEVÝM ZÁVITEM !!!"
                ],
                correct: [0]
            },
            {
                id: 6,
                question: "Popište kontrolu množství oleje v motoru a způsob jeho doplňování, časové intervaly pro jeho výměnu",
                options: [
                    "- provést kontrolu množství oleje (hladina musí být mezi ryskami)\n- pokud je oleje málo dolijeme olej (nalévá se víčkem ventilů)\n- po dolití opět zkontrolujeme popsaným způsobem množství oleje\n- po ujetí stanoveného počtu kilometrů (cca 10.000 – 20.000 km) je nutná výměna olejové náplně a olejového filtru - výměnu provádí autoservis"
                ],
                correct: [0]
            },
            {
                id: 7,
                question: "Popište funkci signalizace správné činnosti dobíjení akumulátoru a mazání motoru řidiči vozidla a signalizaci případných poruch",
                options: [
                    "- mazání - červený symbol olejničky - svítí před nastartováním, po naskočení motoru musí zhasnout, pokud se rozsvítí během jízdy, je nutné okamžitě zastavit a hledat závadu (nejčastěji je málo oleje)\n- dobíjení - červený symbol akumulátoru - svítí před nastartováním, po naskočení motoru a zvýšení otáček musí zhasnout, pokud se rozsvítí během jízdy je potřeba zastavit a hledat závadu (volný nebo přetržený klínový řemen, uvolněný kontakt…)"
                ],
                correct: [0]
            },
            {
                id: 8,
                question: "Popište kontrolu a ošetřování kapalinové chladící soustavy vozidla a zajištění regulace provozní teploty motoru",
                options: [
                    "- stav teploty chladící kapaliny signalizuje řidiči teploměr na přístrojové desce – optimum je cca 80 – 90 °C (může být doplněn červenou kontrolkou se symbolem teploměru, která se rozsvítí při přehřátí)\n- údržba spočívá v kontrole množství chladící kapaliny, udržování kapaliny v potřebné hustotě proti zamrznutí a kontrole čistoty a prostupnosti chladiče\n- regulaci teploty zajišťuje termostat postupným otevíráním a zavíráním velkého okruhu chlazení (přes chladič)"
                ],
                correct: [0]
            },
            {
                id: 9,
                question: "Popište signalizaci teploty chladící kapaliny řidiči a postup, došlo-li k přehřátí motoru",
                options: [
                    "- pokud došlo k přehřátí, v žádném případě neotevíráme víčko chladiče nebo tlakové vyrovnávací nádobky - hrozí opaření kapalinou a párou, která má teplotu větší než 100°C\n\na) nesvítí žádná jiná kontrolka červené barvy\na1) došlo k úniku chladící kapaliny\n- v motoru není dostatek chladící kapaliny - zjistíme pohledem na tlakovou vyrovnávací nádobku, kde má být hladina mezi ryskami\n- počkáme až dojde k úplnému vychladnutí motoru a teprve poté otevíráme tlakovou vyrovnávací nádobku (otevíráme nadvakrát - pootočit a teprve po úniku tlaku otevřít)\n- dolijeme destilovanou vodu do studeného motoru (pokud nalijeme studenou vodu do horkého motoru, dojde k poškození motoru teplotním rázem)\n- zkontrolujeme, zda nedochází k viditelnému úniku chladící kapaliny a pokud ne, pokračujeme v jízdě se zvýšenou opatrností (kontrolujeme teplotu)\n- pokud dochází k viditelnému úniku kapaliny pokusíme se závadu odstranit (utažení spony na hadici...) a pokud se nám nepodaří závadu odstranit, nepokračujeme v jízdě a zavoláme technickou pomoc\n- vozidlo necháme zkontrolovat, příp. opravit\n\na2) nedošlo k úniku chladící kapaliny\n1) - pokud je v motoru dostatek chladící kapaliny, došlo zřejmě k poškození termostatu, nebo vodního čerpadla - tuto závadu na silnici sami neodstraníme (pokud nejste automechanik)\n2) - došlo k přehřátí vlivem jízdy v koloně - vozidlo nemá potřebný nápor vzduchu pro chlazení\n- ručně zapneme ventilátor chladiče (pokud je namontován), příp. ventilátor topení\n- nepokračujeme v jízdě kolonou a čekáme na vychladnutí vozidla\n\nb) svítí kontrolka dobíjení\n- došlo k uvolnění klínového řemene (nebo k jeho přetržení)\n- klínový řemen napneme, nebo nasadíme nový"
                ],
                correct: [0]
            },
            {
                id: 10,
                question: "Popište kontrolu a ošetřování vzduchové chladící soustavy vozidla a zajištění regulace provozní teploty motoru",
                options: [
                    "- stav teploty motoru signalizuje řidiči teploměr na přístrojové desce – optimum je cca 80 - 90°C (může být doplněn červenou kontrolkou se symbolem teploměru, která se rozsvítí při přehřátí)\n- údržba spočívá v kontrole čistoty a prostupnosti chladících žeber na hlavách a válcích\n- dále kontrolujeme oplechování sloužící k usměrnění proudu vzduchu a funkčnost ventilátoru"
                ],
                correct: [0]
            },
            {
                id: 11,
                question: "Popište hlavní části palivové soustavy vznětového motoru",
                options: [
                    "- nádrž a potrubí\n- podávací čerpadlo s hrubým čističem\n- papírové jemné filtry paliva\n- vstřikovací čerpadlo a vysokotlaké potrubí, vstřikovače a trysky"
                ],
                correct: [0]
            },
            {
                id: 12,
                question: "V čem spočívá údržba a ošetřování palivové soustavy vznětového motoru",
                options: [
                    "- kontrola těsnosti\n- pravidelná výměna filtrů v určených intervalech\n- v zimním období můžeme přidávat do nafty aditivum a prostředky proti kondenzaci vody"
                ],
                correct: [0]
            },
            {
                id: 13,
                question: "Popište postup při odvzdušňování palivové soustavy vznětového motoru",
                options: [
                    "- postupujeme od nádrže směrem k vysokotlakému potrubí\n- uvolníme odvzdušňovací šroub a ruční pumpičkou napumpujeme naftu až k povolenému šroubu\n- až nafta vytéká, utáhneme šroub a pokračujeme na dalším\n- čerpadlo je odvzdušněné tehdy, až nafta protéká ventilkem do přepadového potrubí"
                ],
                correct: [0]
            },
            {
                id: 14,
                question: "Popište postup při hledání příčiny zavzdušnění palivové soustavy vznětového motoru",
                options: [
                    "- v první řadě kontrolujeme dostatek nafty v nádrži\n- kontrola těsnosti spojů a těsnění – přetáhneme všechny spoje\n- kontrola těsnosti potrubí – tlakem vzduchu hledáme možné poškození"
                ],
                correct: [0]
            },
            {
                id: 15,
                question: "Popište funkci regulátoru otáček vstřikovacího čerpadla a funkci omezovače rychlosti",
                options: [
                    "- regulátor otáček pracuje na principu odstředivé síly\n- v závislosti na rychlosti otáčení čerpadla reguluje maximální množství dodávané nafty\n- omezovač rychlosti při překročení maximální nastavené hodnoty uzavře přívod paliva"
                ],
                correct: [0]
            },
            {
                id: 16,
                question: "Popište kontrolu a údržbu výfukového systému",
                options: [
                    "- kontrola spočívá v kontrole těsnosti a neporušenosti soustavy\n- součástí výfukového systému je i motorová brzda u které kontrolujeme zda zavírá a otevírá potrubí (po nastartování zkusíme vypnout motor touto brzdou a zda se brzda automaticky po uvolnění opět otevře)\n- tlakem výfukových plynů je poháněno zároveň i TURBO"
                ],
                correct: [0]
            },
            {
                id: 17,
                question: "Popište, jakou funkci plní katalyzátor výfukových plynů, jeho umístění na vozidle a jakými způsoby lze ovlivnit jeho životnost",
                options: [
                    "- katalyzátor redukuje jedovaté zplodiny vzniklé spalováním paliva\n- je součástí výfukového potrubí\n- vozidla s katalyzátorem jezdí na bezolovnatý benzín\n- životnost lze negativně ovlivnit např. použitím olovnatého benzínu, nebo roztahování vozidla v zimním období"
                ],
                correct: [0]
            },
            {
                id: 18,
                question: "Popište činnost turbodmychadla, funkci chladiče vzduchu (mezichladiče) a způsoby jejich ošetřování",
                options: [
                    "- turbodmychadlo je poháněno tlakem výfukových plynů ve výfukovém potrubí\n- zajišťuje při dosažení určitých otáček plnění motoru větším tlakem, ale méně bohatou směsí\n- zvyšuje výkon motoru a zároveň snižuje spotřebu paliva\n- chladič vzduchu ochlazuje vzduch vháněný do válců motoru, protože ochlazeného vzduchu se tam vejde víc, jeho údržba spočívá pouze v kontrole čistoty a propustnosti vzduchu"
                ],
                correct: [0]
            },
            {
                id: 19,
                question: "Popište ošetřování čističe vzduchu (suchý, mokrý) a v čem spočívá údržba plnícího systému",
                options: [
                    "- suchý = papírová vložka, kterou je nutno po určitém proběhu kilometrů měnit\n- mokrý = olejová lázeň, kterou je třeba průběžně kontrolovat a doplňovat\n- údržba spočívá v čištění a udržování v bezvadném stavu"
                ],
                correct: [0]
            },
            {
                id: 20,
                question: "Popište, jakou funkci plní u automobilu spojka a jakými způsoby lze ovlivnit její životnost",
                options: [
                    "- umožňuje plynulý rozjezd automobilu a krátkodobé přerušení hnací síly od motoru do převodovky = umožňuje řazení převodových stupňů a neutrálu\n- během provozu dochází k opotřebení spojkového obložení a proto je nutné po určitém čase nechat seřídit spojku a promazat spojkové ložisko\n- spojce škodí příliš dlouhé vystavení a dlouhé prokluzování způsobené ponecháním nohy na pedálu spojky (proto je lepší při delším čekání v křižovatce zařadit neutrál)"
                ],
                correct: [0]
            },
            {
                id: 21,
                question: "Popište, jakou funkci plní u vozidla převodovka, rozdělovací převodovka, spojovací hřídel, rozvodovka, diferenciál a kolové redukce, v čem spočívá jejich ošetřování",
                options: [
                    "Převodovka\n- umožňuje využívat sílu motoru v jeho optimálních otáčkách řazením rychlostních stupňů\n- je tvořena soustavou hřídelů, ozubených kol a synchronizačních spojek\n- vzhledem k rozdílným rychlostem otáčení hřídelů se těsně před zařazením rychlostního stupně pomocí synchronizačních spojek rychlost hřídelů vyrovná a tím se usnadní řazení\n- v závislosti na postavení ozubených kol na různých hřídelích jede automobil rychle s malou silou nebo pomalu s maximální silou, nebo couvá, nebo stojí s neutrálem\n- při nesprávném řazení rychlostních stupňů může dojít k poškození převodovky\n\nRozdělovací převodovka\n- rozděluje hnací sílu mezi přední a zadní nápravu nebo mezi nápravu a další soustrojí (sklápěčka)\n\nSpojovací hřídel\n- přenáší točivý moment od převodovky do rozvodovky\n\nRozvodovka\n- rozděluje točivý moment na obě kola jedné nápravy\n\nDiferenciál\n- umožňuje rozdílené rychlosti otáčení kol jedné nápravy při průjezdu zatáčkou nebo při průjezdu terénu se zhoršenou adhezí\n- pro lepší prostupnost vozidla terénem lze využít jeho uzávěrku\n\nKolové redukce\n- zajišťují změnu pohonu přímo na pohon přes další převod v kolech\n- tím dochází ke zpomalení, ale zároveň k větší tažné síle vozidla\n- lze jimi upravit i světlou výšku vozidla\n\n- ošetřování uvedených soustav spočívá v kontrole jejich olejových náplní a udržování v čistotě"
                ],
                correct: [0]
            },
            {
                id: 22,
                question: "Popište rozdíl mezi synchronizovanou a nesynchronizovanou převodovkou, způsob jejich ovládání a použití ve vozidlech",
                options: [
                    "- synchronizovaná převodovka pomocí synchronizačních kroužků samostatně upravuje rychlost otáčení vzájemných hřídelů a tím umožňuje snadné řazení jednotlivých rychlostních stupňů, je podstatně složitější na výrobu\n- nesynchronizovaná převodovka vyžaduje při řazení vyšších rychlostních stupňů dvakrát sešlápnou spojku pro vyrovnání rychlostí vzájemných hřídelů a při řazení nižšího převodového stupně řadíme s meziplynem\n- řazení nahoru – sešlápnout spojku, vyřadit do neutrálu, pustit spojku, sešlápnout spojku, zařadit vyšší rychlostní stupeň, pustit spojku\n- řazení dolů – sešlápnout spojku, vyřadit do neutrálu, pustit spojku, meziplyn, sešlápnout spojku, zařadit nižší rychlostní stupeň, pustit spojku"
                ],
                correct: [0]
            },
            {
                id: 23,
                question: "Popište význam kombinovaných (půlených) převodovek a jakou funkci plní uzávěrka diferenciálu",
                options: [
                    "- půlená převodovka umožňuje přímé rychlostní stupně ještě dále dělit na tzv. půlky, které mají větší sílu a jsou pomalejší\n- jedná se o vlastně zjednodušení převodovky v ovládání, ale i v konstrukci\n- místo např. 10 rychlostních stupňů je jich pouze 5, ale s možností zařadit půlku\n- uzávěrka diferenciálu zablokuje rozdílné rychlosti otáčení kol na jedné nápravě\n- tím dochází sice ke zhoršení jízdních vlastností při jízdě po silnici v zatáčce, ale ke zlepšení trakčních schopností vozidla např. v terénu, nebo na sněhu apod."
                ],
                correct: [0]
            },
            {
                id: 24,
                question: "Popište, jakou funkci plní tlumiče pérování a stabilizátor, projevy jejich nesprávné činnosti na technický stav vozidla a bezpečnost jízdy",
                options: [
                    "- slouží k tomu, aby se nerovnosti vozovky nepřenášely přímo na ostatní části vozidla\n- pérování zvyšuje komfort cestování, tlumiče zabraňují rozkmitání per a odskakování kol od vozovky\n- tlumiče pérování časem ztrácejí svou účinnost a proto je nutné nechat tlumiče pravidelně kontrolovat\n- snížená funkce tlumičů ovlivňuje bezpečnost jízdy (zejména vliv na řízení, brždění a životnost pneumatik)"
                ],
                correct: [0]
            },
            {
                id: 25,
                question: "Popište účel posilovače brzd a řízení na vozidle, proč se nesmí za jízdy vypínat motor",
                options: [
                    "- posilovač brzd zvětšuje brzdnou sílu vyvolanou tlakem nohy na pedál brzdy, pracuje na podtlaku vzniklým v sacím potrubí, takže když vypneme motor, přestane fungovat\n- posilovač řízení je poháněn od klínového řemene, zvětšuje sílu vyvolanou otáčením volantem a přenáší ji na kola řídící nápravy, usnadňuje řízení"
                ],
                correct: [0]
            },
            {
                id: 26,
                question: "Popište účel ABS a jeho kontrolu",
                options: [
                    "- u nových automobilů se stále častěji využívá systém ABS (anti-blok-systém) který zabrání zablokování kol při intenzivním brždění a umožní tak stálou ovladatelnost vozidla\n- kontrolu provádíme pouze pohledem na přístrojovou desku, zda nesvítí výstražná kontrolka s nápisem ABS"
                ],
                correct: [0]
            },
            {
                id: 27,
                question: "Popište účel systému regulace prokluzu kol hnací nápravy ASR a kontrolu jeho správné funkce",
                options: [
                    "- systém ASR zabraňuje prokluzu kol hnací nápravy tím, že kontroluje rychlost otáčení kol na nápravách a v případě rozdílných rychlostí omezí výkon motoru a tím dojde k vyrovnání rychlostí a zamezení protáčení kol hnací nápravy\n- kontrolu provádíme pouze pohledem na přístrojovou desku, zda nesvítí výstražná kontrolka s nápisem ASR"
                ],
                correct: [0]
            },
            {
                id: 28,
                question: "Popište funkci provozní, parkovací, pomocné a nouzové brzdy",
                options: [
                    "- provozní umožňuje během jízdy zpomalovat a zastavit vozidlo\n- parkovací zajistí vozidlo při parkování a opuštění vozidla\n- pomocná brzda odlehčuje provozní brzdě např. při sjíždění dlouhého kopce\n- nouzová se užívá pouze při krizových situacích, kdy dojde k selhání provozní brzdy"
                ],
                correct: [0]
            },
            {
                id: 29,
                question: "Popište princip pomocné brzdy (motorové, retardéru elektromagnetického a hydrodynamického)",
                options: [
                    "- motorová brzda funguje na principu odporu výfukových plynů, kdy při jejím použití dojde k uzavření výfukového potrubí a tím dochází k brždění motorem\n- elektromagnetický retardér pracuje na principu elektromagnetického pole, které svým působením na rotující součást hnací soustavy způsobuje zpomalení otáčení. Může se používat mezi motorem a převodovkou, převodovkou a hnacím hřídelem nebo i u kol\n- hydrodynamický retardér působí na principu odporu oleje v převodovce na turbínu spojenou s hnaným hřídelem"
                ],
                correct: [0]
            },
            {
                id: 30,
                question: "Popište princip činnosti kapalinové a vzduchokapalinové brzdy",
                options: [
                    "- v kapalinové brzdě je přenos síly mezi pedálem brzdy a jednotlivými koly zajištěn tlakem kapaliny\n- u vzduchokapalinové brzdy je po sešlápnutí pedálu brzdy vzduchový okruh ovládán kapalinovým"
                ],
                correct: [0]
            },
            {
                id: 31,
                question: "Popište princip činnosti vzduchové brzdy a její hlavní součásti",
                options: [
                    "- u vzduchové brzdy je po sešlápnutí pedálu brzdy do okruhu uvolněn pod velkým tlakem vzduch, který v brzdových válcích vytlačí píst a ten pomocí brzdového klíče zajistí přenos síly na brzdové segmenty\n- vzduchový filtr, kompresor, potrubí, odlučovač a odkalovač, regulátor, vzduchové jímky, brzdové válce, brzdiče"
                ],
                correct: [0]
            },
            {
                id: 32,
                question: "Popište postup při ošetřování a údržbě jednotlivých součástí vzduchové brzdy",
                options: [
                    "- kontrolujeme těsnost, čistotu filtru, napnutí klínového řemene(pokud je použit k pohonu kompresoru), odkalování jímek pomocí výpustného ventilu, promazávání brzdových klíčů a brzdových válců, kontrola brzdového obložení…"
                ],
                correct: [0]
            },
            {
                id: 33,
                question: "Popište rozdíl mezi kotoučovou a bubnovou brzdou, jejich výhody a nevýhody",
                options: [
                    "- u kotoučových brzd se na rotující kotouče brzd přitlačují z obou stran brzdové destičky\n- u bubnových brzd se v rotujícím bubnu rozpínají proti stěnám bubnu brzdové čelisti\n- přední kola automobilu jsou zpravidla kotoučové, mají vyšší účinnost, ale obtížně se řeší parkovací brzda\n- zadní kola jsou většinou bubnové, jsou méně účinné, ale lépe a méně nákladně se řeší parkovací brzda"
                ],
                correct: [0]
            },
            {
                id: 34,
                question: "Vysvětlete pojem geometrie řídící nápravy",
                options: [
                    "- vzájemné postavení kol vůči sobě, nápravě a vozovce\n- mluvíme o sbíhavosti, rozbíhavosti, odklonu, záklonu"
                ],
                correct: [0]
            },
            {
                id: 35,
                question: "Popište nejčastější projevy nesprávné geometrie řídící nápravy",
                options: [
                    "- nestejnoměrné sjíždění pneumatik\n- nestabilita vozidla při jízdě\n- obtížné vedení vozidla v zatáčce"
                ],
                correct: [0]
            },
            {
                id: 36,
                question: "Popište postup při ošetřování akumulátoru a faktory ovlivňující jeho životnost",
                options: [
                    "- základní údržba akumulátoru spočívá v kontrole množství elektrolytu, v upevnění a čistotě kontaktů a kontrole správného nabití\n- jakákoli odchylka od správného stavu ovlivňuje negativním způsobem životnost akumulátoru"
                ],
                correct: [0]
            },
            {
                id: 37,
                question: "Vysvětlete rozdíl mezi paralelním a sériovým zapojením akumulátorů a správný postup při jejich zapojení a odpojení",
                options: [
                    "- paralelní = za sebou = propojíme + na + a - na - zůstává stále 12 V\n- sériové = vedle sebe = propojujeme + na - získáme tím 24 V\n- akumulátory zapojujeme do vozidla nejprve kladným pólem a teprve poté kostru\n- odpojíme nejprve kostru a pak +"
                ],
                correct: [0]
            },
            {
                id: 38,
                question: "Popište funkci pojistek v el. soustavě vozidla a jejich umístění",
                options: [
                    "- pojistky chrání el. soustavu při zkratu před shořením tak, že dojde k přetavení drátku uvnitř pojistky a tím se přeruší el. obvod\n- ve většině vozidel se nachází pod přístrojovou deskou nebo v prostoru motoru"
                ],
                correct: [0]
            },
            {
                id: 39,
                question: "Popište, jakým způsobem se provádí výměna žárovek vnějšího osvětlení vozidla",
                options: [
                    "- odstraníme kryt žárovky\n- sejmeme konektor el. vodičů z kontaktů žárovky\n- uvolníme žárovku v objímce a vyndáme ji ven\n- opačným postupem dáme novou žárovku a zapojíme el. konektor\n- nesmíme sahat na skleněnou baňku žárovky, protože jinak po rozsvícení praskne"
                ],
                correct: [0]
            },
            {
                id: 40,
                question: "Vysvětlete symboly kontrolek a ovladačů na přístrojové desce vozidla",
                options: [
                    "- mazání - červená - symbol olejničky - svítí před nastartováním, po naskočení motoru musí zhasnout, pokud se rozsvítí během jízdy, je nutné okamžitě zastavit a hledat závadu(nejčastěji je málo oleje)\n- dobíjení - červená - symbol akumulátoru - svítí před nastartováním, po naskočení motoru a zvýšení otáček musí zhasnout, pokud se rozsvítí během jízdy je potřeba zastavit a hledat závadu(volný nebo přetržený klínový řemen)\n- brzdová kapalina - červená - symbol brzdový buben a vykřičník - pokud se rozsvítí během jízdy, je nutné okamžitě zastavit a hledat závadu(nejčastěji je málo brzdové kapaliny, pokud se závada opakuje okamžitě provést odbornou kontrolu a opravu)\n- přehřátí motoru - červená - symbol teploměru - pokud se rozsvítí během jízdy, je nutné okamžitě zastavit a hledat závadu(nejčastěji je málo vody, nebo volný klínový řemen)\n- parkovací světla - zelená - symbol žárovičky\n- potkávací světla - zelená - symbol světel se skloněnými paprsky\n- dálková světla - modrá - symbol světel s vodorovnými paprsky\n- přední mlhovky - zelená\n- zadní mlhovky - oranžová\n- směrové ukazatele - zelené\n- varovná světla - červená - symbol trojúhelníku\n- vyhřívání zadního skla - oranžová\n- palivoměr – oranžová"
                ],
                correct: [0]
            },
            {
                id: 41,
                question: "Popište postup při připojení tažného lana a tyče",
                options: [
                    "- odkryjeme oka pro uchycení lana (pokud jsou zakrytá)\n- lano pomocí háků na obou koncích upevníme do tažných ok\n- umístíme červený praporek\n- tyč používáme obdobně\n- při vlečení na laně musí být funkční řízení i brzdy\n- při vlečení na tyči musí být funkční řízení\n- za snížené viditelnosti musí být funkční i osvětlení\n- vlečné vozidlo musí svítit potkávacími světli\n- vlečené vozidlo musí mít na zadní sajtně umístěn výstražný trojúhelník\n- řidiči jsou povinni se domluvit na způsobu dorozumívání"
                ],
                correct: [0]
            },
            {
                id: 42,
                question: "Popište postup při montáži sněhových řetězů",
                options: [
                    "- nájezdové řetězy rozložíme před kola hnací nápravy\n- najedeme vozidlem na řetězy a tyto sepneme\n- řetězy se zámkem pouze nasadíme na kola a po obou stranách sepneme a našponujeme"
                ],
                correct: [0]
            },
            {
                id: 43,
                question: "Popište základní funkce tachografu a v čem spočívá jeho obsluha",
                options: [
                    "- ukazuje aktuální rychlost jízdy\n- ukazuje počet kilometrů\n- ukazuje hodiny a dobu jízdy\n- signalizuje chybějící kotouček červenou kontrolkou\n- signalizuje překročení rychlosti 85 km/h\n- zaznamenává rychlost jízdy na kotouček, bezpečnostní přestávky a střídání řidičů"
                ],
                correct: [0]
            },
            {
                id: 44,
                question: "Popište postup při připojování a odpojování přívěsu",
                options: [
                    "- vždy najíždíme autem na vlek, nikdy ne obráceně\n- odjistíme tažné zařízení a čep zvedneme do horní polohy\n- najedeme autem na vlek a po doražení oje do spojovacího zařízení dojde automaticky k zapadnutí čepu do oka oje, toto zkontrolujeme\n- zapojíme vzduch (oba okruhy podle barvy)\n- zapojíme elektřinu do zásuvky\n- zapojíme jistící řetěz do háků\n- pokud vlek umožňuje otevření ventilů vzduchu toto překontrolujeme\n- odkontrolujeme činnost brzd a světelných zařízení\n- odbrzdíme, odstraníme klíny\n- odpojování má opačný postup"
                ],
                correct: [0]
            },
            {
                id: 45,
                question: "Vyjmenujte povinné vybavení vozidla",
                options: [
                    "- náhradní elektrické pojistky, po jedné od každého druhu\n- náhradní žárovky, po jedné od každého druhu\n- příruční zvedák\n- klíč na matice (šrouby) kol\n- náhradní kolo nebo speciální sadu na opravu pneumatiky\n- přenosný výstražný trojúhelník\n- reflexní vesta\n- autolékarnička"
                ],
                correct: [0]
            }
        ]
    }
};
    

