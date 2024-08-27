import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageResults from "./components/ImageResults";
import ImageCanvas from "./components/ImageCanvas";
import DownloadButton from "./components/Dnld";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (query) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=WzrgsotS0vc7iSFy8iI_HKTcrOBEC634iV00tp9otKA`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      alert("Error fetching images. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          backgroundColor: "#283747",
          color: "#ecf0f1",
          padding: "20px",
        }}
      >
        Image Editor
      </h1>
      <SearchBar onSearch={fetchImages} />
      <ImageResults images={images} onSelectImage={setSelectedImage} />
      {selectedImage && <ImageCanvas imageUrl={selectedImage} />}
      {selectedImage && <DownloadButton />}
    </div>
  );
};

export default App;
