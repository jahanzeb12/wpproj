import pic1 from "../assets/images/imgavatar.png";
import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios");

function Viewempfunc() {
  const [retdata, setretdata] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/viewlibrarian",
    })
      .then((response) => {
        //console.log(response.data);
        var data = response.data;
        setretdata(data);
        //navigate("/");
      })
      .catch(function (Error) {
        //handle error
        console.log("Unable to view employee data");
      });
  }, []);
  console.log(retdata);
  return (
    <>
      <div className="container">
        {retdata.map((val, i) => {
          return (
            <div
              className="row my-2"
              style={{ backgroundColor: "white", border: "2px solid #b32137" }}
              key={i}
            >
              <div className="col-lg-3 col-md-3 col-sm-3">
                <center>
                  <img
                    src={pic1}
                    width="150px"
                    height="250px"
                    className="my-2"
                  />
                </center>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 mt-2">
                <center>
                  <p className="my-3" style={{ color: "black" }}>
                    First Name:
                    <br />
                    {val.firstname}{" "}
                  </p>
                  <p className="my-3" style={{ color: "black" }}>
                    Last Name:
                    <br />
                    {val.lastname}{" "}
                  </p>
                </center>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 mt-2">
                <center>
                  <p className="my-3" style={{ color: "black" }}>
                    Email Address:
                    <br />
                    {val.email_address}{" "}
                  </p>
                  <p className="my-3" style={{ color: "black" }}>
                    Gender:
                    <br />
                    {val.gender}{" "}
                  </p>
                </center>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 mt-2">
                <center>
                  <p className="mt-3" style={{ color: "black" }}>
                    Joining Date:
                    <br />
                    {val.join_date}{" "}
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
export default Viewempfunc;
