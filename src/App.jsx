import { useRef } from 'react';
import './App.css';

function App() {
  const menuRef = useRef(null);
  const colors = ["#FF69B4", "#0000FF", "#00BFFF", "#4682B4", "#3CB371", "#DC143C", "#FFFF00", "#4169E1"];

  const submit = (e) => {
    e.preventDefault();
    menuRef.current.classList.toggle("active");
  }

  return (
    <div className="App">
      <div className="Menu" ref={menuRef}>
        <div className='Submit' onClick={submit}>
          <i className="fa-solid fa-house" style={{border: "2px solid #333", fontSize: "27px"}}></i>             
        </div>

        <ul> 
          {Array.from({ length: 8 }, (_, index) => ( 
            <li key={index} style={{ '--li': index, color: colors[index]}}>
              {getFontAwesomeIcon(index)}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
}


const getFontAwesomeIcon = (index) => {
  switch (index) {
    case 0:
      return <i className="fa-brands fa-instagram"></i>;
    case 1:
      return <i className="fa-brands fa-facebook"></i>;
    case 2:
      return <i className="fa-brands fa-twitter"></i>;
    case 3:
      return <i className="fa-brands fa-telegram"></i>;
    case 4:
      return <i className="fa-brands fa-whatsapp"></i>;
    case 5:
      return <i className="fa-brands fa-youtube"></i>;
    case 6:
      return <i className="fa-brands fa-snapchat"></i>;
    case 7:
      return <i className="fa-brands fa-linkedin"></i>; 
    default:
      return null;
  }
}

export default App;
