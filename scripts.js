function openModal(plato) {
    var modal = document.getElementById('modal-' + plato);
    modal.style.display = "block";
}

function closeModal(plato) {
    var modal = document.getElementById('modal-' + plato);
    modal.style.display = "none";
}



window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
