import classNames from "classnames";

import SectionTitle from "../display/SectionTitle";
import "./ProjectImageSlider.scss";

type Props = {
  className?: string;
};

export default function ProjectImageSlider(props: Readonly<Props>) {
  const { className } = props;
  return (
    <div className={classNames("component--project-image-slider", className)}>
      <SectionTitle title="Project Images" />
      <div className="active-image tw--h-[31rem] tw--relative">
        <div
          className={classNames(
            "tw--grid tw--w-full tw--grid-cols-4",
            "tw--absolute tw--bottom-[-75px] tw--gap-2 tw--p-4"
          )}
        >
          <div
            className={classNames(
              "thumbnail",
              "tw--border-[3px] tw--h-32 tw--rounded-lg"
            )}
          ></div>
          <div
            className={classNames(
              "thumbnail",
              "tw--border-[3px] tw--h-32 tw--rounded-lg"
            )}
          ></div>
          <div
            className={classNames(
              "thumbnail",
              "tw--border-[3px] tw--h-32 tw--rounded-lg"
            )}
          ></div>
          <div
            className={classNames(
              "thumbnail",
              "tw--border-[3px] tw--h-32 tw--rounded-lg",
              "tw--flex tw--items-center tw--justify-center"
            )}
          >
            <span className="tw--w-[85px] tw--text-xl tw--font-medium tw--text-white tw--text-center">
              View More (7)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
