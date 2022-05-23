import book from "../assets/images/bk.jpg";
import React, { useState } from "react";
import { useEffect } from "react";
const axios = require("axios");

function Userbooks() {
  const [retdata, setretdata] = useState([]);
  const [booktitle, setbooktitle] = useState("");
  const email = sessionStorage.getItem("useremail");

  useEffect(() => {
    window.scrollTo(0, 0);

    axios({
      method: "get",
      url: "http://127.0.0.1:3001/userrentedbooks/" + email,
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
  }, []);
  console.log(retdata);
  function getdata() {
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/userrentedbooks/" + email,
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
  function changeretdate() {
    // console.log(booktitle);
    axios({
      method: "post",
      url:
        "http://127.0.0.1:3001/changereturndate/" +
        booktitle +
        "/" +
        sessionStorage.getItem("useremail"),
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log("date changed");
        console.log(res);
        getdata();

        //navigate("/");
      })
      .catch((e) => {
        //handle error
        console.log(e);
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
        getdata();

        //navigate("/");
      })
      .catch((e) => {
        //handle error
        console.log(e);
      });
  }

  return (
    <>
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
                <h3>
                  Issue Date:<br></br>
                  {val.issue_date}
                </h3>
              </center>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 my-5">
              <center>
                <h3>
                  Return Date:<br></br>
                  {val.return_date}
                </h3>
              </center>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <button
                type="button"
                class="mt-4 btn btn-success btn-block"
                onClick={() => {
                  setbooktitle(val.title);
                  returnBook();
                }}
              >
                Return Book
              </button>
              <button
                type="button"
                class="mt-4 btn btn-primary btn-block"
                onClick={() => {
                  setbooktitle(val.title);
                  changeretdate();
                }}
              >
                Change Date
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Userbooks;
