import React from "react";
import styled, { useTheme } from "styled-components";

const SVG = styled.svg<{ filter: string }>`
  filter: ${(props) =>
    props.filter === "dark" ? "brightness(0) invert(1)" : ""};
`;

function Logo() {
  const { name } = useTheme();
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="1066.667"
      height="1066.667"
      version="1"
      viewBox="0 0 800 800"
      filter={name}
    >
      <path
        d="M5726 4057c-335-991-611-1808-614-1814-3-10 20-13 96-13 86 0 101 2 107 17 6 16 1023 3019 1165 3441l59 172h-204l-609-1803zM3351 5765c-212-41-315-88-421-195-108-107-152-205-169-373-5-51-12-416-16-812-3-396-10-751-16-790-36-269-51-343-96-485-99-318-213-522-378-679-41-39-75-77-75-85 0-34 89-87 190-112 78-19 325-18 420 2 433 90 772 399 935 854 51 144 66 202 101 415 27 159 47 2216 22 2231-52 33-380 52-497 29zM4870 5756c-162-35-213-53-292-105-91-59-159-135-203-227-62-128-64-143-69-944-5-760-9-852-52-1078-82-430-231-758-438-965-87-86-88-87-72-111 18-28 102-71 177-91 71-19 320-20 414-1 516 103 896 521 1016 1117 42 213 42 189 46 1306 4 1068 4 1072-16 1083-32 17-217 40-316 39-53-1-133-10-195-23zM1510 4470l-565-269v-202l565-259 565-258 3 141c1 77-1 144-5 148s-183 78-398 164c-214 86-393 160-397 164s171 83 390 175c218 93 401 172 405 176s6 70 5 147l-3 141-565-268zM6422 4483l3-148 397-160c219-89 399-163 402-166 3-2-174-80-392-173-218-92-401-171-405-175s-6-71-5-148l3-140 560 266 560 266v209l-530 243c-291 133-545 249-563 258l-33 15 3-147z"
        transform="matrix(.1 0 0 -.1 0 800)"
      ></path>
    </SVG>
  );
}

export default Logo;
