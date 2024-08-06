import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <>
      {/* Section1 : Banner Home + Nghe nhieu */}
      <Section1></Section1>

      {/* Section2 : Danh muc noi bat */}
      <Section2></Section2>

      {/* Section3 : Ca si noi bat */}
      <Section3></Section3>
    </>
  );
}
