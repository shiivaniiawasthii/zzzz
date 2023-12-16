import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import HomeScreen from "../../components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScreen />
    </>
  );
}
