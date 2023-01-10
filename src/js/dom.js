//  Part I
//  1. Get the main content container
let mainContent = document.getElementById("main");
console.log(mainContent);
//  2. Get first post title
let  firstPostTitle = document.querySelector(".post .entry-title a").innerText;
console.log(firstPostTitle);
//  3. Get first post content
let firstPostContent = document.querySelector(".post .entry-content").innerText;
console.log(firstPostContent);
//  4. Get all post titles
let allPostTitles = document.querySelectorAll(".post .entry-title");
for (let i = 0; i<allPostTitles.length;i++){
    console.log(allPostTitles[i].innerText);
}
//  5. Change the value for the first title
document.querySelector(".post .entry-title a").innerText = "Modificat";
//  6. Change the URL for the first title link
document.querySelector(".post .entry-title a").setAttribute("href", "#");
//  7. Change the background color for the body
document.body.style.setProperty("background-color","lightblue");
//  8. Add a new class to the articles then add styles
for (let element of document.querySelectorAll("article")){
    element.classList.add("myStyle");
    element.style.setProperty("background-color","cyan");
}


//  Part II
//  1.  Select the parent element for the first post title
let parentElement = document.querySelector(".post .entry-title").parentElement;
console.log(parentElement);
//  2.  Select the first post and log the siblings
for (element of document.querySelectorAll(".post")){
    console.log(element.nextElementSibling);
}
//  3.  Select the #main container and log the children
for (element of document.getElementById("main").children){
    console.log(element);
}
// Bonus Set the entry content with the current date and time and update it every x (as parameter) seconds

setInterval(function timeAndDate() {
    let today = new Date();
    let minute = "";
    let seconds = "";
    if (today.getMinutes()< 10){
        minute = "0"+today.getMinutes();
    }
    else {
        minute = today.getMinutes()
    }
    if (today.getSeconds()< 10){
        seconds = "0"+today.getSeconds();
    }
    else {
        seconds = today.getSeconds()
    }
    document.querySelector(".post .entry-content p").innerText = today.getHours()+":"+ minute+":"+seconds+" "+today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
},1000);