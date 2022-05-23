import book from "../assets/images/bk.jpg";
import React, { useState } from "react";
import { useEffect } from "react";
const axios = require("axios");

function Allrentedbooks() {
  const [retdata, setretdata] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);

    axios({
      method: "get",
      url: "http://127.0.0.1:3001/viewrentedbooks",
    })
      .then((response) => {
        //console.log(response.data);
        var data = response.data;
        setretdata(data);
        //navigate("/");
      })
      .catch(function (Error) {
        //handle error
        console.log("Unable to view list of books rented by customers");
      });
  }, []);
  console.log(retdata);
  return (
    <>
      {retdata.map((val, i) => {
        return (
          <div className="row yourbooksshade my-2">
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
            <div className="col-lg-2 col-md-4 col-sm-4">
              <center>
                <p className="my-3" style={{ color: "black" }}>
                  Member Name:
                  <br />
                  {val.customer_name}
                </p>
                <p className="my-3" style={{ color: "black" }}>
                  Member Email-id:
                  <br />
                  {val.email_address}
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
          </div>
        );
      })}
    </>
  );
}
export default Allrentedbooks;
