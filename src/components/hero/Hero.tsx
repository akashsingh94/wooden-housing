import "./Hero.scss";

export default function Hero() {
  return (
    <div className="tw--h-[636px]">
      <div className="big-image ">
        <div className="overlay">
          <div
            style={{
              border: "3px white solid",
              height: "16%",
            }}
          ></div>
          <div>
            <div className="tw--text-white tw--text-[42px] tw--font-semibold">
              Glass House 70 - Log Cabin
            </div>
            <div className="tw--text-[#FF6847] tw--text-[32px] tw--font-semibold">
              Wooden Cottage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
