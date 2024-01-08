import "./BannerSection.css";
export const BannerSection = () => {
  return (
    <>
      <div className="bannerSection">
        <div className="bannerInfoContainer">
          <h1>
            Big January sale: <br /> Get 25% off or <br /> more
          </h1>
          <p className="bannerIntro">
            Start the new year on a bright note. Make new memories with a city
            escape and save 25% or more with Member Prices. Book by Jan 31.
          </p>
          <button className="bannerBtn">Book now</button>
        </div>
      </div>
    </>
  );
};
