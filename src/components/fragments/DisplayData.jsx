import React from "react";

const DisplayData = ({ profileData }) => {
  return (
    <div className="space-y-6 text-center px-8 md:flex md:gap-12">
      {/* Full Name & Age Section */}
      <section className="md:w-full md:pt-6">
        <div className="pb-2 border-b border-gray-300 md:mb-4">
          <label className="block text-lg font-medium text-white mb-1">
            Full Name
          </label>
          <p className="text-gray-400 text-sm">
            {profileData.fullName || "Not Provided Yet"}
          </p>
        </div>
        <div className="pb-2 border-b border-gray-300">
          <label className="block text-lg font-medium text-white mb-1">
            Age
          </label>
          <p className="text-gray-400 text-sm">
            {profileData.age || "No Data Available"}
          </p>
        </div>
      </section>

      {/* Birth Date & Phone Number Section */}
      <section className="md:w-full">
        <div className="pb-2 border-b border-gray-300 md:mb-4">
          <label className="block text-lg font-medium text-white mb-1">
            Birth Date
          </label>
          <p className="text-gray-400 text-sm">
            {profileData.birthDate || "Not Entered Yet"}
          </p>
        </div>
        <div className="pb-2 border-b border-gray-300">
          <label className="block text-lg font-medium text-white mb-1">
            Phone Number
          </label>
          <p className="text-gray-400 text-sm">
            {profileData.phoneNumber || "No Contact Info"}
          </p>
        </div>
      </section>
    </div>
  );
};

export default DisplayData;
