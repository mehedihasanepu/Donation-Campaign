import { BiMenuAltLeft } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useState } from 'react';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className='flex justify-between p-5  items-center'>
                <div>
                    <img className='w-36 md:w-60' src="/src/assets/image/Logo.png" alt="" />
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl md:hidden ">
                    {
                        open === true ?
                            <RxCross1></RxCross1>
                            : <BiMenuAltLeft ></BiMenuAltLeft>
                    }


                </div>
                <nav className={`absolute top-9 z-50 bg-white px-5 py-5 rounded-lg md:block md:static ${open ? 'block' : 'hidden'} ${open ? 'right-14' : ''}`}>
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