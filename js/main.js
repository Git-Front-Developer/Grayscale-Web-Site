let navLink = document.querySelectorAll(".navbar .nav-link");
if(window.innerWidth<=992){
  document.querySelector(".navbar").style.cssText ="background: var(--white-color) !important; padding: 1rem 0 !important;";
  document.querySelector(".navbar .navbar-brand").style.cssText ="font-size: 1.3rem; color: var(--black-color) !important;";
  for(let i=0;i<3;i++){
    navLink[i].style.color = "var(--black-color)";
  }
}else{
  window.onscroll =()=>{
      if(window.scrollY>0){
        document.querySelector(".navbar").style.cssText ="background: var(--white-color) !important; padding: 1rem 0 !important;";
        document.querySelector(".navbar .navbar-brand").style.cssText ="font-size: 1.3rem; color: var(--black-color) !important;";
        for(let i=0;i<3;i++){
          navLink[i].style.color = "var(--black-color)";
        }
      }else{
        document.querySelector(".navbar").style.cssText ="background: transparent !important; padding: 1.25rem 0 !important;";
        document.querySelector(".navbar .navbar-brand").style.cssText ="font-size: 1.8rem; color: var(--main-color) !important;";
        for(let i=0;i<3;i++){
          navLink[i].style.color = "var(--main-color)";
        }
      }
  }
}

