import { useState, useEffect, useRef } from 'react';
import styles from '../styles';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { BsX, BsList } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setToggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
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
                    gap-24'>
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
                    {toggle ? (
                    <BsX
                        size={40}
                        className="object-contain cursor-pointer"
                        style={{ color: '#fff' }}
                        onClick={() => setToggle(!toggle)}
                    />
                    ) : (
                    <BsList
                        size={40}
                        className="object-contain cursor-pointer"
                        style={{ color: '#fff' }}
                        onClick={() => setToggle(!toggle)}
                    />
                    )}

                    <div ref={menuRef} 
                    className={`p-6 bg-white absolute top-8 right-0 mx-6 
                    my-14 min-w-[140px] z-10 rounded-xl flex-col ss:mx-16 
                    ss:my-14 ss:min-w-[220px] shadow-xl slide-down-menu`}
                    style={{ height: toggle ? 'auto' : 0, opacity: toggle ? 1 : 0, visibility: toggle ? 'visible' : 'hidden', transition: 'height 0.3s, opacity 0.3s, visibility 0.3s' }}>
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
                        text-white rounded-[5px] mt-5 ss:text-[20px] text-[15px]'
                        onClick={() => {
                            setToggle(!toggle);
                            navigate('/contact');
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