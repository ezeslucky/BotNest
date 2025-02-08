
import HeroParallas from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/ContainerScoller";
import Footer from "@/components/global/footer";
import { InfiniteMovingCards, InfiniteMovingCardsDemo } from "@/components/global/InfiniteMovinf";
import { Navbar } from "@/components/global/Navbar";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/constant";



export default function Home() {
  return (
 <main>
  <Navbar/>
  {/* <section className=" h-screen w-full   rounded-md !overflow-visible relative flex flex-col items-center antialiased">
<div className=" absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%, #000_35%,#223_100%)]"> 
  </div> */}

<div className="flex flex-col items-center"> 


        
          <h1 className="md:text-6xl text-2xl text-center md:mt-12 font-bold">
          Just grab, insert, and let your<br /> {" "}
           
          </h1>
          <p className="text-md md:text-lg text-center mt-6 mb-5 text-gray-400">
            Accelerate your project’s growth with ready-to-use UI components{" "}
            <br /> that save time and elevate quality
          </p>
          <h1 className="text-center font-bold mt-6 text-2xl text-gray-400">
            Built With
          </h1>
     

</div>
<div>
<InfiniteMovingCardsDemo
    className= " "
    items={clients}
    direction ="right"
    speed="slow"
    />
</div>

<div>
  <HeroParallas></HeroParallas>
</div>

  {/* </section> */}
 
<Footer/>

   
 </main>
  );
}
