const ViewItems = () => {
  let items = document.getElementById("items");
  document.getElementById('typing-text').style.animation = `I am a ${arr[i]} `
  if (items.style.display != "grid") {
    items.style.display = "grid";
    items.style.animation = "animation 2s ease";
    items.style.width = "100%";
    items.style.gridTemplateColumns = "repeat(1,70%)";
    document.getElementById("navbar").style.flexDirection = "column";
    items.style.position = "relative";
    document.getElementById("navbar").style.animation =
      "navbar-animation 1.9s ease";
    document.querySelectorAll(".list-item").forEach((item) => {
      item.style.display = "flex";
      item.style.width = "100%";
      item.style.alignItems = "center";
      item.style.justifyContent = "center";
    });
    items.style.justifyContent = "center";
    items.style.rowGap = "1rem";
    items.style.paddingTop = ".5rem";
    items.style.paddingBottom = "2rem";
    items.style.textAlign = "center";
    setTimeout(() => {
      document.getElementById('navbar').style.height = '327px'
    }, 1890);
  } else {
    document.getElementById('navbar').style.animation = 'navbar-reverse-animation 2.1s ease'
    items.style.animation = "reverse-animation 2s ease";
    setTimeout(() => {
      items.style.display = "none";
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("navbar").style.justifyContent = "center";
    }, 2100);
  }
};
let view_blog = false
let inblog = false
// Router
const Router = (targetClass)=>{
  if(targetClass==='Blog'&& view_blog===false && inblog==false){
    set_property(['.body'],property_names=['backgroundColor'],property_values=['white'])
    set_display(['.home','.About','.contact'],display_type='none',byclass=true)
    set_display(['.blog-container'],display_type='flex',byclass=true)
    set_display(['.Blog'],display_type='Block',byclass=true)
    setTimeout(() => {
      inblog=true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100);
  }else if(inblog===true && targetClass!='Blog'){
    document.querySelector('.load').classList.add('loader')
    setTimeout(() => {
      document.querySelector('.load').classList.remove('loader')
      set_property(['.body'],property_names=['backgroundColor'],property_values=['black'])
      set_display([`.${targetClass}`,'.full-blogs','.blog-container','.Blog'],display_type='none')
      set_display(['.home','.About','.contact'],display_type='flex')
      document.querySelector(`.${targetClass}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
      view_blog=false
      inblog = false
    }, 2100);
  }
  else if(targetClass!='Blog' && view_blog===true){
    document.querySelector('.load').classList.add('loader')
    setTimeout(() => {
      document.querySelector('.load').classList.remove('loader')
      set_property(['.body'],property_names=['backgroundColor'],property_values=['black'])
      set_display([`.${targetClass}`,'.full-blogs','.blog-container','.Blog'],display_type='none')
      set_display(['.home','.About','.contact'],display_type='flex')
      document.querySelector(`.${targetClass}`).scrollIntoView({ behavior: 'smooth', block: 'start' })
      view_blog=false
      inblog = false
    }, 2100);
    
  }
  else if (targetClass==='Blog' && view_blog===true){
    document.querySelector('.load').classList.add('loader')
    setTimeout(() => {   
      document.querySelector('.load').classList.remove('loader')   
      set_display(['.blog-container'],display_type='flex')
      set_display(['.Blog'],display_type='block')
      set_display(['.home','.About','.contact'],display_type='none')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      blogs_list = true
      setTimeout(() => {
        set_display(['.full-blogs'],display_type='none')
        inblog=true
        view_blog=false
      }, 1100);
    }, 2100);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.list-item');
  const hamburger = document.querySelector('.hamburger');
  const items = document.getElementById('items');
  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }
  hamburger.addEventListener('click', toggleMenu);
  
  // Smooth scrolling function
  function smoothScroll(e) {
    e.preventDefault();
    const targetClass = this.id; 
    const targetSection = document.querySelector(`.${targetClass}`);
    if (targetSection) {
      if(targetClass!='Blog'){
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();}
      }
    }
    function toggleMenu() {
      items.classList.toggle('show');
  }
  function closeMenu() {
    items.classList.remove('show');
  }
});
const blog_router = (blog_name)=>{
  document.querySelector('.load').classList.add('loader')
  setTimeout(() => {
    document.querySelector('.load').classList.remove('loader')
    change_page(blog_name)
  }, 2100);
}
  const change_page = (blog_name) => {
    document.querySelector('.body').style.backgroundColor = 'white';
    set_display(['.home','.About','.contact','.blog-container','.Blog-gesture','.Blog-face-recognition'],display_type='none')
    set_display(['.full-blogs',`.${blog_name}`],display_type='flex')
    set_display(['.Blog',],display_type='block')
    window.scrollTo({ top: 0, behavior: 'smooth' });
    view_blog = true;
};

// const delay = ms => new Promise(res => setTimeout(res, ms));
let i= 0
arr = ['Data Scientist and Analyst',"Front - End Web Developer","Python Programmer","Machine Learning Engineer"]
const change_text = ()=>{
  document.getElementById('typing-text').textContent = `${arr[i]} `
  // document.getElementById('typing-text').classList.add('wait')
  if (i===3){
    i=-1
  }
  i+=1
}
setInterval(() => {
  change_text()
}, 7010);

const video = document.querySelectorAll('video')[0];

// Call the resetAnimation function every 8 seconds
setInterval(restartVideo, 7000);
setInterval(resetAnimation, 7000);
function restartVideo() {
  video.currentTime = 0; // Reset video to the start
}

const element = document.getElementById('typing-text');
function resetAnimation() {
  element.style.display = 'hidden'; 
  element.style.animationPlayState = 'paused';

  // Set the animation to the starting position
  element.style.animation = 'none';
  element.offsetHeight; // Force a reflow to reset the animation

  // Restart the animation
  element.style.animation = 'typing-animation 7s infinite';
  element.style.animationPlayState = 'running';
  setTimeout(() => {
    element.style.display = 'flex'; 
  }, 500);
}

const image = document.querySelector('.hand-shake');
    function pauseAnimation() {
      image.style.animationPlayState = 'paused';
      setTimeout(() => {
        image.style.animationPlayState = 'running';
      }, 800);
    }

    image.addEventListener('animationiteration', pauseAnimation);

    
    document.addEventListener("DOMContentLoaded", function () {
      const classNamesArray = ['video-animation','profile','contact-details','card','gradient-border','phone-intro'];
      
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if(entry.target.classList.value==='card'){
                entry.target.style.animation = 'zoomIn 2s forwards'
              }
              else{
                entry.target.style.transform = "translateX(0)";
                entry.target.style.transform = "translateZ(0)";}
              entry.target.style.opacity = "1";
                // document.querySelectorAll('.card').forEach(element => {
              //   element.classList.add('animate__zoomIn')
              // });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      classNamesArray.forEach((className) => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach((element) => {
          observer.observe(element);
        });
      });
    });

    const copy_code = (index)=>{
      navigator.clipboard.writeText(document.querySelectorAll('.code')[index].textContent)
  }
    const copy_command = (index)=>{
      navigator.clipboard.writeText(document.querySelectorAll('.command')[index].textContent)
  }

  const set_display = (class_or_id=[],display_type='flex',byclass=true)=>{
      if(byclass===true){
      class_or_id.forEach(element => {
        document.querySelector(element).style.display= display_type
      });
    }else{
      class_or_id.forEach(element => {
        document.getElementById(element).style.display= display_type
      });
    }
  }
  const set_property = (class_or_id=[],property_name=[],property_values=[],byclass=true)=>{
      let index = 0
      if(byclass===true){
      class_or_id.forEach(element => {
        index = index+1
        document.querySelector(element).style[property_name[i]]= property_values[i]
      });
    }else{
      class_or_id.forEach(element => {
        document.getElementById(element).style[property_name[i]]= property_values[i]
      });
    }
  }
