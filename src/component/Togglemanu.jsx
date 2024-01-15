import React,{useState} from 'react'
import {FaUser} from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";

function Togglemenu({onClik}) {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    // const handleLogout = () => {
    //   // Clear token on logout
    //   localStorage.removeItem('token');
    //   setIsAuthenticated(false);
    //   navigate('/'); // Redirect to home or login page
    // };

    const navigate = useNavigate();
    const handleClick = () => {
        console.log(onClik);
        localStorage.removeItem('token');
        // setIsAuthenticated(false);
        onClik(false);
        navigate('/');
    }
    // Other code...

    return (
        <div>
          {/* Your component content... */}
    
          {isVisible && (
            <div
            className="fixed top-20 right-1 w-48 h-52 bg-white p-4 rounded-lg shadow-md"
            
            >
              <div className="flex justify-center items-center mt-4 w-full max-w-2xl bg-slate-100 hover:bg-slate-300  p-4 rounded-lg shadow-md ">
                <button>Account Settings</button>
              </div>
              <div className="flex justify-center items-center mt-4 w-full max-w-2xl bg-slate-100 hover:bg-slate-300  p-4 rounded-lg shadow-md ">
                <button onClick={handleClick}>Sign out</button>
              </div>
            </div>
          )}
    
          {/* Your button or trigger for the pop-up */}
          <button onClick={toggleVisibility} className="focus:outline-none hover:border hover:rounded-2xl p-1.5">
          <FaUser size={32} color="blue" />
          </button>
        </div>
      );
}

export default Togglemenu