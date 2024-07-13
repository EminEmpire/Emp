    document.addEventListener('DOMContentLoaded', function() {
        const accordionHeaders = document.querySelectorAll('.custom-accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const currentlyActiveHeader = document.querySelector('.custom-accordion-header.active');
                if (currentlyActiveHeader && currentlyActiveHeader !== header) {
                    currentlyActiveHeader.classList.remove('active');
                    currentlyActiveHeader.nextElementSibling.style.maxHeight = '0';
                    currentlyActiveHeader.nextElementSibling.style.padding = '0 1rem';
                }

                header.classList.toggle('active');
                const body = header.nextElementSibling;
                if (header.classList.contains('active')) {
                    body.style.maxHeight = body.scrollHeight + 'px';
                    body.style.padding = '1rem';
                } else {
                    body.style.maxHeight = '0';
                    body.style.padding = '0 1rem';
                }
            });

            // Ensure all accordions start closed
            const body = header.nextElementSibling;
            body.style.maxHeight = '0';
            body.style.padding = '0 1rem';
        });
    });