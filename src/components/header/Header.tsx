import classNames from "classnames";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";

import Logo from "../../../public/icons/logo.svg";
import ArrowDown from "../../../public/icons/arrow-down.svg";
import "./Header.scss";
import Burger from "../svg-icons/Burger";

export default function Header() {
  return (
    <header>
      <div
        className={classNames(
          "component--header",
          "tw--h-[85px] tw--flex tw--items-center tw--gap-28 tw--justify-between",
          "tw--border-b tw--border-solid tw--p-4",
          "xl:tw--gap-56 xl:tw--justify-center xl:tw--px-2"
        )}
      >
        {/* Header left */}
        <div className={classNames("tw--flex tw--items-center tw--gap-28")}>
          {/* Logo and company name */}
          <div className="tw--flex tw--gap-4 tw--items-center">
            <Image src={Logo} alt="" />
            <div>
              <span className="tw--text-secondary-dark tw--font-bold tw--uppercase tw--text-[22px]">
                Woodenhousing
              </span>
            </div>
          </div>

          {/* Nav bar */}
          <div className="tw--gap-12 tw--hidden xl:tw--flex">
            <div
              style={{
                borderBottom: "3px #D75438 solid",
              }}
            >
              <div className="tw--text-dark-green tw--font-medium tw--text-lg">
                Home
              </div>
            </div>
            <div>
              <div className="tw--text-dark-green tw--text-lg">Designs</div>
            </div>
            <div className="tw--flex tw--items-center tw--gap-2">
              <div className="tw--text-dark-green tw--text-lg">Services</div>
              <Image src={ArrowDown} alt="" />
            </div>
            <div>
              <div className="tw--text-dark-green tw--text-lg">About Us</div>
            </div>
            <div>
              <div className="tw--text-dark-green tw--text-lg">Blog</div>
            </div>
            <div>
              <div className="tw--text-dark-green tw--text-lg">Career</div>
            </div>
          </div>
        </div>

        {/* header right */}
        <>
          <Button
            sx={{ textTransform: "none", fontSize: "18px" }}
            disableElevation
            variant="contained"
            className="tw--hidden xl:tw--flex"
          >
            Contact Us
          </Button>
          <IconButton
            className="xl:tw--hidden tw--inline-flex"
            aria-label="menu"
          >
            <Burger />
          </IconButton>
        </>
      </div>
      <div className="sub-header tw--grid">
        <div
          className={classNames(
            "tw--size-full tw--py-4",
            "tw--items-center tw--justify-center  tw--hidden xl:tw--flex"
          )}
        >
          <div className="tw--w-[1245px] tw--flex tw--items-center tw--gap-[40px] tw--px-2">
            <div className="tw--text-arsenic tw--text-lg tw--break-words">
              Why wooden house?
            </div>
            <div className="tw--text-arsenic tw--text-lg tw--break-words">
              Benefits of wooden house
            </div>
            <div className="tw--text-arsenic tw--text-lg tw--break-words">
              3D design tour
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
