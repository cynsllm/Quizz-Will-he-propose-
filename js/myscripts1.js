var quiz = function () {
    var score = 0;
    var ans1 = document.getElementsByName("ans-1");
    for (var i = 0; i < ans1.length; i++) {
        if (ans1[i].checked) {
            score = parseInt(ans1[i].value);
        }
    }

    var ans2 = document.getElementById("ans-2").value;
    if (ans2 == 1) {
        score = score + 10;
    } else if (ans2 == 2) {
        score = score + 100;
    } else if (ans2 == 3) {
        score = score + 1;
    } else if (ans2 == 4) {
        score = score + 1000;
    } else {
        alert("You must type an answer between 1 and 4 at question 2 !");
    }

    var ans3 = document.getElementById("ans-3").value;
    score = score + parseInt(ans3);

    var ans4 = document.getElementsByName("ans-4");
    for (var i = 0; i < ans4.length; i++) {
        if (ans4[i].checked) {
            score = score + parseInt(ans4[i].value);
        }
    }

    var ans5 = document.getElementsByName("img");
    for (var i = 0; i < ans5.length; i++) {
        if (ans5[i].src = "./images/diamond.jpg") {
            score = score + 1000;
        } else if (ans5[i].src = "./images/scarf.jpg") {
            score = score + 10;
        } else if (ans5[i].src = "./images/travel.jpg") {
            score = score + 100;
        } else if (ans5[i].src = "./images/lingerie.jpg") {
            score = score + 1;
        }
    }

    var finalScore = document.getElementById("form");
    document.getElementById("form").style.backgroundColor = "lightseagreen";
    document.getElementById("form").style.color = "white";
    document.getElementById("form").style.fontFamily = "cursive";
    document.getElementById("form").style.fontSize = "25px"
    document.getElementById("form").style.height = "200px";
    document.getElementById("form").style.marginTop = "250px";
    if (score >= 4000) {
        document.getElementById("form").innerHTML = "Your score is " + score + " !" + " Mazal Tov! He's probably going to propose you very soon. You are one of the most important thing to him. Why don't you look for a bridal dress ?";
    } else if ((score >= 3000) && (score < 4000)) {
        document.getElementById("form").innerHTML = "Your score is " + score + " !" + " We are almost there ! He's seriously thinking about it. However, He's still not ready. Just be patient and enjoy !";
    } else if ((score >= 2000) && (score < 3000)) {
        document.getElementById("form").innerHTML = "Your score is " + score + " !" + " This is not part of his plans... However, He likes you for sure ! You mean a lot to him. Maybe you should encourage him by revealing your deepest feelings...";
    } else if ((score >= 1000) && (score < 2000)) {
        document.getElementById("form").innerHTML = "Your score is " + score + " !" + " Sorry, He's probably not going to be your husband... You are living a beautiful story but this is not going to last forever... Maybe you shouldn't waste your time and look for someone else... Don't worry, you'll find the one !";
    } else { 
        document.getElementById("form").innerHTML = "Your score is " + score + " !" + " Don't even think about it ! You don't mean anything to him, you're just an enternainment when He gets bored. He doesn't deserve you. An advice, leave him !";
    }
    return finalScore; 
}




