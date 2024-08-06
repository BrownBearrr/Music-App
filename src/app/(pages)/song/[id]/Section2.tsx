import Title from "@/app/components/title/title";

export default function Section2 (props : {
  lyrics : string
}) {
  const {lyrics = ""} = props ;
  return(
    <>
      <div className="mt-[30px] ">
        <Title text="Loi Bai Hat"></Title>
        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500] text-[14px] whitespace-pre-line ">
          {lyrics}
        </div>
      </div>
    </>
  )
}