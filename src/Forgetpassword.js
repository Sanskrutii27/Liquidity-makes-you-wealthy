import React from "react";
import './Forgetpassword.css'
import Footor from "./Footor";
import { Link } from 'react-router-dom'; // Import Link from React Router Dom

const Forgetpassword = () => {
  return (
    <div>
      <div className="wrapper outside">
        <div>
          <Link to="/login">
            <button className="btn">back</button>
          </Link>
        </div>
        <div className="container main">
          <div className="row mainrow">
            <div className="col right">
              <div className=" input-box">
                <h1>Forgot Password</h1>
                <form action="" method="post">
                  <p className="head">Enter your Email</p>
                  <div className=" input-field">
                    <input type="email" className="input" id="email" required autoCorrect="off"
                      autoComplete="off" />
                    <label htmlFor="email" name="Email">Email</label>
                  </div>
                  <div className=" input-field">
                    <Link to="/verifypassword">
                      <input type="submit" className="Submit" value="Next" />
                    </Link>
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
}
export default Forgetpassword;