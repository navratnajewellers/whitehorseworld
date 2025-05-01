/* eslint-disable @next/next/no-img-element */
"use client"; // Only if using Next.js App Router
import { useState } from "react";
import { Button, Divider, Modal } from "rsuite";
import WhHeader from "../components/WhHeader";
import { FaDiamond } from "react-icons/fa6";

export default function GalleryPage() {
  const images = [
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor34-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor40-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/decor11-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/wedding-shoot10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/intertaiment10-290x274.jpg",
    "https://www.thevelvetweddings.com/wp-content/uploads/2019/02/artist-management13-290x274.jpg",
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
    <>
      <WhHeader />
      <div className="p-6 bg-black text-white py-7 ">
        <h1 className="text-3xl font-bold text-center mb-5 text-yellow-400 ">
          Wedding Images
        </h1>
        <Divider
          className=" w-about-divider text-yellow-400 "
          style={{ width: "25%", margin: "auto", marginBottom: "76px" }}
        >
          <FaDiamond size={10} />{" "}
          <FaDiamond size={20} className=" ml-1 mr-1 " />
          <FaDiamond size={10} />
        </Divider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

        <Modal open={open} onClose={handleClose} keyboard={true}>
          <Modal.Header className=" text-yellow-400 text-center ">
            Wedding Gallery
          </Modal.Header>
          <Modal.Body
            className="flex justify-center items-center imageWrapper "
            style={{ height: "80vh" }}
          >
            <img src={selectedImage} alt="Selected" className=" rounded-lg" />
          </Modal.Body>
          <Modal.Footer className=" flex justify-center items-center ">
            <Button
              appearance="primary"
              color="red"
              onClick={() => handleClose()}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
