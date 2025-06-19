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
let img1 = document.querySelector('.auto_portrait')
let img2 = document.querySelector('.van_gogh')
let img3 = document.querySelector('.auto_portrait2')
let img4 = document.querySelector('.cafe_de_nuit')
let myBody = document.querySelector('body')
let texte1 = document.querySelector('.texte_1')
let texte2 = document.querySelector('.texte_2')
let texte3 = document.querySelector('.texte_3')
let texte4 = document.querySelector('.texte_4')

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

img1.addEventListener('click', function () {
    let currentOpacity = window.getComputedStyle(img1).opacity;

    if (currentOpacity === '1') {
        img1.style.opacity = '0.2';
        texte1.style.opacity = '1';
    } else {
        img1.style.opacity = '1';
        texte1.style.opacity = '0';
    }
});

img2.addEventListener('click', function () {
    let currentOpacity = window.getComputedStyle(img2).opacity;

    if (currentOpacity === '1') {
        img2.style.opacity = '0.2';
        texte2.style.opacity = '1';
    } else {
        img2.style.opacity = '1';
        texte2.style.opacity = '0';
    }
});

img3.addEventListener('click', function () {
    let currentOpacity = window.getComputedStyle(img3).opacity;

    if (currentOpacity === '1') {
        img3.style.opacity = '0.2';
        texte3.style.opacity = '1';
    } else {
        img3.style.opacity = '1';
        texte3.style.opacity = '0';
    }
});

img4.addEventListener('click', function () {
    let currentOpacity = window.getComputedStyle(img4).opacity;

    if (currentOpacity === '1') {
        img4.style.opacity = '0.2';
        texte4.style.opacity = '1';
    } else {
        img4.style.opacity = '1';
        texte4.style.opacity = '0';
    }
});
