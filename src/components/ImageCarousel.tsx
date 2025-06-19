import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface ImageCarouselProps {
  images: string[];
  height?: string;
  backgroundColor?: string;
  loop?: boolean;
  peekPercentage?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  height = "400px",
  backgroundColor = "#000",
  loop = true,
  peekPercentage = 10,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const peekPadding = peekPercentage / 2;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else if (loop) setCurrentIndex(images.length - 1);
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    else if (loop) setCurrentIndex(0);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height={height}
      overflow="hidden"
      bgcolor={backgroundColor}
    >
      <Box
        display="flex"
        height="100%"
        sx={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            flex={`0 0 ${100 / images.length}%`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={`${peekPadding / images.length}%`}
          >
            <Box
              component="img"
              src={src}
              alt={`Slide ${index}`}
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handlePrev}
        disabled={!loop && currentIndex === 0}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowBack fontSize="small" />
      </IconButton>
      <IconButton
        onClick={handleNext}
        disabled={!loop && currentIndex === images.length - 1}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowForward fontSize="small" />
      </IconButton>
    </Box>
  );
};
