
   const text = "design by meti :)";
   const speed = 100; // سرعت تایپ (میلی‌ثانیه)
   let index = 0;
 
   function typeEffect() {
     if (index < text.length) {
       document.getElementById("text").textContent += text[index];
       index++;
       setTimeout(typeEffect, 100);
     }
   }
   
   typeEffect()