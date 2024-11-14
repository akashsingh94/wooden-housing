import classNames from "classnames";

import SectionTitle from "../display/SectionTitle";
import "./ProjectImageSlider.scss";

type Props = {
  className?: string;
};

export default function ProjectImageSlider(props: Readonly<Props>) {
  const { className } = props;
  return (
    <div className={classNames("component--project-image-slider", className)}>
      <SectionTitle title="Project Images" />
      <div className="active-image tw--h-[31rem]"></div>
    </div>
  );
}
