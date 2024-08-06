import { onValue, ref } from "firebase/database";
import { dbFirebase } from "../firebaseConfig";
import { ICardItem } from "../interfaces/ICardItem";

export const getCategories = async (max?: number) => {
  // ham dung de lay ra categories
  const categoriesRef = ref(dbFirebase, "categories"); // tham chieu vao bang categories trong db Firebase

  const result: ICardItem[] = await new Promise((resolve) => { // su dung de doi lay data xong moi return
    onValue(categoriesRef, (snapshot) => { // lay ra data tu categories
      // console.log("snapshot : " , snapshot)
      let data : any[] = []
      snapshot.forEach((childSnapshot) => { // lay ra data cua tung thang 1 trong bang categories
        // console.log("childSnapshot :" , childSnapshot) ;
        const childkey = childSnapshot.key ;
        const childData = childSnapshot.val() ;
        
        data.push({
          id : childkey ,
          link : `/categories/${childkey}` ,
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

export const getCategoriesDetail = async (id : string) => {
  // ham dung de lay ra categories detail
  const categoriesRef = ref(dbFirebase, "categories/" + id); // tham chieu vao bang categories/id trong db Firebase

  const result: ICardItem[] = await new Promise((resolve) => { // su dung de doi lay data xong moi return
    onValue(categoriesRef, (snapshot) => { // lay ra data tu categories/id 
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