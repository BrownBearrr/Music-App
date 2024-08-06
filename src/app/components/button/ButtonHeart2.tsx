"use client";

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";

export default function ButtonHeart2(props: ISongItem) {
  const [isActive, setIsActive] = useState(false);

  const {
    id = "",
    image = "",
    title = "",
    singerId = "",
    listen = 0,
    audio = "",
    dataSinger = "",
    className = "",
    wishlist = {}
  } = props;

  useEffect(() => { 
    onAuthStateChanged(authFirebase, (user) => { // kiem tra xem da dang nhap chua
        if (user) {
            const userId = user.uid;
            if (wishlist[userId]) { // neu trong wishlist bai hat co ton tai userId
              setIsActive(true) ;
            }
        }
    });
  }, []);

  const handeAddWishList = () => {
    const userId = authFirebase?.currentUser?.uid; // lay ra id user neu co
    if (id && userId) {
      // neu co id cua user va id cua bai hat
      const songRef = ref(dbFirebase, `/songs/${id}`); // truy cap vao bai hat trong bang songs theo id

      // them userId vao wishlist cua Song
      runTransaction(songRef, (song) => { // cap nhat lai ban ghi
        if (song) {
          if (song.wishlist && song.wishlist[userId]) {
            // kiem tra xem da co key wishlist va trong wishlist cua song do da co userId do chua
            song.wishlist[userId] = null; // neu co userId do roi thi xoa yeu thich
            setIsActive(false)
          } else {
            // neu wishlist cua song chua co userId do
            if (!song.wishlist) {
              // kiem tra xem trong bang song da co key wishlist chua
              song.wishlist = {}; // neu chua co key wishlist thi them vao
            }
            song.wishlist[userId] = true; // neu chua co  userId do thi them vao
            setIsActive(true) 
          }
        }
        return song;
      });
    }
  };

  return (
    <>
      <button
        onClick={handeAddWishList}
        className={className + (isActive ? "text-primary" : "text-white" ) }
      >
        <FaHeart></FaHeart>
      </button>
    </>
  );
}
