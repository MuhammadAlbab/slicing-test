import HamburgerIcon from "../assets/icons/hamburger-menu.svg";
import MainLogo from "../assets/images/main-logo.png";
import SearchIcon from "../assets/icons/search.svg";

const HeaderSmall = () => {
  return (
    <>
      <div className="flex items-center p-20">
        <img src={HamburgerIcon} alt="ham-menu" />
        <img src={MainLogo} alt="main-logo-sm" className="mx-auto" />
        <img src={SearchIcon} alt="search" />
      </div>
    </>
  );
};

export default HeaderSmall;
