import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import './styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <a href="#" className="nav-link">
        <IoMdArrowRoundBack />
      </a>
      <div className="links-container">
        <a href="#" className="nav-link">
          <BsFillMicFill />
        </a>
        <a href="#" className="nav-link">
          <AiOutlineSetting />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
