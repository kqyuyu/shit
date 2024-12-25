let modal = document.getElementById('full');
let img = document.getElementById('modal');

function show_modal(image) {
    modal.style.display = "block";
    document.getElementById("image").src = `${image}`;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}