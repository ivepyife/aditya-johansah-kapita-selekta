document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Library AOS (Animate on Scroll)
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // Efek Mengetik (Typed.js)
  const typingElement = document.getElementById("typing-effect");
  if (typingElement) {
    new Typed("#typing-effect", {
      strings: [
        "Aditya Johansah",
        "a Future Software Engineer",
        "a Tech Enthusiast",
      ],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      smartBackspace: true,
    });
  }

  // Tombol "Kembali ke Atas" (Back to Top)
  const backToTopButton = document.getElementById("btn-back-to-top");

  // Fungsi Smooth Scrolling untuk Navigasi
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle.classList.contains("show")) {
        bsCollapse.toggle();
      }
    });
  });

  // BARU: Fungsi untuk Scroll Progress Bar
  const scrollProgressBar = document.getElementById("scrollProgressBar");

  function updateProgressBarAndBackToTop() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    // Update progress bar
    if (scrollProgressBar) {
      scrollProgressBar.style.width = scrollPercentage + "%";
    }

    // Tampilkan tombol back-to-top (logika digabung ke sini)
    if (scrollTop > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }

  // Event listener untuk scroll
  window.addEventListener("scroll", updateProgressBarAndBackToTop);

  // Event listener untuk klik tombol back-to-top
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
