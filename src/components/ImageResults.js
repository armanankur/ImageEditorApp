import React from "react";

const ImageResults = ({ images, onSelectImage }) => {
  return (
    <div
      className="image-results"
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "15px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img
            src={image.urls.small}
            alt={image.alt}
            style={{
              marginTop: "25px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              gap: "15px",
              alignItems: "center",
              flexWrap: "wrap",
              height: "250px",
              width: "250px",
            }}
          />
          <button
            onClick={() => onSelectImage(image.src)}
            style={{
              marginLeft: "10px",
              height: "40px",
              width: "140px",
              color: "#ecf0f1",
              backgroundColor: "#283747",
              borderRadius: "12px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Add Captions
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageResults;
