import classNames from "classnames";
import Image from "next/image";
import { CSSProperties } from "react";

type Props = {
  className?: string;
  src: string;
  alt: string;
  style?: CSSProperties;
};
export default function BackgroundImage(props: Readonly<Props>) {
  const { alt, src, className, style } = props;
  return (
    <Image
      alt={alt}
      src={src}
      quality={100}
      fill
      sizes="100vw"
      style={{
        ...style,
        objectFit: "cover",
      }}
      className={classNames("component-background-image", className)}
    />
  );
}
