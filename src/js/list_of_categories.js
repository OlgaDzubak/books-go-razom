import { booksAPI } from "./booksAPI";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const categoryListBox = document.querySelector(".category-list-box");
//const categoryNames = document.querySelectorAll(".category-list-item");
//const URL = 'https://books-backend.p.goit.global/books/category-list';
const booksApi = new booksAPI();
getCategories();
console.log("Конец list_of_categories.js");



async function getCategories(){
    try {
        const response = await booksApi.getCategoryList();  
        console.log("response = ",response);
        if (response.data === 0){ return Notify.failure("Sorry, there are no book with that ID");  }
        categoryListBox.innerHTML = createCategoryList(response.data);
    }catch(error) {                           
        console.log(error);
    }
}

// Формування списку категорій
function createCategoryList(data) {
    console.log("data=",data);
    let categoryListHTML = `<h3 id="category-list-title" class="category-list-item">All categories</h3>`;
    data.forEach(category => {
        const categoryLink = `<p id="${category.list_name}" class="category-list-item">${category.list_name}</p>`;
        categoryListHTML += categoryLink;
    });
    return categoryListHTML;
};



// // Зміни стилів у списку під час вибору категорії (для світлої і темної тем дизайну)
// categoryListBox.addEventListener("click", choosingCategory);
// function choosingCategory(event) {
//     if (localStorage.getItem('theme') === 'dark') {
//         categoryNames.forEach(name => {
//             name.style.color = "rgba(255, 255, 255, 0.6)";
//             name.style.fontWeight = 400;
//             name.style.textTransform = "lowercase";
//             name.style.textTransform = "capitalize";
//         });
//         event.target.style.color = "#EAC645";
//         event.target.style.fontWeight = 700;
//         event.target.style.textTransform = "uppercase";
//     } else {
//         categoryNames.forEach(name => {
//             name.style.color = "rgba(17, 17, 17, 0.6)";
//             name.style.fontWeight = 400;
//             name.style.textTransform = "lowercase";
//             name.style.textTransform = "capitalize";
//         });
//         event.target.style.color = "#4F2EE8";
//         event.target.style.fontWeight = 700;
//         event.target.style.textTransform = "uppercase";
//     }
// }
