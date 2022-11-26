import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Card/Cards";
import icon1 from "./assets/svg/icons1.svg";
import { img1 } from "./assets";
import { img2 } from "./assets";
import { img3 } from "./assets";
import { img4 } from "./assets";
import { img5 } from "./assets";
import { img6 } from "./assets";
import { img7 } from "./assets";

export default function App() {

  const data = [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg"
  }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="mb-5">
          <div className="container">
            <div>
              <div className="d-flex justify-content-center gap-4">
                <p>Pojok Baca </p>
                <i className="text-success">Probolinggo</i>
              </div>
              <h1 className="text-center mb-5">
                Pinjam Buku Secara Gratis untuk Masyarakat
              </h1>

              <div className="d-flex justify-content-center gap-4">
                <button className="hero-btn btn">
                  Cari Judul Buku <i class="fas fa-search"></i>
                </button>
                <button className="btn btn-outline-success herobtn1">
                  Donasi dengan Kami <img src={icon1} alt={"icon"} />
                </button>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center justify-content-between gap-5">
                  <div className="d-flex flex-column justify-content-between">
                    <img
                      className="shadow mb-5"
                      width={"150px"}
                      src={img1}
                      alt={"card-img"}
                    />
                    <img
                      className="shadow"
                      width={"150px"}
                      src={img2}
                      alt={"card-img"}
                    />
                  </div>

                  <img
                    className="shadow"
                    width={"150px"}
                    src={img3}
                    alt={"card-img"}
                  />
                </div>

                <img
                  className="shadow"
                  width={"250px"}
                  src={img4}
                  alt={"card-img"}
                />

                <div className="d-flex align-items-center justify-content-between gap-5">
                  <img
                    className="shadow"
                    width={"150px"}
                    src={img5}
                    alt={"card-img"}
                  />
                  <div className="d-flex flex-column justify-content-between">
                    <img
                      className="shadow mb-5"
                      width={"150px"}
                      src={img6}
                      alt={"card-img"}
                    />
                    <img
                      className="shadow"
                      width={"150px"}
                      src={img7}
                      alt={"card-img"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">

            {
              
          data.map((data)=>{
            return(
              <>
                <Cards />
              </>
            )
          })
            }

          <div className="container">
            <div className="d-flex justify-content-between">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
