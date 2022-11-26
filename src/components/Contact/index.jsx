import { card1 } from "../../assets/index";
import { card2 } from "../../assets/index";
import { card3 } from "../../assets/index";
import { donate } from "../../assets/index";
import { whatapp } from "../../assets/index";

function index() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h3 className="text-dark">Kegiatan Pojok Baca Probolinggo</h3>
            <p>Intip kegiatan yang telah kami selenggarakan </p>
          </div>
          <p>Selengkapnya</p>
        </div>

        <div className="d-flex justify-content-between mb-5">
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
        </div>

        <div>
          <div className="mb-5 text-center">
            <h2 className="text-black">
              Ingin Membantu Meningkatkan Literasi Anak-Anak Sekitar Kita?
            </h2>
            <p className="mb-5">Percayakan melalui kegiatan kita</p>

            <div style={{marginBottom:"100px"}} className="d-flex flex-column  align-items-center">
              <button
                className="d-flex align-items-center text-white mb-4 gap-2"
                style={{
                  background: "#008F76",
                  padding: "5px 20px",
                  borderRadius: "20px",
                  border: "none",
                }}
              >
                Donasi dengan Kami <img src={donate} alt="" />
              </button>
              <p className="mb-4">Atau</p>
              <button
                className="btn btn-outline-success d-flex align-items-center gap-2"
                style={{ borderRadius: "20px" }}
              >
                Hubungi Kami <img src={whatapp} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
