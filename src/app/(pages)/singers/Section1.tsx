import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/title";
import { getSingers } from "@/app/helpers/getSingers";
import { ICardItem } from "@/app/interfaces/ICardItem";

export default async function Section1() {
  const dataSingers : any[] = await getSingers() ;



  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Danh Sach Ca Si"></Title>
        <CardList data={dataSingers}></CardList>
      </div>
    </>
  );
}
