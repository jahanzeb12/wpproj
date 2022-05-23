import pic1 from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import pic3 from "../assets/images/top-icon.png";
function Libguestheaderfunc() {
  let navigate = useNavigate();
  return (
    <>
      <header>
        <div class="header">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      {" "}
                      <a href="index.html">
                        <img src={pic1} alt="#" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div class="menu-area">
                  <div class="limit-box">
                    <nav class="main-menu">
                      <ul class="menu-area-main">
                        <li class="active">
                          {" "}
                          <a
                            href=""
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            Home
                          </a>{" "}
                        </li>

                        <li>
                          <a
                            href=""
                            onClick={() => {
                              navigate("/guestbooks");
                            }}
                          >
                            Books
                          </a>
                        </li>

                        <li>
                          {" "}
                          <a
                            href=""
                            onClick={() => {
                              navigate("/about");
                            }}
                          >
                            About us
                          </a>{" "}
                        </li>
                        <li>
                          <a
                            href=""
                            onClick={() => {
                              navigate("/contact");
                            }}
                          >
                            Contact us
                          </a>
                        </li>
                        <li class="mean-last">
                          {" "}
                          <a
                            href=""
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            <img src={pic3} alt="#" />
                            <span className="mx-2">Login </span>
                          </a>{" "}
                        </li>
                        <li class="mean-last">
                          {" "}
                          <a
                            href=""
                            onClick={() => {
                              navigate("/signup");
                            }}
                          >
                            <img src={pic3} alt="#" />
                            <span className="mx-2">Signup</span>
                          </a>{" "}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Libguestheaderfunc;
