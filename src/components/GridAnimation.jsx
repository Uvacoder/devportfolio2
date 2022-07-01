import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const dimensions = {
  width: 1000,
  height: 1000,
  padding: 10,
};

const drawGrid = (V = 40) => {
  const canvas = document.getElementById("animation");
  const ctx = canvas.getContext("2d");
  let s = 15;
  let nX = Math.floor(dimensions.width / s) - 2;
  let nY = Math.floor(dimensions.height / s) - 2;
  let pX = dimensions.width - nX * s;
  let pY = dimensions.height - nY * s;
  let pL = Math.ceil(pX / 15) - 0.5;
  let pT = Math.ceil(pY / 2) - 0.5;
  let pR = dimensions.width - nX * s - pL;
  let pB = dimensions.height - nY * s - pT;

  const dpi = window.devicePixelRatio;
  ctx.scale(1000, 1000);

  ("lightgrey");
  ctx.beginPath();

  for (var x = pL; x <= dimensions.width - pR; x += s) {
    ctx.lineWidth = 0.5;

    ctx.moveTo(x, pT);
    ctx.lineTo(x, dimensions.height - pB);
  }
  for (var y = pT; y <= dimensions.height - pB; y += s) {
    ctx.moveTo(pL, y);
    ctx.lineTo(dimensions.width - pR, y);
  }
  ctx.stroke();
};

export const GridAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    drawGrid(40);
  }, []);

  return (
    <Box pos="absolute" left="0" top="0" w="100%" h="75vh">
      <canvas
        id="animation"
        style={{
          width: "100%",
          height: "100vh",
          // margin: "20px",
        }}
      />
    </Box>
  );
};
