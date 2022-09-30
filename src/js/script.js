import main from './modules/main';
import translation from './modules/translation';
import translationDB from './modules/translationDB';

window.addEventListener('DOMContentLoaded', () => {
  main();
  translation();
  translationDB();
});
