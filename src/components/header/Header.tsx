import classNames from "classnames";
import Logo from "../../../public/icons/logo.svg";
import Image from "next/image";
import { Button } from "@mui/material";
import ArrowDown from "../../../public/icons/arrow-down.svg";

export default function Header() {
  return (
    <header>
      {/* <div
        className={classNames(
          "tw--bg-secondary-darker tw--size-full tw--px-[10px] tw--py-3",
          "tw--flex tw--items-center tw--justify-center"
        )}
      >
        <div className="tw--text-white tw--uppercase">
          <span>Welcome to</span>
          <span> </span>
          <span className="tw--font-semibold">Woodenhousing!</span>
        </div>
      </div> */}
      <div
        className={classNames(
          "tw--h-[85px] tw--flex tw--items-center tw--justify-between tw--px-[250px]",
          "tw--border-b tw--border-solid"
        )}
      >
        <div className="tw--flex tw--gap-4 tw--items-center">
          <Image src={Logo} alt="" />
          <div>
            <span className="tw--text-secondary-dark tw--font-bold tw--uppercase tw--text-[22px]">
              Woodenhousing
            </span>
            {/* <span className="tw--text-secondary-dark tw--font-semibold tw--uppercase tw--text-xl">
              housing
            </span> */}
          </div>
        </div>
        <div className="tw--flex tw--gap-12">
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
        <Button
          sx={{ textTransform: "none", fontSize: "18px" }}
          disableElevation
          variant="contained"
        >
          Contact Us
        </Button>
      </div>

      <div
        className={classNames(
          "tw--size-full tw--px-[250px] tw--py-4",
          "tw--flex tw--items-center tw--gap-[40px]"
        )}
      >
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
    </header>
  );
}
