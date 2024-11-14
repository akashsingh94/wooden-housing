import { SvgIcon, SvgIconProps } from "@mui/material";

type Props = SvgIconProps;

export default function Burger(props: Props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="24"
        viewBox="0 0 27 24"
        fill="none"
      >
        <path
          d="M0.956055 0.480469H26.9995V3.36028H0.956055V0.480469ZM9.63721 10.5598H26.9995V13.4396H9.63721V10.5598ZM0.956055 20.6391H26.9995V23.5189H0.956055V20.6391Z"
          fill="#3A2D41"
        />
      </svg>
    </SvgIcon>
  );
}
