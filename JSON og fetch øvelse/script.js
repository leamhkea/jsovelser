console.log("going");

window.addEventListener("DOMContentLoaded", init);

const teacherURI = "teachers.json";
// const teachersssssURI = "https://kea-alt-del.dk/t7/api/products";

let teacherList;
let teacherTemplate;

function init() {
  teacherList = document.querySelector("#teacher_list");
  console.log("teacherList", teacherList);

  teacherTemplate = document.querySelector("template").content;
  console.log("teacherTemplate", teacherTemplate);

  fetch(teacherURI)
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then(logJSON);
}

function logJSON(json) {
  console.log("json", json);
  json.forEach(showTeacher);
}

// function showTeacher(product) {
//   const clone = teacherTemplate.cloneNode(true);
//   clone.querySelector("h3").textContent = product.productdisplayname;
//   clone.querySelector("p").textContent = product.season;
//   teacherList.appendChild(clone);
// }

function showTeacher(teacher) {
  const clone = teacherTemplate.cloneNode(true);
  clone.querySelector("h3").textContent = teacher.name + " " + teacher.surname;
  clone.querySelector("p").textContent = teacher.topics[0];
  teacherList.appendChild(clone);
}
