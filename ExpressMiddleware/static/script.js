console.log("client script Loaded. ");
//FOR PRODUCTS
async function fetchProducts() {
  //const response = await fetch("/products");
  let response = await fetch("http://localhost:3000/products");
  if (response.ok) {
    let products = await response.json();
    //let dataFromFile = await response.json();
    // console.log(dataFromFile);
    for(const product of products){
       let newLi = document.createElement("li");
       newLi.innerHTML = product.title;
       document.querySelector(".productList").append(newLi);
    }
  }
}

// fetchProducts();
window.addEventListener("DOMContentLoaded", fetchProducts);


//FOR COURSES
async function fetchCourses() {
  let response = await fetch("http://localhost:3000/courses");
  if (response.ok) {
    let courses = await response.json();
    for(const course of courses){
       let newLi = document.createElement("li");
       newLi.innerHTML = course.courseName;
       document.querySelector(".CourseList").append(newLi);
    }
  }
}
//fetchCourses
window.addEventListener("DOMContentLoaded", fetchCourses);


//sirs code:
// async function FetchProducts() {
//     let response = await fetch("http://localhost:3000/products");
//     if (response.ok) {
//       let products = await response.json();
  
//       for (const product of products) {
//         let newLi = document.createElement("li");
//         newLi.innerHTML = product.title;
//         document.querySelector(".productList").append(newLi);
//       }
//     }
//   }
  
//   window.addEventListener("DOMContentLoaded", FetchProducts);
  
