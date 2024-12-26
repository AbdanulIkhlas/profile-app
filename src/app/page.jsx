import Navbar from "../components/fragments/Navbar";
import UserForm from "../components/fragments/UserForm";
import "./globals.css";

export default function Home() {
  return (
    <div className="pt-24 relative overflow-x-hidden md:min-h-screen">
      <Navbar />
      <div className="absolute bottom-0 -right-8 w-[280px] h-[400px] bg-[#432f6091] z-10 rounded-custom2 md:w-[500px] md:h-[470px] md:top-0"></div>
      <div className="absolute top-0 -left-10 w-[380px] h-[400px] bg-[#65484f44] z-10 rounded-custom md:w-[500px] md:h-[470px]"></div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] bg-[#42374373] z-10 rounded-custom3"></div>
      {/* animasi floating */}
      <div className="absolute top-40 right-[400px] hidden md:block bg-[#65484f44] z-10 rounded-full md:w-[250px] md:h-[250px] animate-floating-1"></div>
      <div className="absolute bottom-40 left-[400px] hidden md:block bg-[#54486544] z-10 rounded-full md:w-[250px] md:h-[250px] animate-floating-2"></div>
      <div className="absolute top-10 md:top-80 md:left-[200px] bg-[#65484f44] z-10 rounded-full md:w-[120px] md:h-[120px] animate-floating-3"></div>
      <div className="absolute bottom-10 md:bottom-20 md:right-[200px] bg-[#54486544] z-10 rounded-full md:w-[120px] md:h-[120px] animate-floating-4"></div>
      <main className="relative top-0 w-full z-30 pb-10">
        <h1 className="relative z-40 text-2xl font-light text-center mb-6  tracking-wider md:text-4xl">
          Profil Form
        </h1>
        <UserForm />
      </main>
    </div>
  );
}
