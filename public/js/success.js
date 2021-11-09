var queryString = decodeURIComponent(window.location.search); //parsing 
queryString = queryString.substring(1);

document.getElementById("score-text1").textContent="Test ID = "+queryString;
document.getElementById("heading").innerHTML=`<p style="font-size:2rem;margin:2rem;font-weight:600;">Test created Successfully</p>`;
document.getElementById("link").innerHTML=`<a style="font-size:1.7rem;margin-top:2rem;color:blue;" href="https://mcqs1.herokuapp.com/teststart.html?testid=${queryString}">Direct Link</a>`;
