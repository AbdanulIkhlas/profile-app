"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const inputClasses =
    "mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow-md"
    >
      <h1 className="text-2xl font-bold text-center mb-6">User Form</h1>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
          className={inputClasses}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="birthDate"
          className="block text-sm font-medium text-gray-700"
        >
          Birth Date
        </label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
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
          className={inputClasses}
        />
        {previewImage && (
          <img
            src={previewImage}
            alt="Profile Preview"
            className="mt-4 w-32 h-32 object-cover rounded-full"
          />
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+1234567890"
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
