import { useRef, useState } from "react";
import axios from "axios";

function Addbookfunc() {
  const booktitle = useRef(null);
  const authname = useRef(null);
  const genre = useRef(null);
  function submitForm(e) {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://127.0.0.1:3001/newbook",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        title: booktitle.current.value,
        genre: genre.current.value,
        author: authname.current.value,
      },
    })
      .then(() => {
        console.log("New book added");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <form
        action=""
        method="post"
        name="login"
        className="my-3"
        onSubmit={submitForm}
      >
        <div className="row">
          <div className="form-group col-lg-6 col-md-6">
            <label for="exampleInputEmail1" className="labeltext">
              Book Title
            </label>
            <input
              type="text"
              name="booktitle"
              ref={booktitle}
              className="form-control"
              id="firstname"
              aria-describedby="emailHelp"
              placeholder="Enter Book Title"
              style={{ border: "1px solid grey" }}
              required
            />
          </div>
          <div className="form-group col-lg-6 col-md-6">
            <label for="exampleInputEmail1" className="labeltext">
              Author Name
            </label>
            <input
              type="text"
              ref={authname}
              name="authorname"
              className="form-control"
              id="lastname"
              style={{ border: "1px solid grey" }}
              aria-describedby="emailHelp"
              placeholder="Enter Author Name"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-lg-12 col-md-12">
            <label for="exampleInputEmail1" className="labeltext">
              Genre
            </label>
            <input
              type="text"
              ref={genre}
              name="Genre"
              className="form-control"
              id="email"
              style={{ border: "1px solid grey" }}
              aria-describedby="emailHelp"
              placeholder="Enter Genre"
              required
            />
          </div>
        </div>

        <br />

        <div className="col-md-12 text-center mb-4">
          <center>
            <button
              type="submit"
              className=" btn btn-block btn-success"
              style={{ color: "white" }}
            >
              Submit
            </button>
          </center>
        </div>
      </form>
    </>
  );
}
export default Addbookfunc;
