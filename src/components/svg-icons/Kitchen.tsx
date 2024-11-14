import { SvgIcon, SvgIconProps } from "@mui/material";

type Props = SvgIconProps;

export default function Kitchen(props: Props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle cx="19.7846" cy="19.7055" r="19.3529" fill="#F4EFF5" />
        <path
          d="M15.5981 12.2617V27.8929M13.0859 12.6525V16.5603C13.0859 18.5142 15.5981 18.5142 15.5981 18.5142C15.5981 18.5142 18.1103 18.5142 18.1103 16.5603V12.6525M23.972 18.5142V27.8929M23.972 18.5142C25.3595 18.5142 26.4841 17.1144 26.4841 15.388C26.4841 13.6615 25.3595 12.2617 23.972 12.2617C22.5844 12.2617 21.4598 13.6615 21.4598 15.388C21.4598 17.1144 22.5844 18.5142 23.972 18.5142Z"
          stroke="#573C63"
          strokeWidth="1.26538"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
