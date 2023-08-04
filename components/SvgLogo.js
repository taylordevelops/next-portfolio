import { useEffect, useState } from "react";
import FillSwitch from "./FillSwitch";

const SvgLogo = (props) => {
  const [checked, setChecked] = useState(false);
  const handleToggle = (newChecked) => {
    setChecked(newChecked);
  };
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={75}
        height={80}
        viewBox="0 0 444 475"
        fill={checked ? "white" : "black"}
        {...props}
      >
        <path d="M221.15-.53c56.02 0 112.03-.07 168.05.09 6.61.02 13.31.8 19.81 2.02 6.69 1.25 9.03 4.95 8.04 11.52-4.28 28.58-3.01 57.17-.13 85.75 1.01 10-4.96 15.3-14.69 13-3.66-.86-5.63-2.81-6.4-6.64-2.02-10.11-3.98-20.26-6.8-30.16-1.85-6.5-4.67-12.84-7.87-18.82-7.38-13.8-19-22.85-34.13-26.45-23.63-5.62-47.56-6.1-71.41-1.29-14.58 2.94-20.59 10.41-21.53 25.25-.15 2.33-.25 4.66-.25 6.99.03 94.18.02 188.35.2 282.53.02 8.3.88 16.63 1.94 24.87 1.47 11.46 8.12 19.28 18.87 23.11 13.83 4.93 27.65 7.2 42.4 2.13 23.16-7.96 45.4-17.28 64.35-33.27 24.61-20.75 37.5-46.83 35.86-79.29-.61-12.11-1.77-24.26-3.69-36.23-4.21-26.23-20.64-43.64-42.58-56.78-22.07-13.21-46.26-20.16-71.4-24.33-2.63-.44-5.28-.74-7.91-1.14-5.92-.88-8.25-3.42-7.63-8.33.72-5.74 5.12-9.77 10.16-9.45 13.8.87 27.61 2.56 41.4 2.35 27.99-.42 55.96-1.87 83.94-2.91 4.66-.17 9.32-.56 13.98-.64 4.84-.09 7.61 2.29 8.32 6.8.69 4.41-1.88 7.91-6.18 9.45-5.12 1.84-10.51 3.5-15 6.44-8.19 5.35-10 13.38-5.99 22.31a39.08 39.08 0 0 0 3.13 5.67c15.5 23.23 24.54 48.55 25.8 76.63 1.37 30.51-.45 60.63-9.81 89.91-15.43 48.27-48.78 79.1-95.26 96.86-31.17 11.91-63.72 16.37-96.9 17.36-41.31 1.23-81.88-2.55-120.86-17.37-38.03-14.46-70.81-36.25-92.38-71.47C.78 340.5-7.6 291.46 7.26 239.73c3.77-13.13 10.78-25.35 16.52-37.89 2.28-4.98 5.26-9.65 7.75-14.54 5.22-10.23 2.94-15.63-8.01-19.33-5.72-1.94-8.28-10.86-4.09-15.16 1.01-1.04 3.38-1.48 4.93-1.2 34.13 6.3 68.09 2.58 102.04-1.57 2.81-.34 5.63-.6 8.44-.96 5.39-.7 7.95.96 9.09 5.96 1.41 6.19-.83 11.12-5.6 12.63-12.36 3.93-24.99 7.2-36.98 12.04-25.19 10.15-46.7 25.42-59.56 50.09-16.5 31.63-18.78 64.66-5.75 98.02 7.59 19.42 22.35 33.32 39.3 44.82 17.43 11.83 36.65 20.35 57.28 23.69 13.27 2.15 26.89-1.59 38.38-9.56 10.22-7.09 11.92-18.4 12.96-29.64.7-7.62.95-15.31.96-22.97.06-90.84.05-181.69 0-272.53 0-3.99-.32-8-.83-11.95-1.56-12.01-7.01-18.27-18.74-21.09-15.56-3.75-31.41-3.6-47.24-2.63-6.8.42-13.59 1.32-20.33 2.41-19.24 3.12-33.53 13.52-40.75 31.51-5.48 13.66-9.01 28.13-12.93 42.37-2.13 7.75-6.88 10.94-14.65 8.55-5.33-1.64-6.64-3.68-6.09-9.15 2.97-29.42 3.93-58.85-.04-88.27-.76-5.65 1.3-9.51 7.14-10.85C37.54.91 44.88-.39 52.12-.42c56.35-.23 112.7-.13 169.05-.13l-.02.02Z" />
      </svg>
      <FillSwitch checked={checked} onToggle={handleToggle} />
    </div>
  );
};

export default SvgLogo;
