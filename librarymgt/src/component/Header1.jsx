import pic1 from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import pic3 from "../assets/images/top-icon.png";
const axios = require("axios");

function Libheaderfunc() {
  let navigate = useNavigate();

  function refreshPage() {
    window.location.reload(false);
  }
  function loggingout() {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/user/logout/",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("usertoken"),
      },
    })
      .then((res) => {
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userrole");
        sessionStorage.removeItem("usertoken");
        sessionStorage.removeItem("useremail");
        console.log("Signout successful");
        refreshPage();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
                              navigate("/viewrentedbooks");
                            }}
                          >
                            Books Rented
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            href=""
                            onClick={() => {
                              navigate("/adminsearchbook");
                            }}
                          >
                            Search Book
                          </a>{" "}
                        </li>
                        <li>
                          <a
                            href=""
                            onClick={() => {
                              navigate("/Librarian");
                            }}
                          >
                            workspace
                          </a>
                        </li>
                        <li class="mean-last">
                          {" "}
                          <a
                            href=""
                            onClick={
                              // window.location.reload(false);
                              //navigate("/");
                              loggingout
                            }
                          >
                            <img src={pic3} />
                            <span className="mx-2">Logout</span>
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
export default Libheaderfunc;
