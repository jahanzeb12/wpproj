import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libadminheaderfunc from "../component/Header2";
import pic1 from "../assets/images/imgavatar.png";
import Addbookfunc from "../component/Addbook";
import Viewbookfunc from "../component/Viewbook";
import Deletebookfunc from "../component/Deletebook";
import Viewfeedbackfunc from "../component/Viewfeedback";
import Viewuserfunc from "../component/Viewusers";

function Librarianpage() {
  var header = null;

  const ChangeHeader = () => {
    let user = sessionStorage.getItem("userrole");
    if (user == "librarian") {
      return <Libheaderfunc />;
    } else if (user == "user") {
      return <Headerfunc />;
    } else {
      return <Libadminheaderfunc />;
    }
  };
  var header = ChangeHeader();
  return (
    <>
      {header}
      <div class="about-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="abouttitle">
                <h2>My workspace</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2">
            <img
              src={pic1}
              class="img-fluid mt-4"
              style={{ height: "30vh", width: "15vw" }}
              alt="Responsive image"
            />
            <center>
              <p className="mt-2">Library Admin</p>
            </center>
            <div
              class="nav flex-column nav-pills mt-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                class="nav-link active"
                id="v-pills-profile-tab"
                data-toggle="pill"
                href="#v-pills-profile"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="true"
              >
                <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Add Book
              </a>
              <a
                class="nav-link"
                id="v-pills-home-tab"
                data-toggle="pill"
                href="#v-pills-home"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="false"
              >
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View Books
              </a>
              <a
                class="nav-link"
                id="v-pills-messages-tab"
                data-toggle="pill"
                href="#v-pills-messages"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <i class="fa fa-minus" aria-hidden="true"></i>&nbsp;Delete Book
              </a>
              <a
                class="nav-link"
                id="v-pills-user-tab"
                data-toggle="pill"
                href="#v-pills-users"
                role="tab"
                aria-controls="v-pills-users"
                aria-selected="false"
              >
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp; View Users
              </a>

              <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-myads"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <i class="fa fa-comments" aria-hidden="true"></i>&nbsp;
                Feedbacks
              </a>
            </div>
          </div>
          <div
            class="col-lg-10 col-sm-10 col-md-10 "
            style={{ backgroundColor: "#E6E6FA" }}
          >
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade"
                id="elementreset"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                {" "}
                <Viewbookfunc />
              </div>
              <div
                class="tab-pane fade show active"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                {" "}
                <Addbookfunc />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                {" "}
                <Deletebookfunc />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-users"
                role="tabpanel"
                aria-labelledby="v-pills-user-tab"
              >
                {" "}
                <Viewuserfunc />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-myads"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                {" "}
                <Viewfeedbackfunc />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerfunc />
    </>
  );
}
export default Librarianpage;
