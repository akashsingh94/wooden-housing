import classNames from "classnames";

import SectionTitle from "../display/SectionTitle";
import BackgroundImage from "../display/BackgroundImage";

type Props = {
  className?: string;
  gallery: string[];
};

export default function ProjectImageSlider(props: Readonly<Props>) {
  const { className, gallery } = props;
  const thumbnails = [...gallery];
  thumbnails.shift(); // remove the first item from thumbnail list
  const totalVisibleThumbnails = Math.min(thumbnails.length, 4);
  const numberOFExtraImages = gallery.length - totalVisibleThumbnails - 1;
  return (
    <div className={classNames("component--project-image-slider", className)}>
      <SectionTitle title="Project Images" />
      <div className="active-image tw--h-[31rem] tw--relative">
        <BackgroundImage className="tw--rounded-lg" src={gallery[0]} alt="" />
        <div
          className={classNames(
            "tw--grid tw--w-full tw--grid-cols-4",
            "tw--absolute tw--bottom-[-75px] tw--gap-2 tw--p-4"
          )}
        >
          {Array.from(Array(totalVisibleThumbnails)).map((_val, ind) => {
            const src = thumbnails[ind];
            const isLast = ind + 1 === totalVisibleThumbnails;
            return (
              <div
                key={src}
                className={classNames(
                  "tw--border-[3px] tw--h-32 tw--rounded-lg tw--relative",
                  "tw--flex tw--items-center tw--justify-center"
                )}
              >
                <BackgroundImage className="tw--rounded-lg" src={src} alt="" />
                {numberOFExtraImages > 0 && isLast && (
                  <span className="tw--w-[85px] tw--relative tw--text-xl tw--font-medium tw--text-white tw--text-center">
                    View More ({numberOFExtraImages})
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
