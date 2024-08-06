import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../firebaseConfig";
import { ICardItem } from "../interfaces/ICardItem";

export const getSingers = async (max?: number) => {
  // ham dung de lay ra categories
  const singersRef = ref(dbFirebase, "singers"); // tham chieu vao bang singers trong db Firebase

  const result: ICardItem[] = await new Promise((resolve) => { // su dung de doi lay data xong moi return
    onValue(singersRef, (snapshot) => { // lay ra data tu categories
      // console.log("snapshot : " , snapshot)
      let data : any[] = []
      snapshot.forEach((childSnapshot) => { // lay ra data cua tung thang 1 trong bang categories
        // console.log("childSnapshot :" , childSnapshot) ;
        const childkey = childSnapshot.key ;
        const childData = childSnapshot.val() ;
        
        data.push({
          id : childkey , 
          link : `/singers/${childkey}` , // link de chuyen sang trang khac
          ...childData 
        })
      })
      if(max) {
        resolve(data.slice(0,max)) ;
      }
      else {
        resolve(data) ;
      }
    });
  });

  return result;
};

export const getSingersDetail = async (id : string) => {
  // ham dung de lay ra singers detail
  const singersRef = ref(dbFirebase, "singers/" + id); // tham chieu vao bang singers/id trong db Firebase

  const result: ICardItem[] = await new Promise((resolve) => { // su dung de doi lay data xong moi return
    onValue(singersRef, (snapshot) => { // lay ra data tu singers/id 
      const childkey = snapshot.key ;
      const childData = snapshot.val() ;
      const data:any = {
        id : childkey ,
        ...childData
      }
      resolve(data) 
    });
  });

  return result;
};