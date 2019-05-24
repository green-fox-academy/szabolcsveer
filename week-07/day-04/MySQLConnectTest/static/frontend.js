
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
  for(let i=0;i<data.length;i++){
  let tableBody = document.querySelector("tbody");
  let createTr = document.createElement("tr");
  let createTrAuthor = document.createElement("tr");
  let td = document.createElement('td');
  let tdAuthor = document.createElement('td')
  td.textContent = data[i].aut_name;
  tdAuthor.textContent = data[i].book_name;
  createTr.appendChild(td);
  createTrAuthor.appendChild(tdAuthor);
  tableBody.appendChild(createTr);
  tableBody.appendChild(createTrAuthor);
  }
    
}