import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import pic1 from "../assets/icon/facebook.png";
import pic2 from "../assets/icon/Twitter.png";
import pic3 from "../assets/icon/linkedin.png";
import pic4 from "../assets/icon/instagram.png";
import pic5 from "../assets/images/banner.jpg";
import pic6 from "../assets/images/Library-.jpg";
import pic7 from "../assets/images/book-1.jpg";
import pic8 from "../assets/images/book-2.jpg";
// import "../assets/images/fevicon.png";
import "../assets/css/jquery.mCustomScrollbar.min.css";
import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libguestheaderfunc from "../component/Header2";

function Homepage() {
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

  return (
    <>
      {header}
      <section class="slider_section">
        <div
          id="myCarousel"
          class="carousel slide banner-main"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="first-slide" src={pic5} alt="First slide" />
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>
                    The Best Libraries That
                    <br /> Every Book Lover Must
                    <br /> Visit!
                  </h1>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    <br /> labore et dolore magna aliqua. Ut enim ad minim
                    <br /> veniam, quis nostrud exercitation{" "}
                  </p>
                  <div class="button_section">
                    {" "}
                    <a class="main_bt" href="#">
                      Read More
                    </a>{" "}
                  </div>
                  <ul class="locat_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic1} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic2} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic3} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic4} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="second-slide" src={pic5} alt="Second slide" />
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>
                    The Best Libraries That
                    <br /> Every Book Lover Must
                    <br /> Visit!
                  </h1>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    <br /> labore et dolore magna aliqua. Ut enim ad minim
                    <br /> veniam, quis nostrud exercitation{" "}
                  </p>
                  <div class="button_section">
                    {" "}
                    <a class="main_bt" href="#">
                      Read More
                    </a>{" "}
                  </div>
                  <ul class="locat_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic1} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic2} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic3} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic4} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="third-slide" src={pic5} alt="Third slide" />
              <div class="container">
                <div class="carousel-caption relative">
                  <h1>
                    The Best Libraries That
                    <br /> Every Book Lover Must
                    <br /> Visit!
                  </h1>
                  <p>
                    adipiscing elit, sed do eiusmod tempor incididunt ut
                    <br /> labore et dolore magna aliqua. Ut enim ad minim
                    <br /> veniam, quis nostrud exercitation{" "}
                  </p>
                  <div class="button_section">
                    {" "}
                    <a class="main_bt" href="#">
                      Read More
                    </a>{" "}
                  </div>
                  <ul class="locat_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic1} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic2} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic3} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic4} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <div class="Library">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="titlepage">
                <h2>
                  Our <strong class="black">Library </strong>
                </h2>
                <span>
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class="Library-box">
                  <figure>
                    <img src={pic6} alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Books">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="titlepage">
                <h2>
                  Our <strong class="black">Books </strong>
                </h2>
                <span>
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris
                </span>
              </div>
            </div>
          </div>
          <div class="row box">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="book-box">
                <figure>
                  <img src={pic7} alt="img" />
                </figure>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="book-box">
                <figure>
                  <img src={pic8} alt="img" />
                </figure>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12">
              <div class="book-box">
                <figure>
                  <img src={pic7} alt="img" />
                </figure>
              </div>
            </div>
            <div class="col-md-6 offset-md-3">
              <p>
                magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation
                ullamco laboris
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footerfunc />
    </>
  );
}
export default Homepage;
