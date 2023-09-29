import {
  product1,
  product3,
  vector,
  vector2,
  vector3,
  pic1,
  pic2,
  pic3,
  pic4,
  img1,
  img2,
  img3,
  img4,
  cellotapes,
  cellotapes1,
  celloA,
  celloB,
  clothingA,
  clothingB,
  clothingC,
  clothingD,
  clothingE,
  clothingF,
  clothingG,
  clothingH,
  clothingI,
  clothingJ,
  clothingK,
  clothingL,
  clothingM,
  clothingN,
  clothingO,
  clothingP,
  clothingQ,
  LeatherA,
  LeatherB,
  LeatherC,
  tapeA,
  tapeB,
  transparentA,
  transparentB,
  transparentC,
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
    name: 'clothing',
    title: 'Clothing Materials',
    description: 'Clothing materials for various industrial and domestic uses. We have over 500+ different designs and colours of these clothing materials.',
    image: product1,
    link: 'https://wa.link/n4v0ws'
  },
  {
    name: 'cellotapes',
    title: 'Cellotapes',
    description: 'Cellotapes for various industrial and domestic uses. We have these in various sizes.',
    image: cellotapes1,
    link: 'https://wa.link/nffx29'
  },
  {
    name: 'tape',
    title: 'Tape',
    description: 'Tapes for various industrial and domestic uses. We have these in various patterns, strengths and colours.',
    image: product3,
    link: 'https://wa.link/2loufh'
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

export const productsMain = [
  {
    name: 'Clothing Materials',
    description: 'Clothing materials for various industrial and domestic uses. We have over 500 different designs and colours of these.',
    image: img1,
    link: 'https://wa.link/n4v0ws',
    images: [ clothingA, clothingB, clothingC, clothingD, clothingE, 
    clothingF, clothingG, clothingH, clothingI, clothingJ, clothingK, 
    clothingL, clothingM, clothingN, clothingO, clothingP, clothingQ ]
  },
  {
    name: 'Tape',
    description: 'Tapes for various industrial and domestic uses. We have these in various patterns, strengths and colours.',
    image: img2,
    link: 'https://wa.link/2loufh',
    images: [ tapeA, tapeB ]
  },
  {
    name: 'PVC Transparent',
    description: 'PVC Transparent description to be inserted here.',
    image: img3,
    link: 'https://wa.link/gcvjmu',
    images: [ transparentA, transparentB, transparentC ]
  },
  {
    name: 'PVC Leather',
    description: 'PVC Leather description to be inserted here.',
    image: img4,
    link: 'https://wa.link/2e948h',
    images: [ LeatherA, LeatherB, LeatherC ]
  },
  {
    name: 'Cellotape',
    description: ' Cellotape description to be inserted here.',
    image: cellotapes,
    link: 'https://wa.link/nffx29',
    images: [ celloA, celloB ]
  },
  {
    name: 'Sewing Thread',
    description: ' Sewing thread description to be inserted here.',
    image: cellotapes,
    link: 'https://wa.link/oghwza',
    images: []
  }
];

export const testimonials = [
  {
    testimonial: "Anayo Okpala Global Concept has been our trusted partner for years. Their top-notch clothing materials for mattress making have significantly improved the quality of our products. The consistency in the quality of their materials is impressive, and their customer service is second to none.",
    image: pic1,
    name: "Hassan Jamal",
    designation: "Mattress Manufacturer",
  },
  {
    testimonial: "I've been sourcing PVC Transparent from Anayo Okpala Global Concept, and I must say, their product quality is unmatched. It's crystal clear, durable, and perfect for our packaging needs. The reliability and professionalism of their team keep us coming back.",
    image: pic2,
    name: "Anita Chika Aniedu",
    designation: "Entrepreneur",
  },
  {
    testimonial: "Anayo Okpala Global Concept is my go-to supplier for all things tape-related. Their range of tapes and cellotapes is extensive, and the quality is consistently excellent. Fast delivery and competitive prices make them a reliable partner for our packaging needs.",
    image: pic3,
    name: "Ebiere Alfred Johnson",
    designation: "Tape Enthusiast",
  },
  {
    testimonial: "Our industrial facility relies on Anayo Okpala Global Concept for various industrial accessories, and they never disappoint. From tapes to specialized tools, they have it all. Their products have enhanced our efficiency and productivity. Highly recommended!",
    image: pic4,
    name: "Olajide Babatunde",
    designation: "Industrial Supplies Manager",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    Icon: BsTwitter,
    link: ""
  },
  {
    id: "social-media-2",
    Icon: BsInstagram,
    link: ""
  },
  {
    id: "social-media-3",
    Icon: BsFacebook,
    link: ""
  },
  {
    id: "social-media-4",
    Icon: FaLinkedinIn,
    link: ""
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
        link: "",
      },
      {
        name: "Privacy Policy",
        link: "",
      },
      {
        name: "Security",
        link: "",
      },
      {
        name: "Terms of Use",
        link: "",
      },
    ],
  },
];