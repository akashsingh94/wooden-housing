import classNames from "classnames";

import "./Hero.scss";

type Props = {
  title: string;
  descriptions: string;
  className?: string;
};

export default function Hero(props: Readonly<Props>) {
  const { className, descriptions, title } = props;
  return (
    <div className={classNames("component--hero", "tw--h-[636px]", className)}>
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
                {descriptions}
              </div>
              <div className="tw--text-[#FF6847] tw--text-xl sm:tw--text-3xl tw--font-semibold">
                {title}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="overlay"></div> */}
      </div>
    </div>
  );
}
