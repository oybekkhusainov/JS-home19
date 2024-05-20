const firstName = document.querySelector("#name");
const lastName = document.querySelector("#lastname");
const age = document.querySelector("#age");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector(".list");
const resetBtn = document.querySelector("#reset-btn");
const form = document.querySelector("#form")
const submitBtn = document.querySelector("#submit-btn");
const deleteBtn = document.querySelector("#deleteBtn");


const add = () => {
     form.style.display = "flex"
}
const reset = () => {
     form.style.display = "none"
}
function newObject(n,ln, a) {
     this.name = n;
     this.lastName = ln,
     this.age = a
}
const arr = JSON.parse(localStorage.getItem("Info")) || []
const createSubmit = (e) => {
     e.preventDefault();
     let resName = firstName.value;
     let resLastname = lastName.value;
     let resAge = age.value;

     let newArr = new newObject(resName, resLastname, resAge);
     localStorage.setItem("Info", JSON.stringify(newArr));
     
     list.innerHTML += `
     <div class="group">
     <span>Ismi: ${resName}</span>
     <span>Familiya: ${resLastname}</span>
     <span>Yoshi: ${resAge}</span>
     </div>
     `

     reset()
}

addBtn.addEventListener("click", add);
resetBtn.addEventListener("click", reset);
form.addEventListener("submit", createSubmit);