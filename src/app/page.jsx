import Navbar from "../components/fragments/Navbar";
import UserForm from "../components/fragments/UserForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1f1b38] pt-24 relative overflow-hidden">
      <Navbar />
      <div className="absolute -bottom-28 -right-8 w-[280px] h-[500px] bg-[#432f60] z-10 rounded-custom2"></div>
      <div className="absolute top-0 -left-10 w-[380px] h-[400px] bg-[#65484f5d] z-10 rounded-custom"></div>
      <div className="absolute -bottom-0 -left-16 w-[400px] h-[400px] bg-[#4237438a] z-10 rounded-custom3"></div>
      <h1 className="relative z-40 text-2xl font-bold text-center mb-6">
        Profile Input App
      </h1>
      <main className="absolute z-40 container mx-auto p-4 border border-white">
        <UserForm />
      </main>
    </div>
  );
}
