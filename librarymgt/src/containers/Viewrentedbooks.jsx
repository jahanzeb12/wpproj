import Allrentedbooks from "../component/Allrentedbooks";
import Footerfunc from "../component/Footer";
import Headerfunc from "../component/Header";
import Libheaderfunc from "../component/Header1";
import Libguestheaderfunc from "../component/Header2";

function Viewrentedbooks() {
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
      <div class="about-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div class="abouttitle">
                <h2>All rented books</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Allrentedbooks />
          </div>
        </div>
      </div>
      <Footerfunc />
    </>
  );
}
export default Viewrentedbooks;
