import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className='flex flex-shrink-0 items-center'>
            {/*<img className="mx-2 w-10" src={logo} alt='logo'/>*/}
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            
            <a href="https://www.linkedin.com/in/abhishek-yadv/"><FaLinkedin/></a>
            <a href=" https://github.com/Abhishek11815100"><FaGithub/></a>
            <FaTwitterSquare/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar