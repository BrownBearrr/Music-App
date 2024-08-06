import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/title";
import { getSongList } from "@/app/helpers/getSong";
import { ISongItem } from "@/app/interfaces/ISongItem";



export default async function Section1() {
  const dataSongList: ISongItem[] = await getSongList(3); // lay ra data

  // console.log(dataSongList) ;

  return (
    <>
      <div className="flex items-start ">
        <div className="w-[534px] ">
          <BannerHome></BannerHome>
        </div>
        <div className="flex-1 ml-[20px] ">
          <Title text="Nghe Nhieu"></Title>
          <SongList data={dataSongList}></SongList>
        </div>
      </div>
    </>
  );
}
