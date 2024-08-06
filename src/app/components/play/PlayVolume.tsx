'use client'

import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  const handleChange = () => { // khi tang giam am luong
    const boxVolume : any =  document.querySelector(".box-volume") ; // 
    const boxVolumeTotal : any =  boxVolume.querySelector(".inner-total") ; // lay ra thanh am luong
    const boxVolumeCurrent : any =  boxVolume.querySelector(".inner-current") ; // lay ra thanh am luong

    const elementPlayAudio : any = document.querySelector(".play-audio") // tim phan tu co class play-audio
    const elementAudio = elementPlayAudio.querySelector(".inner-audio")// tim phan tu co class play-audio ben trong elementPlayAudio

    elementAudio.volume = parseFloat(boxVolumeTotal.value)/100 ; // thay doi am luong cua audio 
    boxVolumeCurrent.style.width = `${boxVolumeTotal.value}%` // chinh lai thanh mau xanh
 
  }

  return (
    <>
      <div className="w-[184px] flex items-end box-volume ">
            <button className="text-white text-[16px] inner-button ">
              <FaVolumeHigh></FaVolumeHigh>
            </button>
            <div className="ml-[6px] relative ">
              <div className="bg-primary w-[100%] h-[3px] rounded-[50px] absolute top-[14px] left-[0] inner-current "></div>
              <input
                type="range"
                min={0}
                max={100}
                defaultValue={100}
                className="rounded-[50px] bg-[#FFFFFF1A] w-full h-[3px] appearance-none range-sm cursor-pointer inner-total "
                onChange={handleChange}
              ></input>
            </div>
          </div>
    </>
  )
}