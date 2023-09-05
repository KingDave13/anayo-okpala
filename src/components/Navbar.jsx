import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center
        fixed py-6 top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center
            max-w-7xl mx-auto'>
                <Link to='/'
                    onClick={() => {
                    setActive('');
                    window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt='logo'
                    className='w-[130px] h-auto'/>
                </Link>

                <ul className='list-none sm:flex flex-row gap-14'>
                    {navLinks.map((link) => (
                        <li key={link.id}
                        className={`${
                            active === link.title
                            ? 'text-white'
                            : 'text-white'
                          } hover:text-white text-[18px] 
                            cursor-pointer`}
                          onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                
                <button className='bg-secondary text-[17px] py-3 
                px-14 text-primary rounded-[3px]'>
                    Get a Quote
                </button>
            </div>
        </nav>
    )
};

export default Navbar;