import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/title";
import { getSongList } from "@/app/helpers/getSong";

export default async function Section2 (props : { singerId : string}) {
  const {singerId} = props

  let data : any[] = await getSongList() ; // lay ra tat ca bai hat

  data = data.filter(item => item.singerId.includes(singerId)) // loc trong mang singerId cua bai hat do co singerId duoc truyen vao


  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Danh sach bai hat" ></Title>
        <SongList2 data = {data}></SongList2>
      </div>
    </>
  )
}