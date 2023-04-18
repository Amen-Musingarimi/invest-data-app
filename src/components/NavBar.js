import { useNavigate, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import './styles/NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <nav className="nav-bar">
      <Link to="/" onClick={handleBackClick} className="nav-link">
        <IoMdArrowRoundBack />
      </Link>
      <div className="links-container">
        <Link className="nav-link">
          <BsFillMicFill />
        </Link>
        <Link className="nav-link">
          <AiOutlineSetting />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
