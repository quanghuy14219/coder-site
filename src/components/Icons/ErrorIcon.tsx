import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon"

export const ErrorIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.59354 2.26627C7.76403 2.09578 7.99526 2 8.23637 2H15.7636C16.0047 2 16.236 2.09578 16.4065 2.26627L21.7337 7.59354C21.9042 7.76403 22 7.99526 22 8.23636V15.7636C22 16.0047 21.9042 16.236 21.7337 16.4065L16.4065 21.7337C16.236 21.9042 16.0047 22 15.7636 22H8.23637C7.99526 22 7.76403 21.9042 7.59354 21.7337L2.26627 16.4065C2.09578 16.236 2 16.0047 2 15.7636V8.23636C2 7.99526 2.09578 7.76403 2.26627 7.59354L7.59354 2.26627ZM8.61293 3.81818L3.81819 8.61292V15.3871L8.61293 20.1818H15.3871L20.1818 15.3871V8.61292L15.3871 3.81818H8.61293ZM12 7.45455C12.5021 7.45455 12.9091 7.86156 12.9091 8.36364V12C12.9091 12.5021 12.5021 12.9091 12 12.9091C11.4979 12.9091 11.0909 12.5021 11.0909 12V8.36364C11.0909 7.86156 11.4979 7.45455 12 7.45455ZM12 14.7273C11.4979 14.7273 11.0909 15.1343 11.0909 15.6364C11.0909 16.1384 11.4979 16.5455 12 16.5455H12.0091C12.5112 16.5455 12.9182 16.1384 12.9182 15.6364C12.9182 15.1343 12.5112 14.7273 12.0091 14.7273H12Z"
      fill="currentColor"
    />
  </SvgIcon>
)
