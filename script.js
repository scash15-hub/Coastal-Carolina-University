function openPopup(popupId) {

    document.getElementById(popupId).style.display = "flex";

}

function closePopup(popupId) {

    document.getElementById(popupId).style.display = "none";

}

function submitForm(event) {

    event.preventDefault();

    alert("Thank you for contacting Coastal Carolina!");

}