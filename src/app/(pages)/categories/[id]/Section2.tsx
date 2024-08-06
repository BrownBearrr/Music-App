import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/title";
import { getSongList } from "@/app/helpers/getSong";

export default async function Section2 (props: {id : string}) {

  const {id} = props ;

  const data:any = await getSongList(undefined, id ) ;



  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Danh sach bai hat" ></Title>
        <SongList2 data = {data}></SongList2>   
      </div>
    </>
  )
}