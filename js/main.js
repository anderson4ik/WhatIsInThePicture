/*
Game - "What is in the picture?"
*/
'use strict';

var gQuests;
var gCurrQuestIdx;
var isAnswer;

function initGame() {
    // debugger
    gCurrQuestIdx = 1;
    isAnswer = false;
    gQuests = createQuests();
    renderQuest(gQuests);
}

function createQuests() {
    gQuests = [
        { id: 1, opts: ['The cap is fat.', 'The cat is fat.'], correctOptIndex: 1 },
        { id: 2, opts: ['He is a bat.', 'He is a van.'], correctOptIndex: 0 },
        { id: 3, opts: ['The rat is on the pan.', 'The rat is on the cat.'], correctOptIndex: 1 },
        { id: 4, opts: ['Max is a rat.', 'Max is a cat.'], correctOptIndex: 1 },
        { id: 5, opts: ['The cat is in the cap.', 'The rat is in the cap.'], correctOptIndex: 1 }
    ];
    console.table(gQuests);
    return gQuests;
}





function renderQuest() {
    // debugger
    var elImage = document.getElementById(gCurrQuestIdx);
    if (isAnswer) {
        elImage.classList.add('hidden');
        gCurrQuestIdx++;

        if (gCurrQuestIdx === 6) {
            // debugger
            elImage.classList.remove('hidden');
            var elResult = document.getElementById('sc1');
            elResult.classList.remove('hidden');
            var elScore = document.getElementById('sc');
            elScore.innerHTML = (gCurrQuestIdx - 1) * 10;
            var elRestart = document.getElementById("b3");
            elRestart.classList.remove('hidden');

            return;

        }
    } else if (!isAnswer) {
        

    }

    // debugger
    elImage = document.getElementById(gCurrQuestIdx);
    elImage.classList.remove('hidden');
    var elButton1 = document.getElementById('b0');
    var elButton2 = document.getElementById('b1');
    elButton1.innerHTML = gQuests[gCurrQuestIdx - 1].opts[0];
    elButton2.innerHTML = gQuests[gCurrQuestIdx - 1].opts[1];

}







function checkAnswer(optIdx) {
    isAnswer = false;
    debugger

    var answers = [];
    for (var i = 0; i < gQuests.length; i++) {
        answers[i] = gQuests[i].correctOptIndex;
    }
    var indx = +(optIdx.substr(1, 1));

    switch (gCurrQuestIdx) {
        case 1:
            if (gQuests[gCurrQuestIdx - 1].correctOptIndex === indx) isAnswer = true;
            break;
        case 2:
            if (gQuests[gCurrQuestIdx - 1].correctOptIndex === indx) isAnswer = true;
            break;
        case 3:
            if (gQuests[gCurrQuestIdx - 1].correctOptIndex === indx) isAnswer = true;
            break;
        case 4:
            if (gQuests[gCurrQuestIdx - 1].correctOptIndex === indx) isAnswer = true;
            break;
        case 5:
            if (gQuests[gCurrQuestIdx - 1].correctOptIndex === indx) isAnswer = true;
            break;
    }
    renderQuest();

    // console.log(answers);
    // console.log(optIdx);
    // console.log(indx);
    // console.log(isAnswer);

    return isAnswer;
}

function restart() {
    var elImage = document.getElementById("5");
    elImage.classList.add('hidden');
    var elRestart = document.getElementById("b3");
    elRestart.classList.add('hidden');
    var elResult = document.getElementById('sc1');
    elResult.classList.add('hidden');

    initGame();

}
