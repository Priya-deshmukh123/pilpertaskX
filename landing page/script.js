document.addEventListener('DOMContentLoaded', () => {
    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop default form submission

            const formData = new FormData(this);
            const data = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                mobileNumber: formData.get('mobileNumber'),
                city: formData.get('city')
            };

            console.log('Contact Form Data to be sent to backend:', data);
            
            // NOTE: In a real application, you would use:
            // fetch('/api/contacts', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // }).then(response => { /* handle success/error */ });

            alert('Contact form submitted successfully! (Data logged to console)');
            this.reset();
        });
    }

    // --- Newsletter Form Submission ---
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const email = formData.get('subscribeEmail');

            console.log('Newsletter Email to be sent to backend:', { email: email });

            // NOTE: In a real application, you would use:
            // fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email: email })
            // }).then(response => { /* handle success/error */ });

            alert(`Thank you for subscribing, ${email}!`);
            this.reset();
        });
    }

    // --- Admin Panel Navigation (Basic Scroll) ---
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.href.includes('admin.html#')) {
                event.preventDefault();
                const targetId = this.getAttribute('href').split('#')[1];
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});