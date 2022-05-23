import pic1 from "../assets/icon/facebook.png";
import pic2 from "../assets/icon/Twitter.png";
import pic3 from "../assets/icon/linkedin.png";
import pic4 from "../assets/icon/instagram.png";
function Footerfunc() {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="container">
            <div class="row pdn-top-30">
              <div class="col-sm-12">
                <center>
                  <div class="Follow">
                    <h3>Follow Us On</h3>
                  </div>
                  <ul class="location_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <img src={pic1} />
                      </a>{" "}
                      <a href="#">
                        <img src={pic2} />
                      </a>
                      <a href="#">
                        <img src={pic3} />
                      </a>
                      <a href="#">
                        <img src={pic4} />
                      </a>
                    </li>
                  </ul>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
            <p>Copyright 2022 All Rights Reserved By Memorial Library</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footerfunc;
