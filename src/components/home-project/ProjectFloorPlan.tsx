import Image from "next/image";
import { Typography } from "@mui/material";
import classNames from "classnames";

import LineLeft from "../../../public/icons/line-left.svg";
import LineRight from "../../../public/icons/line-right.svg";
import { Floor } from "@/typings/services";
import ProjectFloorPlanDetails from "./ProjectFloorPlanDetails";

type Props = {
  className?: string;
  floors: Floor[];
};

export default function ProjectFloorPlan(props: Readonly<Props>) {
  const { className, floors } = props;
  return (
    <div className={classNames("component--project-floor-plan", className)}>
      <div
        className={classNames(
          "tw--flex tw--flex-col tw--items-center tw--justify-center tw--gap-2"
        )}
      >
        <div className="tw--flex tw--items-center">
          <div className="tw--flex-1">
            <Image src={LineLeft} alt="" />
          </div>
          <Typography
            className={classNames(
              "tw--text-secondary-darker tw--text-3xl tw--font-semibold",
              "tw--max-w-max"
            )}
          >
            Floor Plan
          </Typography>
          <div className="tw--flex-1">
            <Image src={LineRight} alt="" />
          </div>
        </div>
        <Typography
          className={classNames(
            "tw--max-w-[27rem] tw--text-center tw--text-lg",
            "tw--text-[#636363] tw--font-light"
          )}
        >
          Take a look at the floor plan of Wooden Cottage Model
        </Typography>
        {floors.map((floor, ind) => {
          const features = Object.keys(floor).reduce((feature, key) => {
            const value = floor[key as keyof typeof floor];
            if (typeof value === "boolean" && value)
              feature = [...feature, key];
            return feature;
          }, [] as string[]);
          return (
            <ProjectFloorPlanDetails
              key={`${floor.description}-${ind}`}
              availableFeatures={features}
              floorElevationSrc={floor.floorElevation}
              floorPlanSrc={floor.floorPlan}
              floorNumber={ind + 1}
              totalArea={floor.area}
              className="tw--size-full tw--mt-8"
            />
          );
        })}
      </div>
    </div>
  );
}
