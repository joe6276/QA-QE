let form = document.querySelector('form');
let errorParagraph = document.querySelector(".error-message");
let backdrop = document.querySelector('#backdrop');
const addBtn = document.querySelector('#addbtn');
const taskModal = document.querySelector('#task-modal');
const cancelBtn = document.getElementById('cancel-btn');
const taskList = document.querySelector(".task-list");
const filter = document.querySelector('#filter');
let tasks = [];
backdrop.addEventListener('click', ()=>{
    showModal = true;
});
const openModal = ()=>{
    backdrop.classList.remove('hidden');
    taskModal.setAttribute('open', true);
};
// Function to hide the modal
const closeModal = ()=>{
    backdrop.classList.add('hidden');
    taskModal.removeAttribute('open');
};
function getTask(mytask = tasks) {
    let html = '';
    if (mytask.length == 0) html = "<p> No tasks Found !! </p>";
    mytask.forEach((task)=>{
        html += `
         <li class='task'>
                <span class='task-category'>${task.category}</span>
                <div>
                  <h2>${task.title}</h2>
                  <p>${task.summary}</p>
                </div>
              </li>
        `;
    });
    taskList.innerHTML = html;
}
getTask();
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let text = document.querySelector('#title');
    let summary = document.querySelector('#summary');
    let category = document.querySelector('#category');
    let task = {
        Id: Math.ceil(Math.random() * 1223),
        title: text.value,
        summary: summary.value,
        category: category.value
    };
    tasks.push(task);
    getTask(tasks);
    closeModal();
});
addBtn.addEventListener('click', openModal);
backdrop.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);
taskModal.addEventListener('click', (event)=>{
    event.stopPropagation();
});
filter.addEventListener('change', ()=>{
    let filteredTask = [];
    if (filter.value === 'all') filteredTask = tasks;
    else filteredTask = tasks.filter((x)=>x.category === filter.value);
    getTask(filteredTask);
}) /// Cypress - a test automation tool & framework 
 // End to End testing - Testing Flows i.e user authentication, user-checkout flow
 // Component testing 
 // install - npm install cypress
 // Run npx cypress open
;

//# sourceMappingURL=index.7c0ccee6.js.map
