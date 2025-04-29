/* eslint-disable @next/next/no-img-element */
"use client"; // Only if using Next.js App Router
import { useState } from "react";
import { Modal } from "rsuite";

export default function GalleryPage() {
  const images = [
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="cursor-pointer">
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => handleOpen(img)}
            />
          </div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose} size="lg" keyboard={true}>
        <Modal.Body className="flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[80vh] rounded-lg"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
