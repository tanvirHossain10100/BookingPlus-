import { BannerSection } from "../components/BannerSection/BannerSection";
import { SearchBooking } from "../components/SearchBooking/SearchBoking";
import { FavCatGories } from "../components/favCatGories/favCatGories";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="container">
        <div className=""></div>
        <div className="searchBookingContainer">
          <SearchBooking></SearchBooking>
        </div>
        <div className="vrbo">
          <ul>
            <span>
              <li>
                <img
                  src="https://a.travel-assets.com/egds/marks/onekey__standard.svg"
                  alt=""
                />
              </li>
              <li>
                <p className="vrboFont">
                  One Key members earn rewards across Expedia, Hotels.com, and
                  Vrbo
                </p>
              </li>
            </span>
            <span>
              <li>
                <button>Sign in</button>
              </li>
              <li>
                <p>Learn about One Key</p>
              </li>
            </span>
          </ul>
        </div>
        <div className="bannerSectionContainer">
          <BannerSection></BannerSection>
        </div>
        <div className="favCatContainer">
          <FavCatGories></FavCatGories>
        </div>
      </div>
    </>
  );
};
