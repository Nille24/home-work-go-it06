// const form = document.querySelector(".login-form");
// const useremail = document.querySelector('[type="email"]');
// const password = document.querySelector('[type="password"]');
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const elements = {
//     email: useremail.value,
//     pass: password.value
//   }
//   if (useremail.value === '' || password.value === '') {
//     return alert('Все поля должны быть заполнены!')
//   }
//   console.log(elements);
//   form.reset();
// });


const form = document.querySelector(".login-form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const {
    elements: { email, password },
  } = evt.currentTarget;
 

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Будь ласка, заповніть всі поля");
  };

  const formObj = {
    email: email.value,
    password: password.value
    };

  console.log(formObj);

  evt.target.reset();
});