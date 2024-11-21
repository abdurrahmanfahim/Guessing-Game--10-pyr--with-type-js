const container = document.querySelector(".container");
const gameBoard = document.querySelector(".game-board");
const game = document.querySelector(".game");
const guessInput = document.querySelector(".guess-input");
const submitBtn = document.querySelector(".submit-btn");
const chances = document.querySelector(".chances");
const resultScreen = document.querySelector(".result-screen");
const congra = document.querySelector(".result-screen h1");
const was = document.querySelector(".was");
const instructions = document.querySelector(".instructions");

// counter
const countSpan2 = document.querySelector(".count2");
const countSpan3 = document.querySelector(".count3");
const countSpan4 = document.querySelector(".count4");
const countSpan5 = document.querySelector(".count5");
const countSpan6 = document.querySelector(".count6");
const countSpan7 = document.querySelector(".count7");
const countSpan8 = document.querySelector(".count8");
const countSpan9 = document.querySelector(".count9");
const countSpan10 = document.querySelector(".count10");

// annouses
const annous1 = document.querySelector(".annous1");
const annous2 = document.querySelector(".annous2");
const annous3 = document.querySelector(".annous3");
const annous4 = document.querySelector(".annous4");
const annous5 = document.querySelector(".annous5");
const annous6 = document.querySelector(".annous6");
const annous7 = document.querySelector(".annous7");
const annous8 = document.querySelector(".annous8");
const annous9 = document.querySelector(".annous9");
const annous10 = document.querySelector(".annous10");

// chances
const chance2 = document.querySelector("#chances-player2");
const chance3 = document.querySelector("#chances-player3");
const chance4 = document.querySelector("#chances-player4");
const chance5 = document.querySelector("#chances-player5");
const chance6 = document.querySelector("#chances-player6");
const chance7 = document.querySelector("#chances-player7");
const chance8 = document.querySelector("#chances-player8");
const chance9 = document.querySelector("#chances-player9");
const chance10 = document.querySelector("#chances-player10");

// errors
const error1 = document.querySelector("#error-player1");
const error2 = document.querySelector("#error-player2");
const error3 = document.querySelector("#error-player3");
const error4 = document.querySelector("#error-player4");
const error5 = document.querySelector("#error-player5");
const error6 = document.querySelector("#error-player6");
const error7 = document.querySelector("#error-player7");
const error8 = document.querySelector("#error-player8");
const error9 = document.querySelector("#error-player9");
const error10 = document.querySelector("#error-player10");

// players
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const player3 = document.querySelector("#player3");
const player4 = document.querySelector("#player4");
const player5 = document.querySelector("#player5");
const player6 = document.querySelector("#player6");
const player7 = document.querySelector("#player7");
const player8 = document.querySelector("#player8");
const player9 = document.querySelector("#player9");
const player10 = document.querySelector("#player10");

// inputs
const input1 = document.querySelector("#input-player1");
const input2 = document.querySelector("#input-player2");
const input3 = document.querySelector("#input-player3");
const input4 = document.querySelector("#input-player4");
const input5 = document.querySelector("#input-player5");
const input6 = document.querySelector("#input-player6");
const input7 = document.querySelector("#input-player7");
const input8 = document.querySelector("#input-player8");
const input9 = document.querySelector("#input-player9");
const input10 = document.querySelector("#input-player10");

// buttons
const btn1 = document.querySelector("#submit-player1");
const btn2 = document.querySelector("#submit-player2");
const btn3 = document.querySelector("#submit-player3");
const btn4 = document.querySelector("#submit-player4");
const btn5 = document.querySelector("#submit-player5");
const btn6 = document.querySelector("#submit-player6");
const btn7 = document.querySelector("#submit-player7");
const btn8 = document.querySelector("#submit-player8");
const btn9 = document.querySelector("#submit-player9");
const btn10 = document.querySelector("#submit-player10");

// check
const check = document.querySelector("#check-winner");

// pCounts 

const pCount1 = document.querySelector(".pCount1");
const pCount2 = document.querySelector(".pCount2");
const pCount3 = document.querySelector(".pCount3");
const pCount4 = document.querySelector(".pCount4");
const pCount5 = document.querySelector(".pCount5");
const pCount6 = document.querySelector(".pCount6");
const pCount7 = document.querySelector(".pCount7");
const pCount8 = document.querySelector(".pCount8");
const pCount9 = document.querySelector(".pCount9");
const pCount10 = document.querySelector(".pCount10");


