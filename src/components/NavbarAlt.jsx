import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
import { navLinks } from '../constants';
import { logo2, menu, close } from '../assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className={`${styles.paddingX} w-full flex items-center
            fixed py-8 top-0 z-20 bg-white`}>
            <div className='w-full flex justify-between items-center
            max-w-[95rem] mx-auto'>
                <Link to='/about'
                    onClick={() => {
                    setActive('');
                    window.scrollTo(0, 0);
                    }}>
                    <img src={logo2} alt='logo'
                    className='w-[130px] h-auto'/>
                </Link>

                <div className='flex justify-between gap-40'>
                    <ul className='list-none hidden md:flex flex-row 
                    gap-16'>
                        {navLinks.map((link) => (
                            <li key={link.id}
                            className={`${
                                active === link.title
                                ? 'border-b-[4px] rounded-[1px] border-b-secondary text-primary'
                                : 'text-primary'
                            } hover:text-secondary text-[17px] 
                                cursor-pointer py-2 font-medium`}
                            onClick={() => setActive(link.title)}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    
                    <button className='hidden md:flex bg-primary grow
                    text-[17px] py-3 px-14 text-white rounded-[3px] font-medium'
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
                            setToggle(!toggle);
                            setActive(link.title);
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