const URL = "https://opentdb.com/api.php?amount=1&type=boolean";
const $button = $('button');
const $ul = $('ul');

$button.on('click', getTrivia);

function getTrivia() {
    $.ajax(URL).then(function(results) {
     render(results);
    }, function(err) {
        console.log(err);
    });
    }
    function render(triviaData) {
                const results = [];
                console.log(results)
                for (let i = 0; i < triviaData.results.length; i++) {
                    results.push(`<li>${triviaData.results[i].question}</li>
                    `);
                }
                $ul.html(results);
    }
        





















// $button.on('click', getTrivia);

// function getTrivia() {
//     $.ajax(URL).then(function(results) {
//      render(results);
//     }, function(err) {
//         console.log(err);
//     });
//     }
//     function render(triviaData) {
//         const results = [];
//         console.log(results)
//         for (let i = 0; i < triviaData.results.length; i++) {
//             results.push(`<li>${triviaData.results[i].question}</li>
//             `);
//         }
//         $ul.html(results);
//     }