let val1;
let val2;
let val3;
let val4;
let val5;
let val6;
let val7;
let val8;
let val9;
let val10;

let val1Stored;
let val2Stored;
let val3Stored;
let val4Stored;
let val5Stored;
let val6Stored;
let val7Stored;
let val8Stored;
let val9Stored;
let val10Stored;

let stop1;
let stop2;
let stop3;
let stop4;
let stop5;
let stop6;
let stop7;
let stop8;
let stop9;
let stop10;

let count = 3;

    stop1 = setInterval(()=> {
        counterjs("pl1");
    }, 1000)

btn1.addEventListener("click", () => {
    inpChk("p1");
    input1.value = "";
});

btn2.addEventListener("click", () => {
    inpChk("p2");
    input2.value = "";
});

btn3.addEventListener("click", () => {
    inpChk("p3");
    input3.value = "";
});

btn4.addEventListener("click", () => {
    inpChk("p4");
    input4.value = "";
});

btn5.addEventListener("click", () => {
    inpChk("p5");
    input5.value = "";
});

btn6.addEventListener("click", () => {
    inpChk("p6");
    input6.value = "";
});

btn7.addEventListener("click", () => {
    inpChk("p7");
    input7.value = "";
});

btn8.addEventListener("click", () => {
    inpChk("p8");
    input8.value = "";
});

btn9.addEventListener("click", () => {
    inpChk("p9");
    input9.value = "";
});

btn10.addEventListener("click", () => {
    inpChk("p10");
    input10.value = "";
});

function inpChk(val) {

    if (val == "p1") {
        
        val1 = input1.value;

        if (val1 > 9) {

            error1.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val1)) {

            val1Stored = val1;
            error1.innerHTML = "";
            player1.style.display = "none";
            player2.style.display = "block";
            console.log(val1Stored);
            
            stop2 = setInterval(()=> {
                counterjs("pl2");
            }, 1000)
            
        }
        else
        {

            error1.innerHTML = "you must enter a number here.";
            
        }

    }
    else 
    if (val == "p2") {

        val2 = input2.value;

        if (val2 > 9) {

            error2.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val2)) {

            // val2Stored = val2;
            error2.innerHTML = "";
            chanceChk("p2");       
            
        }
        else
        {

            error2.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p3") {

        val3 = input3.value;

        if (val3 > 9) {

            error3.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val3)) {

            error3.innerHTML = "";
            chanceChk("p3");     
            
        }
        else
        {

            error3.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p4") {

        val4 = input4.value;

        if (val4 > 9) {

            error4.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val4)) {

            error4.innerHTML = "";
            chanceChk("p4");            
            
        }
        else
        {

            error4.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p5") {

        val5 = input5.value;

        if (val5 > 9) {

            error5.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val5)) {

            error5.innerHTML = "";
            chanceChk("p5");          
            
        }
        else
        {

            error5.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p6") {

        val6 = input6.value;

        if (val6 > 9) {

            error6.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val6)) {

            error6.innerHTML = "";
            chanceChk("p6");           
            
        }
        else
        {

            error6.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p7") {

        val7 = input7.value;

        if (val7 > 9) {

            error7.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val7)) {

            error7.innerHTML = "";
            chanceChk("p7");          
            
        }
        else
        {

            error7.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p8") {

        val8 = input8.value;

        if (val8 > 9) {

            error8.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val8)) {

            error8.innerHTML = "";
            chanceChk("p8");   
            
        }
        else
        {

            error8.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p9") {

        val9 = input9.value;

        if (val9 > 9) {

            error9.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val9)) {

            error9.innerHTML = "";
            chanceChk("p9");         
            
        }
        else
        {

            error9.innerHTML = "you must enter a number here.";
            
        }
    }
    else 
    if (val == "p10") {

        val10 = input10.value;

        if (val10 > 9) {

            error10.innerHTML = "you must enter a number here between 1-9.";
            
        }
        else
        if (Number(val10)) {

            error10.innerHTML = "";
            chanceChk("p10");           
            
        }
        else
        {

            error10.innerHTML = "you must enter a number here.";
            
        }
    }
}


