// navbar active scroll heading -------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Select all the main sections
    const navLinks = document.querySelectorAll('.nav-link'); // Select all the navbar links
  
    window.addEventListener('scroll', () => {
      let currentScroll = window.scrollY;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Allow some offset for smoothness
        const sectionHeight = section.offsetHeight;
        const linkId = `#${section.id}`;
        const link = document.querySelector(`.nav-link[href="${linkId}"]`);
  
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          // Highlight the link when the section is in view
          link.classList.add('active');
        } else {
          // Otherwise, remove the active state
          link.classList.remove('active');
        }
      });
    });
  });
// -------------------------------------------------------------------
// // hide the content when scrolling
// document.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('section'); // Select all sections

//   window.addEventListener('scroll', () => {
//       let currentScroll = window.scrollY; // Get the current scroll position

//       sections.forEach((section) => {
//           const sectionTop = section.offsetTop; // Get the top offset of the section
//           const sectionHeight = section.offsetHeight; // Get the height of the section
//           const sectionContent = section.querySelector('.container'); // Get the content container inside the section
          
//           // Check if the section is halfway scrolled into the viewport
//           if (currentScroll >= sectionTop + sectionHeight / 4) {
//               sectionContent.style.opacity = "0"; // Hide content
//           } else {
//               sectionContent.style.opacity = "1"; // Show content
//           }
//       });
//   });
// });
// ------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  const body = document.body; // Reference to the body element

  // Add a 'loading' class to the body to disable scrolling
  body.classList.add('loading');

  // Set a timeout to hide the loader after 3 seconds
  setTimeout(() => {
      loader.style.display = 'none'; // Hide the loader
      body.classList.remove('loading'); // Re-enable scrolling
  }, 3000); // 3000 milliseconds = 3 seconds
});

// ----------------------------------------------------------------





  