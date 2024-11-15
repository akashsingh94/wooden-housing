import { SvgIcon, SvgIconProps } from "@mui/material";

type Props = SvgIconProps;

export default function CheckFilledRounded(props: Props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <circle cx="9.56522" cy="10.4998" r="9.56522" fill="#4A3456" />
        <path
          d="M5.2168 10.4997L7.82549 13.1084L13.9124 7.02148"
          stroke="white"
          strokeWidth="1.73913"
        />
      </svg>
    </SvgIcon>
  );
}
