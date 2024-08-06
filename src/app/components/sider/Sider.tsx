/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SiderMenu from "./SiderMenu";

export default function Sider() {
  return (
    <>
      <div className="bg-[#212121] h-[100vh] w-[280px] fixed  ">
        <div className="bg-[#1C1C1C] py-[25px] px-[20px] ">
          <Link href="/">
            <img src="/Logo.svg" alt="logo" className="h-[42px] w-auto  " />
          </Link>
        </div>

        <SiderMenu></SiderMenu>
      </div>
    </>
  );
}
