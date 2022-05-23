import pic1 from "../assets/images/imgavatar.png";
import { useEffect } from "react";
import { useState } from "react";
const axios = require("axios");

function Viewuserfunc() {
  const [retdata, setretdata] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/viewusers/",
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
  const deleteSelectedEmp = () => {
    axios({
      method: "delete",
      url:
        "http://127.0.0.1:3001/removeuser/" +
        sessionStorage.getItem("userrem_id"),
    })
      .then((res) => {
        const data = res.data.issued;
        if (data) {
          alert(data);
        } else {
          window.location.reload(false);
        }
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
                  <p className="my-3" style={{ color: "black" }}>
                    Joining Date:
                    <br />
                    {val.join_date}{" "}
                  </p>
                  <p className="my-3">
                    <button
                      type="button"
                      class="mx-2 my-2 btn btn-danger"
                      data-toggle="modal"
                      data-target="#exampleeModal"
                      onClick={() => {
                        sessionStorage.setItem("userrem_id", val._id);
                      }}
                    >
                      Remove
                    </button>
                  </p>
                </center>
              </div>
            </div>
          );
        })}
      </div>
      <div
        class="modal fade"
        id="exampleeModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                id="exampleModalLabel"
                style={{ color: "black" }}
              >
                Confirmation!
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p style={{ fontSize: "large" }}>
                Do you want to remove this user?
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={deleteSelectedEmp}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Viewuserfunc;
