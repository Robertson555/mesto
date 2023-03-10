const popup = document.querySelector ('.popup');
const buttonEditOpen = document.querySelector ('.profile__button_act_edit');
const buttonClose = document.querySelector ('.popup__button_act_exit');
const getName = document.querySelector ('.profile__name');
const getJob = document.querySelector ('.profile__discription');
const editForm = document.querySelector ('.popup__form');
let nameInput = editForm.querySelector ('.popup__input_type_name');
let jobInput =  editForm.querySelector ('.popup__input_type_job');

function openPopup () {
  popup.classList.add ('popup_opened');
  nameInput.value = getName.textContent;
  jobInput.value = getJob.textContent;
}

function closePopup ()  {
popup.classList.remove ('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    getName.textContent = `${nameInput.value}`;
    getJob.textContent = `${jobInput.value}`;
    closePopup ();
}

buttonEditOpen.addEventListener ('click', openPopup);
buttonClose.addEventListener ('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);