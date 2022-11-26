import logo from "../../assets/svg/logo.svg";
import "./style.scss";
function index() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <div>
              <div className="d-flex align-items-center mb-4">
                <img style={{ cursor: "pointer" }} src={logo} alt={"logo"} />
                <strong>Pojok Baca Probolinggo</strong>
              </div>

              <div className="d-flex gap-5">
                <a href={"https://www.instagram.com/eshonqul03"}>
                  <i class="fab fa-2x text-dark fa-instagram"></i>
                </a>
                <a href={"https://www.facebppk.com/eshonqul03"}>
                  <i class="fab fa-2x text-dark fa-facebook"></i>
                </a>
                <a href={"https://www.youtube.com/"}>
                  <i class="fab fa-2x text-dark fa-youtube"></i>
                </a>
              </div>
            </div>

            <ul className="footer__info-list">
              <li>
                <strong>Kontak</strong>
                <ul className="list-unstyled p-0 m-0">
                  <li>Email</li>
                  <li>Alamat</li>
                  <li>No. Rekening</li>
                </ul>
              </li>

              <li>
                <strong>Tentang Kami</strong>
                <ul className="list-unstyled p-0 m-0">
                  <li>Umum</li>
                </ul>
              </li>

              <li>
                <strong>Galery</strong>
                <ul className="list-unstyled p-0 m-0">
                  <li>Kegiatan 2018</li>
                  <li>Kegiatan 2019</li>
                  <li>Kegiatan 2020</li>
                  <li>Kegiatan 2021</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <p className="text-white m-0 text-center">
              Pojok Baca Probolinggo 2022
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default index;