function chanceChk(chances) {

    if (chances == "p2") {

        if (val2 == val1Stored) {

            val2Stored = val2;
            console.log(val2Stored); 
            player2.style.display = "none";
            player3.style.display = "block";

            
            stop3 = setInterval(()=> {
                counterjs("pl3");
            }, 800)
            
            
        } else if (val2 != val1) {
            
            if (count == 1) {
                
                val2Stored = val2;  
                player2.style.display = "none";
                player3.style.display = "block";
                console.log(val2Stored);  
                count = 3;

                stop3 = setInterval(()=> {
                    counterjs("pl3");
                }, 800)
            
            }
            else {

                count--;
                countSpan2.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p3") {

        if (val3 == val1Stored) {

            val3Stored = val3;
            console.log(val3Stored); 
            player3.style.display = "none";
            player4.style.display = "block";

            stop4 = setInterval(()=> {
                counterjs("pl4");
            }, 700)
            
        } else if (val3 != val1) {
            
            if (count == 1) {
                
                val3Stored = val3;  
                player3.style.display = "none";
                player4.style.display = "block";
                console.log(val3Stored);  
                count = 3;

                stop4 = setInterval(()=> {
                    counterjs("pl4");
                }, 700)
            
            }
            else {

                count--;
                countSpan3.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p4") {

        if (val4 == val1Stored) {

            val4Stored = val4;
            console.log(val4Stored); 
            player4.style.display = "none";
            player5.style.display = "block";

            stop5 = setInterval(()=> {
                counterjs("pl5");
            }, 600)
            
        } else if (val4 != val1) {
            
            if (count == 1) {
                
                val4Stored = val4;  
                player4.style.display = "none";
                player5.style.display = "block";
                console.log(val4Stored);  
                count = 3;

                stop5 = setInterval(()=> {
                    counterjs("pl5");
                }, 600)
            
            }
            else {

                count--;
                countSpan4.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p5") {

        if (val5 == val1Stored) {

            val5Stored = val5;
            console.log(val5Stored); 
            player5.style.display = "none";
            player6.style.display = "block";

            stop6 = setInterval(()=> {
                counterjs("pl6");
            }, 500)
            
        } else if (val5 != val1) {
            
            if (count == 1) {
                
                val5Stored = val5;  
                player5.style.display = "none";
                player6.style.display = "block";
                console.log(val5Stored);  
                count = 3;

                stop6 = setInterval(()=> {
                    counterjs("pl6");
                }, 500)
            
            }
            else {

                count--;
                countSpan5.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p6") {

        if (val6 == val1Stored) {

            val6Stored = val6;
            console.log(val6Stored); 
            player6.style.display = "none";
            player7.style.display = "block";

            stop7 = setInterval(()=> {
                counterjs("pl7");
            }, 400)
            
        } else if (val6 != val1) {
            
            if (count == 1) {
                
                val6Stored = val6;  
                player6.style.display = "none";
                player7.style.display = "block";
                console.log(val6Stored);  
                count = 3;

                stop7 = setInterval(()=> {
                    counterjs("pl7");
                }, 400)
            
            }
            else {

                count--;
                countSpan6.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p7") {

        if (val7 == val1Stored) {

            val7Stored = val7;
            console.log(val7Stored); 
            player7.style.display = "none";
            player8.style.display = "block";

            stop8 = setInterval(()=> {
                counterjs("pl8");
            }, 300)
            
        } else if (val7 != val1) {
            
            if (count == 1) {
                
                val7Stored = val7;  
                player7.style.display = "none";
                player8.style.display = "block";
                console.log(val7Stored);  
                count = 3;

                stop8 = setInterval(()=> {
                    counterjs("pl8");
                }, 300)
            
            }
            else {

                count--;
                countSpan7.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p8") {

        if (val8 == val1Stored) {

            val8Stored = val8;
            console.log(val8Stored); 
            player8.style.display = "none";
            player9.style.display = "block";

            stop9 = setInterval(()=> {
                counterjs("pl9");
            }, 200)
            
        } else if (val8 != val1) {
            
            if (count == 1) {
                
                val8Stored = val8;  
                player8.style.display = "none";
                player9.style.display = "block";
                console.log(val8Stored);  
                count = 3;

                stop9 = setInterval(()=> {
                    counterjs("pl9");
                }, 200)
            
            }
            else {

                count--;
                countSpan8.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p9") {

        if (val9 == val1Stored) {

            val9Stored = val9;
            console.log(val9Stored); 
            player9.style.display = "none";
            player10.style.display = "block";

            stop10 = setInterval(()=> {
                counterjs("pl10");
            }, 100)
            
        } else if (val9 != val1) {
            
            if (count == 1) {
                
                val9Stored = val9;  
                player9.style.display = "none";
                player10.style.display = "block";
                console.log(val9Stored);  
                count = 3;

                stop10 = setInterval(()=> {
                    counterjs("pl10");
                }, 100)
            
            }
            else {

                count--;
                countSpan9.innerHTML = count;
            
            }
            
        }

    }
    else
    if (chances == "p10") {

        if (val10 == val1Stored) {

            val10Stored = val10;
            console.log(val10Stored); 
            player10.style.display = "none";
            game.style.display = "none";
            resultScreen.style.display = "block";
            resultChk();
            
        } else if (val10 != val1) {
            
            if (count == 1) {
                
                val10Stored = val10;
                console.log(val10Stored);  
                player10.style.display = "none";
                game.style.display = "none";
                resultScreen.style.display = "block";
                val10Stored = val10;  
                count = 3;
                resultChk();
                
            }
            else {

                count--;
                countSpan10.innerHTML = count;
            
            }
            
        }

    }

} ;


function resultChk() {

    was.innerHTML = val1Stored;
    container.style.background = "transparent"


    if (val2Stored == val1Stored) {
        annous2.innerHTML = "🏆 Player 2 Wins! 🏆";
    }
    else {
        annous2.innerHTML = "😒 Player 2 Looses! 😒";
    }
    if (val3Stored == val1Stored) {
        annous3.innerHTML = "🏆 Player 3 Wins! 🏆";
    }
    else {
        annous3.innerHTML = "😒 Player 3 Looses! 😒";
    }
    if (val4Stored == val1Stored) {
        annous4.innerHTML = "🏆 Player 4 Wins! 🏆";
    }
    else {
        annous4.innerHTML = "😒 Player 4 Looses! 😒";
    }
    if (val5Stored == val1Stored) {
        annous5.innerHTML = "🏆 Player 5 Wins! 🏆";
    }
    else {
        annous5.innerHTML = "😒 Player 5 Looses! 😒";
    }
    if (val6Stored == val1Stored) {
        annous6.innerHTML = "🏆 Player 6 Wins! 🏆";
    }
    else {
        annous6.innerHTML = "😒 Player 6 Looses! 😒";
    }
    if (val7Stored == val1Stored) {
        annous7.innerHTML = "🏆 Player 7 Wins! 🏆";
    }
    else {
        annous7.innerHTML = "😒 Player 7 Looses! 😒";
    }
    if (val8Stored == val1Stored) {
        annous8.innerHTML = "🏆 Player 8 Wins! 🏆";
    }
    else {
        annous8.innerHTML = "😒 Player 8 Looses! 😒";
    }
    if (val9Stored == val1Stored) {
        annous9.innerHTML = "🏆 Player 9 Wins! 🏆";
    }
    else {
        annous9.innerHTML = "😒 Player 9 Looses! 😒";
    }
    if (val10Stored == val1Stored) {
        annous10.innerHTML = "🏆 Player 10 Wins! 🏆";
    }
    else {
        annous10.innerHTML = "😒 Player 10 Looses! 😒";
    }
    if (
        val2Stored == val1Stored || val3Stored == val1Stored || 
        val9Stored == val1Stored || val4Stored == val1Stored || 
        val5Stored == val1Stored || val6Stored == val1Stored ||
        val7Stored == val1Stored || val8Stored == val1Stored || 
                     val10Stored == val1Stored 
    ) {

        annous1.innerHTML = "😒 Player 1 Looses! 😒";
        congra.innerHTML = "🎉 Congratulations! 🎉";

    }
    else {

        annous1.innerHTML = "🏆 Player 1 Wins! 🏆";
        congra.innerHTML = "😒 Try Again! 😒";

    }

}



let playerCount1 = pCount1.innerHTML;
pCount1.innerHTML = "";

let playerCount2 = pCount2.innerHTML;
pCount2.innerHTML = "";

let playerCount3 = pCount3.innerHTML;
pCount3.innerHTML = "";

let playerCount4 = pCount4.innerHTML;
pCount4.innerHTML = "";

let playerCount5 = pCount5.innerHTML;
pCount5.innerHTML = "";

let playerCount6 = pCount6.innerHTML;
pCount6.innerHTML = "";

let playerCount7 = pCount7.innerHTML;
pCount7.innerHTML = "";

let playerCount8 = pCount8.innerHTML;
pCount8.innerHTML = "";

let playerCount9 = pCount9.innerHTML;
pCount9.innerHTML = "";

let playerCount10 = pCount10.innerHTML;
pCount10.innerHTML = "";


let startCount1 = 0;
let startCount2 = 0;
let startCount3 = 0;
let startCount4 = 0;
let startCount5 = 0;
let startCount6 = 0;
let startCount7 = 0;
let startCount8 = 0;
let startCount9 = 0;
let startCount10 = 0;

function counterjs (condition) {

    if (condition == "pl1") {
        startCount1++;
        // console.log(startCount1);
            pCount1.innerHTML = startCount1;
    
        if (startCount1 == playerCount1) {
            clearInterval(stop1);
        }
    } else 
    if (condition == "pl2") {
        startCount2++;
        // console.log(startCount2);
        console.log(playerCount2);
            
        pCount2.innerHTML = startCount2;
        
        if (startCount2 == playerCount2) {
            clearInterval(stop2);
        }
    }
    else
    if (condition == "pl3") {
        startCount3++;
        // console.log(startCount3);
            
        pCount3.innerHTML = startCount3;
        
        if (startCount3 == playerCount3) {
            clearInterval(stop3);
        }
    }
    else
    if (condition == "pl4") {
        startCount4++;
        // console.log(startCount4);
            
        pCount4.innerHTML = startCount4;
        
        if (startCount4 == playerCount4) {
            clearInterval(stop4);
        }
    }
    else
    if (condition == "pl5") {
        startCount5++;
        // console.log(startCount5);
            
        pCount5.innerHTML = startCount5;
        
        if (startCount5 == playerCount5) {
            clearInterval(stop5);
        }
    }
    else
    if (condition == "pl6") {
        startCount6++;
        // console.log(startCount6);
            
        pCount6.innerHTML = startCount6;
        
        if (startCount6 == playerCount6) {
            clearInterval(stop6);
        }
    }
    else
    if (condition == "pl7") {
        startCount7++;
        // console.log(startCount7);
            
        pCount7.innerHTML = startCount7;
        
        if (startCount7 == playerCount7) {
            clearInterval(stop7);
        }
    }
    else
    if (condition == "pl8") {
        startCount8++;
        // console.log(startCount8);
            
        pCount8.innerHTML = startCount8;
        
        if (startCount8 == playerCount8) {
            clearInterval(stop8);
        }
    }
    else
    if (condition == "pl9") {
        startCount9++;
        // console.log(startCount9);
            
        pCount9.innerHTML = startCount9;
        
        if (startCount9 == playerCount9) {
            clearInterval(stop9);
        }
    }
    else
    if (condition == "pl10") {
        startCount10++;
        // console.log(startCount10);
            
        pCount10.innerHTML = startCount10;
        
        if (startCount10 == playerCount10) {
            clearInterval(stop10);
        }
    }
    
}


// type js start


let animatedTxt = instructions.innerHTML; 
instructions.innerHTML = "";

let counter = -1;

function typejs ()  {

    counter++;
    instructions.innerHTML += animatedTxt.charAt(counter);
    if (counter == animatedTxt.length) {
        counter = -1;
        instructions.innerHTML = "";
    }
    
}


setInterval(() => {
    typejs()
}, 150)




// function animateCounter() {
//     let step = 1; // ধাপ শুরু
//     let totalSteps = 10; // সর্বমোট ধাপ

//     function nextStep() {
//         if (step > totalSteps) return; // সব ধাপ সম্পন্ন হলে থেমে যাবে

//         let delay = 1000 / step; // প্রতিটি সংখ্যার জন্য সময়
//         let count = 0;

//         let interval = setInterval(() => {
//             counterjs(`pl${step}`, count); // প্রতি ধাপে সংখ্যা প্রিন্ট করবে
//             count++;
//             if (count > step) { // ধাপের সংখ্যা পূর্ণ হলে থেমে যাবে
//                 clearInterval(interval);
//                 step++; // পরবর্তী ধাপে যাবে
//                 nextStep(); // পরবর্তী ধাপ শুরু
//             }
//         }, delay); // প্রতিটি সংখ্যার জন্য নির্ধারিত সময়
//     }

//     nextStep(); // প্রথম ধাপ শুরু
// }
// animateCounter();

// function counterjs(id, number) {
//     // এই ফাংশনে সংখ্যা প্রিন্টিং বা DOM ম্যানিপুলেশন করবে
//     document.getElementById(id).innerHTML += `${number} `;
// }












