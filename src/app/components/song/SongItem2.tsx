/* eslint-disable @next/next/no-img-element */
import { ISongItem } from "@/app/interfaces/ISongItem";
import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHeart2";

export default function SongItem2(props: ISongItem) {
  const { id ="", image = "", title = "", singer = "", time = "" , audio = "" } = props;
  return (
    <>
      <div className="bg-[#212121] flex items-center justify-between px-[18px] py-[10px] rounded-[15px]  ">
        <div className="w-[40%] flex items-center ">
          <ButtonPlay {...props} className="text-white text-[24px] "></ButtonPlay>
          <div className="mx-[12px] w-[42px] aspect-square rounded-[8px] truncate ">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="font-[700] text-[14px] text-white ">
            <Link href={`/song/${id}`}>
              {title}
            </Link>
          </div>
        </div>

        <div className="w-[30%] text-center ">
          <div className="font-[400px] text-[14px] text-white ">
            {singer}
          </div>
        </div>

        <div className="w-[30%] flex items-center justify-end ">
          <div className="font-[400px] text-[14px] text-white mr-[18px] ">
            {time}
          </div>
          <ButtonHeart2 {...props} className="text-[20px]  " ></ButtonHeart2>
        </div>
      </div>
    </>
  );
}
