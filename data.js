// data.js - Zde jsou uloženy všechny otázky

const database = {
    "pedagogika1": {
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
        question: "Který termín/y se nepoužívá v reformní pedagogice? (Označte všechny správné odpovědi)",
        options: [
            "Přijetí dítěte takového, jaké je.",
            "Tolerance pasivity dítěte.",
            "Respektování přirozeného vývoje dítěte.",
            "Důraz na maximální rozvoj dítěte po stránce intelektuální."
        ],
        correct: [1, 3]
    },
    {
        id: 43,
        question: "Jaká oblast didaktického materiálu není obsazena v systému, který Marie Montessori?",
        options: [
            "jazykový materiál",
            "biologický materiál",
            "smyslový materiál"
        ],
        correct: [1]
    },
    {
        id: 44,
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
        id: 45,
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
        id: 46,
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
        id: 47,
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
        id: 48,
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
        id: 49,
        question: "Pojem makroprostředí v sobě zahrnuje:",
        options: [
            "Rodinné prostředí",
            "Prostředí blízkých osob",
            "Velké prostředí"
        ],
        correct: [2]
    },
    {
        id: 50,
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
        id: 51,
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
        id: 52,
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
        id: 53,
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
        id: 54,
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
        id: 55,
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
        id: 56,
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
        id: 57,
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
        id: 58,
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
        id: 59,
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
        id: 60,
        question: "Autor 'Problémové metody' je:",
        options: [
            "W. Kilpatrick",
            "S. Vrána",
            "J. Dewey",
            "V. Prihoda"
        ],
        correct: [2]
    },
    {
        id: 61,
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
        id: 62,
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
        id: 63,
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
        id: 64,
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
        id: 65,
        question: "Kdo v níže jmenovaných usiloval o prosazení vysokoškolského vzdělání pro učitele škol obecných a měšťanských škol ve třicátých letech dvacátého století (Možnost více správných odpovědí):",
        options: [
            "O. Chlup",
            "V. Příhoda",
            "G. A. Lindner"
        ],
        correct: [0, 1]
    },
    {
        id: 66,
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
        id: 67,
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
        id: 68,
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
        id: 69,
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
        id: 70,
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
        id: 71,
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
        id: 72,
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
        id: 73,
        question: "Záměrná výchova a uvědomělé sebeutváření jsou:",
        options: [
            "intencionální formou výchovy",
            "funkcionální formou výuky",
            "Bezděčným pedagogickým procesem",
            "Nepřímým pedagogickým procesem"
        ],
        correct: [0]
    },
    {
        id: 74,
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
        id: 75,
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
        id: 76,
        question: "Pojem funkční gramotnost označuje:",
        options: [
            "Dovednost číst a psát",
            "Připravenost aplikovat v praxi získané vědomosti a dovednosti",
            "Soubor vědomostí, dovedností, názorů, postojů a hodnot"
        ],
        correct: [1]
    },
    {
        id: 77,
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
        id: 78,
        question: "Pojetí tzv. transmisivní školy, resp. Tradiční výuky, nepopisuje jeden z níže uvedených výroků, jaký?",
        options: [
            "Učitel jako reprezentant toho, co má žák umět, ale neumí, co má vědět, ale neví!",
            "Učitel jako někdo, kdo je povinen hledat příčiny malé píle, zkoumat, jak píli vzbudit",
            "Učitel jako někdo, kdo žákovi předkládá učivo k naučení, zkouší to a hodnotí! Neúspěch je pak dán žákem samým, jeho neschopnost se naučit."
        ],
        correct: [1]
    },
    {
        id: 79,
        question: "Vzdělávací princip 'pomoz mi, abych to mohl udělat sám', je typický pro reformní koncepci:",
        options: [
            "R. Steiner",
            "C. Freinet",
            "M. Montessori"
        ],
        correct: [2]
    },
    {
        id: 80,
        question: "Kvalitativní aspekt hodnocení žáka ve škole v sobě zahrnuje:",
        options: [
            "Sledování a rozvíjení znalosti žáků",
            "Sledování a rozvíjení kompetencí žáků",
            "Testování a známkování prospěchu žáků"
        ],
        correct: [1]
    },
    {
        id: 81,
        question: "Pocit 'vrženosti' do světa je spojen:",
        options: [
            "S psychoanalýzou",
            "S existencialismem",
            "S postmodernismem"
        ],
        correct: [1]
    },
    {
        id: 82,
        question: "Pojem resilience označuje:",
        options: [
            "Nezdolnost, schopnost odolávat zátěži",
            "Schopnost vysoké sebekontroly",
            "Schopnost osvobození se od požadavků a vlivů druhých"
        ],
        correct: [0]
    },
    {
        id: 83,
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
        id: 84,
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
        id: 85,
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
        id: 86,
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
        id: 87,
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
        id: 88,
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
        id: 89,
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
        id: 90,
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
        id: 91,
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
        id: 92,
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
        id: 93,
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
        id: 94,
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
        id: 95,
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
        id: 96,
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
        id: 97,
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
        id: 98,
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
        id: 99,
        question: "Pod pedagogickými principy chápeme:",
        options: [
            "postupy vedoucí k dosažení stanoveného cíle",
            "způsob pedagogické organizace výchovné činnosti vychovávatelů a vychovávaných",
            "jednotlivé postupy nebo způsoby činnosti vychovávatelů a vychovávaných",
            "nejobecnější požadavky optimalizující výchovně vzdělávací činnost"
        ],
        correct: [3]
    },
    {
        id: 100,
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
        id: 101,
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
        id: 102,
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
        id: 103,
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
        id: 104,
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
        id: 105,
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
        id: 106,
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
        id: 107,
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
        id: 108,
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
        id: 109,
        question: "Co se stalo v letech 2001-2004 ve školství:",
        options: [
            "Rozvoj kompetencí napříč předměty (8 kompetencí pro život)",
            "Zaměření na klíčové kompetence a průřezová témata (RVP, ŠVP, Bílá kniha - reforma kurikula)",
            "Nové typy škol (např. 8letá gymnázia)."
        ],
        correct: [1]
    },
    {
        id: 110,
        question: "Jména 4 fakult po založení Karlovy Univerzity:",
        options: [
            "artistická, právnická, lékařská, teologická",
            "pedagogická, právnická, rybářská, léčebná",
            "teologická, jazyková, právnická, lékařská"
        ],
        correct: [0]
    },
    {
        id: 111,
        question: "Co bude nového ve Strategii 2030+:",
        options: [
            "Rozvoj kompetencí napříč předměty (8 kompetencí pro život)",
            "Vstup alternativ do systému",
            "Omezení na dílčí rysy (např., vzdělávání pro konkurenceschopnost)"
        ],
        correct: [0]
    },
    {
        id: 112,
        question: "Pojem anomie popisuje:",
        options: [
            "pocit zklamání a skepse ve vztahu k možnostem realizovat v daných společenských podmínkách své cíle, plány. prosadit se;",
            "nízkou odolnost proti stresu a zátěži:",
            "tendenci růstu násilí ve společnosti."
        ],
        correct: [0]
    },
    {
        id: 113,
        question: "Výchova je v diskurzu současné pedagogiky (např. dle Pedagogické encyklopedie) chápána jako cílevědomé a záměrné působení na vychovávaného:",
        options: [
            "a to zejména přímým působením na vlastnosti osobnosti;",
            "a to zejména ponecháním co největší svobody dítěti a nezasahování do jeho vývoje",
            "a to zejména cestou vytváření a ovlivňování podmínek pro rozvoj dítěte a mladých lidí"
        ],
        correct: [2]
    },
    {
        id: 114,
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
    }
};
