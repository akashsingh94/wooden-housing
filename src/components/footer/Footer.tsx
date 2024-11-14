import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";

export default function Footer() {
  return (
    <footer
      className={classNames(
        "component--footer",
        "tw--h-[365px] tw--bg-[#4B325A] tw--mt-14",
        "tw--text-white"
      )}
    >
      <div className="tw--flex tw--items-center tw--justify-center tw--size-full">
        <Typography className="tw--font-semibold tw--text-2xl">
          Footer will go here
        </Typography>
      </div>
    </footer>
  );
}
