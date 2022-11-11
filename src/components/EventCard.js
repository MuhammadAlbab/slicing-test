import BelIcon from "../assets/icons/flags/bel.svg";
import FraIcon from "../assets/icons/flags/fra.svg";

const EventCard = () => {
  return (
    <div className="pr-14 mr-8" style={{ width: "max-content" }}>
      <div className="pr-12" style={{ borderRight: "1px solid #DFDFDF" }}>
        <div className="font-10 mb-2" style={{ width: "max-content" }}>
          Liga Inggris Premier League
        </div>
        <div className="font-10" style={{ color: "red", width: "max-content" }}>
          Rabu, 31 Maret 2021
        </div>
        <div className="mt-24 mb-8">
          <div className="flex items-center my-8">
            <img src={BelIcon} alt="flag" />
            <span className="ml-8">BEL</span>
            <span className="ml-auto">0</span>
          </div>
          <div className="flex items-center my-8">
            <img src={FraIcon} alt="flag" />
            <span className="ml-8">FRA</span>
            <span className="ml-auto">0</span>
          </div>
        </div>
      </div>
      <p className="font-12 text-t-capitalize text-blue-dark">pre match</p>
    </div>
  );
};

export default EventCard;
