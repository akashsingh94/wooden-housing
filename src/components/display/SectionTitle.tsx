import classNames from "classnames";

type Props = {
  title: string;
  className?: string;
  disableGutter?: boolean;
};

export default function SectionTitle(props: Readonly<Props>) {
  const { title, className, disableGutter = false } = props;
  return (
    <div
      className={classNames(
        "component--section-title",
        "tw--text-2xl tw--font-medium",
        { "tw--pt-1 tw--pb-5": !disableGutter },
        className
      )}
    >
      {title}
    </div>
  );
}
