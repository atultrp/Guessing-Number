// Generating Random Number
var randomNumber = Math.floor(Math.random() * 9 + 1);

// Number of Guesses
var guess = 1;

function changeImage() {
    // Changing the picture as per the correct Number 
    switch (randomNumber) {
        case 1:
            document.querySelector(".number-img").setAttribute("src", "images/number-1_1.jpg");
            break;
        case 2:
            document.querySelector(".number-img").setAttribute("src", "images/number-2_1.jpg");
            break;
        case 3:
            document.querySelector(".number-img").setAttribute("src", "images/number-3_1.jpg");
            break;
        case 4:
            document.querySelector(".number-img").setAttribute("src", "images/number-4_1.jpg");
            break;
        case 5:
            document.querySelector(".number-img").setAttribute("src", "images/number-5_1.jpg");
            break;
        case 6:
            document.querySelector(".number-img").setAttribute("src", "images/number-6_1.jpg");
            break;
        case 7:
            document.querySelector(".number-img").setAttribute("src", "images/number-7_1.jpg");
            break;
        case 8:
            document.querySelector(".number-img").setAttribute("src", "images/number-8_1.jpg");
            break;
        case 9:
            document.querySelector(".number-img").setAttribute("src", "images/number-9_1.jpg");
            break;

        default:
            break;
    }
}

document.getElementById("submit").onclick = function() {
    var x = document.getElementById("quantity").value; // Input Number

    if (x == randomNumber) {

        changeImage();
        document.querySelector("h2").innerHTML = "🏆️Congratulations!!! You are the Winner.🏆️";
        document.querySelector(".caption").innerHTML = "🤗️ To play one more time , please Refresh your page!! 🤗️";


    } else if (x > randomNumber) {

        document.querySelector(".caption").innerHTML = "🤗️ Number is Smaller than the Guessing Number! Please Try Again! Chance Left : " + (3 - guess) + " 🤗️";
        guess++;
        if (guess > 3) {
            changeImage();
            document.querySelector("h2").innerHTML = "😅️ Game Over!! 😅️";
            document.querySelector(".caption").innerHTML = "🤗️ To play one more time , please Refresh your page!! 🤗️";
        }
    } else {

        document.querySelector(".caption").innerHTML = "🤗️ Number is Greater than the Guessing Number! Please Try Again! Chance Left : " + (3 - guess) + " 🤗️";
        guess++;
        if (guess > 3) {
            changeImage();
            document.querySelector("h2").innerHTML = "😅️ Game Over!! 😅️";
            document.querySelector(".caption").innerHTML = "🤗️ To play one more time , please Refresh your page!! 🤗️";
        }

    }
}