import classNames from "classnames";
import Image from "next/image";

type Props = {
  className?: string;
  src: string;
  alt: string;
};
export default function BackgroundImage(props: Readonly<Props>) {
  const { alt, src, className } = props;
  return (
    <Image
      alt={alt}
      src={src}
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
      className={classNames("component-background-image", className)}
    />
  );
}
