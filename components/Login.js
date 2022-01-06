import Image from "next/image";
import logo from "../images/twitter.jpg";
import google from "../images/google.png";
import { signIn } from "next-auth/react";

export const Login = ({ providers }) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center text-[#ddd] text-center space-y-8">
      <div className="space-y-3">
        <Image
          src={logo}
          width={150}
          height={150}
          objectFit="contain"
          className="hover:rotate-3 duration-200 ease-out"
        />
        <h2 className="text-4xl">Happening now ?</h2>
        <h2 className="text-xl">Join Twitter Today .</h2>
      </div>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <div
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className=" w-fit mx-auto flex py-[10px] items-center justify-center px-[20px] rounded  text-[#111] bg-[#fefefe]  cursor-pointer hover:text-[#1569a0]  transition duration-150 ease-linear "
          >
            <Image
              src={google}
              alt=""
              width={20}
              height={20}
              objectFit="contain"
            />
            <h4 className="ml-2 mt-[-3px] text-xl font-[400]">
              Sign Up With {provider.name}
            </h4>
          </div>
        </div>
      ))}

      <span className="block">
        &copy; By{" "}
        <a href="https://www.mostafamohamed.ml/" target="_blank" className="text-[#45adf2]">
          Mostafa Mohamed <span className="text-[16px]">&#9829;</span>
        </a>{" "}
        2022
      </span>
    </div>
  );
};
