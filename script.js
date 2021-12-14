const URL = "https://opentdb.com/api.php?amount=1&difficulty=easy&type=boolean";
// const $input = $('input');
const $button = $('button');
const $ul = $('ul');



// event listeners
$button.on('click', getTrivia);


// functions of game
function getTrivia() {
    $.ajax(URL).then(function(data) {
        render(data);
    }, function(err) {
        console.log(err);
    });
}

// function render(triviaData) {
//     const results = [];
//     for(let i = 0; i < triviaData.array.length; i ++) {
//         results.push(`<li>${triviaData.array[i].question}</li>
//         `);
//     }
//     $ul.html(results);
// }

        
 function render(triviaQuestion) {
    //  console.log(triviaQuestion)
     const html = triviaQuestion.results.map(function(trivia) {
         return `<li>${trivia.question}</li>`
     });
    

// function render(triviaAnswer) {
//     console.log(triviaAnswer)
//     const html = triviaAnswer.results.map(function(trivia) {
//         return `<li>${trivia.answer}</li>`
//     });


         $ul.html(html);
    }
