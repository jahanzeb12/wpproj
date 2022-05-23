import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const axios = require("axios");

function Loginpersonfunc() {
  const emailadd = useRef(null);
  const password = useRef(null);

  let navigate = useNavigate();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  // function refreshPage() {
  //   window.location.reload(false);
  // }
  function submitForm(e) {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://127.0.0.1:3001/librarian/login/",
      data: {
        email_address: emailadd.current.value,
        password: password.current.value,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (res) {
        console.log(res);
        sessionStorage.setItem("username", res.data.user);
        sessionStorage.setItem("userrole", res.data.role);
        sessionStorage.setItem("usertoken", res.data.token);
        sessionStorage.setItem("usertoken", res.data.email);
        navigate("/");
      })
      .catch(function (Error) {
        //handle error
        if (Error.response.status == 400) {
          alert("Please Enter Correct Credentials");
        }
      });
  }
  return (
    <>
      <form action="" method="post" name="login" onSubmit={submitForm}>
        <div className="form-group">
          <label for="exampleInputEmail1" className="labeltext">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            style={{ border: "1px solid grey" }}
            ref={emailadd}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1" className="labeltext">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            style={{ border: "1px solid grey" }}
            ref={password}
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Password"
            required
          />

          <a id="signup" className="linkcolor">
            Forgot password?
          </a>
        </div>
        <br />

        <div className="col-md-12 text-center ">
          <center>
            <button
              type="submit"
              className=" btn btn-block mybtn tx-tfm"
              style={{ backgroundColor: "#be4343", color: "white" }}
            >
              Login
            </button>
          </center>
        </div>
        <div className="col-md-12 ">
          <div className="login-or">
            <hr className="hr-or" />
            <span className="span-or">or</span>
          </div>
        </div>
        <div className="form-group">
          <p className="text-center">
            Don't have account?{" "}
            <a
              //onClick={() => navigate("/signup")}
              id="signup"
              className="linkcolor"
            >
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
export default Loginpersonfunc;
