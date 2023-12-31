import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuizContextProvider } from "@/context/QuizContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results | USC Club Matcher",
  description: "Generated by create next app",
};

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuizContextProvider>
      <Navbar />
      {children}
      <Footer />
    </QuizContextProvider>
  );
}
