const username = document.getElementById("username");
const cardId = document.getElementById("id-card");
const email = document.getElementById("email");
const male = document.getElementById("male");
const female = document.getElementById("female");
const phone = document.getElementById("phone");
const birthday = document.getElementById("birthday");
const luggage = document.getElementById("luggage");
const payment = document.getElementById("payment");

const formData = {
  username,
  cardId,
  email,
  male,
  female,
  phone,
  birthday,
  luggage,
  payment,
};

function ticketBooking() {
  const errorMes = document.querySelectorAll(".error-mes");

  if (errorMes.length > 0) {
    for (let i = 0; i < errorMes.length; i++) {
      errorMes[i].remove();
    }
  }

  for (let item in formData) {
    addErrorMessage(formData[item]);
  }
}

function addErrorMessage(eleHtml) {
  if (!eleHtml.value) {
    const errorHtml = `<div style="background:red; margin: 2px; padding:2px; color:#FFF" class="error-mes">Lỗi</div>`;
    eleHtml.insertAdjacentHTML("afterend", errorHtml);
    eleHtml.style.border = "1px solid red";
  }
}
