document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const toggleIcon = menuToggle.querySelector("i");
    const navbarPages = document.querySelector(".navbarPages");
    const mainLang = document.querySelector(".mainLang");
    const langOptions = document.querySelectorAll(".langDropdown li");
    const loadingOverlay = document.getElementById("loadingOverlay");
  
    // Navbar toggle functionality
    menuToggle.addEventListener("click", function () {
      navbarPages.classList.toggle("active");
  
      // Toggle between 'fa-toggle-off' and 'fa-toggle-on'
      if (navbarPages.classList.contains("active")) {
        toggleIcon.classList.remove("fa-toggle-off");
        toggleIcon.classList.add("fa-toggle-on");
      } else {
        toggleIcon.classList.remove("fa-toggle-on");
        toggleIcon.classList.add("fa-toggle-off");
      }
    });
  
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      mainLang.innerText = savedLanguage;
      changeLanguage(savedLanguage, false); // No loading animation on page load
    }
  
    // Event listener for changing language
    langOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const selectedLanguage = this.innerText;
        mainLang.innerText = selectedLanguage;
        localStorage.setItem("selectedLanguage", selectedLanguage);
        
        // Show loading overlay before applying language change
        showLoading(() => changeLanguage(selectedLanguage, true));
      });
    });
  
    // Function to show the loading screen for 2 seconds
    function showLoading(callback) {
      loadingOverlay.style.display = "flex";
      setTimeout(() => {
        loadingOverlay.style.display = "none";
        callback();
      }, 1000);
    }
  
    // Function to change page content based on language
    function changeLanguage(language, showLoader) {
      const translations = {
        English: { Skills: "Skills", Services: "Services", Portfolio: "Portfolio", Projects: "Projects", Reviews: "Reviews", contact: "Contact Me" },
        Thai: { Skills: "ทักษะ", Services: "บริการ", Portfolio: "ผลงาน", Projects: "โครงการ", Reviews: "รีวิว", contact: "ติดต่อฉัน" },
        Urdu: { Skills: "تجربہ", Services: "خدمات", Portfolio: "پورٹ فولیو", Projects: "منصوبے", Reviews: "جائزے", contact: "رابطہ" },
        French: { Skills: "Compétences", Services: "Services", Portfolio: "Portfolio", Projects: "Projets", Reviews: "Avis", contact: "Contactez-moi" },
        Spanish: { Skills: "Habilidades", Services: "Servicios", Portfolio: "Portafolio", Projects: "Proyectos", Reviews: "Reseñas", contact: "Contáctame" },
        Russian: { Skills: "Навыки", Services: "Услуги", Portfolio: "Портфолио", Projects: "Проекты", Reviews: "Отзывы", contact: "Свяжитесь со мной" },
        Japanese: { Skills: "スキル", Services: "サービス", Portfolio: "ポートフォリオ", Projects: "プロジェクト", Reviews: "レビュー", contact: "お問い合わせ" },
        Korean: { Skills: "기술", Services: "서비스", Portfolio: "포트폴리오", Projects: "프로젝트", Reviews: "리뷰", contact: "연락하기" },
        Vietnamese: { Skills: "Kỹ năng", Services: "Dịch vụ", Portfolio: "Danh mục đầu tư", Projects: "Dự án", Reviews: "Đánh giá", contact: "Liên hệ với tôi" },
      };
  
      // Delay text update if showLoader is true
      if (showLoader) {
        setTimeout(() => applyTranslations(translations[language]), 2000);
      } else {
        applyTranslations(translations[language]);
      }
    }
  
    // Function to update text based on language selection
    function applyTranslations(translations) {
      const navbarLinks = document.querySelectorAll(".navbarPages ul li a");
      navbarLinks[0].innerText = translations.Skills;
      navbarLinks[1].innerText = translations.Services;
      navbarLinks[2].innerText = translations.Portfolio;
      navbarLinks[3].innerText = translations.Projects;
      navbarLinks[4].innerText = translations.Reviews;
      navbarLinks[5].innerText = translations.contact;
    }
  });
  
  // Project Section scripts
  function scrollSlider(direction) {
    const slider = document.getElementById("slider");
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${direction * -320}px)`;

    setTimeout(() => {
        if (direction === 1) {
            const firstCard = slider.firstElementChild;
            slider.appendChild(firstCard);
        } else {
            const lastCard = slider.lastElementChild;
            slider.insertBefore(lastCard, slider.firstElementChild);
        }
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
    }, 500);
}

<script>
    document.querySelectorAll('.service-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('More details coming soon!');
        });
    });
</script>