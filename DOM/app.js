// Query for Single Element

// Get Element By ID
let list= document.getElementById('list')

// QuerySelector
// Id, Class, Tag
list= document.querySelector('ul')


let input = document.querySelector('input')

//Selecting Multiple Elements

//TagName
let listEls= document.getElementsByTagName('li')
// console.log(listEls);

// QuerySelectorAll
// Id, Class and Tag
 listEls= document.querySelectorAll('li')
// console.log(listEls);


// GetElementsByClassName
listEls= document.getElementsByClassName('list')



let list1= document.getElementById("list")

//Parent - parentElement, parentNode, Closest
console.dir(list1.closest('div'));

//PreviousSiblings. previousElementSibling

console.log(list1.previousElementSibling);

//NextSiblings. NextElementSibling

console.log(list1.nextElementSibling);

//ChildNodes, Children, FirstChild, LastChild, firstElementChild, lastElementChild
let ul=document.querySelector('ul')

console.log(ul.childNodes);


//Styling
// - style prop
// -classList/ ClassName
// - Id

list1.classList.add('list', 'list1')



//Create ELement 
//HTMLS String

// setTimeout(()=>{
//     ul.innerHTML = ul.innerHTML + '<li> Golang </li> '
// }, 5000)
// Changing/ Affecting  Everyting

// Performance 

// InsertAdjacentElement
// setTimeout(()=>{
    
// }, 5000)

ul.insertAdjacentHTML('beforeend', '<li > Golang </li>' ) 
//Disadvantages
// 1. We can't easily access the new element
// Clean code 

//console.log(ul.lastElementChild);


//Create Element

const listitem= document.createElement('li')
listitem.classList.add('list', 'list1');
listitem.textContent='PHP'
list1.replaceWith(listitem)