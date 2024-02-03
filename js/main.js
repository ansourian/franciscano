$(document).ready(function () {
    $("#menuToggle").click(function () {
        $("#navbarNav").toggleClass("show");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbarPaddingTopVW = 0.09; // Ajusta este valor según tus necesidades
    const navbarHeight = navbarPaddingTopVW * window.innerWidth; // Calcula la altura del navbar en px

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del enlace
            const targetElement = document.getElementById(targetId); // Obtiene el elemento con el ID correspondiente

            if (targetElement) {
                const targetPosition = targetElement.offsetTop - navbarHeight; // Calcula la posición del elemento objetivo con compensación de altura del navbar
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                // Si el enlace no lleva a una sección interna, redirige a la página indicada en el href
                window.location.href = this.getAttribute('href');
            }
        });
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 }
 
 function checkSections() {
    const sections = document.querySelectorAll('.fade-section');
 
    sections.forEach((section) => {
       const isVisible = isElementInViewport(section);
 
       if (isVisible) {
          section.classList.add('visible');
       }
    });
 }
 
 function getScrollThreshold() {
   // Ajusta los porcentajes según tus necesidades
   if (window.innerWidth < 768) { // Mobile
      return 0.95; // Porcentaje de pantalla requerido para mobile
   } else if (window.innerWidth < 1024) { // Tablet
      return 0.95; // Porcentaje de pantalla requerido para tablet
   } else { // Desktop
      return 0.90; // Porcentaje de pantalla requerido para desktop
   }
}

document.addEventListener('DOMContentLoaded', function () {
   const navbarPaddingTopVW = 0.5; // Ajusta este valor según tus necesidades
   const navbarHeight = navbarPaddingTopVW * window.innerWidth; // Calcula la altura del navbar en px

   function checkSectionsWithThreshold(threshold) {
      const sections = document.querySelectorAll('.fade-section');

      sections.forEach((section) => {
         const rect = section.getBoundingClientRect();
         const isVisible = (rect.top <= window.innerHeight * threshold);

         if (isVisible) {
            section.classList.add('visible');
         } else {
            section.classList.remove('visible');
         }
      });
   }

   function checkSections() {
      const scrollThreshold = getScrollThreshold();
      checkSectionsWithThreshold(scrollThreshold);
   }

   checkSections(); // Para comprobar las secciones al cargar la página

   window.addEventListener('scroll', checkSections);

   window.addEventListener('scroll', function() {
      const scrollThreshold = getScrollThreshold();
      checkSectionsWithThreshold(scrollThreshold);
   });
});