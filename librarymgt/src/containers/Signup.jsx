import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pic1 from "../assets/images/bgbooks.jpg";
function Regfunc() {
  let navigate = useNavigate();

  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const cnicval = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
  const gender = useRef(null);
  function refreshPage() {
    window.location.reload(false);
  }
  function submitForm(e) {
    e.preventDefault();
    if (cpassword.current.value === password.current.value) {
      axios({
        method: "post",
        url: "http://127.0.0.1:3001/newuser/",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          firstname: fname.current.value,
          lastname: lname.current.value,
          email_address: email.current.value,
          cnic: cnicval.current.value,
          gender: gender.current.value,
          password: password.current.value,
        },
      })
        .then((res) => {
          sessionStorage.setItem("username", res.data.username);
          sessionStorage.setItem("userrole", res.data.role);
          sessionStorage.setItem("usertoken", res.data.token);
          console.log(res);
          console.log("Signup successful");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Password and confirm password do not match");
    }
  }
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
            <h1 className="display-4">Signup</h1>
          </center>
          <br></br>
          <form action="" method="post" name="login" onSubmit={submitForm}>
            <div className="row">
              <div className="form-group col-lg-6 col-md-6">
                <label for="exampleInputEmail1" className="labeltext">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  ref={fname}
                  className="form-control"
                  id="firstname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Firstname"
                  style={{ border: "1px solid grey" }}
                  required
                />
              </div>
              <div className="form-group col-lg-6 col-md-6">
                <label for="exampleInputEmail1" className="labeltext">
                  Last Name
                </label>
                <input
                  type="text"
                  ref={lname}
                  name="lastname"
                  className="form-control"
                  id="lastname"
                  style={{ border: "1px solid grey" }}
                  aria-describedby="emailHelp"
                  placeholder="Enter Lastname"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-12 col-md-6">
                <label for="exampleInputEmail1" className="labeltext">
                  CNIC Number
                </label>
                <input
                  type="password"
                  name="password"
                  ref={cnicval}
                  id="password"
                  className="form-control"
                  style={{ border: "1px solid grey" }}
                  aria-describedby="emailHelp"
                  placeholder="Enter CNIC Number"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-8 col-md-8">
                <label for="exampleInputEmail1" className="labeltext">
                  Email Address
                </label>
                <input
                  type="email"
                  ref={email}
                  name="email"
                  className="form-control"
                  id="email"
                  style={{ border: "1px solid grey" }}
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group col-lg-4 col-md-4">
                <label for="exampleInputEmail1" className="labeltext">
                  Gender
                </label>
                <select
                  className="form-control"
                  id="inputGroupSelect02"
                  ref={gender}
                  style={{
                    height: "4rem",
                    fontSize: "medium",
                    border: "1px solid grey",
                  }}
                  required
                  placeholder="Select one"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-6 col-md-6">
                <label for="exampleInputEmail1" className="labeltext">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  ref={password}
                  id="password"
                  className="form-control"
                  style={{ border: "1px solid grey" }}
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="form-group col-lg-6 col-md-6">
                <label for="exampleInputEmail1" className="labeltext">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  style={{ border: "1px solid grey" }}
                  ref={cpassword}
                  id="password"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>

            <br />
            <div className="form-group">
              <p className="text-center">
                By signing up you accept our Terms Of Use
              </p>
            </div>
            <div className="col-md-12 text-center mb-4">
              <center>
                <button
                  type="submit"
                  className=" btn btn-block mybtn tx-tfm"
                  style={{ backgroundColor: "#be4343", color: "white" }}
                >
                  Submit
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Regfunc;
