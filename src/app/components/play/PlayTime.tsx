'use client'

export default function PlayTime() {
  const handleChange = () => { // khi tua nhac
    const boxPlayTime : any  = document.querySelector(".box-play-time") ;
    const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total") ;
    const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current") ;

    const elementPlayAudio : any = document.querySelector(".play-audio") // tim phan tu co class play-audio
    const elementAudio = elementPlayAudio.querySelector(".inner-audio")// tim phan tu co class play-audio ben trong elementPlayAudio
 
    elementAudio.currentTime = parseFloat(boxPlayTimeTotal.value) // update thoi gian moi
  }

  return (
    <>
      <div className="mt-[11px] relative box-play-time ">
        <div className="bg-primary w-[0] h-[4px] rounded-[50px] absolute top-[14px] left-[0] inner-current "></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className="rounded-[50px] bg-[#FFFFFF0A] w-full h-[4px] appearance-none range-sm cursor-pointer inner-total "
          onChange = {handleChange}
        ></input>
      </div>
    </>
  );
}
