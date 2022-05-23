import { useState } from "react";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loginfunc from "../component/Login";

import pic1 from "../assets/images/bgbooks.jpg";
import Loginpersonfunc from "../component/Loginpersonnel";

function Loginpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  function refreshPage() {
    window.location.reload(false);
  }
  let navigate = useNavigate();
  const [signupdata, updatesignup] = useState(1);
  const [regdata, updatereg] = useState(0);
  const [heading, updateheading] = useState("Login User");
  const newup = () => {
    updatesignup(1);
    updatereg(0);
    updateheading("Login User");
  };
  const newreg = () => {
    updatesignup(0);
    updatereg(1);
    updateheading("Login Personnel");
  };

  return (
    <>
      <div
        className="container-fluid bg-image cord"
        style={{
          backgroundImage: `url(${pic1})`,
          height: "100%",
          paddingBottom: "20px",
          paddingTop: "20px",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className="myform form center">
          <div className="logo mb-3">
            <button
              type="button"
              class="btn btn-warning rounded"
              onClick={() => {
                navigate("/");
                refreshPage();
              }}
              // style={{ float: "right" }}
            >
              <i class="fa fa-caret-left" aria-hidden="true"></i>&nbsp;Back
            </button>
          </div>
          <center>
            <h1 className="display-4">{heading}</h1>
          </center>
          <br></br>
          <div>
            <button
              type="button"
              className="btn btn-outline-success col-lg-5 rounded-start btn-lg mx-4"
              style={{ fontSize: "large", height: "15%" }}
              onClick={newup}
            >
              Login User
            </button>

            <button
              type="button"
              className="btn btn-outline-info col-lg-5 rounded-end btn-lg"
              style={{ fontSize: "large", height: "15%" }}
              onClick={newreg}
            >
              Login Personnel
            </button>
          </div>

          <br />
          <br />
          <div>{signupdata ? <Loginfunc /> : <Loginpersonfunc />}</div>
        </div>
      </div>
    </>
  );
}
export default Loginpage;
