import React, { useEffect } from "react";

const CanvasGestureDetector = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 100;

    function draw(e: MouseEvent) {
      if (!isDrawing) return;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
    // check for three finger swipe in mac and prevent default
    canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 3) {
        e.preventDefault();
        e.stopPropagation();
        console.log("%c Line:31 🥝", "color:#465975", e);
      }
    });
    canvas.addEventListener("mousewheel", (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        e.stopPropagation();
        console.log("%c Line:31 🥝", "color:#465975", e);
      }
    });
    canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
  }, []);

  return (
    <canvas
      id="canvas"
      className="w-full h-full absolute top-0 right-0 left-0 bottom-0"
      style={{ zIndex: 99999 }}
    />
  );
};

export default CanvasGestureDetector;
