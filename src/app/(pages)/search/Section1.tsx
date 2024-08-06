'use client'

import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/title";
import { getSongList } from "@/app/helpers/getSong";
import { ISongItem } from "@/app/interfaces/ISongItem";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1 () {

  const searchParams = useSearchParams() ; // dung de lay ra link url
  const keywordDefault = searchParams.get('keyword') || "" // lay ra url theo keyword  

  // vi dung use client nen k dung asycn await luon vao funtion Section1 duoc nen phai call api kieu dung hook
  const [data, setData] = useState<any[]>([]) ;

  useEffect(() => {
    const fetchApi = async () => {
      const data : any[] = await getSongList() ; 
      const regex = new RegExp(keywordDefault , "i")   ; // chuoi regex theo keywordDefault
      const dataFilter : any[] = data.filter((item) => regex.test(item.title))  // loc theo chuoi regex
      setData(dataFilter) 
    }
    fetchApi() ; 
  } , [keywordDefault])


  return (
    <>
      <div className="mt-[30px] ">
        <Title text="Ket Qua Tim Kiem" ></Title>
        <SongList2 data = {data}></SongList2>
      </div>
    </>
  )
}