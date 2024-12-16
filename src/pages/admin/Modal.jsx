import React from "react";

const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed h-screen w-full top-0 left-0 bg-[#00000076] flex justify-center items-center z-50">
        <div className="p-6 rounded-lg relative bg-white w-1/2">{children}</div>
      </div>
    </>
  );
};

export default Modal;
