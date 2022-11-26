import logo from "../../assets/svg/logo.svg";
import "./style.scss";
const index = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-info">
            <div>
              <a href="">
                <img src={logo} alt={"logo"} />
              </a>
            </div>

            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list-item">
                  <a className="nav__list-item__link" href={""}>
                    Beranda
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="nav__list-item__link" href={""}>
                    Koleksi
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="nav__list-item__link" href={""}>
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li className="nav__list-item">
                  <a className="nav__list-item__link" href={""}>
                    Kontak
                  </a>
                </li>
              </ul>

              <button className="nav__btn">Masuk</button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
