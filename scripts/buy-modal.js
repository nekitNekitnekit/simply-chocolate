const form = document.querySelector("#buy__form");

const modal = document.querySelector("#buy__modal");

const backdrop = document.querySelector("#buy__backdrop");

const modal__button = document.querySelector("#buy__modal-button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var order__name = document.getElementById("order__name").value;
    var order__surname = document.getElementById("order__surname").value;
    var order__weight = document.getElementById("order__weight").value;
    var weight = document.querySelector('input[name="order__weight"]:checked').value;
    var order__email = document.getElementById("order__email").value;
    var order__phone = document.getElementById("order__phone").value;
    var order__card = document.getElementById("order__card").value;
    var order__comment = document.getElementById("order__comment").value;

    var order = `New order from user <b>${order__name} ${order__surname}</b>: <i><u>${weight} g of chocolate</u></i>%0A<b>Email</b>: ${order__email}%0A<b>Phone</b>: +380 ${order__phone}%0A<b>Card</b>: ${order__card}%0A<b>Comment</b>: ${order__comment}`;

    var token = "6503264767:AAFTM0kQSe3ZqZF6pykV9JBx1Jdp6522SJM";
    var chat_id = -1001931345680;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${order}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Order successfully sended!");
    toggleModal();
    form.reset();

});

function disableScroll() {
    document.body.style.setProperty('overflow', 'hidden', 'important');
}

function enableScroll() {
    document.body.style.removeProperty('overflow');
}

function openModal() {
    modal.classList.add('is-visible');
    disableScroll(); 
  }
  
  function closeModal() {
    modal.classList.remove('is-visible');
    enableScroll();
  }
  
  function toggleModal() {
    document.body.classList.toggle('modal-open');
    modal.classList.toggle('is-visible');
    backdrop.classList.toggle('is-hidden');





    openthanksModal();
  }






const thanks__modal = document.querySelector("#thanks__modal");
const thanks__backdrop = document.querySelector("#thanks__modal-backdrop");
const closeBtn = document.querySelector('#thanks__form-submit');
closeBtn.addEventListener('click', () => {
    closethanksModal();
});

function openthanksModal() {
    thanks__modal.classList.add('is-visible');
    thanks__backdrop.classList.remove('is-hidden');
    disableScroll(); 
  }

  function closethanksModal() {
    thanks__modal.classList.remove('is-visible');
    thanks__backdrop.classList.add('is-hidden');
    enableScroll();
  }

  function togglethanksModal() {
    document.body.classList.toggle('modal-open');
    thanks__modal.classList.toggle('is-visible');
    thanks__backdrop.classList.toggle('is-hidden');
}