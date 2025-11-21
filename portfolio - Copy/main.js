var typed = new Typed (".text", {
    strings: ['Full Stack Developer','UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000, 
    loop: true
});

  emailjs.init("bJ4U-TCwGco7NvJQR"); // Public Key

  const form = document.getElementById("contact-form");
  const msgStatus = document.getElementById("msg-status");

  form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.send("service_a3essd3", "template_v3xugn3", {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value
      })
      .then(() => {
          msgStatus.textContent = "Message sent successfully!";
          msgStatus.style.color = "#0ef";
          form.reset();
      })
      .catch((err) => {
          msgStatus.textContent = "Failed to send message. Try again!";
          msgStatus.style.color = "red";
          console.error("Error:", err);
      });
  });

   // 1. Get Elements by ID
    const menuIcon = document.getElementById('menu-icon');
    const navBar = document.getElementById('navbar');

    // 2. Get All Navigation Links inside the navbar
    // This allows us to listen for clicks on any link
    const navLinks = navBar.querySelectorAll('a');

    // 3. Logic for ICON CLICK (Toggle Open/Close)
    menuIcon.addEventListener('click', () => {
        // Toggles the 'active' class on the navbar
        navBar.classList.toggle('active');
    });

    // 4. Logic for LINK CLICK (Auto-Close Menu)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // When any link is clicked, remove the 'active' class
            // This immediately closes the menu.
            navBar.classList.remove('active');
        });
    });

    // 👇 NEW: Handle the Download CV link to open the Drive URL
    // New block to handle simultaneous download and new tab view
const downloadCvLink = document.getElementById('download-cv-link');
// Use the original 'view' link for the new tab
const driveViewLink = "https://drive.google.com/file/d/1hIAleMUDRNtKMuz6EnEEuDcrdX9nQWxv/view?usp=drive_link";

if (downloadCvLink) {
    downloadCvLink.addEventListener('click', () => {
        // 1. Open the file in a new tab (using the view link)
        window.open(driveViewLink, '_blank');
        
        // 2. The direct file download is already triggered by the link's href attribute.
        // We let the default action of the link happen after the new tab opens.
    });
}
    // 👆 NEW
