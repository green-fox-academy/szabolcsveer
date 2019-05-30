
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
const url = 'http://localhost:3000/books';


xhr.open('GET',url)
xhr.onload = function(){
  let data = JSON.parse(xhr.responseText);
  
  renderHTML(data);
}

xhr.send();

function renderHTML(data){
  let tableBody = document.querySelector("tbody");

  for(let i=0;i<data.length;i++){

  let createTr = document.createElement("tr");
  let titleTd = document.createElement('td');
  let authorTd = document.createElement('td');

  titleTd.textContent = data[i].book_name;
  authorTd.textContent = data[i].aut_name;
  
  createTr.appendChild(titleTd);
  createTr.appendChild(authorTd);
  tableBody.appendChild(createTr);
  
  }
    
}