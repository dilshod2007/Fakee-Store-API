import React, { useState } from 'react';
import axios from "../../api/axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../login/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post("/auth/login", { username, password });
      if (response.status === 200) {
        alert("User registered successfully");
        // Toastify({
        //   text: "User loged sucssesufully",
        //   duration: 3000,
        //   destination: "https://github.com/apvarun/toastify-js",
        //   newWindow: true,
        //   close: true,
        //   gravity: "top", 
        //   position: "left", 
        //   stopOnFocus: true, 
        //   style: {
        //     background: "linear-gradient(to right, #00b09b, #96c93d)",
        //   },
        //   onClick: function(){} 
        // }).showToast();
        navigate("/home");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (

    <div className='login-container'>
      <div className='login-form'>
      <div className='text'>
        <h1>Login</h1>
      </div>
      <form className='form' onSubmit={handleUserLogin}>
        <div className="field">
          <div className="fas fa-user"></div>
          <input required
            type="text"
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <div className="field">
          <div className="fas fa-lock"></div>
          <input required
            type="password"
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
       
        <button 
          className='form__button'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
        
      </form>
    </div>
    </div>
  );
};

export default Login;
