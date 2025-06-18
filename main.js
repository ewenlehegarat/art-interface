let btnYtb = document.querySelector('.btn_ytb');
let videoYtb = document.querySelector('.video_ytb');
let myContainer = document.querySelector('.container')
let myIconFb = document.querySelector('.icon_fb')
let myIconTwitter = document.querySelector('.icon_twitter')
let myIconInsta = document.querySelector('.icon_insta')
let myIconLinkedin = document.querySelector('.icon_linkedin')
let myIconGithub = document.querySelector('.icon_github')
let myBtnx = document.querySelector('.btnX')
let myFooter = document.querySelector('footer')

btnYtb.addEventListener('click', function () {
    const currentDisplay = window.getComputedStyle(videoYtb).display;

    if (currentDisplay === 'none') {
        videoYtb.style.display = 'block';
        myBtnx.style.display = 'block'
        myIconFb.style.display = 'none'
        myIconTwitter.style.display = 'none'
        myIconInsta.style.display = 'none'
        myIconLinkedin.style.display = 'none'
        myIconGithub.style.display = 'none'
    } else {
        videoYtb.style.display = 'none';
    }
});

myBtnx.addEventListener('click', function () {
    myBtnx.style.display = 'none';
    videoYtb.style.display = 'none';
    myIconFb.style.display = 'block';
    myIconTwitter.style.display = 'block';
    myIconInsta.style.display = 'block';
    myIconLinkedin.style.display = 'block';
    myIconGithub.style.display = 'block';
    myFooter.style.display = 'flex';
    myFooter.style.transform = 'translateX(37px)'
    myFooter.style.letterSpacing = '1.3rem'
});