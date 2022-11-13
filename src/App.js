import { useEffect, useState } from "react";
import HamburgerIcon from "./assets/icons/hamburger-menu.svg";
import SearchIcon from "./assets/icons/search.svg";
import SearchRedIcon from "./assets/icons/search-red.svg";
import ArrowdownIcon from "./assets/icons/arrow-down-red.svg";
import AffBanner from "./assets/images/aff-banner.png";
import BigBanner from "./assets/images/big-banner.png";
import NewsLatest from "./assets/images/news-motogp.png";
import CalendarIcon from "./assets/icons/calender.svg";
import PictureIcon from "./assets/icons/cr-picture.svg";
import ArrowLeft from "./assets/icons/cr-arrow-left.svg";
import ArrowRight from "./assets/icons/cr-arrow-right.svg";
import MultimediaSlide from "./assets/images/multimedia-slide-bb.png";
import AdsHeader from "./assets/images/ads-header.png";
import MainLogoBig from "./assets/images/main-logo-big.png";
import MainLogo from "./assets/images/main-logo.png";
import MainLogoFooter from "./assets/images/main-logo-footer.png";
import ScIg from "./assets/icons/sc-ig.svg";
import ScTw from "./assets/icons/sc-tw.svg";
import ScFb from "./assets/icons/sc-fb.svg";
import ScYt from "./assets/icons/sc-yt.svg";
import ScTT from "./assets/icons/sc-tt.svg";
import BelIcon from "./assets/icons/flags/bel.svg";
import {
  eventsArr,
  headlinesArr,
  subheadlineArr,
  mostPopular,
  editorChoice,
} from "./assets/mockData";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // (+24 for padding)
      if (window.innerWidth < 1044.98) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* header - r */}
      {isDesktop ? (
        <>
          <div className="flex justify-center">
            <div className="mw-1200 px-24">
              <div className="flex flex--gap-8 items-center justify-between py-12">
                <div className="flex items-center flex--gap-16 font-14 font-w-600">
                  {[
                    "RCTI+",
                    "Vision+",
                    "Okezone.com",
                    "SINDOnews.com",
                    "iNews.id",
                    "Buddyku",
                  ].map((e) => (
                    <div key={e}>{e}</div>
                  ))}
                </div>
                <div className="flex flex--gap-12">
                  <img src={ScTw} alt="sc-tw" />
                  <img src={ScFb} alt="sc-fb" />
                  <img src={ScIg} alt="sc-ig" />
                  <img src={ScYt} alt="sc-yt" />
                  <img src={ScTT} alt="sc-tt" />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "1px",
              borderBottom: "1px solid var(--color-blue-primary)",
            }}
          ></div>
          <div className="flex justify-center">
            <div className="mw-1200 px-24">
              <div className="flex flex--gap-16 items-center justify-between py-16">
                <div style={{ maxWidth: "330px", width: "100%" }}>
                  <img src={MainLogoBig} alt="mlh" style={{ width: "100%" }} />
                </div>
                <div style={{ maxWidth: "728px", width: "100%" }}>
                  <img src={AdsHeader} alt="mlh" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center p-20">
            <img src={HamburgerIcon} alt="ham-menu" />
            <img src={MainLogo} alt="main-logo-sm" className="mx-auto" />
            <img src={SearchIcon} alt="search" />
          </div>
        </>
      )}
      {/* subheader - r */}
      {isDesktop ? (
        <>
          <div className="flex justify-center bg-blue-primary">
            <div className="mw-1200 px-24">
              <div className="flex items-center justify-between">
                <div className="text-t-uppercase text-white flex flex--gap-20 items-center">
                  {[
                    "beranda",
                    "bola",
                    "balap",
                    "ragam",
                    "sportainment",
                    "Hobi",
                    "data statistik",
                    "multimedia",
                    "index",
                  ].map((e) => (
                    <div
                      key={e}
                      className="py-20 font-16"
                      style={{ whiteSpace: "nowrap" }}
                      // style={{ whiteSpace: "nowrap", borderBottom: "2px solid red" }}
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <img src={SearchRedIcon} alt="sr-red" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-blue-primary text-t-uppercase text-white pl-20 pr-8 flex flex--gap-20 items-center scroller"
            style={{ overflowX: "auto" }}
          >
            {[
              "beranda",
              "bola",
              "balap",
              "ragam",
              "sportainment",
              "multimedia",
              "index",
            ].map((e) => (
              <div
                key={e}
                className="py-10 font-14"
                style={{ whiteSpace: "nowrap" }}
                // style={{ whiteSpace: "nowrap", borderBottom: "2px solid red" }}
              >
                {e}
              </div>
            ))}
          </div>
        </>
      )}
      {/* schedule events - r*/}
      {isDesktop ? (
        <>
          <div className="flex justify-center">
            <div className="mw-1200 px-23">
              <div className="px-20 py-24">
                <div className="font-w-16 flex items-start flex--gap-14">
                  <div className="mr-8">
                    <p className="m-0 font-w-700">
                      JADWAL <br />& HASIL
                    </p>
                    <div className="flex flex--gap-6 items-center mt-12">
                      <span
                        className="font-12 font-w-400"
                        style={{ wordBreak: "keep-all" }}
                      >
                        Jadwal Terbaru
                      </span>
                      <img src={ArrowdownIcon} alt="arr-down" />
                    </div>
                  </div>
                  <div
                    className="flex items-center pb-10 scroller"
                    style={{ overflowX: "auto" }}
                  >
                    {eventsArr.map((e, idx) => (
                      <div
                        key={idx}
                        className="pr-14 mr-8"
                        style={{ width: "max-content" }}
                      >
                        <div
                          className="pr-12"
                          style={{ borderRight: "1px solid #DFDFDF" }}
                        >
                          <div
                            className="font-10 mb-2"
                            style={{ width: "max-content" }}
                          >
                            {e.league}
                          </div>
                          <div
                            className="font-10"
                            style={{ color: "red", width: "max-content" }}
                          >
                            {e.time}
                          </div>
                          <div className="mt-24 mb-8">
                            <div className="flex items-center my-8">
                              <img src={e.home.flag} alt="flag" />
                              <span className="ml-8">{e.home.name}</span>
                              <span className="ml-auto">0</span>
                            </div>
                            <div className="flex items-center my-8">
                              <img src={e.away.flag} alt="flag" />
                              <span className="ml-8">{e.away.name}</span>
                              <span className="ml-auto">0</span>
                            </div>
                          </div>
                        </div>
                        <p className="font-12 text-t-capitalize text-blue-dark">
                          {e.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="px-20 py-24">
            <div className="font-w-16 flex items-center flex--gap-14">
              <p className="m-0 font-w-500">JADWAL & HASIL</p>
              <div className="flex flex--gap-6 items-center">
                <p className="m-0 font-14 font-w-400">AFF 2022</p>
                <img src={ArrowdownIcon} alt="arr-down" />
              </div>
            </div>
            <div
              className="flex items-center py-20 scroller"
              style={{ overflowX: "auto" }}
            >
              {eventsArr.map((e, idx) => (
                <div
                  key={idx}
                  className="pr-14 mr-8"
                  style={{ width: "max-content" }}
                >
                  <div
                    className="pr-12"
                    style={{ borderRight: "1px solid #DFDFDF" }}
                  >
                    <div
                      className="font-10 mb-2"
                      style={{ width: "max-content" }}
                    >
                      {e.league}
                    </div>
                    <div
                      className="font-10"
                      style={{ color: "red", width: "max-content" }}
                    >
                      {e.time}
                    </div>
                    <div className="mt-24 mb-8">
                      <div className="flex items-center my-8">
                        <img src={e.home.flag} alt="flag" />
                        <span className="ml-8">{e.home.name}</span>
                        <span className="ml-auto">0</span>
                      </div>
                      <div className="flex items-center my-8">
                        <img src={e.away.flag} alt="flag" />
                        <span className="ml-8">{e.away.name}</span>
                        <span className="ml-auto">0</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-12 text-t-capitalize text-blue-dark">
                    {e.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {/* headlines - r */}
      {isDesktop ? (
        <>
          <div className="flex justify-center bgg-gradient-multimedia">
            <div className="mw-1200 px-24">
              <div className="headline-grid py-20">
                <div
                  className="item-main font-white"
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <img
                    src={headlinesArr.main.thumbnail}
                    alt="mm-1"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <div
                    className="py-20"
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
                        justifyContent: "flex-end",
                        flexDirection: "column",
                        height: "100% ",
                      }}
                    >
                      <div className="flex flex--gap-8 items-center">
                        <div className="p-4" style={{ backgroundColor: "red" }}>
                          {headlinesArr.main.category}
                        </div>
                        <div className="font-14">{headlinesArr.main.time}</div>
                      </div>
                      <span className="font-30 font-w-700 my-10">
                        {headlinesArr.main.title}
                      </span>
                      <span className="font-16 mb-20">
                        {headlinesArr.main.description}
                      </span>
                    </div>
                  </div>
                </div>
                {headlinesArr.list.map((e, idx) => (
                  <div
                    key={idx}
                    className={`item-${idx} font-white`}
                    style={{ position: "relative", width: "100%" }}
                  >
                    <img
                      src={e.thumbnail}
                      alt="mm-1"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "auto",
                      }}
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
                          justifyContent: "flex-end",
                          flexDirection: "column",
                          height: "100% ",
                        }}
                      >
                        <div className="flex flex--gap-8 items-center">
                          <div
                            className="p-4"
                            style={{ backgroundColor: "red" }}
                          >
                            {e.category}
                          </div>
                          <div className="font-14">{e.time}</div>
                        </div>
                        <span className="font-18 font-w-700 my-8">
                          {e.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bgg-gradient-multimedia">
            <div className="px-20">
              <div
                className="flex flex--gap-10 items-start pt-20 mb-16 scroller"
                style={{ overflowX: "auto" }}
              >
                {[...headlinesArr.list].map((e, idx) => (
                  <div
                    key={idx}
                    className="font-white mb-20"
                    style={{
                      position: "relative",
                    }}
                  >
                    <img
                      src={e.thumbnail}
                      alt="mm-1"
                      style={{
                        position: "relative",
                      }}
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
                          justifyContent: "flex-end",
                          flexDirection: "column",
                          height: "100% ",
                        }}
                      >
                        <div className="flex flex--gap-8 items-center">
                          <div
                            className="p-4"
                            style={{ backgroundColor: "red" }}
                          >
                            {e.category}
                          </div>
                          <div className="font-14">{e.time}</div>
                        </div>
                        <span className="my-6 font-12" style={{ color: "red" }}>
                          Cristiano Ronaldo
                        </span>
                        <span className="font-18 font-w-700 mb-8">
                          {e.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="content-container">
        <div>
          <div className="main">
            {/* banner */}
            <div style={{ maxWidth: "100%" }}>
              <img
                src={isDesktop ? BigBanner : AffBanner}
                alt="banner"
                style={{ width: "100%" }}
              />
            </div>
            {/* subheadlines */}
            <div className="subheadline my-16 pl-8">
              <div
                className="flex flex--gap-10 items-start py-20 scroller"
                style={{ overflowX: "auto" }}
              >
                {subheadlineArr.map((e, idx) => (
                  <div
                    key={idx}
                    className="font-white"
                    style={{ position: "relative" }}
                  >
                    <img
                      src={e.thumbnail}
                      alt="sb-1"
                      style={{ position: "relative" }}
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
                          justifyContent: "flex-end",
                          flexDirection: "column",
                          height: "100% ",
                        }}
                      >
                        <span className="font-14 font-w-700 mt-auto">
                          {e.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* latest news */}
            <div className="latestnews px-20 my-20">
              <div
                className="font-18 font-w-700 pb-6 text-t-uppercase mb-20"
                style={{ borderBottom: "2px solid red" }}
              >
                LATEST NEWS
              </div>
              <div>
                <div className="my-14 full-width">
                  <img
                    src={NewsLatest}
                    alt="moto-gp"
                    style={{ width: "100%" }}
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
                  Rossi dan Morbidelli Beda Pandangan Soal Balapan di MotoGP
                  Doha, 4 April
                </p>
              </div>
            </div>
            {/* most popular news */}
            <div className="mostpopuler px-20 my-20">
              <div
                className="font-18 font-w-700 pb-6 text-t-uppercase mb-20"
                style={{ borderBottom: "2px solid red" }}
              >
                MOST POPULER
              </div>
              <div
                className="flex flex--gap-20 items-start py-5 mb-16 scroller"
                style={{ overflowX: "auto" }}
              >
                {mostPopular.map((e, idx) => (
                  <div key={idx} className="py-10">
                    <img src={e.thumbnail} alt="news-pop" />
                    <div className="flex items-center flex--gap-8 mt-8">
                      <div>
                        <img src={CalendarIcon} alt="calendar" />
                      </div>
                      <div className="font-12 my-14">29 Maret 2021</div>
                    </div>
                    <p className="font-w-700">{e.title}</p>
                  </div>
                ))}
              </div>
              {[...Array(2)].map((_, idx) => (
                <div
                  key={idx}
                  className="pt-10 mb-16"
                  style={{ borderTop: "2px solid #F2F2F2" }}
                >
                  <div className="my-14 full-width">
                    <img
                      src={NewsLatest}
                      alt="moto-gp"
                      style={{ width: "100%" }}
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
                    Rossi dan Morbidelli Beda Pandangan Soal Balapan di MotoGP
                    Doha, 4 April
                  </p>
                </div>
              ))}
            </div>
            {/* multimedia */}
            <div className="bgg-gradient-multimedia">
              <div className="px-20">
                <div
                  className="pt-16 pb-12 mb-20"
                  style={{ borderBottom: "2px solid red" }}
                >
                  <p className="m-0 color-white font-18 font-w-500">
                    MULTIMEDIA
                  </p>
                </div>
                <div
                  className="flex flex--gap-20 items-start pb-20 mb-16 scroller"
                  style={{ overflowX: "auto" }}
                >
                  {[...Array(3)].map((_, idx) => (
                    <div
                      key={idx}
                      className="font-white "
                      style={{ position: "relative" }}
                    >
                      <div className="full-width">
                        <img
                          src={MultimediaSlide}
                          alt="mm-1"
                          style={{ position: "relative" }}
                        />
                      </div>
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
                            IBL 2021: West Bandits Berhasil Balas Kekalahan atas
                            NSH
                          </p>
                          <div className="flex flex--gap-8 items-center">
                            <img src={CalendarIcon} alt="c-1" />
                            <div>4 Menit lalu</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="side">
            {/* editor choice */}
            <div className="editor-choice px-20 my-26">
              <div
                className="font-18 font-w-700 pb-6 text-t-uppercase mb-20"
                style={{ borderBottom: "2px solid red" }}
              >
                EDITOR'S CHOICE
              </div>
              <div
                className="font-white mb-20"
                style={{ position: "relative" }}
              >
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
                      justifyContent: "flex-end",
                      flexDirection: "column",
                      height: "100% ",
                    }}
                  >
                    <div className="flex flex--gap-8 items-center">
                      <div className="p-4" style={{ backgroundColor: "red" }}>
                        Bola Basket
                      </div>
                      <div className="font-14">Rabu, 30 Maret 2020</div>
                    </div>
                    <span className="font-18 font-w-700 mt-12 mb-8">
                      IBL 2021: West Bandits Balas Kekalahan atas NSH
                    </span>
                  </div>
                </div>
              </div>
              {editorChoice.map((e, idx) => (
                <div
                  key={idx}
                  className="flex flex--gap-12 items-center py-22"
                  style={{ borderTop: "1px solid gray" }}
                >
                  <img src={e.thumbnail} alt="news-pop" />
                  <div>
                    <p className="font-w-700">{e.title}</p>
                    <div className="flex items-center flex--gap-8 mt-8">
                      <div>
                        <img src={CalendarIcon} alt="calendar" />
                      </div>
                      <div className="font-12">29 Maret 2021</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* hot topic */}
            <div className="hot-topic px-20 my-26">
              <div
                className="font-18 font-w-700 pb-6 text-t-uppercase mb-20"
                style={{ borderBottom: "2px solid red" }}
              >
                HOT TOPIC
              </div>
              {[
                "Sepak Bola",
                "Moto GP",
                "Bola Basket",
                "Badminton",
                "Tenis",
                "Formula 1",
              ].map((e, idx) => (
                <div
                  key={e}
                  className={idx % 2 === 0 ? "bg-blue-dark" : "bg-blue-primary"}
                >
                  <div className="p-12 text-white font-w-700 font-16">
                    <span className="mr-4">&gt;</span> {e}
                  </div>
                </div>
              ))}
            </div>
            {/* statistic */}
            <div className="statistic px-20 my-26">
              <div
                className="pb-6 mb-20 flex items-center justify-between"
                style={{ borderBottom: "2px solid red" }}
              >
                <span className="font-18 font-w-700 text-t-uppercase">
                  STATISTIK
                </span>
                {!isDesktop ? (
                  <span className="font-16">Lihat Detail</span>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <div
                        className="py-8 px-12 radius-8 font-14"
                        style={{ border: "1px solid black" }}
                      >
                        EURO 2021
                      </div>
                    </div>
                  </>
                )}
              </div>
              {!isDesktop ? (
                <>
                  <div className="flex items-center justify-between">
                    <div
                      className="py-8 px-12 radius-8 font-14"
                      style={{ border: "1px solid black" }}
                    >
                      EURO 2021
                    </div>
                    <div className="flex items-center flex--gap-8">
                      <img src={ArrowLeft} alt="arr-left" />
                      <img src={ArrowRight} alt="arr-right" />
                    </div>
                  </div>
                </>
              ) : null}
              <div className="my-20">
                <span className="text-t-uppercase font-w-700">group a</span>
                <div className="table-stats font-w-700">
                  <div className="table-row bg-blue-primary text-white px-8 py-12">
                    <div className="table-col">Rank</div>
                    <div className="table-col text-a-center">P</div>
                    <div className="table-col text-a-center">GD</div>
                    <div className="table-col text-a-center">Pts</div>
                  </div>
                  {[...Array(4)].map((_, idx) => (
                    <div className="table-row px-8 py-12" key={idx}>
                      <div className="table-col">
                        <div className="flex items-center flex--gap-12">
                          <div>{idx + 1}</div>
                          <img src={BelIcon} alt="flag-1" />
                          <div>Germany</div>
                        </div>
                      </div>
                      <div className="table-col text-a-center">6</div>
                      <div className="table-col text-a-center">8</div>
                      <div className="table-col text-a-center">13</div>
                    </div>
                  ))}
                </div>
              </div>
              {isDesktop ? (
                <div className="my-20">
                  <span className="text-t-uppercase font-w-700">group b</span>
                  <div className="table-stats font-w-700">
                    <div className="table-row bg-blue-primary text-white px-8 py-12">
                      <div className="table-col">Rank</div>
                      <div className="table-col text-a-center">P</div>
                      <div className="table-col text-a-center">GD</div>
                      <div className="table-col text-a-center">Pts</div>
                    </div>
                    {[...Array(4)].map((_, idx) => (
                      <div className="table-row px-8 py-12" key={idx}>
                        <div className="table-col">
                          <div className="flex items-center flex--gap-12">
                            <div>{idx + 1}</div>
                            <img src={BelIcon} alt="flag-1" />
                            <div>Germany</div>
                          </div>
                        </div>
                        <div className="table-col text-a-center">6</div>
                        <div className="table-col text-a-center">8</div>
                        <div className="table-col text-a-center">13</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* footer - r */}
      {isDesktop ? (
        <>
          <div className="bg-blue-primary py-30 flex justify-center">
            <div className="mw-1200 px-24">
              <div className="flex items-start justify-between text-white">
                <div>
                  <img
                    src={MainLogoFooter}
                    alt="main-logo-footer"
                    className="mb-20"
                  />
                  <div className="mt-40">
                    <span>Contact with us: </span>
                    <div className="flex flex--gap-12 mt-20">
                      <img src={ScIg} alt="sc-ig" />
                      <img src={ScTw} alt="sc-tw" />
                      <img src={ScFb} alt="sc-fb" />
                      <img src={ScYt} alt="sc-yt" />
                      <img src={ScTT} alt="sc-tt" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-t-capitalize mr-40">
                    <div className="font-w-700 text-t-uppercase mb-14">
                      About us
                    </div>
                    {[
                      "tentang kami",
                      "disclaimer",
                      "kode etik",
                      "term of service",
                      "privacy policy",
                      "kontak kami",
                    ].map((e) => (
                      <div key={e} className="py-10">
                        {e}
                      </div>
                    ))}
                  </div>
                  <div className="text-t-capitalize">
                    <div className="font-w-700 text-t-uppercase mb-14">
                      kanal utama
                    </div>
                    <div className="flex items-start">
                      <div className="mr-40">
                        {[
                          "beranda",
                          "bola",
                          "balap",
                          "ragam",
                          "sportainment",
                          "hobi",
                        ].map((e) => (
                          <div key={e} className="py-10">
                            {e}
                          </div>
                        ))}
                      </div>
                      <div>
                        {["data statistik", "multimedia", "index"].map((e) => (
                          <div key={e} className="py-10">
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-dark py-20 text-a-center text-white font-w-500">
            <p>Copyright © 2021 Sportstars.id All Right Reserved</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-primary py-30">
            <div className="flex flex--d-column items-center text-white text-t-capitalize">
              <div style={{ maxWidth: "277px", width: "100%" }}>
                <img
                  src={MainLogoFooter}
                  alt="main-logo-footer"
                  className="mb-20"
                  style={{ width: "100" }}
                />
              </div>
              {[
                "tentang kami",
                "redaksi",
                "kode etik",
                "disclaimer",
                "term of service",
                "privacy policy",
                "sitemap",
                "kontak kami",
              ].map((e) => (
                <div key={e} className="py-10">
                  {e}
                </div>
              ))}
              <div className="flex flex--gap-12 mt-20">
                <img src={ScIg} alt="sc-ig" />
                <img src={ScTw} alt="sc-tw" />
                <img src={ScFb} alt="sc-fb" />
                <img src={ScYt} alt="sc-yt" />
                <img src={ScTT} alt="sc-tt" />
              </div>
            </div>
          </div>
          <div className="bg-blue-dark py-20 text-a-center text-white font-w-500">
            <p>
              Copyright © 2021 <br />
              Sportstars.id All Right Reserved
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default App;
