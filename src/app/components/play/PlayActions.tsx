"use client";

import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

export default function PlayActions() {
  const handlePlay = (event: any) => {
    const elementPlayAudio: any = document.querySelector(".play-audio"); // tim phan tu co class play-audio
    const elementAudio = elementPlayAudio.querySelector(".inner-audio"); // tim phan tu co class play-audio ben trong elementPlayAudio
    const boxButtonPlay = elementPlayAudio.querySelector(".box-button-play");

    if (boxButtonPlay.classList.contains("play")) {
      // kiem tra xem boxButtonPlay co class play hay chua
      boxButtonPlay.classList.remove("play"); // neu co roi thi xoa
      elementAudio.pause(); // dung nhac
    } else {
      boxButtonPlay.classList.add("play"); // neu chua co roi thi them
      elementAudio.play(); // phat nhac
    }
  };

  const handleNextPrev = (action : string) => {

    const elementPlayAudio : any = document.querySelector(".play-audio") // tim phan tu co class play-audio
    const idSongCurrent = elementPlayAudio.getAttribute("song-id") // lay ra id bai hat dang phat 
    const elementSongCurrent = document.querySelector(`[song-list] [song-id = '${idSongCurrent}']`) // tim ra phan tu bai hat hien tai

    if(elementSongCurrent) {
      switch (action) {
        case "next":
          const elementSongNext = elementSongCurrent.nextElementSibling ; // lay ra phan tu ke tiep 
          if (elementSongNext) {
            const buttonPlay : any = elementSongNext.querySelector("button[button-play]") // lay ra nut play
            buttonPlay.click() ; // de tu dong click
          }
          break;

        case "prev":
          const elementSongPrev = elementSongCurrent.previousElementSibling ; // lay ra phan tu dang truoc 
          if (elementSongPrev) {
            const buttonPlay : any = elementSongPrev.querySelector("button[button-play]") // lay ra nut play
            buttonPlay.click() ; // de tu dong click
          }
          break;
      }
    }

  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <button
          className="text-white text-[16px]  "
          onClick={() => {
            handleNextPrev("prev");
          }}
        >
          <FaBackwardStep></FaBackwardStep>
        </button>
        <button
          className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex justify-center items-center box-button-play play "
          onClick={handlePlay}
        >
          <FaPlay className="inner-icon-play"></FaPlay>
          <FaPause className="inner-icon-pause"></FaPause>
        </button>
        <button
          className="text-white text-[16px] "
          onClick={() => {
            handleNextPrev("next");
          }}
        >
          <FaForwardStep></FaForwardStep>
        </button>
      </div>
    </>
  );
}
