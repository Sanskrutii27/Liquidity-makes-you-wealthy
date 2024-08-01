import './VerifyPassword.css'
import Footor from "./Footor";
import { Link } from 'react-router-dom'; // Import Link from React Router Dom

const VerifyPassword = () => {
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
                  <h1>Verify Password</h1>
                  <form action="" method="post">
                    <p className="head">New Password</p>
                    <div className=" input-field">
                      <input type="password" className="input" id="password1" required autoCorrect="off"
                        autoComplete="off" />
                    </div>
                    <p className="head">Confirm Password</p>
                    <div className=" input-field">
                      <input type="password" className="input" id="password2" required autoCorrect="off"
                        autoComplete="off" />
                    </div>
                    <div className=" input-field">
                      <input type="submit" className="Submit" value="Change" style={{marginTop:'2px'}} />
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
  export default VerifyPassword;