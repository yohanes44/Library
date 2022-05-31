let addBook = document.querySelector("h3");
let body = document.querySelector(".body");
let formInject = document.querySelector(".formInject");
let bookInject = document.querySelector(".bookInject");

addBook.addEventListener("click", addNewBook);//for display

let formContainer = document.createElement("form");
formContainer.classList.add("formContainer");
let headerForm = document.createElement("h2");
headerForm.innerHTML = "Add new book";

let inputTitle = document.createElement("input");
inputTitle.placeholder ="Title";


let brTitle = document.createElement("br");

let inputAuthor = document.createElement("input");
inputAuthor.placeholder ="Author";


let brAuthor = document.createElement("br");

let inputPage = document.createElement("input");
inputPage.placeholder ="Page";
inputPage.type = "number";
let brPage = document.createElement("br");

let spanCheckbox = document.createElement("span");
spanCheckbox.innerHTML = "Have you read it?";
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
let brCheckbox = document.createElement("br");

let inputAdd = document.createElement("button");
inputAdd.innerHTML = "Add";
inputAdd.classList.add("btnAdd");


function addNewBook(){
   
 
    //formContainer.appendChild(spanTitle);
    formContainer.appendChild(headerForm);
    inputTitle.setAttribute("required", "");
    inputTitle.attributes.required = true;
    formContainer.appendChild(inputTitle);
    formContainer.appendChild(brTitle);

    //formContainer.appendChild(spanAuthor);
    formContainer.appendChild(inputAuthor);
    formContainer.appendChild(brAuthor);

   // formContainer.appendChild(spanPage);
    formContainer.appendChild(inputPage);
    formContainer.appendChild(brPage);
    
   

    formContainer.appendChild(spanCheckbox);
    formContainer.appendChild(checkbox);
    formContainer.appendChild(brCheckbox);

    formContainer.appendChild(inputAdd);
    

    formInject.appendChild(formContainer);

   
}

inputAdd.addEventListener("click", callAddBookToLibrary);

// function removeForm(){
//     body.removeChild(formContainer);
// }
//btn.addEventListener("click", callAddBookToLibrary);

function callAddBookToLibrary(){
    formInject.removeChild(formContainer);
    addBookToLibrary(inputAuthor.value, inputTitle.value, inputPage.value, checkbox);
}






function Book(author, title, pageNum, read){
    this.author = author,
    this.title = title,
    this.pageNum = pageNum,
    this.isThisRead = function(){
        if(read.checked){
           return true;
        }
        else{
            return false;
        }
    }

}

let myLibrary = [];


function addBookToLibrary(authorName, bookTitle, pageNumber, isRead){
    newBook = new Book(authorName, bookTitle, pageNumber, isRead);   
     myLibrary.push(newBook);
     let divForBook = document.createElement("div");
     divForBook.classList.add("divBook");
     let bTitle = document.createElement("h3");
     let bAutor = document.createElement("h3");
     let bPage = document.createElement("h3");
     let edit = document.createElement("input")
      edit.type = "checkbox";
      edit.id = "c1";
      edit.value = isRead;
      edit.checked = isRead;
     
    let readYes = document.createElement("button");
     if(newBook.isThisRead()){
        readYes.style.background = "green";
        readYes.innerHTML = "Read";
        
     }
     else if(!newBook.isThisRead()){
        readYes.innerHTML = "Not Read";
            readYes.style.background = "red";
            readYes.innerHTML = "Not Read";
     }

     function colorChanger(){
         if(readYes.innerHTML == "Read"){
        readYes.style.background = "red";
        readYes.innerHTML = "Not Read";
         }
         else if(readYes.innerHTML == "Not Read"){
          readYes.style.background = "green";
          readYes.innerHTML = "Read";
         }
     }

     readYes.addEventListener("click", colorChanger);

      let findObjByTitle = myLibrary.find((zBook) => ((zBook.title == newBook.title) && (zBook.author == newBook.author)));
      let findObjIndex = myLibrary.findIndex((zBook) => zBook.title == findObjByTitle.title);

      bTitle.innerHTML = findObjByTitle.title;
      bAutor.innerHTML = findObjByTitle.author;
      bPage.innerHTML =  findObjByTitle.pageNum;
      console.log(findObjByTitle.title)
      
     divForBook.appendChild(bTitle);
     divForBook.appendChild(bAutor);
     divForBook.appendChild(bPage);
     //divForBook.append(checkboxNew);
     divForBook.append(readYes);

     bookInject.appendChild(divForBook);    
     let deleteBook = document.createElement("button");
     deleteBook.innerHTML = "Remove";
     deleteBook.style.background = "pink";
     divForBook.append(deleteBook); 
     deleteBook.addEventListener("click", function(){
      
         myLibrary.splice(findObjIndex, 1);
         bookInject.removeChild(divForBook);
     })
     console.log(myLibrary);
}



      