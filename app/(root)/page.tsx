import Main_Section_2 from "@/components/Main_Section_2";
import Main_Section_1 from "@/components/Main_Section_1";
import Main_Section_3 from "@/components/Main_Section_3";
import Main_Section_4 from "@/components/Main_Section_4";

export default function Home() {
  return (
    <>


      <div id="home">
        <Main_Section_1 />
      </div>
      <div id="resources">
        <Main_Section_2 />
      </div>
      <div id="main">
        <Main_Section_3 />
      </div>
      <div id="projects">
        <Main_Section_4 />
      </div>




    </>
  )
}
