
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    birthDate: "",
    profilePic: null, // Updated to accept file object
    phoneNumber: "",
  });
  const [previewImage, setPreviewImage] = useState(null); // For image preview

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
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.age || !formData.birthDate) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.profilePic) {
      alert("Please upload a profile picture.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("birthDate", formData.birthDate);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("profilePic", formData.profilePic);

      // Kirimkan form data ke API
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        // Jika statusnya tidak OK, lempar error dengan status dan pesan
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      if (result && result.filePath) {
        // Redirect ke halaman profil dengan query parameter termasuk gambar yang diunggah
        router.push(
          `/about?fullName=${encodeURIComponent(
            formData.fullName
          )}&age=${encodeURIComponent(
            formData.age
          )}&birthDate=${encodeURIComponent(
            formData.birthDate
          )}&phoneNumber=${encodeURIComponent(
            formData.phoneNumber
          )}&profilePic=${encodeURIComponent(result.filePath)}`
        );
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while uploading the image.");
    }
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
          aria-label="Full Name"
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
          aria-label="Age"
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
          aria-label="Birth Date"
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
          aria-label="Profile Picture Upload"
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
          aria-label="Phone Number"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="Submit Form"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
