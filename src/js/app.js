//-------------------------Email valid
import JustValidate from 'just-validate';
const validateA = new JustValidate('#formA');

validateA
  .addField('#emailA', [
    {
      rule: 'required',
      errorMessage: 'Необходимо ввести Email',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);

  
  const validateC = new JustValidate('#formC');

validateC
  .addField('#emailC', [
    {
      rule: 'required',
      errorMessage: 'Необходимо ввести Email',
    },
    {
      rule: 'email',
      errorMessage: 'Недопустимый формат',
    },
  ]);
//---------------------------------------------------------------------
//-------------search 
let searchBtn  = document.querySelector('.search-btn');
let closeBtnS  = document.querySelector('.close-btn');
let searchBox  = document.querySelector('.search-box');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtnS.classList.add('active');
    searchBtn.classList.add('active');
}
closeBtnS.onclick = function(){
    searchBox.classList.remove('active');
    closeBtnS.classList.remove('active');
    searchBtn.classList.remove('active');
}
//------------------------------------------------------------------------------------//
//-------------burger menu
let burgerLine = document.querySelector('.burger__line');
let closeMenu = document.querySelector('.menu-close');
let navMenu  = document.querySelector('.nav__list');

burgerLine.onclick = function(){
  burgerLine.classList.add('active');
  navMenu.classList.add('active');
  closeMenu.classList.add('active');
}
closeMenu.onclick = function(){
  burgerLine.classList.remove('active');
  navMenu.classList.remove('active');
  closeMenu.classList.remove('active');
}
//------------------------------------------------------------------------------------//
//-------------map info
let btnCloseMap = document.querySelector('.contacts__map-info');

btnCloseMap.onclick = function(){
  btnCloseMap.classList.add('close');
}

//scroll
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});
//------------------------------------------------------------------------------------//
//----------------------map

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
          center: [55.761830, 37.599075],
          zoom: 13,
          controls: ['geolocationControl', 'zoomControl']
      }, {
          searchControlProvider: 'yandex#search',
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          geolocationControlPosition:  { top: "20px", left: "10px" },
          geolocationControlFloat: 'none',
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "70px", left: "10px" }
      }),

  // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject(),
      myPieChart = new ymaps.Placemark();

  myMap.geoObjects
      .add(myGeoObject)
      .add(myPieChart)
      //------------------------------------------------
      .add(new ymaps.Placemark([55.769588, 37.638943], {
          balloonContent: ''
      }, {
          preset: 'islands#darkOrangeCircleDotIcon',
          iconColor: '#FF6E30'
      }));

      myMap.behaviors.disable('scrollZoom');
      myMap.behaviors.disable('drag');
}