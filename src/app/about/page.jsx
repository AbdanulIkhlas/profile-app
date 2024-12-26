"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";

const Page = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    age: "",
    birthDate: "",
    profilePic: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Ambil data dari sessionStorage
    const fullName = sessionStorage.getItem("fullName");
    const age = sessionStorage.getItem("age");
    const birthDate = sessionStorage.getItem("birthDate");
    const profilePic = sessionStorage.getItem("profilePic");
    const phoneNumber = sessionStorage.getItem("phoneNumber");

    setProfileData({ fullName, age, birthDate, profilePic, phoneNumber });
  }, []);

  const handleReset = () => {
    // Reset data pada sessionStorage dan state
    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("age");
    sessionStorage.removeItem("birthDate");
    sessionStorage.removeItem("profilePic");
    sessionStorage.removeItem("phoneNumber");

    setProfileData({
      fullName: "",
      age: "",
      birthDate: "",
      profilePic: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Profile</h1>
        <div className="flex justify-center mb-6">
          <img
            src={profileData.profilePic || "/photo/noprofile.png"}
            alt="Profile Picture"
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
          <p className="mb-2">
            <strong>Full Name:</strong> {profileData.fullName || "N/A"}
          </p>
          <p className="mb-2">
            <strong>Age:</strong> {profileData.age || "N/A"}
          </p>
          <p className="mb-2">
            <strong>Birth Date:</strong> {profileData.birthDate || "N/A"}
          </p>
          <p className="mb-2">
            <strong>Phone Number:</strong> {profileData.phoneNumber || "N/A"}
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleReset}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Reset Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
