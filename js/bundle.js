/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/main.js":
/*!********************************!*\
  !*** ./src/js/modules/main.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function main() {
  const siteWrapper = document.querySelector("#site-wrapper"),
        warningPage = document.querySelector(".warning"),
        hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        // languages = document.querySelector('.languages'),
  body = document.querySelector('body'),
        loaderWrapper = document.querySelector('#loader-wrapper'),
        themeToggler = document.querySelector('#theme__toggle'),
        warningResolution = window.matchMedia("(max-width: 319px)"),
        portfolioItem = document.querySelectorAll('.item'),
        portfolioSwitchButtons = document.querySelectorAll('.portfolio__switch');

  document.onreadystatechange = () => {
    if (document.readyState !== "complete") {
      body.style.visibility = "hidden";
      loaderWrapper.style.visibility = "visible";
    } else {
      loaderWrapper.style.display = "none";
      loaderWrapper.style.visibility = "hidden";
      body.style.visibility = "visible";
      siteWrapper.style.opacity = "1";
      setThemeStart();
    }
  };

  let resizeTracker = new ResizeObserver(elements => {
    for (let element of elements) {
      const contentWidth = element.contentRect; // console.log(`Full width: ${window.innerWidth}`);
      // console.log(`Content width: ${contentWidth.width}`);

      if (window.innerWidth > contentWidth.width) {
        document.documentElement.classList.add('scrollbar_active');
      } else {
        document.documentElement.classList.remove('scrollbar_active');
      }

      if (contentWidth.width < 320) {
        siteWrapper.style.display = "none";
        warningPage.style.display = "flex";
      } else if (contentWidth.width >= 320) {
        siteWrapper.style.display = "block";
        warningPage.style.display = "none";
      }
    }
  });
  resizeTracker.observe(document.documentElement);

  function setTheme(themeName) {
    if (document.documentElement.classList.contains('theme-dark')) {
      document.documentElement.classList.remove('theme-dark');
    } else if (document.documentElement.classList.contains('theme-light')) {
      document.documentElement.classList.remove('theme-light');
    }

    document.documentElement.classList.add(themeName);
    localStorage.setItem('theme', themeName);
  }

  function setThemeStart() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      themeToggler.checked = true;
    } else {
      setTheme('theme-light');
      themeToggler.checked = false;
    }
  }

  themeToggler.addEventListener('change', () => {
    if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-dark');
      themeToggler.checked = true;
    } else {
      setTheme('theme-light');
      themeToggler.checked = false;
    }
  });
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active'); // languages.classList.toggle('languages_active');

    document.documentElement.classList.toggle('lock-scroll');
  });
  document.querySelectorAll('.menu__link, .menu__overlay').forEach(e => {
    e.addEventListener('click', () => {
      menu.classList.remove('menu_active');
      hamburger.classList.remove('hamburger_active'); // languages.classList.remove('languages_active');

      document.documentElement.classList.remove('lock-scroll');
    });
  });
  const currentYear = new Date().getFullYear();
  document.querySelector('#currentYear').textContent = currentYear;
  portfolioSwitchButtons.forEach(button => {
    button.addEventListener('click', () => {
      let portfolioSwitchActiveButton = document.querySelector(".portfolio__switch_active"),
          portfolioTransferringElements = document.querySelectorAll('.item_visible-to-hidden, .item_hidden-to-visible');

      if (button.dataset.type === portfolioSwitchActiveButton.dataset.type || portfolioTransferringElements.length !== 0) {
        // if (button.dataset.type === portfolioSwitchActiveButton.dataset.type) {
        //     console.log("Wow, keep calm! You are clicking on an element that is already active!");
        // } else if (portfolioTransferringElements.length !== 0) {
        //     console.log("Wow, slow down! Loading of items is in progress!");
        // }
        return false;
      } else {
        // console.log(`Last active: ${portfolioSwitchActiveButton.dataset.type}, pressed ${button.dataset.type}`);
        portfolioSwitchButtons.forEach(e => {
          e.classList.remove('portfolio__switch_active');
        });
        button.classList.add('portfolio__switch_active');
        let activeButtonType = button.dataset.type;

        if (activeButtonType === "all") {
          document.querySelectorAll('.item:not(.item_hidden)').forEach(shownItem => {
            shownItem.classList.add('item_visible-to-hidden');
            setTimeout(function () {
              shownItem.classList.remove('item_visible-to-hidden');
              shownItem.classList.add('item_hidden');
              portfolioItem.forEach(eachItem => {
                eachItem.classList.remove('item_hidden');
                eachItem.classList.add('item_hidden-to-visible');
                setTimeout(() => {
                  eachItem.classList.remove('item_hidden-to-visible');
                }, 500);
              });
            }, 500);
          });
        } else {
          document.querySelectorAll('.item:not(.item_hidden)').forEach(shownItem => {
            shownItem.classList.add('item_visible-to-hidden');
            setTimeout(function () {
              shownItem.classList.remove('item_visible-to-hidden');
              shownItem.classList.add('item_hidden');
              portfolioItem.forEach(item => {
                if (item.dataset.type == activeButtonType) {
                  item.classList.remove('item_hidden');
                  item.classList.add('item_hidden-to-visible');
                  setTimeout(() => {
                    item.classList.remove('item_hidden-to-visible');
                  }, 500);
                }
              });
            }, 500);
          });
        }
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (main);

/***/ }),

