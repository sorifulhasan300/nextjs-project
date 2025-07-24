import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen flex justify-center items-center">
        Hello
      </main>
      <Footer />
    </div>
  );
}
