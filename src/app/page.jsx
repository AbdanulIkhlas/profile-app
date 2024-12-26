import Navbar from "../components/fragments/Navbar";
import UserForm from "../components/fragments/UserForm";

export default function Home() {
  return (
    <div className="pt-24 relative overflow-x-hidden">
      <Navbar />
      <div className="absolute bottom-0 -right-8 w-[280px] h-[400px] bg-[#432f6091] z-10 rounded-custom2"></div>
      <div className="absolute top-0 -left-10 w-[380px] h-[400px] bg-[#65484f44] z-10 rounded-custom"></div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] bg-[#42374373] z-10 rounded-custom3"></div>
      <main className="relative top-0 w-full z-50 pb-10">
        <h1 className="relative z-40 text-2xl font-light text-center mb-6  tracking-wider">
          Profil Form
        </h1>
        <UserForm />
      </main>
    </div>
  );
}
