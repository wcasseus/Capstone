document.addEventListener("DOMContentLoaded", () => {
  
    
    const contactForm = document.getElementById("contact-form");
    
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const fullName = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        
        alert(`Thank you, ${fullName}! Your message has been sent. We will contact you at ${email}.`);
        
        contactForm.reset();
      });
    }
  
    
    const fightImages = document.querySelectorAll("main img");
    
    fightImages.forEach(image => {
      image.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      
      image.addEventListener("mouseenter", () => {
        image.style.transform = "scale(1.03)";
        image.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
      });
      
      image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
        image.style.boxShadow = "none";
      });
    });
  
  });