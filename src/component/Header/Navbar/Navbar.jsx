import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useState } from 'react';
import navLogo from "../../../assets/image/Logo.png"
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleRefresh = () => {
        window.location.reload()
    }
    return (
        <nav>
            <div className='flex justify-between p-5  items-center'>
                <div>
                    <img onClick={handleRefresh} className='w-36 md:w-60' src={navLogo} alt="" />
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl md:hidden ">
                    {
                        open === true ?
                            <RxCross1></RxCross1>
                            : <BiMenuAltLeft ></BiMenuAltLeft>
                    }


                </div>
                <nav className={`absolute top-9 z-50 bg-white px-5 py-5 rounded-lg md:block md:static ${open ? 'block' : 'hidden'} ${open ? 'right-20' : ''}`}>
                    <ul className="flex flex-col md:flex-row gap-5">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/donation">Donation</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;