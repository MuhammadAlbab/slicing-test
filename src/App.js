import HeaderSm from "./components/HeaderSmall";
import EventCard from "./components/EventCard";
import ArrowdownIcon from "./assets/icons/arrow-down-red.svg";
import AffBanner from "./assets/images/aff-banner.png";
import NewsLatest from "./assets/images/news-motogp.png";
import NewsPop from "./assets/images/news-pop.png";
import CalendarIcon from "./assets/icons/calender.svg";
import PictureIcon from "./assets/icons/cr-picture.svg";
import MultimediaSlide from "./assets/images/multimedia-slide-bb.png";

function App() {
  return (
    <>
      <HeaderSm />
      {/* subheader */}
      <div
        className="bg-blue-primary text-t-uppercase text-white pl-20 pr-8 flex flex--gap-20 items-center"
        style={{ overflowX: "scroll" }}
      >
        {[
          "beranda",
          "bola",
          "balap",
          "ragam",
          "sportainment",
          "dummy menu",
        ].map((e) => (
          <div
            className="py-10 font-14"
            style={{ whiteSpace: "nowrap" }}
            // style={{ whiteSpace: "nowrap", borderBottom: "2px solid red" }}
          >
            {e}
          </div>
        ))}
      </div>
      {/* schedule events */}
      <div className="px-20 py-24">
        <div className="font-w-16 flex items-center flex--gap-14">
          <p className="m-0 font-w-500">JADWAL & HASIL</p>
          <div className="flex flex--gap-6 items-center">
            <p className="m-0 font-14 font-w-400">AFF 2022</p>
            <img src={ArrowdownIcon} alt="arr-down" />
          </div>
        </div>
        <div
          className="flex items-center py-20"
          style={{ overflowX: "scroll" }}
        >
          {[...Array(5)].map((_) => (
            <EventCard />
          ))}
        </div>
      </div>
      {/* carousel bullshit */}
      {/* banner */}
      <div>
        <img src={AffBanner} alt="aff-banner" style={{ maxWidth: "100%" }} />
      </div>
      {/* carousel bullshit */}
      {/* latest news */}
      <div className="px-20 my-20">
        <div
          className="font-18 font-w-700 pb-6 text-t-uppercase mb-20"
          style={{ borderBottom: "2px solid red" }}
        >
          LATEST NEWS
        </div>
        <div>
          <div className="my-14">
            <img src={NewsLatest} alt="moto-gp" style={{ maxWidth: "100%" }} />
          </div>
          <span style={{ color: "red" }} className="font-14 font-w-700">
            MotoGP
          </span>
          <div className="flex items-center flex--gap-8 mt-8">
            <div>
              <img src={CalendarIcon} alt="calendar" />
            </div>
            <div className="font-12">29 Maret 2021</div>
          </div>
          <p className="mt-20 font-18 font-w-500">
            Rossi dan Morbidelli Beda Pandangan Soal Balapan di MotoGP Doha, 4
            April
          </p>
        </div>
      </div>
      {/* most popular news */}
      <div className="px-20 my-20">
        <div
          className="font-18 font-w-700 pb-6 text-t-uppercase mb-20"
          style={{ borderBottom: "2px solid red" }}
        >
          MOST POPULER
        </div>
        <div
          className="flex flex--gap-20 items-start mb-16"
          style={{ overflowX: "scroll" }}
        >
          {[...Array(5)].map((_) => (
            <div>
              <img src={NewsPop} alt="news-pop" />
              <div className="flex items-center flex--gap-8 mt-8">
                <div>
                  <img src={CalendarIcon} alt="calendar" />
                </div>
                <div className="font-12 my-14">29 Maret 2021</div>
              </div>
              <p className="font-w-700">
                Italia Menang 2-0, Mancini Kecam Taktik Bulgaria
              </p>
            </div>
          ))}
        </div>
        {[...Array(2)].map((_) => (
          <div
            className="pt-10 mb-16"
            style={{ borderTop: "2px solid #F2F2F2" }}
          >
            <div className="my-14">
              <img
                src={NewsLatest}
                alt="moto-gp"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <span style={{ color: "red" }} className="font-14 font-w-700">
              MotoGP
            </span>
            <div className="flex items-center flex--gap-8 mt-8">
              <div>
                <img src={CalendarIcon} alt="calendar" />
              </div>
              <div className="font-12">29 Maret 2021</div>
            </div>
            <p className="mt-20 font-18 font-w-500">
              Rossi dan Morbidelli Beda Pandangan Soal Balapan di MotoGP Doha, 4
              April
            </p>
          </div>
        ))}
      </div>
      {/* multi media */}
      <div className="bgg-gradient-multimedia">
        <div className="px-20">
          <div
            className="pt-16 pb-12 mb-20"
            style={{ borderBottom: "2px solid red" }}
          >
            <p className="m-0 color-white font-18 font-w-500">MULTIMEDIA</p>
          </div>
          <div>
            <div className="font-white" style={{ position: "relative" }}>
              <img
                src={MultimediaSlide}
                alt="mm-1"
                style={{ position: "relative", width: "100%" }}
              />
              <div
                style={{
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
              >
                <div
                  className="p-12 color-white"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100% ",
                  }}
                >
                  <div className="mb-auto">
                    <img src={PictureIcon} alt="ph-1" />
                  </div>
                  <p className="font-16 font-w-700 mb-10">
                    IBL 2021: West Bandits Berhasil Balas Kekalahan atas NSH
                  </p>
                  <div className="flex flex--gap-8 items-center">
                    <img src={CalendarIcon} alt="c-1" />
                    <div>4 Menit lalu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
