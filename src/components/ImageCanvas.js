import React, { useEffect } from "react";
import fabric from "fabric";

const ImageCanvas = ({ imageUrl }) => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas");
    fabric.Image.fromURL(imageUrl, (img) => {
      canvas.setWidth(img.width);
      canvas.setHeight(img.height);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    // Add text
    document.getElementById("addText").onclick = () => {
      const text = new fabric.IText("Edit me", {
        left: 50,
        top: 50,
      });
      canvas.add(text);
    };

    // Add shapes
    document.getElementById("addCircle").onclick = () => {
      const circle = new fabric.Circle({
        radius: 50,
        fill: "red",
        left: 100,
        top: 100,
      });
      canvas.add(circle);
    };

    document.getElementById("addRectangle").onclick = () => {
      const rect = new fabric.Rect({
        width: 100,
        height: 100,
        fill: "blue",
        left: 150,
        top: 150,
      });
      canvas.add(rect);
    };

    // Add other shapes similarly
  }, [imageUrl]);

  return (
    <div>
      <canvas id="canvas"></canvas>
      <button id="addText">Add Text</button>
      <button id="addCircle">Add Circle</button>
      <button id="addRectangle">Add Rectangle</button>
      {/* Add buttons for other shapes */}
    </div>
  );
};

export default ImageCanvas;
