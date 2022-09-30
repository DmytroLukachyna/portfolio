// import translationDB from './translationdb';

function translation() {
  // const langWrapper = document.querySelector('.languages'),
  //     flag = document.querySelectorAll('.languages__item');
  // let currentLanguage = localStorage.getItem('language');
  // initialLanguageSetup();
  // function initialLanguageSetup() {
  //     if (!currentLanguage) {
  //         languageSwitch();
  //         document.documentElement.lang = currentLanguage;
  //     }
  // }
  // function languageSwitch() {
  //     let activeLanguage = document.querySelector('.languages__item_active').getAttribute('data-language');
  //     localStorage.setItem('language', activeLanguage);
  //     currentLanguage = activeLanguage;
  // }
  // flag.forEach(flag => {
  //     if (flag.getAttribute('data-language') !== currentLanguage) {
  //         flag.classList.remove('languages__item_active');
  //     } else {
  //         flag.classList.add('languages__item_active');
  //     }
  //     flag.addEventListener('click', () => {
  //         langWrapper.querySelector('.languages__item_active').classList.remove('languages__item_active');
  //         flag.classList.add('languages__item_active');
  //         languageSwitch();
  //         siteTranslate(currentLanguage);
  //     });
  // });
  // function siteTranslate(nyelv) {
  // document.documentElement.lang = currentLanguage;
  // document.getElementsByTagName('title')[0].textContent = translationDB[nyelv].pagetitle;
  // document.querySelector('.social__text').textContent = translationDB[nyelv].socialtext;
  // document.querySelector('.mainscreen__name').textContent = translationDB[nyelv].mainscreenname;
  // document.querySelector('.mainscreen__info').textContent = translationDB[nyelv].mainscreeninfo;
  // document.querySelectorAll('.mainscreen__link')[0].textContent = translationDB[nyelv].mainscreenportfolio;
  // document.querySelectorAll('.mainscreen__link')[1].textContent = translationDB[nyelv].mainscreencv;
  // document.querySelectorAll('.menu__link')[0].textContent = translationDB[nyelv].menulink1;
  // document.querySelectorAll('.menu__link')[1].textContent = translationDB[nyelv].menulink2;
  // document.querySelectorAll('.menu__link')[2].textContent = translationDB[nyelv].menulink3;
  // document.querySelectorAll('.menu__link')[3].textContent = translationDB[nyelv].menulink4;
  // document.querySelectorAll('.menu__link')[4].textContent = translationDB[nyelv].menulink5;
  // document.querySelector('.title.profile__title').textContent = translationDB[nyelv].profiletitle;
  // document.querySelectorAll('.profile__subtitle')[0].textContent = translationDB[nyelv].profilesubtitle1;
  // document.querySelectorAll('.profile__main p')[0].textContent = translationDB[nyelv].profile1;
  // document.querySelectorAll('.profile__main p')[1].textContent = translationDB[nyelv].profile2;
  // document.querySelectorAll('.profile__main p')[2].textContent = translationDB[nyelv].profile3;
  // document.querySelectorAll('.profile__main p')[3].textContent = translationDB[nyelv].profile4;
  // document.querySelectorAll('.profile__subtitle')[1].textContent = translationDB[nyelv].profilesubtitle2;
  // document.querySelector('.profile__name').textContent = translationDB[nyelv].profilename;
  // document.querySelectorAll('.profile__tagline')[0].innerHTML = translationDB[nyelv].profilenumber;
  // document.querySelectorAll('.profile__tagline')[2].textContent = translationDB[nyelv].profilesocials;
  // document.querySelectorAll('.profile__tagline')[3].textContent = translationDB[nyelv].profilelangskills;
  // document.querySelectorAll('.profile__lang')[0].textContent = translationDB[nyelv].profilelangua;
  // document.querySelectorAll('.profile__lang')[1].textContent = translationDB[nyelv].profilelangen;
  // document.querySelectorAll('.profile__lang')[2].textContent = translationDB[nyelv].profilelangru;
  // document.querySelectorAll('.profile__lang')[3].textContent = translationDB[nyelv].profilelanghu;
  // document.querySelectorAll('.profile__lang')[4].textContent = translationDB[nyelv].profilelangde;
  // document.querySelectorAll('.profile__tagline')[4].textContent = translationDB[nyelv].profilecv;
  // document.querySelectorAll('.profile__cv-item a')[0].innerHTML = translationDB[nyelv].profilecvua;
  // document.querySelectorAll('.profile__cv-item a')[1].innerHTML = translationDB[nyelv].profilecven;
  // document.querySelectorAll('.profile__cv-item a')[2].innerHTML = translationDB[nyelv].profilecvhu;
  // document.querySelectorAll('.profile__cv-item a')[2].innerHTML = translationDB[nyelv].profilecvru;
  // document.querySelector('.portfolio__title').textContent = translationDB[nyelv].portfoliotitle;
  // document.querySelectorAll('.item__descr')[0].textContent = translationDB[nyelv].portfolioitemencore;
  // document.querySelectorAll('.item__descr')[0].textContent = translationDB[nyelv].portfolioitemorange;
  // document.querySelectorAll('.item__descr')[1].textContent = translationDB[nyelv].portfolioitemsparcle;
  // document.querySelectorAll('.item__descr')[2].textContent = translationDB[nyelv].portfolioitemflags;
  // document.querySelectorAll('.item__descr')[3].textContent = translationDB[nyelv].portfolioitemski;
  // document.querySelectorAll('.item__descr')[4].textContent = translationDB[nyelv].portfolioitemtest;
  // document.querySelectorAll('.item__descr')[5].textContent = translationDB[nyelv].portfolioitemtest;
  // document.querySelectorAll('.item__descr')[6].textContent = translationDB[nyelv].portfolioitemrandom;
  // document.querySelector('.certificates__title').textContent = translationDB[nyelv].certificatestitle;
  // document.querySelector('.certificates__descr').textContent = translationDB[nyelv].certificatesdescr1;
  // document.querySelector('.certificates__descr-secondary').textContent = translationDB[nyelv].certificatesdescr2;
  // document.querySelector('.workstudy__title').textContent = translationDB[nyelv].workstudytitle;
  // document.querySelectorAll('.workstudy__header')[0].textContent = translationDB[nyelv].workstudywork;
  // document.querySelectorAll('.workstudy__header')[1].textContent = translationDB[nyelv].workstudystudy;
  // document.querySelectorAll('.card__date')[2].textContent = translationDB[nyelv].workdate1;
  // document.querySelectorAll('.card__title')[2].textContent = translationDB[nyelv].worktitle1;
  // document.querySelectorAll('.card__descr p')[6].textContent = translationDB[nyelv].workdescr1;
  // document.querySelectorAll('.card__descr p')[7].textContent = translationDB[nyelv].workdescr2;
  // document.querySelectorAll('.card__descr p')[8].textContent = translationDB[nyelv].workdescr3;
  // document.querySelectorAll('.card__subtitle')[2].textContent = translationDB[nyelv].almamatername;
  // document.querySelectorAll('.card__title')[2].textContent = translationDB[nyelv].almamaterfield;
  // document.querySelectorAll('.card__descr p')[4].textContent = translationDB[nyelv].almamaterdescr;
  // document.querySelectorAll('.overlay__text').forEach(el => {
  //     el.textContent = translationDB[nyelv].visitwebsite;
  // });
  // document.querySelectorAll('.item__adaptivity').forEach(el => {
  //     el.textContent = translationDB[nyelv].itemadaptivity;
  // });
  // document.querySelectorAll('.item__stack-list-text').forEach(el => {
  //     el.textContent = translationDB[nyelv].itemstacklist;
  // });
  // document.querySelectorAll('.item__github').forEach(el => {
  //     el.innerHTML = translationDB[nyelv].itemgithub;
  // });
  // document.querySelectorAll('.item__blank p').forEach(el => {
  //     el.textContent = translationDB[nyelv].itemblank;
  // });
}

// siteTranslate(currentLanguage);
// }

export default translation;
