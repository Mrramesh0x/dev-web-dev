const taskBox = document.getElementById("task-box")
// console.log(taskBox.value)
const saveButton = document.getElementById("save-btn")
// console.log(saveButton)
const taskHeading = document.getElementById("task")
// console.log(taskHeading.innerText)
const saveTasks = () => {
    // console.log(taskBox.value)
    taskHeading.innerText = taskBox.value
}
saveButton.addEventListener("click",saveTasks)

const students = [
    {name:"dev",class:"8"},
{name:"deva",class:"9"},
{name:"daksh",class:"8"},
{name:"devansh",class:"10"},
{name:"rahul",class:"11"}
]

// const dev = students.filter((student)=>student.name=== "dev")
// const rahul = students.filter((student)=>student.name === "rahul")
// console.log(dev)
// console.log(rahul)
console.log(students.length)
