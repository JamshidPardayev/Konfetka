import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: "/image/gallery9.jpg",
    title: "GalleryImgOurMagazine",
    rows: 2,
    cols: 2,
  },
  {
    img: "/image/gallery2.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery4.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery3.jpg",
    title: "GalleryImgOurMagazine",
    rows: 2,
    cols: 2,
  },
  {
    img: "/image/gallery10.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery6.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery7.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery8.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery9.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery5.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery2.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery5.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
  {
    img: "/image/gallery5.jpg",
    title: "GalleryImgOurMagazine",
    cols: 2,
    rows: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const GalleryPart = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-[15px]">
      <ImageList
        sx={{
          width: "100%",
          height: 480,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
        className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
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

export default GalleryPart;
