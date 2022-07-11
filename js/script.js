const navMenu=document.getElementById('nav-menu')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')
const navLink=document.querySelectorAll('.nav_link')
const header=document.getElementById('header')
const videoFile=document.getElementById('video-file')
const videoButton=document.getElementById('video-button')
const videoIcon=document.getElementById('video-icon')
const scrollUp=document.getElementById('scroll-up')
const sections = document.querySelectorAll('section[id]')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show')
    })
}

const linkAction=()=>{
    navMenu.classList.remove('show')
}
navLink.forEach(rmv=>rmv.addEventListener('click',linkAction))

const changeHeaderColor=()=>{
     if(this.scrollY>=100){
         header.classList.add('header-change')
     }else{
         header.classList.remove('header-change')
     }
}
window.addEventListener('scroll',changeHeaderColor)

/**********************************************************Swipper***********************************************/
let swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:30,
    coverflowEffect: {
      rotate: 0,
    },
  });

  /*Play and pause video*/

  const playPause=()=>{
      if(videoFile.paused){
          //play video
          videoFile.play()
          //change the icon
          videoIcon.classList.add('ri-pause-line')
          videoIcon.classList.remove('ri-play-line')
      }else{
          //pause video
          videoFile.pause()
          //change the icon
          videoIcon.classList.remove('ri-pause-line')
          videoIcon.classList.add('ri-play-line')
      }
  }
  //////////////////////////////////////////////////change icon when video ends
  const endVideo=()=>{
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
  }
  videoButton.addEventListener('click',playPause)
  videoFile.addEventListener('ended',endVideo)

  ////////////////////////////////////////////////////////////////show scroll

  const showScroll=()=>{
      if(this.scrollY>=200){
          scrollUp.classList.add('show-scroll')
      }else{
          scrollUp.classList.remove('show-scroll')
      }
  }
  window.addEventListener('scroll',showScroll)


  ///////////////////////////////////////////////////////////////Show active sections

  const scrollActive=()=>{
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/////////////////////////////////////////////////////////////////////////////Dark theme
const themeButton = document.getElementById('theme_buttton')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})