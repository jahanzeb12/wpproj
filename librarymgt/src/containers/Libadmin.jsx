import Footerfunc from "../component/Footer";
import pic1 from "../assets/images/imgavatar.png";
import Addempfunc from "../component/Addemp";
import Viewempfunc from "../component/Viewemp";
import Deleteempfunc from "../component/Deleteemp";
import Viewfeedbackfunc from "../component/Viewfeedback";
import Viewuserfunc from "../component/Viewusers";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Libadminpage() {
  let navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div class="about-adminpage">
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
                <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Add Staff
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
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;View Staff
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
                <i class="fa fa-minus" aria-hidden="true"></i>&nbsp;Delete Staff
              </a>
              {/* <a
                class="nav-link"
                id="v-pills-settings-tab"
                data-toggle="pill"
                href="#v-pills-chats"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <i class="fa fa-pencil" aria-hidden="true"></i>&nbsp;Update
                Staff
              </a> */}
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
                <Viewempfunc />
              </div>
              <div
                class="tab-pane fade show active"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                {" "}
                <Addempfunc />
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                {" "}
                <Deleteempfunc />
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
export default Libadminpage;
