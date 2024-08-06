import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/title";
import { getCategories } from "@/app/helpers/getCategories";
import { ICardItem } from "@/app/interfaces/ICardItem";


export default async function Section2() {
  const dataCategories: ICardItem[] = await getCategories(5) ;

  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Danh muc noi bat"></Title>
        <CardList data={dataCategories}></CardList>
      </div>
    </>
  );
}
