export const Loader = ({ theme }) => {
  return (
    <svg
      width="230"
      height="128"
      viewBox="0 0 230 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1930_19674)">
        <rect
          x="8"
          y="4"
          width="214"
          height="112"
          rx="6"
          fill={theme === "light" ? "white" : "#828388"}
        />
      </g>
      <circle cx="47.5" cy="44.5" r="22.5" fill="#EF6D58" />
      <rect x="91" y="31" width="94" height="14" rx="2" fill="#F2F2F4" />
      <rect x="91" y="61" width="78" height="6" rx="3" fill="#F2F2F4" />
      <rect x="91" y="75" width="94" height="6" rx="3" fill="#F2F2F4" />
      <rect x="91" y="89" width="62" height="6" rx="3" fill="#F2F2F4" />
      <defs>
        <filter
          id="filter0_d_1930_19674"
          x="0"
          y="0"
          width="230"
          height="128"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1930_19674"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1930_19674"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
