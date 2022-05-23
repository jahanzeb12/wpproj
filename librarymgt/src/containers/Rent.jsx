import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libguestheaderfunc from "../component/Header2";
import book from "../assets/images/bk.jpg";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-date-picker";
import { useRef, useState } from "react";
import axios from "axios";

function Rentpage() {
  var header = null;
  let navigate = useNavigate();
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
  const custemail = useRef(null);

  var date = new Date();
  var newdate = date.setDate(date.getDate() + 7);
  const dt = new Date(newdate);

  function submitForm(e) {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://127.0.0.1:3001/rentbook",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        customer_name: custname.current.value,
        email_address: custemail.current.value,
        title: sessionStorage.getItem("renttitle"),
        author: sessionStorage.getItem("rentauthor"),
        genre: sessionStorage.getItem("rentgenre"),
      },
    })
      .then(() => {
        console.log("Rent successful");
        navigate("/books");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {header}
      <div class="about-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="abouttitle">
                <h2>Renting Book</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 mb-5 ">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <center className="mb-3 mt-3">
              <img src={book} width="250px" />

              <h1 className="mt-2">{sessionStorage.getItem("renttitle")}</h1>
              <p style={{ color: "black" }}>
                Genre: {sessionStorage.getItem("rentgenre")}
              </p>
              <p style={{ color: "black" }}>
                Author: {sessionStorage.getItem("rentauthor")}
              </p>
            </center>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <form
              action=""
              method="post"
              name="login"
              className="mt-5 mb-3"
              onSubmit={submitForm}
            >
              <div className="form-group col-lg-12 col-md-12">
                <label for="exampleInputEmail1" className="labeltext">
                  Name:
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                  ref={custname}
                  style={{ border: "1px solid grey" }}
                  required
                />
              </div>
              <div className="form-group col-lg-12 col-md-12">
                <label for="exampleInputEmail1" className="labeltext">
                  Email Address
                </label>
                <input
                  type="email"
                  // ref={emailadd}
                  name="email"
                  className="form-control"
                  id="email"
                  ref={custemail}
                  style={{ border: "1px solid grey" }}
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="col-lg-12 col-md-12">
                <label for="exampleInputEmail1" className="labeltext">
                  Return Date: &nbsp;
                </label>
                <span>
                  {dt.getDate()}-{dt.getMonth()}-{dt.getFullYear()}
                </span>

                <p>
                  Please note a fine of Rs.15/ will be charged after the return
                  date
                </p>
              </div>
              <br></br>
              <button type="submit" class="btn btn-success btn-lg btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footerfunc />
    </>
  );
}
export default Rentpage;
