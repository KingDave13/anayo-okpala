import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles';
import { logo, menu, close } from '../assets';

const Navbar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center
        fixed py-6 top-0 z-20 bg-primary`}>
            <div>
                <Link>
                    <img src={logo} alt='logo'
                    className='w-[124px] h-auto'/>
                </Link>
            </div>
        </nav>
    )
};

export default Navbar;