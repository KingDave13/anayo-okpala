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
            mx-auto'>
                <Link to='/'
                    onClick={() => {
                    setActive('');
                    window.scrollTo(0, 0);
                    }}>
                    <img src={logo} alt='logo'
                    className='w-[124px] h-auto'/>
                </Link>

                <ul>
                    
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;