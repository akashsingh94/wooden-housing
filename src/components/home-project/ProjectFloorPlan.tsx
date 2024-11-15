import Image from "next/image";
import { Typography } from "@mui/material";
import classNames from "classnames";

import LineLeft from "../../../public/icons/line-left.svg";
import LineRight from "../../../public/icons/line-right.svg";

type Props = {
  className?: string;
};

export default function ProjectFloorPlan(props: Readonly<Props>) {
  const { className } = props;
  return (
    <div className={classNames("component--project-floor-plan", className)}>
      <div
        className={classNames(
          "tw--flex tw--flex-col tw--items-center tw--justify-center tw--gap-2"
        )}
      >
        <div className="tw--flex tw--items-center">
          <Image src={LineLeft} alt="" />
          <Typography
            className={classNames(
              "tw--text-secondary-darker tw--text-3xl tw--font-semibold"
            )}
          >
            Floor Plan
          </Typography>
          <Image src={LineRight} alt="" />
        </div>
        <Typography
          className={classNames(
            "tw--max-w-[27rem] tw--text-center tw--text-lg",
            "tw--text-[#636363] tw--font-light"
          )}
        >
          Take a look at the floor plan of Wooden Cottage Model
        </Typography>
      </div>
    </div>
  );
}
