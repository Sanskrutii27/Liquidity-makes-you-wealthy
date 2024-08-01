import React, { useState, useEffect } from "react";
import "./Signup.css";
import Footor from "./Footor";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [mobile_no, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmpassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/charts')
    }
  }, [navigate])

  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, username, mobile_no, email, password, confirm_password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/charts');
      } else {
        alert(data.message); // Show alert with error message
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again later."); // Show alert for network error or other exceptions
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    collectData(); // Call your function to send data to the backend
  };
  return (
    <div>
      <div className="wrapper outer">
        <div className="container mainc">
          <div className="row mainrows">
            <div className="col rights">
              <div className=" input-boxs">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                  <div className=" input-fields">
                    <input
                      type="text"
                      className=" inputs"
                      id="names"
                      autoCorrect="off"
                      required
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="names" name="Fullname">
                      Fullname
                    </label>
                  </div>
                  <div className=" input-fields">
                    <input
                      type="text"
                      className=" inputs"
                      id="usernames"
                      autoCorrect="off"
                      required
                      autoComplete="off"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="usernames" name="Username">
                      Username
                    </label>
                  </div>
                  <div className=" input-fields">
                    <input
                      type="tel"
                      className=" inputs"
                      id="telephone"
                      autoComplete="off"
                      maxlength="10"
                      required
                      value={mobile_no}
                      onChange={(e) => setMobileno(e.target.value)}
                    />
                    <label htmlFor="telephone" name="Mobile Number">
                      Mobile Number
                    </label>
                  </div>
                  <div className=" input-fields">
                    <input
                      type="email"
                      className=" inputs"
                      id="email"
                      required
                      autoCorrect="off"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email" name="Email">
                      Email
                    </label>
                  </div>
                  <div className=" input-fields">
                    <input
                      type="password"
                      className=" inputs"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className=" input-fields">
                    <input
                      type="password"
                      className=" inputs"
                      id="cpassword"
                      required
                      value={confirm_password}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <label htmlFor="cpassword">Confirm Password</label>
                  </div>
                  <div className=" input-fields">
                    <button type="submit" className="Submits">Signup</button>
                  </div>
                  <div className="signins">
                    <span className="spanhhs">
                      Already have an account?<Link to="/login">Login</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footor />
    </div>
  );
};

export default Signup;
