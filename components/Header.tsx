"use client";

import Image from "next/image";

import logo from "@/public/images/usc_logo.png";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";

export default function Header() {
  const { push } = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    push("/quiz");
    return;
  };

  return (
    <div className="min-w-screen h-[100vh] sm:h-[80vh] text-center items-center flex flex-col md:flex-row md:justify-center px-4 md:px-16 mt-0 gap-x-8">
      <Image src={logo} alt="Western USC" className="m-8 w-40 lg:w-72 " />
      <div className="flex flex-col space-y-4 items-center md:items-start sm:text-left">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          Swipe Right On A New Match This Year.
        </h1>
        <h4 className="text-base font-normal">
          With nearly 200 clubs to choose from, you are sure to find your
          perfect match!
        </h4>
        <h4 className="text-base font-semibold pb-2">
          Take our quiz to find the right fit for you!
        </h4>
        <form className="" onSubmit={handleSubmit}>
          <Button className="w-32" type="submit">
            Start Quiz
          </Button>
        </form>
      </div>
    </div>
  );
}
