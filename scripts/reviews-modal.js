const form = document.querySelector("#reviews__form");

const modal = document.querySelector("#reviews__modal");

const backdrop = document.querySelector("#reviews__backdrop");

const modal__button = document.querySelector("#reviews__modal-button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var reviews__name = document.getElementById("reviews__name").value;
    var reviews__email = document.getElementById("reviews__email").value;
    var reviews__phone = document.getElementById("reviews__phone").value;
    var reviews__comment = document.getElementById("reviews__comment").value;

    var review = `New review from user <b>${reviews__name}</b>: %0A"<i>${reviews__comment}</i>"%0A<b>Email</b>: ${reviews__email}%0A<b>Phone</b>: +380 ${reviews__phone}`;

    var token = "6712279008:AAHgY0BOx1NsaKZQRsgV39uE81yzy_Vd8r8";
    var chat_id = -1001931345680;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${review}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Review successfully sended!");
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