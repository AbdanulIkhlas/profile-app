"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputForm from "../../components/elements/InputForm";
import ButtonCustom from "../elements/ButtonCustom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    birthDate: "",
    profilePic: null,
    phoneNumber: "",
  });
  const [previewImage, setPreviewImage] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePic: file });

      // Generate preview image URL
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setPreviewImage(base64Image);

        // Simpan gambar dalam sessionStorage
        sessionStorage.setItem("profilePic", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.age || !formData.birthDate) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.profilePic) {
      alert("Please upload a profile picture.");
      return;
    }

    // Simpan data pengguna ke sessionStorage
    sessionStorage.setItem("fullName", formData.fullName);
    sessionStorage.setItem("age", formData.age);
    sessionStorage.setItem("birthDate", formData.birthDate);
    sessionStorage.setItem("phoneNumber", formData.phoneNumber);

    // Redirect ke halaman profil
    router.push("/about");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 rounded-lg px-10 transition-all duration-500 ease-in-out transform md:max-w-screen-md md:block lg:max-w-screen-lg"
    >
      <div className="md:flex md:w-full md:justify-center md:gap-8 ">
        <section className=" md:w-[70%]">
          <InputForm
            id="fullName"
            label="Full Name"
            placeholder="Write your complete name here"
            value={formData.fullName}
            onChange={handleChange}
            type="text"
            required
          />
          <InputForm
            id="age"
            label="Age"
            placeholder="How young are you?"
            value={formData.age}
            onChange={handleChange}
            type="number"
            min="1"
            required
          />
          <InputForm
            id="birthDate"
            label="Birth Date"
            placeholder="Select your birth date"
            value={formData.birthDate}
            onChange={handleChange}
            type="date"
            required
          />
        </section>
        <section className="md:w-[70%]">
          <div className="mb-4 md:mb-9">
            <label
              htmlFor="profilePic"
              className="block text-sm font-medium text-center text-white md:text-lg"
            >
              Profile Picture
            </label>
            <div className="relative w-32 h-32 mx-auto mt-4 md:mt-2">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                />
              ) : (
                <div className="w-full text-center h-full bg-indigo-900 rounded-full flex items-center justify-center text-white border-4 border-gray-500/50 shadow-lg">
                  Upload your photo
                </div>
              )}
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <InputForm
            id="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="text"
            placeholder="Your mobile number goes here"
          />
        </section>
      </div>
      <div className="w-full flex justify-center">
        <ButtonCustom
          type="submit"
          customClassname="bg-[#612fcc] hover:bg-indigo-600"
          childred="Submit"
        />
      </div>
    </form>
  );
};

export default UserForm;
