import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useState } from "react";
const axios = require("axios");

function Viewfeedbackfunc() {
  let navigate = useNavigate();
  const [retdata, setretdata] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/viewfeedback",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        //console.log(response.data);
        var data = response.data;
        setretdata(data);
        //navigate("/");
      })
      .catch(function (Error) {
        //handle error
        console.log("Unable to view data");
      });
  }, []);
  // console.log(retdata);
  return (
    <>
      <div className="container my-5">
        {retdata.map((val, i) => {
          return (
            <div
              className="row yourbooksshade my-2"
              style={{ backgroundColor: "white" }}
              key={i}
            >
              <div className="col-lg-3 col-md-3 col-sm-3">
                <center>
                  <p style={{ color: "black" }} className="my-5">
                    Name:
                    <br />
                    {val.name}{" "}
                  </p>
                </center>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <center>
                  <p style={{ color: "black" }} className="my-5">
                    Dated:
                    <br />
                    {val.dated}{" "}
                  </p>
                </center>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <center>
                  <p className="my-2">
                    Feedback:
                    <br />
                    {val.review}
                  </p>
                </center>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Viewfeedbackfunc;
