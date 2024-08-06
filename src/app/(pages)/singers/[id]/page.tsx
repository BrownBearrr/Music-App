import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { getSingers, getSingersDetail } from "@/app/helpers/getSingers";

export default async function SingerDetailPage({params} : {params : {id: string}}) { // lay ra params theo duong link

  const data:any = await getSingersDetail(params.id) ;

  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={data.image}
        title={data.title}
        description={data.description}
      ></CardInfo>

      {/* Danh sach bai hat */}
      <Section2 singerId = {data.id}></Section2>

    </>
  );
}
