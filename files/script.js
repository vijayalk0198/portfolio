/*=========Navbar Scroll===========*/
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("header");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) { // Adjust the value to your preference
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    });
});


/*========== scroll sections active link in navbar ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

/*========== Go top icon in left bottom ==========*/
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

/*========== Scroll Reveal script ==========*/
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.reveal');
    function checkScroll() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

/*========== Timeline Modals ==========*/
document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".custom-modal");
    const closeButtons = document.querySelectorAll(".close-button");

    // Open Modal based on Button Click
    window.openModal = (type) => {
        let modalId;
    
        switch (type) {
            case "education-be":
                modalId = "modal-be";
                break;
            case "experience-deloitte":
                modalId = "modal-deloitte";
                break;
            case "experience-rlp":
                modalId = "modal-rlp";
                break;
            case "education-msc":
                modalId = "modal-msc";
                break;
            default:
                console.error("Invalid modal type");
                return;
        }
    
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
        }
    };
    

    // Close Modal (on clicking 'Back' or outside)
    const closeModal = (modal) => {
        modal.style.display = "none";
    };

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) closeModal(modal);
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) closeModal(modal);
        });
    });
});
