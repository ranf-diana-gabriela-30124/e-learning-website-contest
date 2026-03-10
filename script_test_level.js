const questions = [
    {
        question : "Care dintre urmatoarele variabile este de tip intreg ?",
        answers: [
            { test: "a) double y;", correct: false },
            { test: "b) float n;", correct: false },
            { test: "c) int x;", correct: true },
            { test: "d) char ch;", correct: false },
        ],
        categorie: "tip date introducere",
        scor: "u"
    },
    {
        question : " Care este scopul instructiunii if?",
        answers: [
            { test: "a) De a itera prin bucle. ", correct: false },
            { test: "b) De a face decizii conditionale. ", correct: true },
            { test: "c) De a defini functii.", correct: false },
            { test: "d) De a declara variabile. ", correct: false },
        ],
        categorie: "instructiuni",
        scor: "m"
    },
    {
        question : " Ce este o clasa abstracta in C++ ? ",
        answers: [
            { test: "a) O clasa care nu are membrii. ", correct: false },
            { test: "b) O clasa care nu poate fi instantiata si contine cel putin o metoda virtuala. ", correct: true },
            { test: "c) O metoda de tip void. ", correct: false },
            { test: "d) Un atribut declarat privat. ", correct: false },
        ],
        categorie: "OOP",
        scor: "g"
    },
    {
        question : " Care este dimensiunea standard a tipului de date double in C++? ",
        answers: [
            { test: "a) 16 octeti", correct: false },
            { test: "b) 4 octeti", correct: false },
            { test: "c) 1 octet", correct: false },
            { test: "d) 8 octeti ", correct: true },
        ],
        categorie: "tip date introducere",
        scor: "u"
    },
    {
        question : " Care este extensia de fisier pentru un fisier sursa in C++?",
        answers: [
            { test: "a) .cpp", correct: true },
            { test: "b) .cc", correct: false },
            { test: "c) .cxx", correct: false },
            { test: "d) .c++", correct: false },
        ],
        categorie: "tip date introducere",
        scor: "u"
    },
{
    question : "Ce se va afisa dupa instructiunea : char ch='A'+1; cout << ch << endl; ?" ,
    answers: [
        { test: "a) B ", correct: true },
        { test: "b) 101 ", correct: false },
        { test: "c) 102 ", correct: false},
        { test: "d) A ", correct: false },
    ],
    categorie: "siruri de caractere",
    scor: "m"
},
{
    question : "Ce va afisa secventa de instructiuni: int x=5, y=2; cout << x/y;?",
    answers: [
        { test: "a) 2.0", correct: false },
        { test: "b) 2", correct: true },
        { test: "c) 2.5", correct: false },
        { test: "d) 1", correct: false },
    ],
    categorie: "tip date introducere",
    scor: "m"
},
{
    question : "Ce este un constructor implicit? ",
    answers: [
        { test: "a) Un constructor cu 2 parametrii. ", correct: false },
        { test: "b) O metoda care duce la stergerea unui element. ", correct: false  },
        { test: "c) Un constructor fara parametrii.", correct: true },
        { test: "d) Un constructor de tip int. ", correct: false },
    ],
    categorie: "OOP",
    scor: "g"
},
{
    question : "Care este declararea corecta a unei variabile x care memoreaza simultan coordonatele reale ale unui punct din planul xOy ?",
    answers: [
        { test: "a) struct punct{ double oy, oy; }ox;", correct: false },
        { test: "b) struct punct{ double x, oy; }ox;", correct: false },
        { test: "c) struct punct{ int ox, oy; }x;", correct: false },
        { test: "d) struct punct{ double ox, oy; }x;", correct: true },
    ],
    categorie: "structuri",
    scor: "m"
},
{
    question : " Ce este 'cout'? ",
    answers: [
        { test: "a) O variabila. ", correct: false },
        { test: "b) O functie de citire din fisier. ", correct: false },
        { test: "c) O functie de afisare pe ecran/consola.", correct: true },
        { test: "d) Un tip de date.", correct: false },
    ],
    categorie: "operatori operatii expresii",
    scor: "u"
},
{
    question : " Ce este un sir de caractere? ",
    answers: [
        { test: "a) Un tip de date care stocheaza mai multe caractere. ", correct: true },
        { test: "b) Un tablou bidimensional de numere reale. ", correct: false },
        { test: "c) Un operator logic. ", correct: false },
        { test: "d) O functie de citire de la tastatura. ", correct: false },
    ],
    categorie: "siruri de caractere",
    scor: "u"
},
{
    question : "Care este valoarea urmatoarei expresii: 11*3/2*2/3 ?",
    answers: [
        { test: "a) 2", correct: false },
        { test: "b) 2.75", correct: false },
        { test: "c) 10", correct: true },
        { test: "d) 11", correct: false },
    ],
    categorie: "operatori operatii expresii",
    scor: "u"
},
{
    question : "Care este declararea corecta a unei matrici care stocheaza date de tip double ?",
    answers: [
        { test: "a) int a[100][100];", correct: false },
        { test: "b) float mat[][];", correct: false },
        { test: "c) double matrice;", correct: false},
        { test: "d) double mat[10][10];", correct: true },
    ],
    categorie: "operatori operatii",
    scor: "u"
},
{
    question : "Ce este un pointer in C++? ",
    answers: [
        { test: "a) O functie predefinita. ", correct: false },
        { test: "b) O variabila care stocheaza adresa altei variabile.", correct: true },
        { test: "c) Un tip de date.", correct: false },
        { test: "d) Un operator unar.", correct: false },
    ],
    categorie: "OOP",
    scor: "m"
},
{
    question : "Ce este un constructor in C++? ",
    answers: [
        { test: "a) O functie utilizata sa creeze obiecte de tipul clasei respective. ", correct: true },
        { test: "b) O functie utilizata sa distruga obiecte de tipul clasei respective. ", correct: false },
        { test: "c) Un pointer. ", correct: false },
        { test: "d) Un tablou unidimensional. ", correct: false },
    ],
    categorie: "OOP",
    scor: "g"
},
{
    question : "Ce afiseaza urmatoarea secventa: int x = 5; cout << \"Valoarea lui x este:\" << x++ << x << endl;",
    answers: [
        { test: "a) Valoarea lui x este: 66", correct: false },
        { test: "b) Valoarea lui x este: 55", correct: false },
        { test: "c) Valoarea lui x este: 56", correct: true },
        { test: "d) Valoarea lui x este: 65", correct: false },
    ],
    categorie: "operatori operatii expresii",
    scor: "m"
},
{
    question : "Cum sunt urmatoarele secvente: true||false si true&&false",
    answers: [
        { test: "a) false si true ", correct: false },
        { test: "b) false si false", correct: false },
        { test: "c) true si true", correct: false },
        { test: "d) true si false", correct: true },
    ],
    categorie: "operatori operatii expresii",
    scor: "u"
},
{
    question : "Ce se afiseaza dupa secventa: cout<<'B'-'A'; ?",
    answers: [
        { test: "a) -1", correct: false },
        { test: "b) 1", correct: true },
        { test: "c) A", correct: false },
        { test: "d) 2", correct: false },
    ],
    categorie: "siruri de caractere",
    scor: "m"
},
{
    question : " Ce reprezinta mostenirea in C++?",
    answers: [
        { test: "a) Mecanismul prin care o clasa devine overload. ", correct: false },
        { test: "b) Mecanismul prin care se realizeaza polimorfismul. ", correct: false },
        { test: "c) Mecanismul prin care o clasa poate mosteni metodele si atributele altei clase. ", correct: true },
        { test: "d) Tipul unui membru dintr-o clasa. ", correct: false },
    ],
    categorie: "OOP",
    scor: "g"
},
{
    question : " Care este rolul unei interfete in C++?",
    answers: [
        { test: "a) Interfatele in C++ sunt utilizate pentru a defini comportamentele pe care clasele le pot impartasi, fara a impune o implementare specifica. ", correct: true },
        { test: "b) Interfata este o clasa oarecare cu atribute si metode. ", correct: false},
        { test: "c) Interfata este utilizata la definirea unor metode override. ", correct: false },
        { test: "d) Interfatele se folosesc la supraincarcarea unui operator binar. ", correct: false },
    ],
    categorie: "OOP",
    scor: "g"
},
{
    question : " Care dintre urmatoarele instructiuni atribuie campului p al variabilei t perimetrul, daca struct triunghi{ int a,b,c,p ;}t; ?",
    answers: [
        { test: "a) p.t = a.p + b.t + c.t", correct: false },
        { test: "a) t.p = t.a + t.b + t.c", correct: true },
        { test: "c) t.p = a.t + b.t + c.t", correct: false },
        { test: "d) p.t = t.a + t.b + t.c", correct: false },
    ],
    categorie: "structuri",
    scor: "m"
},
{
    question : "Care dintre antete sunt scrise corect?",
    answers: [
        { test: "a) int f( int a double b", correct: false },
        { test: "b) double subprogr( int a, char b c )", correct: false},
        { test: "c) int functie( char sir[100], int mat[100][100] )", correct: true},
        { test: "d) int adouble 3(", correct: false },
    ],
    categorie:"subprograme",
    scor: "g"
},
{
    question : "Care este dimensiunea tipului de date char?",
    answers: [
        { test: "a) 4 octeti ", correct: false },
        { test: "b) 2 octeti ", correct: false},
        { test: "c) 8 octeti ", correct: false },
        { test: "d) 1 octet ", correct: true },
    ],
    categorie: "siruri de caractere",
    scor: "u"
},
{
    question : "Ce afiseaza secventa: int nr1=35; nr2=10; cout << nr1%nr2; ?",
    answers: [
        { test: "a) 3 ", correct: false },
        { test: "b) 35", correct: false},
        { test: "c) 5", correct: true },
        { test: "d) 55", correct: false },
    ], categorie: "operatori operatii expresii",
    scor: "m"
},
{
    question : "Ce este o metoda in C++  in OOP ?",
    answers: [
        { test: "a) O functie care apartine unei clase si opereaza cu obiectele acelei clase. ", correct: true },
        { test: "b) Un parametru al unei functii. ", correct: false},
        { test: "c) Un pointer la un atribut al clasei", correct: false },
        { test: "d) O clasa abstracta", correct: false },
    ], categorie: "OOP",
    scor: "g"
},
{
    question : " Operator aritmetic binar care returneaza restul impartirii a doua numere intregi?",
    answers: [
        { test: "a) ++ ", correct: false },
        { test: "b) % ", correct: true},
        { test: "c) -- ", correct: false },
        { test: "d) *", correct: false },
    ], categorie: "operatori operatii expresii",
    scor: "u"
},

{
    question : " Ce structura repetitiva este utilizata pentru a executa un bloc de cod atata timp cât o conditie specificata este adevarata, verificand conditia la sfarsitul fiecarei iteratii ?",
    answers: [
        { test: "a) do while ", correct: true },
        { test: "b) for ", correct: false},
        { test: "c) repeat-until", correct: false },
        { test: "d) while ", correct: false },
    ], categorie: "instructiuni",
    scor: "u"
},
{
    question : "Daca s este sirul 2024, atunci expresia strlen(s) are valoarea : ",
    answers: [
        { test: "a) 4", correct: true },
        { test: "b) 5", correct: false},
        { test: "c) 3", correct: false },
        { test: "d) 6", correct: false },
    ], categorie: "siruri de caractere",
    scor: "m"
},
{
    question : " Ce se afiseaza dupa secventa for(i=0;i<=10;i=i+2) cout << i + 1 ;?",
    answers: [
        { test: "a) 0 2 4 6 8 10", correct: false },
        { test: "b) 2468", correct: false},
        { test: "c) 1357911", correct: true },
        { test: "d) 1 3 5 7 ", correct: false },
    ], categorie: "instructiuni",
    scor: "g"
},
{
    question : "Care dintre urmatoarele afirmatii despre functiile C++ este adevarata??",
    answers: [
        { test: "a) O functie C++ nu poate returna o valoare de tip void. ", correct: false },
        { test: "b) Parametrii unei functii C++ pot fi doar de tipuri primitive.", correct: false},
        { test: "c) O functie C++ poate avea parametri cu valori implicite.", correct: true},
        { test: "d) O functie C++ nu poate fi supraincarcată (overloaded).", correct: false },
    ],
    categorie: "subprograme",
    scor: "g"
}

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button"); 
const nextButton = document.getElementById("next-button");
const ExplicationElement = document.getElementById("explication");
const ChapterElement = document.getElementById("capitol_work")

let currentQuestionIndex = 0;
let score_mediu = 0;
let score_usor = 0;
let score_greu = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score_mediu = score_greu = score_usor = 0;
    nextButton.innerHTML = "Next";
    Vector = [0, 0, 0, 0, 0, 0, 0];
    const chapterList = document.getElementById("chapter-list");
    chapterList.innerHTML = "";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.test;
        button.classList.add("answer");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        incrementScore();
    } else {
        selectedBtn.classList.add("incorrect");
        showExplication();
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function incrementScore() 
{
    let currentQuestion = questions[currentQuestionIndex];
    if(currentQuestion.scor ==="u") score_usor++;
    else if(currentQuestion.scor ==="m") score_mediu++;
    else score_greu++;
}

var Vector = [0, 0, 0, 0, 0, 0];

function showExplication() {
    let currentQuestion = questions[currentQuestionIndex];
    switch (currentQuestion.categorie) {
        case "tip date introducere": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 1: introducere in C++`; Vector[0]++; break;
        case "operatori operatii expresii": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 3: operatori, operatii, expresii`; Vector[1]++; break;
        case "instructiuni": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 4: instructiuni`; Vector[2]++; break;
        case "structuri": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 5: structuri`; Vector[3]++; break;
        case "subprograme": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 6: subprograme`; Vector[4]++; break;
        case "siruri de caractere": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 11: siruri de caractere`; Vector[5]++; break;
        case "OOP": ExplicationElement.innerHTML = `Mai multe detalii la capitolul 13: OOP`; Vector[6]++; break;
        default: break;
    }
}

function showChapters() {
    const chapterList = document.getElementById("chapter-list");
    chapterList.innerHTML = ""; 

    for (let i = 0; i < Vector.length; i++) {
        if (Vector[i] !== 0) {
            let listItem = document.createElement("li");
            switch (i) {
                case 0: listItem.innerHTML = `Capitolul 1: introducere in C++`; break;
                case 1: listItem.innerHTML = `Capitolul 3: operatori, operatii, expresii`; break;
                case 2: listItem.innerHTML = `Capitolul 4: instructiuni`; break;
                case 3: listItem.innerHTML = `Capitolul 5: structuri`;break;
                case 4: listItem.innerHTML = `Capitolul 6: subprograme`; break;
                case 5: listItem.innerHTML = `Capitolul 11: siruri de caractere`; break;
                case 6: listItem.innerHTML = `Capitolul 13: Programare orientata pe obiecte`; break;
                default: break;
            }
            chapterList.appendChild(listItem);
            
        }
    }
}

function showscore() {
    resetState();
    questionElement.innerHTML = `Ai raspuns corect la ${score_usor} intrebari usoare, ${score_mediu} intrebari medii si ${score_greu} intrebari grele! In total sunt cate 10 intrebari din fiecare nivel de dificultate. Poti lucra mai mult la urmatoarele capitole:`;
    showChapters();
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    ExplicationElement.innerHTML = "";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) showQuestion();
    else  showscore();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) handleNextButton();
    else startQuiz();
});

startQuiz();
