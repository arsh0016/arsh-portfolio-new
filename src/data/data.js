// Import images for the projects
import g1 from '../assets/images/g1.jpg';
import g2 from '../assets/images/g2.jpg';
import g3 from '../assets/images/g3.jpg';
import logo from '../assets/images/logo.png';

import ux1 from '../assets/images/ux1.jpg';
import ux2 from '../assets/images/ux2.jpg';
import ux3 from '../assets/images/ux3.jpg';

import portfolioImage from '../assets/images/pro1.PNG';
import ecommerceImage from '../assets/images/pro2.PNG';
import socialMediaImage from '../assets/images/pro3.PNG';

// Skills data
export const skills = [ 
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 80 },
  { name: "CSS", percent: 85 },
  { name: "Node.js", percent: 75 },
];

// Testimonials data
export const testimonials = [
  {
    text: "Their professionalism and creativity truly stand out. They understood our needs and delivered beyond expectations.",
    author: "Liam O'Connor",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    text: "Working with them was an amazing experience. They captured the essence of my project and brought it to life in ways I didn't expect.",
    author: "Ava Green",
    avatar: "https://randomuser.me/api/portraits/women/35.jpg"
  },
  {
    text: "A pleasure to work with! They are highly skilled and always ready to take on new challenges with enthusiasm.",
    author: "Noah Harris",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    text: "Their attention to detail and commitment to quality is unmatched. They made our project a success with their expert work.",
    author: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];

// Projects data
export const projects = [
  {
    id: 1,
    title: 'THE ARTHOUSE',
    description: 'An immersive website designed to highlight artistic creations and design projects. Built with Vue.js and Tailwind CSS for a sleek, modern look.',
    image: portfolioImage,
    link: 'project/1',
  },
  {
    id: 2,
    title: 'CAPSTONE PROJECT',
    description: 'On our Capstone website, we showcase the Astronomy Picture of the Day (APOD). In addition to this, we also feature top stories related to astronomy.',
    image: ecommerceImage,
    link: 'project/2',
  },
  {
    id: 3,
    title: 'GALLERY',
    description: 'A gallery website where users can view pictures from the last 9 days, showcasing Astronomy Picture of the Day (APOD).',
    image: socialMediaImage,
    link: 'project/3',
  },
];

// Graphic Projects data
export const graphicProjects = [
  {
    id: 7,
    title: 'Graphic Design',
    description: 'A modern showcase of artistic excellence, blending creativity with clean and innovative design to deliver a visually stunning experience.',
    image: g1,
    link: 'project/7',
  },
  {
    id: 8,
    title: 'Graphic Design',
    description: 'A illustration showcasing creativity, boldness, precision, and artistic excellence.',
    image: g2,
    link: 'project/8',
  },
  {
    id: 9,
    title: 'Graphic Design ',
    description: 'This graphic design, featuring a creatively designed was created for a client.',
    image: g3,
    link: 'project/9',
  },
  {
    id: 13,
    title: 'Logo Design',
    description: 'As you can see, this logo was created for a client, and they loved it! The process involved understanding their brand identity and translating it into a visually striking design. Combining simplicity and creativity, this project was a perfect blend of my graphic design and UX skills. Each element of the logo was carefully crafted to resonate with the clients vision and target audience.',
    image: logo,
    link: 'project/13',
  },
];

// UX Projects data
export const uxProjects = [
  {
    id: 10,
    title: 'Interactive Media Design Graduates',
    description: 'Designed UX for interactive media design graduates of 2024, highlighting creativity and innovation.',
    image: ux1,
    link: 'project/10',
  },
  {
    id: 11,
    title: 'Interactive Media Design Graduates',
    description: ' Showcasing user-centered design that empowers graduates with visually engaging, functional, and intuitive interfaces.',
    image: ux2,
    link: 'project/11',
  },
  {
    id: 12,
    title: 'Astronomy Picture Of The Day',
    description: 'Created UX design for Astronomy Picture of the Day, displaying the current days image. Ensuring an intuitive, visually captivating layout that enhances user engagement and exploration of space imagery.',
    image: ux3,
    link: 'project/12',
  },
];
