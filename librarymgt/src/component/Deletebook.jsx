import axios from "axios";
import { useEffect, useState } from "react";
import book from "../assets/images/bk.jpg";

function Deletebookfunc() {
  const [retdata, setretdata] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/viewbook",
    })
      .then((resp) => {
        const data = resp.data;
        setretdata(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const deleteSelectedBook = () => {
    axios({
      method: "delete",
      url:
        "http://127.0.0.1:3001/deletebook/" + sessionStorage.getItem("book_id"),
    })
      .then((resp) => {
        console.log(resp);
        window.location.reload(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div class="container mt-5 mb-5">
        <div class="row">
          {retdata.map((val, i) => {
            return (
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                {val.status ? (
                  <center className="mb-3 mt-3">
                    <img src={book} width="150px" />

                    <h1 className="mt-2">{val.title}</h1>

                    <p style={{ color: "black" }}>Genre: {val.genre}</p>
                    <p style={{ color: "black" }}>Author: {val.author}</p>

                    <button
                      type="button"
                      class="mx-2 my-2 btn btn-danger btn-sm"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={() => {
                        sessionStorage.setItem("book_id", val._id);
                        sessionStorage.setItem("book_name", val.title);
                      }}
                    >
                      Remove
                    </button>
                  </center>
                ) : (
                  <center className="mb-3 mt-3">
                    <img src={book} width="150px" />

                    <h1 className="mt-2">{val.title}</h1>

                    <p style={{ color: "black" }}>Genre: {val.genre}</p>
                    <p style={{ color: "black" }}>Author: {val.author}</p>

                    <button
                      type="button"
                      class="mx-2 my-2 btn btn-danger btn-sm"
                      disabled
                    >
                      Remove
                    </button>
                  </center>
                )}
              </div>
            );
          })}
          ;
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
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
                Do you want to remove this book?
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
                onClick={deleteSelectedBook}
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
export default Deletebookfunc;
