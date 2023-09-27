"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const HomePage = () => {
  const { text } = useTypewriter({
    words: [
      "Fullstack Web Developer.",
      "Frontend Web Developer.",
      "Backend Web Developer.",
    ],
    loop: 0,
    typeSpeed: 25,
    deleteSpeed: 25,
    delaySpeed: 3000,
  });

  return (
    <Box display="flex" justifyContent="center" position="relative">
      <Box >
        <Image
          src="/assets/computer2.png"
          width={600}
          height={300}
          alt="Picture of the author"
        />
        <Image
        src="/assets/computer2.png"
        width={600}
        height={300}
        alt="Picture of the author"
      />

        <Box position="absolute" color={"white"}>
          <Typography justifyContent="center" variant="h3" top="20px">
            &gt; Hey 👋 I'm Joseph,
          </Typography>
          <Typography justifyContent="center" variant="h4" top="80px">
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
