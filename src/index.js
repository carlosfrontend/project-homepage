import './css/style.css';
import devPicture from './images/BW_carlosfrontend_profile.png';
import ghLogo from './images/github-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import twitterLogo from './images/twitter-logo.svg';
import newTabLogo from './images/open-in-new.svg';
import workingPicture from './images/working.png';

const socialMediaContainer = document.querySelectorAll('.social-media-container>a>img');

const devImg = document.querySelector('.header-img');
const ghImages = [...document.querySelectorAll('.gh-image')];
const newTabImages = [...document.querySelectorAll('.new-tab-image')];
const workingImg = document.querySelector('.img-container>img');
const footerGHLogo = document.querySelector('.footer-social-media > a > img');
const footerLinkedinLogo = document.querySelector('.footer-social-media > a:nth-child(2) > img');
const footerTwitterLogo = document.querySelector('.footer-social-media > a:nth-child(3) > img');
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

workingImg.src = workingPicture;

footerGHLogo.src = ghLogo;
footerLinkedinLogo.src = linkedinLogo;
footerTwitterLogo.src = twitterLogo;