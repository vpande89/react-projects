import React, {useEffect} from 'react'
import'./Menu.css'
import Logo from '/Users/vidhi.pandey/Documents/react/React-Projects/youtube-marketplace-dashboard/src/img/logo.jpeg'
import { FaCogs, FaCreditCard , FaDiaspora, FaHistory, FaEject, FaFeatherAlt, FaFirstOrderAlt} from "react-icons/fa";

function Menu() {



    useEffect(()=> {
        const mainMenuLi = document
        .getElementById('mainMenu')
        .querySelectorAll("li");

    },[]);
  return (
    <menu>
        <img src={Logo} alt="" />
        <ul id="mainMenu">
            <Icon icon={<FaCogs/>} />
            <Icon icon={<FaCreditCard/>} />
            <Icon icon={<FaDiaspora/>} />
            <Icon icon={<FaEject/>} />
            <Icon icon={<FaFeatherAlt/>} />
          
        </ul>

        <ul className="lastMenu">
            <Icon icon={<FaFirstOrderAlt/>} />
            <Icon icon={<FaHistory/>} />

        </ul>
    </menu>
  )
}


const Icon=({icon}) => (
    <li>
        <a href="#">{icon}</a>
    </li>
); 

export default Menu