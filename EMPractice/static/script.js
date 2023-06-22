console.log("client script Loaded. ");

async function fetchCourses() {
  let response = await fetch("http://localhost:3000/courses");
  if (response.ok) {
    let courses = await response.json();
    for (const course of courses) {
      let newLi = document.createElement("li");
      newLi.innerHTML = course.courseName;
      document.querySelector(".CourseList").append(newLi);
    }
  }
}
async function AddNewCourse(e) {
  // console.log("add product called");
  e.preventDefault(); // does not refrest the page - prevents reload.
  let newCourse = {
    id: document.querySelector("#course-id").value,
    courseName: document.querySelector("#course-name").value,
  };
  //send data to /courses/newcourses
  //this is specifically for sending data to server. posting in REACT is the same as this.
  let response = await fetch("http://localhost:3000/courses/newcourse", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCourse),
  });
  if (response.ok) {
    let message = await response.json();
    console.log(message);
  }
}


window.addEventListener("DOMContentLoaded", fetchCourses);



