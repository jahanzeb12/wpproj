import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libguestheaderfunc from "../component/Header2";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import { useRef, useState } from "react";
import axios from "axios";
let bodyFormData = new FormData();

function Contactpage() {
  var header = null;

  const ChangeHeader = () => {
    let user = sessionStorage.getItem("userrole");
    if (user == "librarian") {
      return <Libheaderfunc />;
    } else if (user == "user") {
      return <Headerfunc />;
    } else {
      return <Libguestheaderfunc />;
    }
  };

  var header = ChangeHeader();
  const custname = useRef(null);
  const custrev = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    bodyFormData.append("customername", custname.current.value);
    bodyFormData.append("review", custrev.current.value);
    console.log("hellooo");
    // console.log(bodyFormData.get("title"));
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/newfeedback",
      headers: {
        "Content-Type": "application/json",
      },
      data: { name: custname.current.value, review: custrev.current.value },
    })
      .then(() => {
        console.log("Review successful");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      {header}
      <div class="main-layout contact-page">
        <div class="about-bg">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="abouttitle">
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="Contact">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <form onSubmit={submitForm}>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <input
                        class="form-control"
                        placeholder="Name"
                        name="name"
                        type="text"
                        ref={custname}
                      />
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <input
                        class="form-control"
                        placeholder="Email"
                        name="email"
                        type="Email"
                      />
                    </div>

                    <div class="col-sm-12">
                      <textarea
                        class="textarea"
                        name="message"
                        placeholder="Message"
                        ref={custrev}
                      ></textarea>
                    </div>
                  </div>
                  <center>
                    <button class="send-btn">Send</button>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerfunc />
    </>
  );
}
export default Contactpage;
