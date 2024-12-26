"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import ButtonCustom from "@/components/elements/ButtonCustom";

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
    <div className="pt-24 bg-[#1f1b38] relative overflow-x-hidden min-h-screen">
      <Navbar />
      <div className="absolute bottom-0 -right-8 w-[280px] h-[400px] bg-[#432f6091] z-10 rounded-custom2"></div>
      <div className="absolute top-0 -left-10 w-[380px] h-[400px] bg-[#65484f44] z-10 rounded-custom"></div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] bg-[#42374373] z-10 rounded-custom3"></div>
      <main className="relative top-0 w-full z-30 pb-10">
        <h1 className="relative z-40 text-2xl font-light text-center mb-2  tracking-wider">
          About
        </h1>
        <div className="max-w-md mx-auto p-6 rounded-lg relative z-50">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <img
                src={profileData.profilePic || "/photo/noprofile.png"}
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6 text-center px-8">
            <div className="pb-2 border-b border-gray-300">
              <label className="block text-lg font-medium text-white mb-1">
                Full Name
              </label>
              <p className="text-gray-100 text-sm">
                {profileData.fullName || "Not Provided Yet"}
              </p>
            </div>
            <div className="pb-2 border-b border-gray-300">
              <label className="block text-lg font-medium text-white mb-1">
                Age
              </label>
              <p className="text-gray-100 text-sm">
                {profileData.age || "No Data Available"}
              </p>
            </div>
            <div className="pb-2 border-b border-gray-300">
              <label className="block text-lg font-medium text-white mb-1">
                Birth Date
              </label>
              <p className="text-gray-100 text-sm">
                {profileData.birthDate || "Not Entered Yet"}
              </p>
            </div>
            <div className="pb-2 border-b border-gray-300">
              <label className="block text-lg font-medium text-white mb-1">
                Phone Number
              </label>
              <p className="text-gray-100 text-sm">
                {profileData.phoneNumber || "No Contact Info"}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center mt-5">
            <ButtonCustom
              type="button"
              onClick={handleReset}
              customClassname="bg-red-500 hover:hover:bg-red-600"
              childred="Reset Data"
            />
          </div>
          {/* <div className="flex justify-center mt-6">
            <button
              onClick={handleReset}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Reset Data
            </button>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Page;
