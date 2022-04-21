import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import '../../todoApp.css';

const Header = ({ addFormIsShown, setAddFormIsShown }) => {

  const showAddForm = () => {
    setAddFormIsShown((addFormIsShown) => !addFormIsShown);
  }

  return (
    <div className="header">
        <h1 className="title">TO DO LIST</h1>

        <button 
          className='header__show-add-btn'
          onClick={ showAddForm }
        >
          <svg className = {`plus-icon ${addFormIsShown && 'rotate-plus-icon'}`} width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
    </div>
  )
}

export default Header