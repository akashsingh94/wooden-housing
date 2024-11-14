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

type Props = {
  className?: string;
};

const details = [
  {
    name: "Total Area",
    icon: TotalArea,
  },
  {
    name: "Carpet Area",
    icon: CarpetArea,
  },
  {
    name: "No. of floors",
    icon: NumberOfFloors,
  },
  {
    name: "Price - /sqft",
    icon: Price,
  },
  {
    name: "No. of bedrooms",
    icon: Bed,
  },
  {
    name: "No. of living room",
    icon: Living,
  },
  {
    name: "No. of hall",
    icon: Living,
  },
  {
    name: "No. of Deck",
    icon: Deck,
  },
  {
    name: "No. of Toilet",
    icon: Toilet,
  },
  {
    name: "No. of kitchen",
    icon: Kitchen,
  },
  {
    name: "Type of construction",
    icon: Construction,
  },
];

export default function ProjectDetails(props: Readonly<Props>) {
  const { className } = props;
  return (
    <div className={classNames("component--project-details", className)}>
      <SectionTitle title="Project Details" />
      <List
        className="tw--border tw--rounded-lg tw--divide-y"
        sx={{ width: "100%", bgcolor: "background.paper" }}
        dense
        disablePadding
      >
        {details.map(({ icon: Component, name }, ind) => {
          return (
            <ListItem
              key={name}
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
                primary={name}
              />
              <Typography className="tw--font-medium">40*50 sqft</Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
