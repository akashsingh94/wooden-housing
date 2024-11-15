import classNames from "classnames";
import SectionTitle from "../display/SectionTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";

import TotalArea from "../svg-icons/TotalArea";
import CarpetArea from "../svg-icons/CarpetArea";
import NumberOfFloors from "../svg-icons/NumberOfFloors";
import Price from "../svg-icons/Price";
import Bed from "../svg-icons/Bed";
import Living from "../svg-icons/Living";
import Deck from "../svg-icons/Deck";
import Toilet from "../svg-icons/Toilet";
import Kitchen from "../svg-icons/Kitchen";
import Construction from "../svg-icons/Construction";
import { ProjectDetails as Details } from "@/typings/services";

type Props = {
  className?: string;
  details: Details;
};

const detailsMapping = [
  {
    displayName: "Total Area",
    icon: TotalArea,
    name: "totalArea", //serverName
    isArea: true,
  },
  {
    displayName: "Carpet Area",
    icon: CarpetArea,
    name: "carpetArea",
    isArea: true,
  },
  {
    displayName: "No. of floors",
    icon: NumberOfFloors,
    name: "floors",
  },
  {
    displayName: "Price - /sqft",
    icon: Price,
    name: "priceSqft",
    isPrice: true,
  },
  {
    displayName: "No. of bedrooms",
    icon: Bed,
    name: "bedrooms",
  },
  {
    displayName: "No. of living room",
    icon: Living,
    name: "livingRoom",
  },
  {
    displayName: "No. of hall",
    icon: Living,
    name: "halls",
  },
  {
    displayName: "No. of Deck",
    icon: Deck,
    name: "decks",
  },
  {
    displayName: "No. of Toilet",
    icon: Toilet,
    name: "toilets",
  },
  {
    displayName: "No. of kitchen",
    icon: Kitchen,
    name: "kitchens",
  },
  {
    displayName: "Type of construction",
    icon: Construction,
    name: "typeOfConstruction",
  },
];

export default function ProjectDetails(props: Readonly<Props>) {
  const { className, details } = props;
  return (
    <div className={classNames("component--project-details", className)}>
      <SectionTitle title="Project Details" />
      <List
        className="tw--border tw--rounded-lg tw--divide-y"
        sx={{ width: "100%", bgcolor: "background.paper" }}
        dense
        disablePadding
      >
        {detailsMapping.map(
          ({ icon: Component, displayName, name, isArea, isPrice }, ind) => {
            let value = details[name as keyof typeof details];
            if (!value) return null;
            value = Array.isArray(value) ? value.length : value;
            if (isArea) value = `${value} sqft`;
            if (isPrice) value = `Rs. ${value}`;
            return (
              <ListItem
                key={displayName}
                className={classNames("tw--py-2", {
                  "tw--bg-[#FBFBFB]": (ind + 1) % 2 === 0,
                })}
              >
                <ListItemIcon>
                  <Component sx={{ fontSize: 35 }} />
                </ListItemIcon>
                <ListItemText
                  className="tw--text-[#313131]"
                  id="switch-list-label-wifi"
                  primary={displayName}
                />
                <Typography className="tw--font-medium">{value}</Typography>
              </ListItem>
            );
          }
        )}
      </List>
    </div>
  );
}
