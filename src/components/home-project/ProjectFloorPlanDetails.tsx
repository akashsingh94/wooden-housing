import classNames from "classnames";
import Image from "next/image";

import { getDisplayTextFromCamelCase } from "@/utilities/string";
import CheckFilledRounded from "../svg-icons/CheckFilledRounded";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import BackgroundImage from "../display/BackgroundImage";
import BgGrid from "../../../public/icons/background-grid.svg";
import { getOrdinal } from "@/utilities/number";
import "./ProjectFloorPlanDetails.scss";

type Props = {
  className?: string;
  floorPlanSrc: string;
  floorElevationSrc: string;
  availableFeatures: string[];
  floorNumber: number;
  totalArea: number;
};

export default function ProjectFloorPlanDetails(props: Props) {
  const {
    className,
    availableFeatures,
    floorElevationSrc,
    floorPlanSrc,
    floorNumber,
    totalArea,
  } = props;
  // const isEvenFloor = (floorNumber + 1) % 2 === 0;
  return (
    <div
      className={classNames("component--project-floor-plan-details", className)}
    >
      <div
        className={classNames(
          "floor-plan-and-details",
          "tw--grid lg:tw--grid-cols-2 tw--gap-8"
        )}
      >
        <div
          className={classNames(
            "lg:tw--max-h-[470px]",
            "tw--flex tw--items-center tw--justify-center"
          )}
        >
          <Image src={floorPlanSrc} alt="" height={1280} width={1280} />
        </div>
        <div
          className={classNames(
            "tw--flex tw--flex-col tw--flex-1 tw--gap-1 tw--px-10 tw--py-8",
            "tw--rounded-lg tw--bg-[#F5F5F5]"
          )}
        >
          <Typography className="tw--text-[2.12rem] tw--pb-2 tw--text-[#1B1B1B] tw--font-medium">
            {floorNumber}
            {getOrdinal(floorNumber)} Floor
          </Typography>
          <Typography className="tw--text-[1.38rem] tw--text-[#1B1B1B] tw--font-medium">
            Total area: {totalArea} sqft
          </Typography>
          <List sx={{ maxHeight: 300, overflow: "auto" }} dense>
            {availableFeatures.map((f) => (
              <ListItem key={f}>
                <ListItemIcon className="tw--w-max tw--min-w-8">
                  <CheckFilledRounded />
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: "tw--text-[#313131] tw--text-lg" }}
                  primary={getDisplayTextFromCamelCase(f)}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
      <div className="tw--relative tw--flex tw--items-center tw--justify-center">
        <BackgroundImage src={BgGrid} alt="" />
        <Image src={floorElevationSrc} alt="" height={400} width={900} />
      </div>
    </div>
  );
}
