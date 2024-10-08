/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "640px",
      l: "768px",
      lg: "976px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1350px",
      "4xl": "1440px",
    },
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        "mont-light": ["Mont Extralight", "sans-serif"],
        "mont-heavy": ["Mont Heavy", "sans-serif"],
      },
      backgroundImage: {
        "intrepid-image": "url('../public/img/intrepid-img.svg')",
        "sebigift-image": "url('../public/img/sebigift.svg')",
        "odiopay-image": "url('../public/img/odiopay.svg')",
        "secureshop-image": "url('../public/img/secureshop.svg')",
        intrepid: "url('../public/img/intrepid.svg')",
        "smsporte-image": "url('../public/img/smsporte.svg')",
        map: "url('../public/img/map.svg')",
      },
      fontSize: {
        40: "40px",
        52: "52px",
        56: "56px",
        60: "60.9531px",
      },
      colors: {
        "orange-1": "#EF6D58;",
        "orange-2": "rgba(255, 255, 255, 0.295743);",
        "light-orange": "#fff6f1;",
        "orange-3": "#D95C48",
        "dark-1": "#1A1C1D",
        "dark-2": "#32334c",
        "dark-3": "#000049",
        "dark-4": "#3e3c3d",
        brown: "#391400",
        "brown-1": "#bba5a7",
        "light-yellow": "#fff7f3",
        "light-yellow2": "#F3D1BF",
        "light-yellow3": "#FFF0EE",
        "light-yellow4": "#FFFcfb",
        "purple-1": "#5A00EF",
        "blue-1": "#0075FA",
        "grey-1": "#fcfcfc",
        "grey-2": "#e3e2e0",
        "blue-1": "#f4f9ff",
        "blue-2": "#f7fbff",
        "pink-1": "#5c2000",
      },
      width: {
        568: "568px",
        546: "546px",
        470: "470px",
        154: "154px",
        138: "138px",
        135: "135px",
        102: "102px",
        45: "45px",
      },
      height: {
        719: "719px",
        572: "572px",
        542: "542px",
        464: "464px",
        416: "416px",
        336: "336px",
        88: "88px",
        48: "48px",
        45: "45px",
        38: "38px",
      },
      padding: {
        190: "190px",
        135: "135px",
        132: "132px",
        127: "127px",
        124: "124px",
        121: "121px",
        120: "120px",
        115: "115px",
        110: "110px",
        108: "108px",
        100: "100px",
        98: "98px",
        94: "94px",
        93: "93px",
        88: "88px",
        81: "81px",
        80: "80px",
        78: "78px",
        71: "71px",
        70: "70px",
        65: "65px",
        60: "60px",
        57: "57px",
        50: "50px",
        48: "48px",
        47: "47px",
        46: "46px",
        45: "45px",
        42: "42px",
        38: "38px",
        31: "31px",
        23: "23px",
        22: "22px",
        17: "17px",
        9: "9px",
      },
      gap: {
        244: "244px",
        120: "120px",
        102: "102px",
        98: "98px",
        88: "88px",
        80: "80px",
        76: "76px",
        72: "72px",
        69: "69px",
        55: "55px",
        51: "51px",
        30: "30px",
        23: "23px",
        18: "18px",
        15: "15px",
        13: "13px",
      },
      borderRadius: {
        6: "6px",
      },
      boxShadow: {
        "3xl": "0px 0px 10px rgba(0, 0, 0, 0.05)",
        "4xl": "0px 32px 64px rgba(57, 20, 0, 0.04)",
        "5xl": "0px 3px 9px rgba(57, 20, 0, 0.08)",
      },
      letterSpacing: {
        3: "3x",
        "-2": "-2px",
        "-1.6": "-1.69314px",
        "-1": "-1px",
      },
      lineHeight: {
        14: "14px",
        44: "44px",
        48: "48px",
        64: "64px",
        68: "68px",
        80: "80px",
      },
      inset: {
        108: "108px",
        100: "100px",
        75: "75px",
      },
      margin: {
        110: "110px",
        135: "135px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
