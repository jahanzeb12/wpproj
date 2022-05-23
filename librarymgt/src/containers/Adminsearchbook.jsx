import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libguestheaderfunc from "../component/Header2";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import book from "../assets/images/bk.jpg";
const axios = require("axios");

function Adminsearchbookpage() {
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

  const emailid = useRef(null);
  const [retdata, setretdata] = useState([]);
  const [booktitle, setbooktitle] = useState("");
  function getData() {
    const email = emailid.current.value;
    console.log(email);
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/userrentedbooks/" + email,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        //console.log(response.data);
        var data = response.data;
        setretdata(data);
        //navigate("/");
      })
      .catch(function (Error) {
        //handle error
        console.log("Unable to view list of books rented by you");
      });
  }
  function returnBook() {
    // console.log(booktitle);
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/returnbook/" + booktitle,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log("hello");
        console.log(res);

        getData();
        //navigate("/");
      })
      .catch((e) => {
        //handle error
        console.log(e);
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
                <h2>rented books</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <center className="mb-4">
              <form action="" method="post" name="login">
                <div className="form-group col-lg-6 col-md-6">
                  <input
                    type="email"
                    // ref={emailadd}
                    name="email"
                    className="form-control"
                    id="email"
                    style={{ border: "1px solid grey" }}
                    aria-describedby="emailHelp"
                    placeholder="Search by Email Address"
                    ref={emailid}
                    required
                  />
                </div>
                <button
                  type="button"
                  class="mx-2 my-2 btn btn-warning btn-lg"
                  onClick={getData}
                >
                  Search
                </button>
              </form>
            </center>
            <div className="container">
              {retdata.map((val, i) => {
                return (
                  <div className="row yourbooksshade my-2" key={i}>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                      <center>
                        <img src={book} width="80px" className="my-2" />
                      </center>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                      <center>
                        <p className="my-3" style={{ color: "black" }}>
                          Book Name:
                          <br />
                          {val.title}{" "}
                        </p>
                        <p className="my-3" style={{ color: "black" }}>
                          Author Name:
                          <br />
                          {val.author}{" "}
                        </p>
                      </center>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 my-5">
                      <center>
                        <h3>Issue Date:{val.issue_date}</h3>
                      </center>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 my-5">
                      <center>
                        <h3>Return Date:{val.return_date}</h3>
                      </center>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <button
                        type="button"
                        class="mt-3 btn btn-success btn-block"
                        onClick={() => {
                          setbooktitle(val.title);
                          returnBook();
                        }}
                      >
                        Return Book
                      </button>
                      {/* <button
                        type="button"
                        class="btn btn-primary btn-block"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Change Return
                        <br /> Date
                      </button> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footerfunc />
    </>
  );
}
export default Adminsearchbookpage;
