import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/title";
import { dbFirebase } from "@/app/firebaseConfig";
import { ICardItem } from "@/app/interfaces/ICardItem";
import { onValue, ref } from "firebase/database";

const getSingers = async () => {
  // ham dung de lay ra categories
  const singersRef = ref(dbFirebase, "singers"); // tham chieu vao bang singers trong db Firebase

  const result: ICardItem[] = await new Promise((resolve) => { // su dung de doi lay data xong moi return
    onValue(singersRef, (snapshot) => { // lay ra data tu songRef
      // console.log("snapshot : " , snapshot)
      const data : any[] = []
      snapshot.forEach((childSnapshot) => { // lay ra data cua tung thang 1 trong bang singers
        // console.log("childSnapshot :" , childSnapshot) ;
        const childkey = childSnapshot.key ;
        const childData = childSnapshot.val() ;
        
        data.push({
          id : childkey ,
          link : `/singers/${childkey}` ,
          ...childData 
        })
      })
      resolve(data.slice(0,5)) ;
    });
  });

  return result;
};


export default async function Section3() {
  const dataSingers: ICardItem[] = await getSingers() ;

  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Ca si noi bat"></Title>
        <CardList data={dataSingers}></CardList>
      </div>
    </>
  );
}
