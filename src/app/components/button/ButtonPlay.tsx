'use client'

import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay } from "react-icons/fa6";



export default function ButtonPlay(props: ISongItem) {
  const {
    id = "",
    image = "",
    title = "",
    singerId = "",
    listen = 0,
    audio = "",
    dataSinger = "" ,
    className = "" ,
  } = props;

  // ham dung de lay ra danh sach ca si bai hat

  

  const handlePlay = () => {
    const elementPlayAudio : any = document.querySelector(".play-audio") // tim phan tu co class play-audio
    if (elementPlayAudio) {
      
      // Thêm id bài hát vào elementPlayAudio 
      elementPlayAudio.setAttribute("song-id" , id ) ; // them thuoc tinh song-id

      // Phat nhac
      const elementAudio = elementPlayAudio.querySelector(".inner-audio")// tim phan tu co class play-audio ben trong elementPlayAudio
      const elementSource = elementAudio.querySelector(".inner-source")// tim phan tu co class inner-source ben trong elementAudio
      elementSource.src = audio ; // gan lai thuoc tinh src cua elementSource bang duong link cua audio
      elementAudio.load() ; // load noi dung 
      elementAudio.play() ; // phat nhac

      
      // Hien thi khoi Play
      elementPlayAudio.classList.remove('hidden') // xoa di class hidden cua elementPlayAudio
      
      // Lay ra tong thoi gian bai hat 
      const boxPlayTime : any  = document.querySelector(".box-play-time") ;
      const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total") ;
      const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current") ;

      elementAudio.onloadedmetadata = () => { // lay ra thong tin cua audio 
        const totalTime = elementAudio.duration ; // lay ra tong thoi gian
        boxPlayTimeTotal.max = totalTime  // gan lai thuoc tinh max cua input

        // Lay ra thoi gian hien tai
        elementAudio.ontimeupdate = () => { // ham lien tuc chay khi thoi gian audio thay doi
          const currentTime = elementAudio.currentTime ; // lay ra thoi gian hien tai
          boxPlayTimeTotal.value  = currentTime ; // hien thi dau cham theo thoi gian
          const percent = currentTime * 100 / totalTime ; 
          boxPlayTimeCurrent.style.width = `${percent}%` // hien thi vach mau xanh chay theo dau cham 
        }
      }

      // Hien thi anh
      const elementImage = elementPlayAudio.querySelector(".inner-image") // tim phan tu co class inner-image ben trong elementPlayAudio
      elementImage.src = image ;// gan lai thuoc tinh src cua elementImage 
      elementImage.alt = title ;// gan lai thuoc tinh alt cua elementImage 

      // Hien thi tieu de bai hat
      const elementTitle = elementPlayAudio.querySelector(".inner-title") // tim phan tu co class inner-title ben trong elementPlayAudio
      elementTitle.innerHTML = title ; // them noi dung vao ben trong the elementTitle

      // Hien thi ten ca si
      const elementSinger = elementPlayAudio.querySelector(".inner-singer") // tim phan tu co class inner-singer ben trong elementPlayAudio
      elementSinger.innerHTML = dataSinger ; // them noi dung vao ben trong the elementTitle

      // Them class Play cho box-button-play
      const boxButtonPlay = document.querySelector(".box-button-play") ;
      boxButtonPlay?.classList.add("play")

    }
  }

  return (
    <>
      <button
        onClick={handlePlay} // khi dung cac su kien nhu onSubmit , onClick , .. phai dung useclient
        className={className}
        button-play=""
      >
        <FaPlay></FaPlay>
      </button>
    </>
  );
}
