
window.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper('.team_slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  const select1 = new CustomSelect('#select_job');





})