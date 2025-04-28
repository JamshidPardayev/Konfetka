"use client";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import useMediaQuery from "@mui/material/useMediaQuery";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  { img: "/image/img4.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img8.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img6.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img3.png", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img5.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img1.png", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img7.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img2.png", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img9.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img10.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img11.jpg", title: "chocolates", rows: 2, cols: 2 },
  { img: "/image/img12.jpg", title: "chocolates", rows: 2, cols: 2 },
];

const ChocolatesPart = () => {
  const isSmallScreen = useMediaQuery("(max-width:640px)"); // 640px dan kichik ekranda true bo'ladi

  return (
    <div className="max-w-[1200px] mx-auto px-[15px]">
      <ImageList
        sx={{ width: "100%", height: "auto" }}
        variant="quilted"
        cols={isSmallScreen ? 1 : 4} // kichik ekranda 1ta column, katta ekranda 4ta
        rowHeight={isSmallScreen ? "auto" : 121} // optional: kichik ekran uchun avtomatik balandlik
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
                sx={{ width: "100%", height: 300 }}
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ChocolatesPart;
