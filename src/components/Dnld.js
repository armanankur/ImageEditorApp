import React from "react";

const Dnld = () => {
  const handleDownload = () => {
    const canvas = document.getElementById("canvas");
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "modified-image.png";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      style={{
        height: "60px",
        width: "140px",
        color: "#ecf0f1",
        backgroundColor: "#283747",
        borderRadius: "12px",
        fontSize: "15px",
        cursor: "pointer",
      }}
    >
      Download
    </button>
  );
};

export default Dnld;
