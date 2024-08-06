/* eslint-disable @next/next/no-img-element */
import { ISongItem } from "@/app/interfaces/ISongItem";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import ButtonPlay from "../button/ButtonPlay";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "@/app/firebaseConfig";
import ButtonHeart from "../button/ButtonHeart";

export default async function SongItem(props: any) {
  const {
    id = "",
    image = "",
    title = "",
    singerId = "",
    listen = 0,
    audio = "",
  } = props;

  // lay data ca si
  let dataSinger: any = await Promise.all( //map trả về một mảng các Promise và sử dụng Promise.all để chờ tất cả các Promise hoàn thành.
    singerId.map(async (idSinger: any) => {
      const singerRef = ref(dbFirebase, "singers/" + idSinger); // tham chiếu vào songs/id trong db Firebase
  
      const result: any = await new Promise((resolve) => {
        // sử dụng để đợi lấy data xong mới return
        onValue(singerRef, (snapshot) => {
          // lấy ra data từ singerRef
          const childData = snapshot.val();
          resolve(childData.title);
        });
      });
  
      return result ;
    })
  );  
  
  const data = {
    ...props ,
    dataSinger : dataSinger
  };

  // console.log("dataPlay :" , dataPlay);
  

  return (
    <>
      <div className="bg-[#212121] rounded-[15px] p-[10px] flex items-center " song-id = {id}>
        <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px] ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex-1 mr-[10px]  ">
          <div className="mb-[2px]  ">
            <Link
              href={`song/${id}`}
              className="font-[600] text-[16px] text-white "
            >
              {title}
            </Link>
          </div>
          <div className="text-[#FFFFFF80] font-[400] text-[12px] mb-[5px] ">
            {dataSinger.join(',')}
          </div>
          <div className="text-white font-[400] text-[12px] ">
            {listen.toLocaleString()} luot nghe
          </div>
        </div>
        <div className="">
          <ButtonPlay {...data} className="w-[34px] h-[34px] text-white border border-white rounded-full inline-flex items-center justify-center text-[15px] "></ButtonPlay>
          <ButtonHeart {...data} className="w-[34px] h-[34px] text-white border rounded-full inline-flex items-center justify-center text-[15px] ml-[10px] " ></ButtonHeart>
        </div>
      </div>
    </>
  );
}
