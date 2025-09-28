import React, { useState } from "react";
import img12 from "../assets/12.jpg";
import img34 from "../assets/34.jpg";
import img32 from "../assets/32.jpg";
import img30 from "../assets/30.jpg";
import img29 from "../assets/29.jpg";
import img27 from "../assets/27.jpg";
import img37 from "../assets/37.jpg";
import img36 from "../assets/36.jpg";

import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

const photos = [
  { url: img12, title: "Yellow Colour Day", emoji: "💛" },
  { url: img34, title: "Festival Celebrations",  emoji: "🕉️" },
  { url: img32, title: "Red Colour Day", emoji: "❤️" },
  { url: img30, title: "Blue Colour Day", emoji: "💙" },
  { url: img29, title: "Snacks Time Yummy", emoji: "🍪" },
  { url: img27, title: "Art & Crafts", emoji: "🎨" },
  { url: img37, title: "Raksha bandhan", emoji: "🎉" },
  { url: img36, title: "Independence Day", emoji: "🇮🇳" },
];



  const generateStyles = (index) => {
    const baseRotate = (index % 2 === 0 ? -6 : 6);
    const variation = (Math.random() * 6 - 3); // -3 to +3 deg
    const rotate = baseRotate + variation;

    // Small vertical random offset to create layered effect
    const verticalOffset = -index * 20 + Math.floor(Math.random() * 10);

    return { rotate, verticalOffset };
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-100 p-10 flex flex-col items-center overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-12 text-gray-800">📸Gallery</h2>

      {/* Masonry-style collage container */}
      <div className="relative max-w-7xl w-full mx-auto flex flex-wrap justify-center gap-6 px-4">
        {photos.map((photo, index) => {
          const { rotate, verticalOffset } = generateStyles(index);

          return (
            <div
              key={index}
              onClick={() => setSelectedImage(photo)}
              className="relative cursor-pointer bg-white rounded-lg shadow-2xl overflow-hidden transition-transform hover:scale-105 hover:z-50"
              style={{
                transform: `rotate(${rotate}deg)`,
                marginBottom: `${verticalOffset}px`,
                width: "260px",
                boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
              }}
              title={`${photo.emoji} ${photo.title}`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-3 text-center font-semibold text-gray-700 text-lg select-none">
                <span className="mr-2">{photo.emoji}</span>
                {photo.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-md"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white flex items-center gap-2">
              <span className="text-2xl">{selectedImage.emoji}</span>
              <h3 className="text-lg font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
