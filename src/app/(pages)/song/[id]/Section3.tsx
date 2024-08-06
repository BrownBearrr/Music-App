import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/title";
import { getSongList } from "@/app/helpers/getSong";
import { ISongItem } from "@/app/interfaces/ISongItem";

export default async function Section3 (props: {categoryId : string } ) {
  
  const {categoryId} = props 

  const data : any[] = await getSongList(undefined, categoryId)


  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Bai hat cung danh muc" ></Title>
        <SongList2 data = {data}></SongList2>
      </div>
    </>
  )
}