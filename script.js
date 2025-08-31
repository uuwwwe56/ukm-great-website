// slider about 
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".from-left,.from-right,.fade-in,.from-bottom,.flip,.rotate-in,.zoom-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        //   entry.target.classList.add("show");
        // } else {
        //   entry.target.classList.remove("show"); // biar bisa reset
        // }
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // hapus baris ini kalau mau animasi bisa berulang
          } //atau seperti ini 

      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
});
