window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Change 100 to the scroll position where you want to trigger the change
        navbar.classList.add('scrolled'); // Add the class to change CSS
    } else {
        navbar.classList.remove('scrolled'); // Remove the class if not scrolled past certain position
    }
});

const navbarLinks = document.querySelectorAll('.navbar ul li');

    // Tambahkan event listener untuk setiap tautan
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tautan
            navbarLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Tambahkan kelas 'active' ke tautan yang diklik
            link.classList.add('active');
        });
    });

    const navbarLinks1 = document.querySelectorAll('.navbar ul li a');

    // Tambahkan event listener untuk setiap tautan
    navbarLinks1.forEach(link => {
        link.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tautan
            navbarLinks1.forEach(link => {
                link.classList.remove('active');
            });

            // Tambahkan kelas 'active' ke tautan yang diklik
            link.classList.add('active');
        });
    });