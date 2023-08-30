"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      isOpen
      onChange={function (open: boolean): void {
        throw new Error("Function not implemented.");
      }}
      title={"Test Modal"}
      description={"Test Description"}
    >
      Test Children
    </Modal>
  );
};

export default ModalProvider;
