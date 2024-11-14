import Image from "next/image";
import classNames from "classnames";
import { Typography } from "@mui/material";

import EarthquakeResistance from "../../../public/icons/earthquake-resistance.svg";
import HeatColdResistance from "../../../public/icons/heat-cold-resistance.svg";
import FireResistance from "../../../public/icons/fire-resistance.svg";
import SoundResistance from "../../../public/icons/sound-resistance.svg";
import CircleBlack from "../../../public/icons/circle-black.svg";
import CircleCurly from "../../../public/icons/circle-curly.svg";
import "./ProjectFeatures.scss";

export default function ProjectFeatures() {
  return (
    <div
      className={classNames(
        "component--project-feature",
        "tw--size-full tw--grid tw--gap-1"
      )}
    >
      {/* Earthquake Resistance */}
      <div className="tw--flex tw--flex-col tw--justify-start tw--items-center tw--gap-4">
        <div
          className={classNames(
            "tw--h-9 tw--w-9 sm:tw--h-20 sm:tw--w-20",
            "tw--rounded-full tw--border-[2.41px] tw--border-[#D75337]",
            "tw--p-[3px] sm:tw--p-[6px]"
          )}
        >
          <div
            className={classNames(
              "tw--size-full tw--rounded-full tw--bg-[#FFF1EC]",
              "tw--flex tw--items-center tw--justify-center"
            )}
          >
            <Image src={EarthquakeResistance} alt="" />
          </div>
        </div>
        <Typography className="tw--text-[#232323] tw--text-xs sm:tw--text-lg tw--text-center">
          Earthquake Resistance
        </Typography>
      </div>

      {/* Heat and Cold Resistance  */}
      <div className="tw--flex tw--flex-col tw--justify-start tw--items-center tw--gap-4">
        <div
          className={classNames(
            "tw--h-9 tw--w-9 sm:tw--h-20 sm:tw--w-20",
            "tw--rounded-full tw--border-[2.41px] tw--border-[#D75337]",
            "tw--p-1 sm:tw--p-[6px]"
          )}
        >
          <div
            className={classNames(
              "tw--size-full tw--rounded-full tw--bg-[#FFF1EC]",
              "tw--flex tw--items-center tw--justify-center"
            )}
          >
            <Image src={HeatColdResistance} alt="" />
          </div>
        </div>
        <Typography className="tw--text-[#232323] tw--text-xs sm:tw--text-lg tw--text-center">
          Heat and Cold Resistance
        </Typography>
      </div>

      {/* Fire Resistance */}
      <div className="tw--flex tw--flex-col tw--justify-start tw--items-center tw--gap-4">
        <div
          className={classNames(
            "tw--h-9 tw--w-9 sm:tw--h-20 sm:tw--w-20",
            "tw--rounded-full tw--border-[2.41px] tw--border-[#D75337]",
            "tw--p-1 sm:tw--p-[6px]"
          )}
        >
          <div
            className={classNames(
              "tw--size-full tw--rounded-full tw--bg-[#FFF1EC]",
              "tw--flex tw--items-center tw--justify-center"
            )}
          >
            <Image src={FireResistance} alt="" />
          </div>
        </div>
        <Typography className="tw--text-[#232323] tw--text-xs sm:tw--text-lg tw--text-center">
          Fire Resistance
        </Typography>
      </div>

      {/* Sound Resistance */}
      <div className="tw--flex tw--flex-col tw--justify-start tw--items-center tw--gap-4">
        <div
          className={classNames(
            "tw--h-9 tw--w-9 sm:tw--h-20 sm:tw--w-20",
            "tw--rounded-full tw--border-[2.41px] tw--border-[#D75337]",
            "tw--p-1 sm:tw--p-[6px]"
          )}
        >
          <div
            className={classNames(
              "tw--size-full tw--rounded-full tw--bg-[#FFF1EC]",
              "tw--flex tw--items-center tw--justify-center"
            )}
          >
            <Image src={SoundResistance} alt="" />
          </div>
        </div>
        <Typography className="tw--text-[#232323] tw--text-xs sm:tw--text-lg tw--text-center">
          Sound Resistance
        </Typography>
      </div>

      {/* 3 Years Warranty*/}
      <div className="tw--flex tw--flex-col tw--justify-start tw--items-center tw--gap-4">
        <div
          className={classNames(
            "tw--h-9 tw--w-9 sm:tw--h-20 sm:tw--w-20",
            "tw--rounded-full tw--border-[2.41px] tw--border-[#D75337]",
            "tw--p-[1px] sm:tw--p-[6px]"
          )}
        >
          <div
            className={classNames(
              "tw--size-full tw--rounded-full tw--bg-[#FFF1EC]",
              "tw--flex tw--items-center tw--justify-center tw--relative"
            )}
          >
            <Image src={CircleCurly} alt="" className="tw--absolute" />
            <Image src={CircleBlack} alt="" />
            <div
              className={classNames(
                "tw--absolute",
                "tw--flex tw--flex-col tw--items-center tw--justify-center"
              )}
            >
              <Typography
                className={classNames(
                  "tw--font-semibold tw--text-primary tw--text-xs",
                  "sm:tw--text-xl"
                )}
              >
                3
              </Typography>
              <Typography
                className={classNames(
                  "tw--uppercase tw--font-medium tw--text-[3px] tw--relative",
                  "sm:tw--tracking-wider sm:tw--text-[6px]"
                )}
              >
                years
              </Typography>
            </div>
          </div>
        </div>
        <Typography className="tw--text-[#232323] tw--text-xs sm:tw--text-lg tw--text-center">
          3 Years Warranty
        </Typography>
      </div>
    </div>
  );
}
