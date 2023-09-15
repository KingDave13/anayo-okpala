import { useState, useEffect, useRef } from 'react';
import styles from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const productsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (
                homeRef.current &&
                scrollPosition >= homeRef.current.offsetTop &&
                scrollPosition < aboutRef.current.offsetTop
            ) {
                setActive('Home');
            } else if (
                aboutRef.current &&
                scrollPosition >= aboutRef.current.offsetTop &&
                scrollPosition < productsRef.current.offsetTop
            ) {
                setActive('About Us');
            } else if (
                productsRef.current &&
                scrollPosition >= productsRef.current.offsetTop
            ) {
                setActive('Products');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center
            fixed py-8 top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center
            max-w-[95rem] mx-auto'>
                <Link to='/'
                    onClick={() => {
                    setActive('Home');
                    window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt='logo'
                    className='w-[130px] h-auto'/>
                </Link>

                <div className='flex justify-between gap-40'>
                    <ul className='list-none hidden md:flex flex-row 
                    gap-20'>
                        {navLinks.map((link) => (
                            <li key={link.id}
                            className={`${
                                active === link.title
                                ? 'border-b-[4px] rounded-[1px] border-b-secondary text-white'
                                : 'text-white'
                            } hover:text-secondary text-[17px] 
                                cursor-pointer py-2 font-medium`}
                                onClick={() => {
                                    setActive(link.title);
                                    if (link.special) {
                                      navigate(link.route);
                                    }
                                  }}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    
                    <button className='hidden md:flex bg-secondary grow
                    text-[17px] py-3 px-14 text-primary rounded-[3px] font-medium'
                    onClick={() => navigate('/contact')}
                    >
                        Get a Quote
                    </button>
                </div>
                
                {/* FOR MOBILE */}

                <div className='md:hidden flex flex-1 justify-end 
                items-center'>
                    <img 
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain 
                    cursor-pointer'
                    onClick={() => setToggle(!toggle)}
                    />

                    <div className={`${!toggle ? 'hidden' 
                    : 'flex'} p-6 bg-white absolute top-10 right-0 
                    mx-4 my-8 min-w-[140px] z-10 rounded-xl flex-col
                    ss:mx-16 ss:my-10 ss:min-w-[220px]`}>
                        <ul className='list-none flex justify-end 
                        items-start flex-col gap-4'>
                        {navLinks.map((link) => (
                            <li
                            key={link.id}
                            className={`${
                                active === link.title
                                ? 'text-secondary'
                                : 'text-primary'
                            } font-poppins font-medium cursor-pointer 
                            text-[16px] ss:text-[20px] w-full 
                            hover:bg-dimWhite`}
                            onClick={() => {
                                setToggle(!toggle)
                                setActive(link.title);
                                if (link.special) {
                                    navigate(link.route);
                                }
                                }}
                            >
                            <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                        </ul>

                        <button className='bg-secondary text-[16px] py-1 px-3
                        text-white rounded-[5px] mt-5 ss:text-[20px]'
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;