let headerEl;
let mobileMenuEl;
let mobileMenuBarEl;
let bodyEl;
let selectBoxEl;
let selectValEl;
let selectOptionEl;
let countryItemsEl;
let countryItemEl;
let logoEl;

let scrollMax = 95;    
let scaleX = 1.1;
let scaleY = 1.1;

window.addEventListener('resize', init);
window.addEventListener('reload', init);
init();
function init () {
  initElements();
  initEvents();
  defaultSelect();
  changeBgColor();
  showNavigation();
  handleLogo ();
}


function initEvents () {
  selectBoxEl.addEventListener('click',toggleSelectBox);
  bodyEl.addEventListener('click',hideSelectBox);
}
function initElements () {
  headerEl = $('.header');
  mobileMenuEl = $('.mobile-menu'); 
  mobileMenuBarEl = $('.bar');
	navItemsEl = $(".nav-wrapper");
  logoEl = document.querySelector('.logo');
  bodyEl = document.querySelector('body');
  selectBoxEl = document.querySelector(`[data-role="selectBox"]`);
  selectValEl = selectBoxEl.querySelector(`[date-value="optionVal"]`);
  selectOptionEl = document.querySelector('.selected-option');
  countryItemsEl = selectBoxEl.querySelector('.country-items');
  countryItemEl = countryItemsEl.querySelectorAll('.country-item');

}

function showNavigation(){
	mobileMenuEl.off().on('click',()=>{ 
    mobileMenuBarEl.toggleClass('show');
    navItemsEl.toggleClass('show');
	});
}

function changeBgColor() {
  $(window).scroll(() => {
    if (0 < pageYOffset) {
      headerEl.addClass('header-bg-on');
    } else {
      headerEl.removeClass('header-bg-on');
    }
  });
}

function handleLogo () {  
  let calcScaleX = scaleX - (scaleX / scrollMax * window.pageYOffset);
  let calcScaleY = scaleY - (scaleY / scrollMax * window.pageYOffset);
  logoEl.style.transform = `matrix(${calcScaleX > 0.7 ? calcScaleX : 0.7}, 0,0,${calcScaleY  > 0.7 ? calcScaleY : 0.7},1,0)`;

  if (window.innerWidth > 900) {
    window.addEventListener('scroll', handleLogo);
  }else {
    window.removeEventListener('scroll', handleLogo);
    logoEl.style.transform = `scale(0.6) translate(-60%,-90%)`;
  }
}

function toggleSelectBox(e){
  e.stopPropagation();

  countryItemsEl.setAttribute('style',`top:${selectBoxEl.offsetHeight}px`)
  if(countryItemsEl.classList.contains('hide')){
      countryItemsEl.classList.remove('hide');
      countryItemsEl.classList.add('show');
      selectOptionEl.classList.add('select');
  }else{
      countryItemsEl.classList.add('hide');
      countryItemsEl.classList.remove('show');
      selectOptionEl.classList.remove('select');
  }
  selectOption();
}

function selectOption(){
  countryItemEl.forEach(countryItem=>{
      const innerValue = countryItem.innerHTML;
      function changeValue(){
        selectValEl.innerHTML = innerValue;
      }
      countryItem.addEventListener('click',changeValue)
  });
}

function defaultSelect(){
  const firstValue = countryItemEl[0].innerHTML;
  selectValEl.innerHTML = `${firstValue}`
}

function hideSelectBox(){
  if(countryItemsEl.classList.contains('show')){
      countryItemsEl.classList.add('hide');
      countryItemsEl.classList.remove('show');
  }
}