import './css/style.css';
import devPicture from './images/BW_carlosfrontend_profile.png';
import ghLogo from './images/github-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import twitterLogo from './images/twitter-logo.svg';
import newTabLogo from './images/open-in-new.svg';

const socialMediaContainer = document.querySelectorAll('.social-media-container>a>img');

const devImg = document.querySelector('.header-img');
const ghImages = [...document.querySelectorAll('.gh-image')];
const newTabImages = [...document.querySelectorAll('.new-tab-image')];
devImg.src = devPicture;

[...socialMediaContainer][0].src = ghLogo;
[...socialMediaContainer][1].src = linkedinLogo;
[...socialMediaContainer][2].src = twitterLogo;

newTabImages.map(el => {
  const icon = el;
  icon.src = newTabLogo;
  return true;
});

ghImages.map(el => {
  const icon = el;
  icon.src = ghLogo;
  return true;
});