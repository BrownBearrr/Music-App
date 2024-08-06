import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { dbFirebase } from "../firebaseConfig";

export const getSongList = async (max?: number, categoryId?: string) => {
  // ham dung de lay ra danh sach bai hat
  const songRef = ref(dbFirebase, "songs"); // tham chieu vao bang songs trong db Firebase

  // doan nay de xu ly neu truyen categoryId
  let songQuery: any;
  if (!categoryId) {
    songQuery = songRef;
  } else {
    songQuery = query(songRef, orderByChild("categoryId"), equalTo(categoryId)); // lọc songRef theo id được truyền vào
  }

  const result: any[] = await new Promise((resolve) => {
    // su dung de doi lay data xong moi return
    onValue(songQuery, (snapshot) => {
      // lay ra data tu songRef
      // console.log("snapshot : " , snapshot)
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        // lay ra data cua tung thang 1 trong bang songRef
        // console.log("childSnapshot :" , childSnapshot) ;
        const childkey = childSnapshot.key;
        const childData = childSnapshot.val();

        data.push({
          id: childkey,
          ...childData,
        });
      });
      if (max) {
        resolve(data.slice(0, max));
      } else {
        resolve(data);
      }
    });
  });

  return result;
};

export const getSongDetail = async (id: string) => {
  // ham dung de lay ra danh sach bai hat
  const songRef = ref(dbFirebase, "songs/" + id); // tham chieu vao songs/id trong db Firebase

  const result: any[] = await new Promise((resolve: any) => {
    // su dung de doi lay data xong moi return
    onValue(songRef, (snapshot) => { // lay ra data tu songRef
      // console.log("snapshot : " , snapshot)
      const childkey = snapshot.key;
      const childData = snapshot.val();
      if (childData) { // kiem tra neu co chilData thi moi tra ve data
        const data = {
          ... childData ,
          id : childkey
        } 
        resolve(data)
      } else {
        resolve(null)
      }
     
    });
  });

  return result;
};

export const getSongListWishList = async (userId : string) => {
  // ham dung de lay ra danh sach bai hat
  const songRef = ref(dbFirebase, "songs"); // tham chieu vao bang songs trong db Firebase

  
  let songQuery =  query(songRef, orderByChild(`wishlist/${userId}`), equalTo(true)); // lọc songRef theo userId co gia tri = true

  const result: any[] = await new Promise((resolve) => {
    // su dung de doi lay data xong moi return
    onValue(songQuery, (snapshot) => {
      // lay ra data tu songRef
      // console.log("snapshot : " , snapshot)
      let data: any[] = [];
      snapshot.forEach((childSnapshot) => {
        // lay ra data cua tung thang 1 trong bang songRef
        // console.log("childSnapshot :" , childSnapshot) ;
        const childkey = childSnapshot.key;
        const childData = childSnapshot.val();

        data.push({
          id: childkey,
          ...childData,
        });
      });
      resolve(data);
    });
  });

  return result;
};
