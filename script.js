
console.log("Vehicle Masters Website Loaded");

const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const bookingClose = document.getElementById('bookingClose');
const bookButton = document.querySelector('.book-btn');

function toggleModal(show) {
    bookingModal.classList.toggle('hidden', !show);
}

bookButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleModal(true);
});

bookingClose.addEventListener('click', () => {
    toggleModal(false);
});

bookingModal.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        toggleModal(false);
    }
});

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('customerName').value.trim();
    const carNumber = document.getElementById('carNumber').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const issue = document.getElementById('carIssue').value.trim();

    if (!name || !carNumber || !address || !issue) {
        alert('Please fill in all fields before sending your booking request.');
        return;
    }

    const message = `Hello Vehicle Masters,\nName: ${name}\nCar Number: ${carNumber}\nAddress: ${address}\nIssue: ${issue}`;
    const phoneNumber = '917006128344';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
    toggleModal(false);
    bookingForm.reset();
});
