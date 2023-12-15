const form = document.querySelector("#subscribe__form");

const modal = document.querySelector("#subscribe__modal");

const backdrop = document.querySelector("#subscribe__backdrop");

const modal__button = document.querySelector("#subscribe__modal-button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var subscribe__email = document.getElementById("subscribe__email").value;

    var subscribe = `New subscriber with email <b>${subscribe__email}</b>`;

    var token = "6591028497:AAGaulRisnKvkJ83zzbOulufzOFhFcszB9Q";
    var chat_id = -1001931345680;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${subscribe}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Subscribe successfully sended!");
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
