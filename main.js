  window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
 
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(portfolio)
  activateMenuAtCurrentSection(about)
} 

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine


  const sectionBoundaries =  
  sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)


  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}


function showNavOnScroll() {
    if (scrollY > 0) {
      navig.classList.add('scroll')   
      } else {
      navig.classList.remove('scroll')
      }
    }

function showBackToTopButtonOnScroll(){
    if (scrollY > 200) {
      backToTopButton.classList.add('show')   
    } else {
      backToTopButton.classList.remove('show')
    }
  }

function openMenu() {
    document.body.classList.add('menu-expanded')
  }


function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
  }).reveal(`
      #home, 
      #home img,
      
      #services,
      #services header,
      #services .cards_serv, 
      services .card,

      #portfolio,
      #portfolio header,
      #portfolio .cards_port,
      #portfolio .card,

      #about,
      #about header,
      #about .cards_port,
      #about .card`    
      
      )
