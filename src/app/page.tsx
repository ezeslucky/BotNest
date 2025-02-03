import { ContainerScroll } from "@/components/global/containerScoller";
import { Navbar } from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";


// import {Navbar}  from "../components/global/navbar"
export default function Home() {
  return (
 <main>
  <Navbar/>
  <section className=" h-screen w-full bg-neutral-950  rounded-md !overflow-visible relative flex flex-col items-center antialiased">
<div className=" absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, #000_35%,#223_100%)]"> 

</div>
<div className=" flex flex-col mt-[-100px] md:mt-[-50px]"> 
<ContainerScroll
titleComponent={
            <div className=" flex items-center justify-center flex-col">
              <Button size={'lg'}  className=" p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group  transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"> 
<span className=" bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
Start For Free Today
</span>

              </Button>
              <h1 className=" text-5xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Automate Your Work With BuildoMatic
              </h1>
            </div>
}
/>
  
</div>
  </section>
 </main>
  );
}
