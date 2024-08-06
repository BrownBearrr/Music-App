import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { getCategoriesDetail } from "@/app/helpers/getCategories";

/* eslint-disable @next/next/no-img-element */
export default async function SongsByCategoryPage({params} : {params : {id: string}}) { // lay ra params theo duong link
  const data:any = await getCategoriesDetail(params.id) ;

  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={data.image}
        title={data.title}
        description={data.description}
      ></CardInfo>

      {/* Section2 */}
      <Section2 id = {params.id}></Section2>
    </>
  );
}
