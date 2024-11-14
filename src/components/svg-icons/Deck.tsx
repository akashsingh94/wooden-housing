import { SvgIcon, SvgIconProps } from "@mui/material";

type Props = SvgIconProps;

export default function Deck(props: Props) {
  return (
    <SvgIcon {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.431641"
          y="0.941406"
          width="38.7059"
          height="38.7059"
          rx="19.3529"
          fill="#F4EFF5"
        />
        <path
          d="M18.8625 29.5105V17.5301H10.5684L19.784 11.0791L28.9997 17.5301H20.7056V29.5105H18.8625ZM11.4899 29.5105V24.6722L10.7527 20.6173L12.5497 20.2948L13.2409 23.9811H17.0193V29.5105H15.1762V25.8242H13.3331V29.5105H11.4899ZM22.5488 29.5105V23.9811H26.3272L27.0184 20.2948L28.8154 20.6173L28.0782 24.6722V29.5105H26.235V25.8242H24.3919V29.5105H22.5488Z"
          fill="#573C63"
        />
      </svg>
    </SvgIcon>
  );
}
