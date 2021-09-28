// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   let form = document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//    handleToDo(e.target['new-task-description'].value)
//   })

// });

// function handleToDo(todo){
//   let li = document.createElement('li')
//   li.textContent = todo
//   document.querySelector('#tasks').appendChild(li)
// }

document.addEventListener("DOMContentLoaded", () => {
  function handelFormSubmit(event) {
    event.preventDefault()
    
    
    let newToDoItem = event.target["new-task-description"].value
    const li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    li.textContent = newToDoItem
    li.append(btn)
    let ul = document.getElementById('tasks')
    ul.append(li)
    
    // event.target.reset()
    form.reset()
  }
 
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit',handelFormSubmit)
})

function handleDelete(e){
  e.target.parentNode.remove()
}