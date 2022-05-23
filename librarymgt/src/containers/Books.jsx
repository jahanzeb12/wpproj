import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libguestheaderfunc from "../component/Header2";
import book from "../assets/images/bk.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Bookspage() {
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
  const [retdata, setretdata] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/viewbook",
    })
      .then((response) => {
        //console.log(response.data);
        var data = response.data;
        setretdata(data);
        //navigate("/");
      })
      .catch(function (Error) {
        //handle error
        console.log("Unable to view book data");
      });
  }, []);
  console.log(retdata);
  return (
    <>
      {header}
      <div class="about-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="abouttitle">
                <h2>Our Books</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-5 mb-5">
        <div class="row">
          {retdata.map((val, i) => {
            return (
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={i}>
                <center className="mb-3 mt-3">
                  <img src={book} width="150px" />

                  <h1 className="mt-2">{val.title}</h1>

                  <p style={{ color: "black" }}>Genre: {val.genre}</p>
                  <p style={{ color: "black" }}>Author: {val.author}</p>
                  <p>
                    Status: &nbsp;
                    <span>
                      {val.status ? (
                        <>
                          <span style={{ fontWeight: "bold", color: "green" }}>
                            "Available"
                          </span>
                          <br></br>
                          <button
                            type="button"
                            class="mx-2 my-2 btn btn-primary btn-sm"
                            onClick={() => {
                              navigate("/rent");
                              sessionStorage.setItem("renttitle", val.title);
                              sessionStorage.setItem("rentgenre", val.genre);
                              sessionStorage.setItem("rentauthor", val.author);
                            }}
                          >
                            Rent it!
                          </button>
                        </>
                      ) : (
                        <span style={{ fontWeight: "bold", color: "red" }}>
                          "Not Availble"
                        </span>
                      )}
                    </span>
                  </p>
                </center>
              </div>
            );
          })}
          ;
        </div>
      </div>
      <Footerfunc />
    </>
  );
}
export default Bookspage;
