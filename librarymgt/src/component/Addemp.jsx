import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addempfunc() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const cnicval = useRef(null);
  const gender = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    const pw = prompt("Enter password to enter");
    if (pw != "libadmin") {
      navigate("/");
    }
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/newlibrarian/",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        firstname: fname.current.value,
        lastname: lname.current.value,
        email_address: email.current.value,
        password: password.current.value,
        cnic: cnicval.current.value,
        gender: gender.current.value,
      },
    })
      .then(() => {
        console.log("Employee addded");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form
        action=""
        method="post"
        name="login"
        className="my-3"
        onSubmit={submitForm}
      >
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
          <div className="form-group col-lg-5 col-md-8">
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
          <div className="form-group col-lg-5 col-md-8">
            <label for="exampleInputEmail1" className="labeltext">
              Cnic:
            </label>
            <input
              type="number"
              ref={cnicval}
              name="email"
              className="form-control"
              id="email"
              style={{ border: "1px solid grey" }}
              aria-describedby="emailHelp"
              placeholder="Enter Cnic Number"
              required
            />
          </div>
          <div className="form-group col-lg-2 col-md-4">
            <label className="labeltext">Gender</label>
            <select
              className="form-control"
              ref={gender}
              style={{
                height: "4rem",
                fontSize: "medium",
                border: "1px solid grey",
              }}
              required
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

        <div className="col-md-12 text-center mb-4">
          <center>
            <button
              type="submit"
              className=" btn btn-block btn-success"
              style={{ color: "white" }}
            >
              Submit
            </button>
          </center>
        </div>
      </form>
    </>
  );
}
export default Addempfunc;
