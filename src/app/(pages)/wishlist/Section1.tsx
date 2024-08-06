'use client'

import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/title";
import { authFirebase } from "@/app/firebaseConfig";
import { getSongList, getSongListWishList } from "@/app/helpers/getSong";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Section1 () {

  const[data , setData] = useState<any>() ;

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      if(user) {
        const userId = user.uid
        const dataFinal:any[] = await getSongListWishList(userId) ;
        setData(dataFinal) 
      }
    })
  } , [])

  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Bai Hat Yeu Thich" ></Title>
        {data && (
          <SongList2 data = {data}></SongList2>
        )}
      </div>
    </>
  )
}