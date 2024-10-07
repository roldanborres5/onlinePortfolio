// Showing Resume
const showModalButton = document.getElementById('showModal');
const modalOverlay = document.getElementById('myModal');
const expandedImage = document.getElementById('expandedImage');

const imageUrl = 'assets/images/resume.jpg';

showModalButton.addEventListener('click', () => {
    expandedImage.src = imageUrl;
    modalOverlay.style.display = 'flex';
});

// Close the modal when clicking outside of it
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});