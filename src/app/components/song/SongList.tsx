import { ISongItem } from "@/app/interfaces/ISongItem";
import SongItem from "./SongItem";

export default function SongList(props: { data: ISongItem[] }) {
  // console.log("prop: ",props) ; 
  const { data } = props ; // DECTRUCTURING props để lấy data
  // console.log("data :",data); 
  

  return (
    <>
      <div className="grid grid-cols-1 gap-[12px] " song-list = "">
        {data.map((item, index) => (
          <SongItem
            key = {index}
            id = {item.id} 
            image={item.image} 
            title={item.title}
            singerId={item.singerId}
            listen={item.listen}
            audio={item.audio}
            wishlist={item.wishlist}
          ></SongItem>
        ))}
      </div>
    </>
  );
}
