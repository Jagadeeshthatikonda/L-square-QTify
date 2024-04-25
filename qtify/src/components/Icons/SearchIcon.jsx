import * as React from "react";
const SearchIcon = props => {
  const { width = 20, height = 20, fill = "#121212" } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="m14.326 12.899 5.38 5.38a1.009 1.009 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM8 13.999A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SearchIcon;
