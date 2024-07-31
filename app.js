const spans = document.querySelectorAll('.show');
const answers = document.querySelectorAll('.ans');
const questions = document.querySelectorAll('.complete-ques');
const ques = document.querySelectorAll('.ques')

for(let i =0; i<spans.length; i++){

    spans[i].addEventListener('click', function(){
        answers[i].classList.toggle('hidden');
        spans[i].innerHTML = spans[i].innerHTML === "-" ? "+" : "-" ;
    });

}

// for(let i =0; i<questions.length; i++){

//     questions[i].addEventListener('click', function(){
//         answers[i].classList.toggle('hidden');
//         spans[i].innerHTML = spans[i].innerHTML === "-" ? "+" : "-";
//     });    

// }