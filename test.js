let library= [];
function AddBook(year, title, name){
    let id = library.length + 1
    newbook ={
        bookId: id,
        year: year,
        title: title,
        name:name,
    }

    library.push(newbook)

}

AddBook(2025, 'kristen', 'kay')
AddBook(2024, 'krst', 'kristen')
AddBook(2027, 'kren', 'john')
console.log(library)


// Update a book
 function updateBook(year){
for(i=0; i< library.length; i++){

    if(library[i].year !== year)(
        library[i].year = year
    )
}
 console.log(library)
 }

 updateBook(2020);


//  delete

function deleteBook(title) {
    for(i=0;i<library.length; i++){
        if(title === library[i].title){
            library.splice(i, 1);
        }
    }
}

deleteBook("kristen")
console.log(library)

// get a book


function Getbook(title){
    for(i=0; i < library.length; i++){
        if(title ===library[i].title){
            console.log(library[i])
        }
    }
        
}

Getbook('kren')

// view all books

function viewBook(){
   console.log(library)
}
viewBook()

let items = ["first", "Second", "Third"]
items.forEach((item) => {
    const newItem = document.createElement("li")
    newItem.innerText = item
    list.appendChild(newItem)
});