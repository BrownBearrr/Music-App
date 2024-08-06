import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { getSongDetail } from "@/app/helpers/getSong";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { notFound } from "next/navigation";

export default async function SongDetailPage({ params }: { params: { id: string };
}) {
  const data: any = await getSongDetail(params.id);

  if(!data) {
    notFound()
  }

  let dataSinger: any = await Promise.all(
    data.singerId.map(async (idSinger: any) => {
      const singerRef = ref(dbFirebase, "singers/" + idSinger); // tham chiếu vào songs/id trong db Firebase
  
      const result: any = await new Promise((resolve) => {
        // sử dụng để đợi lấy data xong mới return
        onValue(singerRef, (snapshot) => { // lấy ra data từ singerRef
          const childData = snapshot.val();
          resolve(childData.title);
  
          // console.log(childData.title)
        });
      });
  
      return result ;
    })
  );
  
  // console.log("dataSinger: " , dataSinger[0]);
  


  return (
    <>
      {/* CardInfo */}
      <CardInfo image={data.image} title={data.title} description={dataSinger.join(',')}></CardInfo>

      {/* Loi Bai Hat */}
      <Section2 lyrics={data.lyric}></Section2>

      {/* Bai hat cung danh muc */}
      <Section3 categoryId= {data.categoryId}></Section3>
    </>
  );
}
