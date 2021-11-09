document.getElementById("submit-button").onclick = function (event) {
    let value1 = document.getElementById('number_of_question_pool').value;
    let value2 = document.getElementById('number_of_que_user').value;
    let value4 = document.getElementById('time_limit').value;
    let value3='id' + (new Date()).getTime();

    event.preventDefault();
    console.log("hola");
    
var queryString = "?id=" + value3 + "&u" + value2+"&q"+value1+"&t"+value4;
    location.href = "/addquestionloop.html"+queryString;
};