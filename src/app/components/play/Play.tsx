import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayActions from "./PlayActions";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";

/* eslint-disable @next/next/no-img-element */
export default function Play() {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 left-0 w-full z-[999] py-[20px] hidden play-audio ">{/* play-audio la class tu them */}
        <PlayAudio></PlayAudio>
        <div className="container mx-auto flex items-center justify-between  ">
          <PlayInfo></PlayInfo>
          <div className="flex-1 mx-[67px]  ">
            <PlayActions></PlayActions>
            <PlayTime></PlayTime>
          </div>
          <PlayVolume></PlayVolume>
        </div>
      </div>
    </>
  );
}
