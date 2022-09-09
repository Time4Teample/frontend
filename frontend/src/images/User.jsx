import * as React from "react";

const User = (props) => (
  <svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h60v60H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.00195)" />
      </pattern>
      <image
        id="b"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACAKADAAQAAAABAAACAAAAAAAL+LWFAAApMElEQVR4Ae3dCbhtZ1kf8EvmeQYyELiEITYhCSEKSNIgmGgBExXEWgV8RCg8CA20FdpS29j2EZ7WyuCAVG0tVC3RCmGoiDEBmjAkXiCTEsuQkRQykHmAJPT/Judcdq53OOfcPaxvfb/ved6719ln7/W97+9b96xvr7322uvWaQQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA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AQIERizgb+qIB1dpBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAYj8P8BGtn48yKHF3YAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default User;