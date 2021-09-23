//MENU
const menuBtn = document.querySelector('.hamburger__menu');
const topLine = document.querySelector('.top');
const middleLine = document.querySelector('.middle');
const bottomLine = document.querySelector('.bottom');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    topLine.classList.toggle('top--toggle');
    middleLine.classList.toggle('middle--toggle');
    bottomLine.classList.toggle('bottom--toggle');
    nav.classList.toggle('nav--toggle');
})



//PRODUCTS

const productsList = [
    {
        img: './assets/mini_drone.png',
        title: 'Mini Drone',
        content: 'Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.',
        btn: 'Get Now'
    },
    {
        img: './assets/drone_light 1.png',
        title: 'Drone Light',
        content: 'Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.',
        btn: 'Get Now'
    },
    {
        img: './assets/phantom_drone.png',
        title: 'Phantom Drone',
        content: 'Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.',
        btn: 'Get Now'
    }
]

const productListContainer = document.querySelector('#products__list ul');

for(let i = 0; i < productsList.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="img">
            <img src="${productsList[i].img}" alt="">
        </div>
        <div class="title">
            <h1>${productsList[i].title}</h1>
        </div>
        <div class="content">
            <p>
            ${productsList[i].content}
            </p>
        </div>
        <div class="btn">
            <button class="get__now--btn">${productsList[i].btn}</button>
        </div>
    `;

    productListContainer.appendChild(li);
}


//TESTIMONAIL

const testimonialList = [
    {
        img: './assets/profile1 1.png',
        author: 'Hugo Adams',
        testimonial: 'With high resolution camera, picture become clear and beautiful. It’s so easy to operate a drone',
        occupation: 'Content Creator'
    },
    {
        img: './assets/profile2.png',
        author: 'Jennie Obrien',
        testimonial: 'Taking high view video become easy and faster. Battery performance really helping for making film.',
        occupation: 'Director Film'
    },
    {
        img: './assets/profile3.png',
        author: 'Lisa Millz',
        testimonial: 'Making video content for my trip vlog so powerful and wonderful. Love the video quality.',
        occupation: 'Content WQCreator'
    }
]

const testimonialContainer = document.querySelector('#testimonial__list ul');

for(let i = 0; i < testimonialList.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="testimonial">
            <p>${testimonialList[i].testimonial}</p>
        </div>
        <div class="profile">
            <div class="img">
                <img src="${testimonialList[i].img}" alt="">
            </div>
            <div class="author">
                <p>${testimonialList[i].author}</p>
                <p>${testimonialList[i].occupation}</p>
            </div>
        </div>
    `;

    testimonialContainer.appendChild(li);
}