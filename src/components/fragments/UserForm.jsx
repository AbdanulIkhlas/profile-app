"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputForm from "../../components/elements/InputForm";

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
      className="max-w-md mx-auto bg-[#F0BB78] p-6 rounded-lg shadow-xl transition-all duration-500 ease-in-out transform"
    >
      <h1 className="text-2xl font-bold text-[#FFF0DC] text-center mb-6">
        User Form
      </h1>

      <InputForm
        id="fullName"
        label="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <InputForm
        id="age"
        label="Age"
        value={formData.age}
        onChange={handleChange}
        type="number"
        min="1"
        required
      />
      <InputForm
        id="birthDate"
        label="Birth Date"
        value={formData.birthDate}
        onChange={handleChange}
        type="date"
        required
      />

      <div className="mb-4">
        <label
          htmlFor="profilePic"
          className="block text-sm font-medium text-gray-700"
        >
          Profile Picture
        </label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="Profile Preview"
            className="mt-4 w-32 h-32 object-cover rounded-full mx-auto"
          />
        )}
      </div>
      <InputForm
        id="phoneNumber"
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        type="tel"
        placeholder="+1234567890"
      />
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
