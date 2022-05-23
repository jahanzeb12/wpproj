import book from "../assets/images/bk.jpg";
import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios");
function Viewbookfunc() {
  const [retdata, setretdata] = useState([]);
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
                        <span style={{ fontWeight: "bold", color: "green" }}>
                          "Available"
                        </span>
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
        </div>
      </div>
    </>
  );
}
export default Viewbookfunc;