/***/ "./src/js/modules/translation.js":
/*!***************************************!*\
  !*** ./src/js/modules/translation.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function translation() {//
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
  // document.getElementsByTagName('title')[0].textContent = data[nyelv].pagetitle;
  // document.querySelector('.social__text').textContent = data[nyelv].socialtext;
  // document.querySelector('.mainscreen__name').textContent = data[nyelv].mainscreenname;
  // document.querySelector('.mainscreen__info').textContent = data[nyelv].mainscreeninfo;
  // document.querySelectorAll('.mainscreen__link')[0].textContent = data[nyelv].mainscreenportfolio;
  // document.querySelectorAll('.mainscreen__link')[1].textContent = data[nyelv].mainscreencv;
  // document.querySelectorAll('.menu__link')[0].textContent = data[nyelv].menulink1;
  // document.querySelectorAll('.menu__link')[1].textContent = data[nyelv].menulink2;
  // document.querySelectorAll('.menu__link')[2].textContent = data[nyelv].menulink3;
  // document.querySelectorAll('.menu__link')[3].textContent = data[nyelv].menulink4;
  // document.querySelectorAll('.menu__link')[4].textContent = data[nyelv].menulink5;
  // document.querySelector('.title.profile__title').textContent = data[nyelv].profiletitle;
  // document.querySelectorAll('.profile__subtitle')[0].textContent = data[nyelv].profilesubtitle1;
  // document.querySelectorAll('.profile__main p')[0].textContent = data[nyelv].profile1;
  // document.querySelectorAll('.profile__main p')[1].textContent = data[nyelv].profile2;
  // document.querySelectorAll('.profile__main p')[2].textContent = data[nyelv].profile3;
  // document.querySelectorAll('.profile__main p')[3].textContent = data[nyelv].profile4;
  // document.querySelectorAll('.profile__subtitle')[1].textContent = data[nyelv].profilesubtitle2;
  // document.querySelector('.profile__name').textContent = data[nyelv].profilename;
  // document.querySelectorAll('.profile__tagline')[0].innerHTML = data[nyelv].profilenumber;
  // document.querySelectorAll('.profile__tagline')[2].textContent = data[nyelv].profilesocials;
  // document.querySelectorAll('.profile__tagline')[3].textContent = data[nyelv].profilelangskills;
  // document.querySelectorAll('.profile__lang')[0].textContent = data[nyelv].profilelangua;
  // document.querySelectorAll('.profile__lang')[1].textContent = data[nyelv].profilelangen;
  // document.querySelectorAll('.profile__lang')[2].textContent = data[nyelv].profilelangru;
  // document.querySelectorAll('.profile__lang')[3].textContent = data[nyelv].profilelanghu;
  // document.querySelectorAll('.profile__lang')[4].textContent = data[nyelv].profilelangde;
  // document.querySelectorAll('.profile__tagline')[4].textContent = data[nyelv].profilecv;
  // document.querySelectorAll('.profile__cv-item a')[0].innerHTML = data[nyelv].profilecvua;
  // document.querySelectorAll('.profile__cv-item a')[1].innerHTML = data[nyelv].profilecven;
  // document.querySelectorAll('.profile__cv-item a')[2].innerHTML = data[nyelv].profilecvhu;
  // document.querySelectorAll('.profile__cv-item a')[2].innerHTML = data[nyelv].profilecvru;
  // document.querySelector('.portfolio__title').textContent = data[nyelv].portfoliotitle;
  // document.querySelectorAll('.item__descr')[0].textContent = data[nyelv].portfolioitemencore;
  // document.querySelectorAll('.item__descr')[0].textContent = data[nyelv].portfolioitemorange;
  // document.querySelectorAll('.item__descr')[1].textContent = data[nyelv].portfolioitemsparcle;
  // document.querySelectorAll('.item__descr')[2].textContent = data[nyelv].portfolioitemflags;
  // document.querySelectorAll('.item__descr')[3].textContent = data[nyelv].portfolioitemski;
  // document.querySelectorAll('.item__descr')[4].textContent = data[nyelv].portfolioitemtest;
  // document.querySelectorAll('.item__descr')[5].textContent = data[nyelv].portfolioitemtest;
  // document.querySelectorAll('.item__descr')[6].textContent = data[nyelv].portfolioitemrandom;
  // document.querySelector('.certificates__title').textContent = data[nyelv].certificatestitle;
  // document.querySelector('.certificates__descr').textContent = data[nyelv].certificatesdescr1;
  // document.querySelector('.certificates__descr-secondary').textContent = data[nyelv].certificatesdescr2;
  // document.querySelector('.workstudy__title').textContent = data[nyelv].workstudytitle;
  // document.querySelectorAll('.workstudy__header')[0].textContent = data[nyelv].workstudywork;
  // document.querySelectorAll('.workstudy__header')[1].textContent = data[nyelv].workstudystudy;
  // document.querySelectorAll('.card__date')[2].textContent = data[nyelv].workdate1;
  // document.querySelectorAll('.card__title')[2].textContent = data[nyelv].worktitle1;
  // document.querySelectorAll('.card__descr p')[6].textContent = data[nyelv].workdescr1;
  // document.querySelectorAll('.card__descr p')[7].textContent = data[nyelv].workdescr2;
  // document.querySelectorAll('.card__descr p')[8].textContent = data[nyelv].workdescr3;
  // document.querySelectorAll('.card__subtitle')[2].textContent = data[nyelv].almamatername;
  // document.querySelectorAll('.card__title')[2].textContent = data[nyelv].almamaterfield;
  // document.querySelectorAll('.card__descr p')[4].textContent = data[nyelv].almamaterdescr;
  // document.querySelectorAll('.overlay__text').forEach(el => {
  //     el.textContent = data[nyelv].visitwebsite;
  // });
  // document.querySelectorAll('.item__adaptivity').forEach(el => {
  //     el.textContent = data[nyelv].itemadaptivity;
  // });
  // document.querySelectorAll('.item__stack-list-text').forEach(el => {
  //     el.textContent = data[nyelv].itemstacklist;
  // });
  // document.querySelectorAll('.item__github').forEach(el => {
  //     el.innerHTML = data[nyelv].itemgithub;
  // });
  // document.querySelectorAll('.item__blank p').forEach(el => {
  //     el.textContent = data[nyelv].itemblank;
  // });
}

let data = {
  "en": {
    "pagetitle": `Portfolio | Dmytro Lukachyna`,
    "socialtext": `Social networks`,
    "menulink1": `To the top`,
    "menulink2": `About me`,
    "menulink3": `Portfolio`,
    "menulink4": `Certificates`,
    "menulink5": `Work & Education`,
    "mainscreenname": `Dmytro Lukachyna`,
    "mainscreeninfo": `HTML-coder, Junior Front-end developer`,
    "mainscreenportfolio": `Portfolio`,
    "mainscreencv": `CV / About me`,
    "profiletitle": `About me`,
    "profilesubtitle1": `Briefly about myself`,
    "profile1": `Hello! My name is Dmytro, I am a Front-end developer and a HTML-coder.`,
    "profile2": `I like to look for interesting solutions for accomplishing tasks I am facing and, together with my ideas, implement them in the form of websites. In addition, I am constantly developing in this sphere, since perfection knows no limits :)`,
    "profile3": `Validity of the code, complete adaptability of the content, the accuracy and readability of the layout as well as the use of the most relevant cutting-edge technologies are crucial cornerstones of my work.`,
    "profile4": `Professional skills and technologies / frameworks used:`,
    "profilesubtitle2": `Personal information`,
    "profilename": `Dmytro Lukachyna`,
    "profilenumber": `Phone number (also via Telegram and Viber):`,
    "profilesocials": `Links to Djinni, Github and social networks:`,
    "profilelangskills": `Language skills`,
    "profilelangua": `Ukrainian – native (fluent)`,
    "profilelangen": `English – В2+ (Upper-Intermediate)`,
    "profilelangru": `Russian – С2 (fluent)`,
    "profilelanghu": `Hungarian – В1 (Intermediate)`,
    "profilelangde": `German – А1 (Beginner)`,
    "profilecv": `Curriculum vitae (CV) (as a PDF, in a new tab):`,
    "profilecvua": `<img src="icons/flags/ua.svg" alt="Ukrainian">In Ukrainian`,
    "profilecven": `<img src="icons/flags/gb.svg" alt="English">In English`,
    "profilecvru": `<img src="icons/flags/ru.svg" alt="Russian">In Russian`,
    "portfoliotitle": `Portfolio`,
    "visitwebsite": `Visit the website`,
    "itemadaptivity": `Adaptiveness: 320-1920`,
    "itemstacklist": `Technologies and frameworks used`,
    "itemgithub": `Source code on <i class="fab fa-github"></i>`,
    "itemblank": `Development of the project is in progress!`,
    "portfolioitemencore": `Commercial site of active Ukrainian tour agency`,
    "portfolioitemorange": `Feature-rich site of web studio from United States`,
    "portfolioitemsparcle": `Full-featured Croatian cleaning company site`,
    "portfolioitemflags": `Page with language selection and particles`,
    "portfolioitemski": `Full-fledged Ski & Snowboard School site`,
    "portfolioitemtest": `Test task for Ukrainian IT company`,
    "portfolioitemrandom": `Simple randomizer on pure JS`,
    "certificatestitle": `Certificates`,
    "certificatesdescr1": `Completed courses and tests on various educational IT-platforms`,
    "certificatesdescr2": `(click on the certificate to visit its original version)`,
    "workstudytitle": `Career Path`,
    "workstudywork": `Work Experience`,
    "workdate1": `08/2015 - present`,
    "worktitle1": `Translator`,
    "workdescr1": `Translated more than 30 ECtHR judgements, 10+ Venice Commission's opinions as well as hundreds of Council of Europe experts' conclusions, recommendations and declarations;`,
    "workdescr2": `Contributed to translation and proofreading of translation of 40+ laws of Ukraine incl. those amending the Constitution of Ukraine;`,
    "workdescr3": `Consulted and gave recommendations to translators on usage of different CAT-tools (incl. technical questions and troubleshooting of issues).`,
    "workstudystudy": `Education`,
    "almamatername": `Igor Sikorsky Kyiv Polytechnic Institute`,
    "almamaterfield": `Translation / Philology`,
    "almamaterdescr": `Complete higher education (master degree)`
  },
  "uk": {
    "pagetitle": `Портфоліо | Дмитро Лукачина`,
    "socialtext": `Соціальні мережі`,
    "menulink1": `На головну`,
    "menulink2": `Про мене`,
    "menulink3": `Портфоліо`,
    "menulink4": `Сертифікати`,
    "menulink5": `Робота і освіта`,
    "mainscreenname": `Дмитро Лукачина`,
    "mainscreeninfo": `HTML-coder, Junior Front-end developer`,
    "mainscreenportfolio": `Портфоліо`,
    "mainscreencv": `CV / Про мене`,
    "profiletitle": `Про мене`,
    "profilesubtitle1": `Трохи про себе`,
    "profile1": `Привіт! Мене звати Дмитро, я – Front-end розробник и HTML-coder.`,
    "profile2": `Мені подобається шукати цікаві рішення для виконання завдань, поставлених переді мною, і разом із моїми ідеями реалізовувати їх як сайти. Окрім того, я постійно розвиваюся у цій сфері, адже досконалості немає меж :)`,
    "profile3": `У процесі веб-розробки головне для мене – валідність коду, повна адаптивність контенту, акуратність та читабельність верстки, а також застосування найновіших та найактуальніших технологій.`,
    "profile4": `Професійні навички та технології / фреймворки у використанні:`,
    "profilesubtitle2": `Персональна інформація`,
    "profilename": `Дмитро Лукачина`,
    "profilenumber": `Номер телефону (також у Telegram і Viber):`,
    "profilesocials": `Посилання на Djinni, Github і соцмережі:`,
    "profilelangskills": `Володіння мовами`,
    "profilelangua": `Українська – рідна, вільне володіння`,
    "profilelangen": `Англійська – В2+ (Upper-Intermediate)`,
    "profilelangru": `Російська – С2 (вільне володіння)`,
    "profilelanghu": `Угорська – В1 (Intermediate)`,
    "profilelangde": `Німецька – А1 (Beginner)`,
    "profilecv": `Резюме (у форматі PDF, у новій вкладці):`,
    "profilecvua": `<img src="icons/flags/ua.svg" alt="Ukrainian">Українською`,
    "profilecven": `<img src="icons/flags/gb.svg" alt="English">Англійською`,
    "profilecvru": `<img src="icons/flags/ru.svg" alt="Russian">Російською`,
    "portfoliotitle": `Портфоліо`,
    "visitwebsite": `Перейти на сайт`,
    "itemadaptivity": `Адаптивність: 320-1920`,
    "itemstacklist": `Використані технології та фреймворки`,
    "itemgithub": `Вихідний код на <i class="fab fa-github"></i>`,
    "itemblank": `Робота над проектом триває!`,
    "portfolioitemencore": `Сайт діючої туристичної агенції в Україні`,
    "portfolioitemorange": `Повнофункціональний сайт веб-студії із США`,
    "portfolioitemsparcle": `Повнофункціональний сайт клінінгової фірми`,
    "portfolioitemflags": `Сторінка з вибором мови та particle-елементами`,
    "portfolioitemski": `Повнофункціональний сайт лижної школи`,
    "portfolioitemtest": `Тестове завдання для української IT-компанії`,
    "portfolioitemrandom": `Простий рандомайзер на чистому JS`,
    "certificatestitle": `Сертифікати`,
    "certificatesdescr1": `Пройдені курси та тести на різноманітних освітніх IT-платформах`,
    "certificatesdescr2": `(натисніть на сертифікат для того, щоб перейти на його оригінальну версію)`,
    "workstudytitle": `Кар’єрний шлях`,
    "workstudywork": `Досвід роботи`,
    "workdate1": `08/2015 - донині`,
    "worktitle1": `Перекладач`,
    "workdescr1": `Переклав понад 30 рішень ЄСПЛ, 10+ висновків Венеціанської комісії, а також сотні висновків, рекомендацій та заяв експертів Ради Європи;`,
    "workdescr2": `Залучався до перекладу та редагування перекладу понад 40 законів України, у т.ч. тих, що передбачали внесення змін до Конституції України;`,
    "workdescr3": `Консультував та надавав рекомендації перекладачам щодо використання різних CAT-інструментів (зокрема стосовно технічних питань та розв'язання проблем).`,
    "workstudystudy": `Навчання і освіта`,
    "almamatername": `Київський політехнічний інститут імені Ігоря Сікорського`,
    "almamaterfield": `Переклад/філологія`,
    "almamaterdescr": `Повна вища освіта (спеціаліст/магістр)`
  },
  "hu": {
    "pagetitle": `Portfólió | Demeter Lukácsina`,
    "socialtext": `Közösségi hálózatok`,
    "mainscreenname": `Demeter Lukácsina`,
    "mainscreeninfo": `HTML-coder, Junior Front-end fejlesztő`,
    "mainscreenportfolio": `Portfólió`,
    "mainscreencv": `CV / Rólam`
  },
  "ru": {
    "pagetitle": `Портфолио | Дмитрий Лукачина`,
    "socialtext": `Социальные сети`,
    "menulink1": `На главную`,
    "menulink2": `Обо мне`,
    "menulink3": `Портфолио`,
    "menulink4": `Сертификаты`,
    "menulink5": `Работа и образование`,
    "mainscreenname": `Дмитрий Лукачина`,
    "mainscreeninfo": `HTML-coder, Junior Front-end developer`,
    "mainscreenportfolio": `Портфолио`,
    "mainscreencv": `CV / Обо мне`,
    "profiletitle": `Обо мне`,
    "profilesubtitle1": `Немного о себе`,
    "profile1": `Привет! Меня зовут Дмитрий, я – Front-end разработчик и HTML-coder.`,
    "profile2": `Мне нравится искать интересные решения для выполнения стоящих передо мной задач и вместе с моими идеями реализовывать их в виде сайтов. Кроме того, я постоянно развиваюсь в этой сфере, так как совершенству нет предела :)`,
    "profile3": `В процессе веб-разработки главное для меня – валидность кода, полная адаптивность контента, аккуратность и читаемость верстки, а также применение самых новых и актуальных технологий.`,
    "profile4": `Профессиональные навыки и используемые технологии / фреймворки:`,
    "profilesubtitle2": `Персональная информация`,
    "profilename": `Дмитрий Лукачина`,
    "profilenumber": `Номер телефона (также в Telegram и Viber):`,
    "profilesocials": `Ссылки на Djinni, Github и социальные сети:`,
    "profilelangskills": `Владение языками`,
    "profilelangua": `Украинский – родной, свободное владение`,
    "profilelangen": `Английский – В2+ (Upper-Intermediate)`,
    "profilelangru": `Русский – С2 (свободное владение)`,
    "profilelanghu": `Венгерский – В1 (Intermediate)`,
    "profilelangde": `Немецкий – А1 (Beginner)`,
    "profilecv": `Резюме (в формате PDF, в новой вкладке):`,
    "profilecvua": `<img src="icons/flags/ua.svg" alt="Ukrainian">На украинском`,
    "profilecven": `<img src="icons/flags/gb.svg" alt="English">На английском`,
    "profilecvru": `<img src="icons/flags/ru.svg" alt="Russian">На русском`,
    "portfoliotitle": `Портфолио`,
    "visitwebsite": `Перейти на сайт`,
    "itemadaptivity": `Адаптивность: 320-1920`,
    "itemstacklist": `Используемые технологии и фреймворки`,
    "itemgithub": `Исходный код на <i class="fab fa-github"></i>`,
    "itemblank": `Работа над проектом продолжается!`,
    "portfolioitemencore": `Сайт действующего турагентства в Украине`,
    "portfolioitemorange": `Полнофункциональный сайт веб-студии из США`,
    "portfolioitemsparcle": `Полнофункциональный сайт клининг-компании`,
    "portfolioitemflags": `Страница с выбором языка и particle.js`,
    "portfolioitemski": `Полнофункциональный сайт лыжной школы`,
    "portfolioitemtest": `Тестовое задание для украинской IT-компании`,
    "portfolioitemrandom": `Простой рандомайзер на чистом JS`,
    "certificatestitle": `Сертификаты`,
    "certificatesdescr1": `Пройденные курсы и тесты на различных образовательных IT-платформах`,
    "certificatesdescr2": `(Нажмите на сертификат для того, чтобы перейти на его оригинальную версию)`,
    "workstudytitle": `Карьерный путь`,
    "workstudywork": `Опыт работы`,
    "workdate1": `08/2015 - по сей день`,
    "worktitle1": `Переводчик`,
    "workdescr1": `Перевел более 30 решений ЕСПЧ, 10+ выводов Венецианской комиссии, а также сотни выводов, рекомендаций и заявлений экспертов Совета Европы;`,
    "workdescr2": `Участвовал в переводе и редактировании перевода более 40 законов Украины, в т.ч. предусматривающих внесение изменений в Конституцию Украины;`,
    "workdescr3": `Консультировал и предоставлял рекомендации переводчикам в части использования различных CAT-инструментов (в частности касательно технических вопросов и решения проблем).`,
    "workstudystudy": `Обучение и образование`,
    "almamatername": `Киевский политехнический институт имени Игоря Сикорского`,
    "almamaterfield": `Перевод/филология`,
    "almamaterdescr": `Полное высшее образование (специалист/магистр)`
  }
}; // siteTranslate(currentLanguage);
// }

/* harmony default export */ __webpack_exports__["default"] = (translation);

/***/ }),

/***/ "./src/js/modules/translationDB.js":
/*!*****************************************!*\
  !*** ./src/js/modules/translationDB.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function translationDB() {}

/* harmony default export */ __webpack_exports__["default"] = (translationDB);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main */ "./src/js/modules/main.js");
/* harmony import */ var _modules_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/translation */ "./src/js/modules/translation.js");
/* harmony import */ var _modules_translationDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/translationDB */ "./src/js/modules/translationDB.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_translation__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_translationDB__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map