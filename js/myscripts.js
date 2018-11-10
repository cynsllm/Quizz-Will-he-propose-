// Variables definitions
var score = 0;
var finalScore = 0;

// Independant function to get the answer of question 5
var scoreQuest5 = 0;
var diamond = document.getElementById("diamond");
var scarf = document.getElementById("scarf");
var travel = document.getElementById("travel");
var lingerie = document.getElementById("lingerie");
var ans5 = function () {
    var x = event.target;
    if (x.id === "diamond") {
        scoreQuest5 = 1000;
    } else if (x.id === "scarf") {
        scoreQuest5 = 10;
    } else if (x.id === "travel") {
        scoreQuest5 = 100;
    } else if (x.id === "lingerie") {
        scoreQuest5 = 1;
    }
}
diamond.addEventListener("click", ans5);
scarf.addEventListener("click", ans5);
travel.addEventListener("click", ans5);
lingerie.addEventListener("click", ans5);

// Big function to get the answers of quest 1 to 4 and submits the result
var quiz = function () {
    // Question 1
    var ans1 = document.getElementsByName("ans-1");
    for (var i = 0; i < ans1.length; i++) {
        if (ans1[i].checked) {
            score = parseInt(ans1[i].value);
        }
    }
    // Question 2
    var ans2 = parseInt(document.getElementById("ans-2").value);
    if (ans2 == 1) {
        score = score + 10;
    } else if (ans2 == 2) {
        score = score + 1000;
    } else if (ans2 == 3) {
        score = score + 1;
    } else if (ans2 == 4) {
        score = score + 100;
    } else {
        alert("You must type an answer between 1 and 4 at question 2 !");
    }
    // Question 3
    var ans3 = document.getElementById("ans-3").value;
    score = score + parseInt(ans3);
    // Question 4
    var ans4 = document.getElementsByName("ans-4");
    for (var i = 0; i < ans4.length; i++) {
        if (ans4[i].checked) {
            score = score + parseInt(ans4[i].value);
        }
    }
    // Result
    finalScore = score + scoreQuest5;
    var result = document.getElementById("form");
    document.getElementById("form").style.backgroundColor = "lightseagreen";
    document.getElementById("form").style.color = "white";
    document.getElementById("form").style.fontFamily = "cursive";
    document.getElementById("form").style.fontSize = "25px"
    document.getElementById("form").style.height = "200px";
    document.getElementById("form").style.marginTop = "250px";
    if (finalScore >= 4000) {
        document.getElementById("form").innerHTML = "Your score is " + finalScore + " !" + " Mazal Tov! He's probably going to propose you very soon. You are one of the most important thing to him. Why don't you look for a bridal dress ?";
    } else if ((finalScore >= 3000) && (finalScore < 4000)) {
        document.getElementById("form").innerHTML = "Your score is " + finalScore + " !" + " We are almost there ! He's seriously thinking about it. However, He's still not ready. Just be patient and enjoy !";
    } else if ((finalScore >= 2000) && (finalScore < 3000)) {
        document.getElementById("form").innerHTML = "Your score is " + finalScore + " !" + " This is not part of his plans... However, He likes you for sure ! You mean a lot to him. Maybe you should encourage him by revealing your deepest feelings...";
    } else if ((finalScore >= 1000) && (finalScore < 2000)) {
        document.getElementById("form").innerHTML = "Your score is " + finalScore + " !" + " Sorry, He's probably not going to be your husband... You are living a beautiful story but this is not going to last forever... Maybe you shouldn't waste your time and look for someone else... Don't worry, you'll find the one !";
    } else {
        document.getElementById("form").innerHTML = "Your score is " + sfinalSore + " !" + " Don't even think about it ! You don't mean anything to him, you're just an enternainment when He gets bored. He doesn't deserve you. An advice, leave him !";
    }
    return result;
}




