import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/CDN_URL";

const Header = (props) => {
    
    const navLinks = props.navLinks;

    return (    
        <header className="px-5 ">
            <div className="container h-20 flex justify-between items-center ">
                {/* logo here */}
                <div className="">
                    <img className="w-[70px] h-[70px] rounded-lg" src={LOGO} />
                </div>
                
                {/* navbar here */}
                <nav className="p-4 font-medium ">
                    <ul className="flex justify-around">
                        {
                            navLinks.map( (link) => <li key={link.id} className="mx-4 hover:text-orange-500 text-slate-700 tracking-wider"><Link to={link.linkTo}>{link.name}</Link></li>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;