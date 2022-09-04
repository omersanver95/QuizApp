(() => {
    const quizData = [{
            question: "Kestane balının diyarı neresidir?",
            images: "https://www.nuriyehala.com/wp-content/uploads/2020/05/kestane-bal%C4%B1.png",
            a: "Ankara",
            b: "Bursa",
            c: "Artvin",
            d: "Zonguldak",
            correct: "d",
        },
        {
            question: "Türkiyenin tarihi dokusu değiştirilmemiş merkezi neresidir?",
            images: "https://64.media.tumblr.com/706403a3e4d087e0d349394f5e9723f6/tumblr_pe19eoQ38j1ujmvy2o1_1280.jpg",
            a: "Ankara",
            b: "Yozgat",
            c: "Konya",
            d: "Sivas",
            correct: "b",
        },
        {
            question: "Sahasında kupa kaldırılan takım hangisidir?",
            images: "https://cdnuploads.aa.com.tr/uploads/PhotoGallery/2012/05/13/thumbs_b2_5aa4a8377a596e113596ba843f3a3e93.jpg",
            a: "Galatasaray",
            b: "Fenerbahçe",
            c: "Beşiktaş",
            d: "Trabzonspor",
            correct: "b",
        },
        {
            question: "4 litre pırıl kaç paradır?",
            images: "https://pbs.twimg.com/ext_tw_video_thumb/1142043391775203329/pu/img/gnnETsSVNs_a-Znp.jpg",
            a: "10 ₺",
            b: "21,90 ₺",
            c: "45 ₺",
            d: "Ben hep 2 litre alıyorum",
            correct: "b",
        },
    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");

    const img = document.getElementById("img");

    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswers();

        const currentQuizData = quizData[currentQuiz];

        questionEl.innerText = currentQuizData.question;

        img.src = currentQuizData.images;


        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }

    function getSelected() {
        let answer = undefined;

        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });

        return answer;
    }

    function deselectAnswers() {
        answerEls.forEach((answerEl) => {
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {
        // check to see the answer
        const answer = getSelected();

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }

            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                <h2>Sorulara verdiğin dorğu cevap ${score}/${quizData.length} dir.</h2>
                
                <button onclick="location.reload()">Tekrar yarış</button>
            `;
            }
        }
    });
})()