document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showBookingModal() {
    alert('Booking system coming soon! Contact us at book@neoterra.com');
}
document.querySelector('.btn').addEventListener('click', showBookingModal);
