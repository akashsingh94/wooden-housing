import classNames from "classnames";

import "./Hero.scss";

export default function Hero() {
  return (
    <div className="tw--h-[636px]">
      <div className="big-image tw--size-full">
        <div className="tw--flex tw--items-center tw--justify-center tw--size-full">
          <div
            className={classNames(
              "container",
              "tw--size-full tw--text-white",
              "tw--flex tw--items-center tw--gap-5 tw--p-4"
            )}
          >
            <div
              className={classNames(
                "tw--flex tw--flex-col tw--gap-3",
                "tw--border-l-[6px] tw--p-2 tw--pl-3"
              )}
            >
              <div className="tw--text-white tw--text-2xl sm:tw--text-[2.63rem] tw--font-semibold">
                Glass House 70 - Log Cabin
              </div>
              <div className="tw--text-[#FF6847] tw--text-xl sm:tw--text-3xl tw--font-semibold">
                Wooden Cottage
              </div>
            </div>
          </div>
        </div>
        {/* <div className="overlay"></div> */}
      </div>
    </div>
  );
}
