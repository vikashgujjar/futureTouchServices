"use client";
import React from "react";
import { useState } from "react";
import Login from "../components/Login";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    router.push("/");
  };

  return (
    <div>
      {isPopupOpen && (
        <Login handleClosePopup={handleClosePopup} isPopupOpen={isPopupOpen} />
      )}
    </div>
  );
}
