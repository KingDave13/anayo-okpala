import {
  product1,
  product2,
  product3,
  vector,
  vector2,
  vector3,
  pic1,
  pic2,
  pic3,
  pic4,
} from '../assets';

import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export const navLinks = [
  {
    id: "home",
    title: "Home",
    route: "/",
  },
  {
    id: "about",
    title: "About Us",
    route: "/about",
  },
  {
    id: "products",
    title: "Products",
    route: "/products",
  },
  {
    id: "",
    title: "Contact Us",
    route: "/contact",
    special: true,
  },
];

export const products = [
  {
    name: 'product_name',
    title: 'Product Name',
    description: 'Product Description. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
    image: product1,
  },
  {
    name: 'product_name',
    title: 'Product Name',
    description: 'Product Description. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
    image: product2
  },
  {
    name: 'product_name',
    title: 'Product Name',
    description: 'Product Description. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.',
    image: product3
  },
];

export const values = [
  {
    name: 'quality',
    title: 'Quality',
    description: 'Our products are of the best quality available in the market so you can be assured of the best when dealing with us.',
    image: vector
  },
  {
    name: 'reliability',
    title: 'Reliability',
    description: 'You can always bank on us to always be apprised and be fully stocked with all the best items, round the clock, all year.',
    image: vector2
  },{
    name: 'security',
    title: 'Security',
    description: 'Security is also one of our watchwords as we prioritize absolute security of transactions between us and our customers.',
    image: vector3
  },
];

export const testimonials = [
  {
    testimonial: "I trust Anayo Okpala Global Concept because their excellent customer service and quality products blow my mind everytime!",
    image: pic1,
    name: "Hassan Jamal",
    designation: "Agro-Economist",
  },
  {
    testimonial: "I trust Anayo Okpala Global Concept because their excellent customer service and quality products blow my mind everytime!",
    image: pic2,
    name: "Anita Chika Aniedu",
    designation: "Entrepreneur",
  },
  {
    testimonial: "I trust Anayo Okpala Global Concept because their excellent customer service and quality products blow my mind everytime!",
    image: pic3,
    name: "Ebiere Alfred Johnson",
    designation: "CEO, Ebiere Innovations",
  },
  {
    testimonial: "I trust Anayo Okpala Global Concept because their excellent customer service and quality products blow my mind everytime!",
    image: pic4,
    name: "Olajide Babatunde",
    designation: "Techpreneur",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    Icon: BsTwitter,
    link: "https://twitter.com/DavidOkaliwe"
  },
  {
    id: "social-media-2",
    Icon: BsInstagram,
    link: "https://www.linkedin.com/in/david-okaliwe-229666234/"
  },
  {
    id: "social-media-3",
    Icon: BsFacebook,
    link: "https://github.com/KingDave13"
  },
  {
    id: "social-media-4",
    Icon: FaLinkedinIn,
    link: "https://github.com/KingDave13"
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About",
        route: "/about",
      },
      {
        name: "Products",
        route: "/products",
      },
      {
        name: "Contact",
        route: "/contact",
      }, 
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Cookies",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Privacy Policy",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Security",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Terms of Use",
        link: "https://www.hoobank.com/blog/",
      },
    ],
  },
];