import './css/style.css';
import devPicture from './images/BW_carlosfrontend_profile.png';
import ghLogo from './images/github-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import twitterlogo from './images/twitter-logo.svg';

const socialMediaContainer = document.querySelectorAll('.social-media-container>a>img');

const devImg = document.querySelector('.header-img');
devImg.src = devPicture;

[...socialMediaContainer][0].src = ghLogo;
[...socialMediaContainer][1].src = linkedinLogo;
[...socialMediaContainer][2].src = twitterlogo;