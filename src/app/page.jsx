import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Profile Input App
        </h1>
        <UserForm />
      </main>
    </div>
  );
}
