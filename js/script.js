
window.addEventListener('DOMContentLoaded', () => {

  // Hamburger menu

  const btnMenu = document.querySelector(".hamburger"),
        header = document.querySelector(".header");

  function toggleMenu() {
    if (header.classList.contains("show")) {
      header.classList.remove("show");
      btnMenu.classList.remove("active");
    } else {
      header.classList.add("show");
      btnMenu.classList.add("active");
    }
  }

  btnMenu.addEventListener("click", toggleMenu);

  // Tabs 

  const tabs = document.querySelectorAll('.tab'), // Tabs list
        tabsParent = document.querySelector('.tab_buttons'), // Parent of tabs list
        tabsContent = document.querySelectorAll('.tab_content'); // Content List

  // Hide items Function
  function hideItems(content, btn) {
    content.forEach(item => {
      item.classList.remove('active');
    })

    btn.forEach(item => {
      item.classList.remove('active');
    })
  }

  // Show items Function
  function showItems(content,btn,i = 0) {
    content[i].classList.add('active');
    btn[i].classList.add('active');
  }

  hideItems(tabsContent, tabs);
  showItems(tabsContent, tabs);

  // Event delegation
  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    if (target && target.classList.contains('tab')) {
      tabs.forEach((item,i) => {
        if (target == item) {
          hideItems(tabsContent, tabs);
          showItems(tabsContent, tabs, i);
        }
      })
    }
  })

  // Swiper
  const pagination = document.querySelector('.team_pagination'),
        pagBtn = pagination.querySelectorAll('.pag_item label')

  pagination.addEventListener('click', (event) => {
    let target = event.target;

    if(target.matches('.pag_item label')) {
      for(let i = 0; i < pagBtn.length; i++) {
        pagBtn[i].parentElement.classList.remove('active');
      }
      target.parentElement.classList.add('active');
    }
    
  });

  const swiper = new Swiper('.team_slider', {
    slidesPerView:'auto',
    loopedSlides: 3,
    spaceBetween: 20,
    snapOnRelease: true,
    // loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })

  // Members Info

  const btnsWrap = document.querySelectorAll('.read_more'),
        membersList = document.querySelector('.members_list'),
        member = document.querySelectorAll('.member_info'),
        readMoreBtn = document.querySelectorAll('.read_more_btn'),
        closeBtn = document.querySelectorAll('.close_btn');

  readMoreBtn.forEach(btn => {  
    btn.addEventListener('click', e => {
      const actBtn = e.target.dataset.btn;
      for (let i = 0; i < membersList.children.length; i++) {
        membersList.children[i].classList.remove('active');
        if (membersList.children[i].dataset.member == actBtn) {
          membersList.children[i].classList.add('active')
        }
      }
    })
  })

  member.forEach(item => {
    item.addEventListener('click', e => {
      let target = e.target;

      if (target && target.classList.contains('close_btn')) {
        item.classList.remove('active');
      }
      if (target === item) {
        item.classList.remove('active');
      }
    })
  })

  // Upload File

  const file = document.getElementById('file_cv');
  const formPreview = document.querySelector('.file_btn');

  file.addEventListener('change', () => {
    uploadFile(file.files[0])
  });

  function uploadFile(file) {
    const fileRead = new FileReader();
    formPreview.innerHTML = file.name;
  }

  // Custom Select
  const select1 = new CustomSelect('#select_job');


})