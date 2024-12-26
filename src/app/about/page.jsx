"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import ButtonCustom from "@/components/elements/ButtonCustom";
import DisplayData from "@/components/fragments/DisplayData"; // Impor komponen DisplayData
import "../globals.css";

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

      {/* animasi floating */}
      <div className="absolute top-40 right-[400px] hidden md:block bg-[#65484f44] z-10 rounded-full md:w-[250px] md:h-[250px] animate-floating-1"></div>
      <div className="absolute bottom-40 left-[400px] hidden md:block bg-[#54486544] z-10 rounded-full md:w-[250px] md:h-[250px] animate-floating-2"></div>
      <div className="absolute top-10 md:top-80 md:left-[200px] bg-[#65484f44] z-10 rounded-full md:w-[120px] md:h-[120px] animate-floating-3"></div>
      <div className="absolute bottom-10 md:bottom-20 md:right-[200px] bg-[#54486544] z-10 rounded-full md:w-[120px] md:h-[120px] animate-floating-4"></div>

      <main className="relative top-0 w-full z-30 pb-10">
        <h1 className="relative z-40 text-2xl font-light text-center mb-2  tracking-wider md:text-4xl">
          About
        </h1>
        <div className="max-w-md mx-auto p-6 rounded-lg relative z-50 md:max-w-screen-md lg:max-w-screen-lg ">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <img
                src={profileData.profilePic || "/photo/noprofile.png"}
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>
          </div>

          {/* Komponen DisplayData*/}
          <DisplayData profileData={profileData} />

          <div className="w-full flex justify-center mt-5">
            <ButtonCustom
              type="button"
              onClick={handleReset}
              customClassname="bg-red-500 hover:bg-red-600"
              childred="Reset Data"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
