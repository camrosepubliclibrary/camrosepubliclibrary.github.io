
var questionOn = "q1";
var answersCorrect = 0;
var answersIncorrect = 0;
var questionAnswered = 0;

function questionChange(questionNum) {
    var questionName = document.getElementById("currentQuestionName");
    var questionAsked = document.getElementById("question");
    var questionAsked2= document.getElementById("newLink");
    var answerBar = document.getElementById("Answer")


    questionOn = questionNum;
    //============================================= ==============================================//
    if (questionNum == "q1") {
        questionName.textContent = "Question One";
        questionAsked2.textContent =
            "Smart Home Security Camera Conspires With Burglars In Exchange For Half The Loot";

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");


        // clearAnswerColor();

    }
    //============================================= ==============================================//
    if (questionNum == "q2") {
        // let questionNum = "Is it a fake news? \n 3 REASONS WHY YOU SHOULD STOP EATING PEANUT BUTTER " +
        //     "CUPS!";
        // let result = questionNum.link("https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/");
        // docment.getElementById("link").innerHTML = result;

        questionName.textContent = "Question Two ";
        questionAsked2.textContent = ("Read the following article and determine of it is real or fake: \n" +
            " 3 REASONS WHY YOU SHOULD STOP EATING PEANUT BUTTER " + "CUPS!");
        //"https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/"


        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        // let text = "Is it a fake news? \n 3 REASONS WHY YOU SHOULD STOP EATING PEANUT BUTTER \" +\n" +
        //     "             \"CUPS!\"";
        // let result = text.link("https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/")
        // document.getElementById("question").innerHTML = result;
        setAnswerVisibility(false, "A4")
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        enableAllButtons();
        showResponsePNG("hide");
        // answerBar.textContent = (" ");
        // enableImage(true);


    }

    //============================================= ==============================================//
    if (questionNum == "q3") {
        questionName.textContent = "Question Three";
        questionAsked2.textContent =
            "Read the following article and determine of it is real or fake:\n Gardening: A fun hobby that’s good for your health\n" +
        //     "Is the article real or fake";
        // let text = "Is it a fake news? \n Article Gardening: A fun hobby that’s good for your " +
        //     "health";
        // let result = text.link("https://www.thenationshealth.org/content/47/5/17/")
        // document.getElementById("question").innerHTML = result;
        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        enableAllButtons();
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");

        // clearAnswerColor();

    }
    if (questionNum == "q4") {
        questionName.textContent = "Question Four";
        questionAsked2.textContent =
            "Read the following article and determine of it is real or fake:\nThe Pacific Northwest Tree Octopus\n" +
            "Is the article real or fake";
        // let text = "Is it a fake news? The Pacific Northwest Tree Octopus\n ";
        // let result = text.link("https://zapatopi.net/treeoctopus/")
        // document.getElementById("question").innerHTML = result;

        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        enableAllButtons();
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";
        showResponsePNG("hide");

    }
    if (questionNum == "q5") {
        questionName.textContent = "Question Five";
        questionAsked2.textContent =
            "Read the following article and determine of it is real or fake:\nBaby octopuses grow hundreds of temporary " +
            "organs, then lose them without a trace";
        // let text = "Is it a fake news? Baby octopuses grow hundreds of temporary organs, then lose them without a trace\n ";
        // let result = text.link("https://www.livescience.com/hatchling-octopus-kollikers-organs-microscopy")
        // result
        // document.getElementById("question").innerHTML = result;
        setAnswerText("A1");
        setAnswerText("A2");
        setAnswerText("A3");
        setAnswerText("A4");
        enableAllButtons();
        setAnswerVisibility(false, "A4");
        setAnswerVisibility(false, "A3");
        setAnswerVisibility(false, "nextQuestion")
        answerBar.textContent="";

        showResponsePNG("hide");

    }


    }

    function setAnswerVisibility(visible, answerNum) {
        var answer = document.getElementById(answerNum);

        if (visible == false) {
            answer.textContent = "";
            answer.style.border = "none";
            answer.style.visibility = "hidden";
        }
        if (visible == true) {
            answer.style.border = "";
            answer.style.borderColor = "#A34B9D";
            answer.style.visibility = "visible";
        }
    }

    function showResponsePNG(symbol){
        if(symbol == "stopSign"){
            document.getElementById("imageOne").src="../src/stopSign.png"
            document.getElementById("imageOne").style.visibility="visible"
        }
        if(symbol == "smileyFace"){
            document.getElementById("imageOne").src="../src/smileFace.png"
            document.getElementById("imageOne").style.visibility="visible"
        }
        if(symbol == "hide"){
            document.getElementById("imageOne").src=""
            document.getElementById("imageOne").style.visibility="hidden";
        }
    }

    /**
     * @param {string} answerNum id of the answer button
     *
     */
    function setAnswerText(answerNum) {
        var answer = document.getElementById(answerNum);
        //============================================= Question One =============================================//
        if (questionOn == "q1") {
            if (answerNum == "A1") {
                answer.textContent = "It’s a real article"
            }
            if (answerNum == "A2") {
                answer.textContent = "It’s a fake article"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();
        }
        //============================================= Question Two =============================================//
        if (questionOn == "q2") {
            if (answerNum == "A1") {
                answer.textContent = "It’s a fake article"
            }
            if (answerNum == "A2") {
                answer.textContent = "It’s a real article"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();

        }
        if (questionOn == "q3") {
            if (answerNum == "A1") {
                answer.textContent = " It's a real article"
            }
            if (answerNum == "A2") {
                answer.textContent = " It’s a fake article"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();

        }
        if (questionOn == "q4") {
            if (answerNum == "A1") {
                answer.textContent = " It’s a fake article"
            }
            if (answerNum == "A2") {
                answer.textContent = " It's a real article"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();
        }
        if (questionOn == "q5") {
            if (answerNum == "A1") {
                answer.textContent = " It’s a real article"
            }
            if (answerNum == "A2") {
                answer.textContent = " It's a fake article"
            }
            if (answerNum == "A3") {
                answer.textContent = ""
            }
            if (answerNum == "A4") {
                answer.textContent = ""
            }
            clearAnswerColor();
        }


    }

    function showAnswer(answer, currentQuestion) {
        // var explainButton = document.getElementById("explain")
        var results = document.getElementById("result");
        var resultsButton = document.getElementById("resultsButton");
        var answerBar = document.getElementById("Answer")
        var nextButton = document.getElementById("nextQuestion")


        //============================================= Answer One =============================================//
        if (answer == 0) {
            if (currentQuestion == "q1") {
                answerBar.textContent = "This article is satire. It was made as a joke not to be taken seriously. " +
                    "With how quickly we can consume information these days, it’s important to make sure you’re " +
                    "not mistaking this joke media for real, trustworthy information.\n";
                setQuestionCorrect(false, "q1", "A1");
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                questionAnswered+=1;
                showResponsePNG("stopSign");
                disableOtherButton("A1");
                fillInProgressBar();

            }
            if (currentQuestion == "q2") {
                answerBar.textContent = "This article is made to be misleading. The biggest indicator is the sources" +
                    " included. If you had chose to dig deeper into the sources gives, you’d find that they don’t back " +
                    "up the claims of the article. This is another example of why you shouldn’t just take information at" +
                    " face value.\n"

                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q2", "A1");
                showResponsePNG("smileyFace");
                answersCorrect+=1;
                questionAnswered+=1;
                disableOtherButton("A1");
                fillInProgressBar();

            }
            if (currentQuestion == "q3") {
                answerBar.textContent = "The APHA is a real organization you can trust to get your information from. " +
                    "Looking at the website they have a corrections policy stating their dedication to publishing " +
                    "accurate information.\n";
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q3", "A1");
                showResponsePNG("smileyFace");
                answersCorrect+=1;
                questionAnswered+=1;
                disableOtherButton("A1");
                fillInProgressBar();
            }
            if (currentQuestion == "q4") {
                answerBar.textContent = "This site does a good job of looking real however, searching for this same" +
                    " information on other sites reveals that this was actually a satirical hoax on the internet." +
                    " Don’t trust the first website to be the most accurate.";

                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q4", "A1");
                showResponsePNG("smileyFace");
                answersCorrect+=1;
                questionAnswered+=1;
                disableOtherButton("A1");
                fillInProgressBar();
            }
            if (currentQuestion == "q5") {
                answerBar.textContent = "Live science is a credible news source. You can see the author’s credentials" +
                    " and cites credible sources like Spanish National Research Council "
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                setQuestionCorrect(true, "q5", "A1");
                showResponsePNG("smileyFace");
                answersCorrect+=1;
                questionAnswered+=1;
                disableOtherButton("A1");
                results.style.visibility = "visible";
                resultsButton.style.visibility="visible";
                fillInProgressBar();



            }
        }
        //============================================= Answer Two =============================================//
        if (answer == 1) {
            if (currentQuestion == "q1") {
                answerBar.textContent = "This article is satire. It was made as a joke not to be taken seriously. " +
                    "With how quickly we can consume information these days, it’s important to make sure you’re not " +
                    "mistaking this joke media for real, trustworthy information.\n";
                setQuestionCorrect(true, "q1", "A2");
                showResponsePNG("smileyFace");
                answersCorrect+=1;
                questionAnswered+=1;
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                disableOtherButton("A2");
                fillInProgressBar();
            }
            if (currentQuestion == "q2") {
                answerBar.textContent = "This article is made to be misleading. The biggest indicator is the sources" +
                    " included. If you had chose to dig deeper into the sources gives, you’d find that they don’t back " +
                    "up the claims of the article. This is another example of why you shouldn’t just take information at" +
                    " face value.\n";
                setQuestionCorrect(false, "q2", "A2");
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                questionAnswered+=1;
                showResponsePNG("stopSign");
                disableOtherButton("A2");
                fillInProgressBar();

            }
            if (currentQuestion == "q3") {
                answerBar.textContent = "The APHA is a real organization you can trust to get your information from. " +
                    "Looking at the website they have a corrections policy stating their dedication to publishing " +
                    "accurate information.\n";
                setQuestionCorrect(false, "q3", "A2");
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                questionAnswered+=1;
                showResponsePNG("stopSign");
                disableOtherButton("A2");
                fillInProgressBar();
            }
            if (currentQuestion == "q4") {
                answerBar.textContent = "This site does a good job of looking real however, searching for this same" +
                    " information on other sites reveals that this was actually a satirical hoax on the internet." +
                    " Don’t trust the first website to be the most accurate.";
                setQuestionCorrect(false, "q4", "A2")
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                questionAnswered+=1;
                showResponsePNG("stopSign");
                disableOtherButton("A2");
                fillInProgressBar();
            }
            if (currentQuestion == "q5") {
                answerBar.textContent = "Live science is a credible news source. You can see the author’s credentials " +
                    "and cites credible sources like Spanish National Research Council "
                setQuestionCorrect(false, "q5", "A2");
                nextButton.style.visibility = "visible";
                nextButton.textContent = "Next Question";
                nextButton.style.border = "";
                questionAnswered+=1;
                showResponsePNG("stopSign");
                disableOtherButton("A2");
                fillInProgressBar();
            }

        }

    }
function clearText(){
    var explanation = document.getElementById("Answer");
    explanation.textContent=""
}

    function nextQuestion() {

        if (questionAnswered == 1) {
            questionChange("q2");

        }
        if (questionAnswered == 2) {
            questionChange("q3");

        }
         if (questionAnswered == 3) {
            questionChange("q4");
        }
        if(questionAnswered == 4) {
            questionChange("q5");
        }
        //if(answersCorrect == 5){questionChange("q6"); clearText()}
        //if(answersCorrect == 6){questionChange("q7"); clearText()}
        //if(answersCorrect == 7){questionChange("q8"); clearText()}
        //if(answersCorrect ==){questionChange("q"); clearText()}

}
function newLink(questionID){
        if(questionID=="q1") {
            window.open("../src/QuizArticlePicture1.png", "Blank")
        }
    if(questionID=="q2") {
        window.open("https://www.davidwolfe.com/3-reasons-stop-eating-peanut-butter-cups/", "Blank")
    }
    if(questionID=="q3") {
        window.open("https://www.thenationshealth.org/content/47/5/17/", "Blank")
    }
    if(questionID=="q4") {
        window.open("https://zapatopi.net/treeoctopus/", "Blank")
    }
    if(questionID=="q5") {
        window.open("https://www.livescience.com/hatchling-octopus-kollikers-organs-microscopy", "Blank")
    }
}
function ifQuestionCorrect(){
        if(questionOn == "q1"){
            newLink("q1");
        }
        if(questionOn == "q2"){
            newLink("q2");
        }
    if(questionOn == "q3"){
        newLink("q3");
    }
    if(questionOn == "q4"){
        newLink("q4");
    }
    if(questionOn == "q5"){
        newLink("q5");
        }
}
function disableOtherButton(buttonSelected){
        answerOne = document.getElementById("A1");
        answerTwo = document.getElementById("A2");
        if(buttonSelected == "A1"){
            answerTwo.disabled = true;
        }
        if(buttonSelected == "A2"){
           answerOne.disabled = true;
        }
}
function enableAllButtons(){
    answerOne = document.getElementById("A1");
    answerTwo = document.getElementById("A2");
    answerOne.disabled = false;
    answerTwo.disabled = false;
}
function fillInProgressBar(){
        fillBar(1000/5)
}