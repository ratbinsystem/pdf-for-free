import Auth from "./auth";
import Tap from "./tap";

const tapData = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Services" },
  { id: 4, title: "Contact" },
];

export default () => {
  return (
    <>
      <Tap tapes={tapData} />
      <header className="header">
        <div>logo</div>
        <div className="header-search">
          <input type="text" placeholder="Search" />
        </div>
        <Auth />
      </header>
    </>
  );
};
