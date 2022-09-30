function main() {
  const siteWrapper = document.querySelector('#site-wrapper'),
    warningPage = document.querySelector('.warning'),
    hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    // languages = document.querySelector('.languages'),
    body = document.querySelector('body'),
    loaderWrapper = document.querySelector('#loader-wrapper'),
    themeToggler = document.querySelector('#theme__toggle'),
    // warningResolution = window.matchMedia('(max-width: 319px)'),
    portfolioItem = document.querySelectorAll('.item'),
    portfolioSwitchButtons = document.querySelectorAll('.portfolio__switch');

  document.onreadystatechange = () => {
    if (document.readyState !== 'complete') {
      body.style.visibility = 'hidden';
      loaderWrapper.style.visibility = 'visible';
    } else {
      loaderWrapper.style.display = 'none';
      loaderWrapper.style.visibility = 'hidden';
      body.style.visibility = 'visible';
      siteWrapper.style.opacity = '1';
      setThemeStart();
    }
  };

  let resizeTracker = new ResizeObserver((elements) => {
    for (let element of elements) {
      const contentWidth = element.contentRect;
      if (window.innerWidth > contentWidth.width) {
        document.documentElement.classList.add('scrollbar_active');
      } else {
        document.documentElement.classList.remove('scrollbar_active');
      }
      if (contentWidth.width < 320) {
        siteWrapper.style.display = 'none';
        warningPage.style.display = 'flex';
      } else if (contentWidth.width >= 320) {
        siteWrapper.style.display = 'block';
        warningPage.style.display = 'none';
      }
    }
  });
  resizeTracker.observe(document.documentElement);

  function setTheme(themeName) {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else if (document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
    }
    document.documentElement.classList.add(themeName);
    localStorage.setItem('theme', themeName);
  }

  function setThemeStart() {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark');
      themeToggler.checked = true;
    } else {
      setTheme('light');
      themeToggler.checked = false;
    }
  }

  themeToggler.addEventListener('change', () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      themeToggler.checked = true;
    } else {
      setTheme('light');
      themeToggler.checked = false;
    }
  });

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('hamburger_active');
    // languages.classList.toggle('languages_active');
    document.documentElement.classList.toggle('lock-scroll');
  });

  document.querySelectorAll('.menu__link, .menu__overlay').forEach((e) => {
    e.addEventListener('click', () => {
      menu.classList.remove('menu_active');
      hamburger.classList.remove('hamburger_active');
      // languages.classList.remove('languages_active');
      document.documentElement.classList.remove('lock-scroll');
    });
  });

  const currentYear = new Date().getFullYear();
  document.querySelector('#currentYear').textContent = currentYear;

  portfolioSwitchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let portfolioSwitchActiveButton = document.querySelector('.portfolio__switch_active'),
        portfolioTransferringElements = document.querySelectorAll(
          '.item_visible-to-hidden, .item_hidden-to-visible',
        );
      if (
        button.dataset.type === portfolioSwitchActiveButton.dataset.type ||
        portfolioTransferringElements.length !== 0
      ) {
        return false;
      } else {
        portfolioSwitchButtons.forEach((e) => {
          e.classList.remove('portfolio__switch_active');
        });
        button.classList.add('portfolio__switch_active');
        let activeButtonType = button.dataset.type;
        if (activeButtonType === 'all') {
          document.querySelectorAll('.item:not(.item_hidden)').forEach((shownItem) => {
            shownItem.classList.add('item_visible-to-hidden');
            setTimeout(function () {
              shownItem.classList.remove('item_visible-to-hidden');
              shownItem.classList.add('item_hidden');
              portfolioItem.forEach((eachItem) => {
                eachItem.classList.remove('item_hidden');
                eachItem.classList.add('item_hidden-to-visible');
                setTimeout(() => {
                  eachItem.classList.remove('item_hidden-to-visible');
                }, 500);
              });
            }, 500);
          });
        } else {
          document.querySelectorAll('.item:not(.item_hidden)').forEach((shownItem) => {
            shownItem.classList.add('item_visible-to-hidden');
            setTimeout(function () {
              shownItem.classList.remove('item_visible-to-hidden');
              shownItem.classList.add('item_hidden');
              portfolioItem.forEach((item) => {
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

export default main;
