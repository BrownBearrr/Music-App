"use client"

import { useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const router = useRouter() ; // dung de chuyen huong trang k bi load lai khi search
  const searchParams = useSearchParams() ; // dung de lay ra link url
  const keywordDefault = searchParams.get('keyword') || "" // lay ra url theo keyword  

  const handleSearch = (event : any) => { // xu ly search khi submit
    event.preventDefault() ;

    const keyword = event.target.keyword.value ; // lay ra keyword o formsearch
    if(keyword) {
      router.push(`/search?keyword=${keyword}`) // chuyen huong trang
    }
  }

  return (
    <>
      <form
        className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] py-[15px] px-[30px] flex items-center"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="keyword"
          placeholder="Tim kiem ....."
          className="order-2 flex-1 outline-none bg-transparent text-white text-[16px] font-[600] "
          defaultValue={keywordDefault}
        />
        <button
          type="submit"
          className="text-white order-1 text-[22px] mr-[20px]  "
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </>
  );
}
