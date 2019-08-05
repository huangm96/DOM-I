const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nav_name = document.querySelectorAll('a');
nav_name[0].textContent=siteContent.nav["nav-item-1"]; 
nav_name[1].textContent=siteContent.nav["nav-item-2"]; 
nav_name[2].textContent=siteContent.nav["nav-item-3"]; 
nav_name[3].textContent=siteContent.nav["nav-item-4"]; 
nav_name[4].textContent=siteContent.nav["nav-item-5"]; 
nav_name[5].textContent=siteContent.nav["nav-item-6"]; 



const cta_h1 = document.querySelector('.cta-text h1');
cta_h1.textContent=siteContent.cta.h1;
const cta_button = document.querySelector('.cta-text button');
cta_button.textContent=siteContent.cta.button;

const cta_img = document.getElementById("cta-img");
cta_img.setAttribute('src', siteContent.cta["img-src"]);

const feature_h4 = document.querySelector('.top-content .text-content:first-child h4');
feature_h4.textContent = siteContent["main-content"]["features-h4"];
const feature_p = document.querySelector('.top-content .text-content:first-child p');
feature_p.textContent = siteContent["main-content"]["features-content"];
const about_h4 = document.querySelector('.top-content .text-content:last-child h4');
about_h4.textContent = siteContent["main-content"]["about-h4"];
const about_p = document.querySelector('.top-content .text-content:last-child p');
about_p.textContent = siteContent["main-content"]["about-content"];

const middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const services_h4 = document.querySelector('.bottom-content .text-content:first-child h4');
services_h4.textContent = siteContent["main-content"]["services-h4"];
const services_p = document.querySelector('.bottom-content .text-content:first-child p');
services_p.textContent = siteContent["main-content"]["services-content"];
const product_h4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
product_h4.textContent = siteContent["main-content"]["product-h4"];
const product_p = document.querySelector('.bottom-content .text-content:nth-child(2)  p');
product_p.textContent = siteContent["main-content"]["product-content"];
const vision_h4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
vision_h4.textContent = siteContent["main-content"]["vision-h4"];
const vision_p = document.querySelector('.bottom-content .text-content:nth-child(3) p');
vision_p.textContent = siteContent["main-content"]["vision-content"];

const contact_h4 = document.querySelector('.contact h4');
contact_h4.textContent= siteContent.contact["contact-h4"];
const contact_p = document.querySelectorAll('.contact p');
contact_p[0].textContent = siteContent.contact.address;
contact_p[1].textContent = siteContent.contact.phone;
contact_p[2].textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;