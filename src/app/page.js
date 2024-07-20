import Link from "next/link";
import Card from "./components/componet";
import Facilities from "./components/facilities";
import "./globals.css";

export default function Home() {
  return (
    <main className="">
      <section className="w-full h-[94vh] bg-[url('/background.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">

        <div className="w-full h-[94vh] bg-[#0000007b] absolute top-0 left-0 bottom-0 right-0 z-1">


          <div className="w-full h-[85px] z-1 flex justify-between items-center pl-8 pr-8 absolute top-0 left-0 bottom-0 right-0 " >
            <article className="w-[4.7%] h-[63%] bg-[transparent] ">
              <img src={"./logo.png"} className="w-full h-[100%]" />
            </article>

            <ul className="flex w-[37%] bg-slate-20 justify-between z-9999 text-[white]">
              <Link href={"/"}>
                <li className=" z-9 cursor-pointer text-[14px] font-medium">Home</li>
              </Link>

              <Link href={"./room"}>
                <li className=" z-9 cursor-pointer text-[14px] font-medium">Room</li>
              </Link>

              <Link href={"./facilities"}>
                <li className=" z-9 cursor-pointer text-[14px] font-medium"> Facilities</li>
              </Link>

              <Link href={"./about"}>
                <li className=" z-9 cursor-pointer text-[14px] font-medium">About Us</li>
              </Link>

            </ul>

            <article className="w-[12%] h-[33%] bg-[#FE7401] z-9 text-[white] cursor-pointer text-[14px] font-medium flex justify-around items-center pl-4 pr-4">
              <img src="./Calendar.png" width={"18px"} height={"18px"} />
              <p className="text-[12px] font-medium">Reservation</p>
            </article>
          </div>
        </div>

        <div className="w-[45%] h-[50%] bg-slate-30 text-[white] flex justify-center items-center flex-col z-0">
          <p className="text-[28px]">Welcome to</p>
          <h1 className="text-[5rem] font-mono">KIGOMA</h1>
          <p className="text-[20px]">ENJOY YOUR STAY</p>
        </div>


      </section>

      <section className="w-full h-[70vh] bg-[#d5d3d] mt-[5.5rem] flex justify-between pl-10 pr-10 items-center">

        <div className="w-[40%] h-[70%] bg-[#bcd6b] flex flex-col justify-center">

          <h1 className="font-mono text-[30px] font-bold">Rooms & Suites</h1>

          <p className="text-[14px] font-light mt-2 font-montserrat text-justify"> A holistic approach to luxury living, the Kigoma offers 297 curated rooms & suites that ensure that guests would never want, or need, to leave. Guests are invited to customize their luxury stay with a selection of the most exquisite room offerings available, including seven distinct suite categories featuring private and open floor layouts as well as outdoor terraces and city and garden-view balcony options.</p>

          <span className="flex w-[70%] h-[20%] bg-slate- justify-between mt-5">
            <button className="w-[58%] h-[70%] bg-[]  border-black border-solid border-2 font-bold font-mono">View Rooms & suites</button>
            <button className="w-[35%] h-[70%] bg-[#FE7401] text-white text-[13px] font-bold">Book Now</button>
          </span>
        </div>

        <div className="w-[50%] h-[100%] bg-[#737272] ">
          <img src="./image1.png" className="w-full h-[100%]" />
        </div>
      </section>

      <section className="w-full h-[95vh] bg-[#d5d3d] mt-[10rem] flex flex-col justify-between pl-10 pr-10 items-center">
        <h1 className="font-mono text-[30px] font-bold">Popular Offerings</h1>

        <div className="w-[100%] h-[100%] bg-[#bcd6b] flex justify-between">
          <Card
            text1={"Garden Premier"}

            text2={"  Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view"}
            img={"./image2.png"}
            text3={"From ₦ 40,000/night"}
            bg={"#FE7401"} bgText={"Book Now"}
            w={"30%"}
            h={"55%"} />

          <Card
            text1={"Family Suite"}
            text2={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
            img={"./image3.png"}
            text3={"From ₦ 50,000/night"}
            bg={"#FE7401"} bgText={"Book Now"}
            w={"30%"}
            h={"55%"} />

          <Card
            text1={"Governor's Suite"}
            text2={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
            img={"./image4.png"}
            text3={"From ₦ 170,000/night"}
            bg={"#FE7401"} bgText={"Book Now"}
            w={"30%"}
            h={"55%"} />
        </div>

      </section>

      <section className="w-full h-[70vh] bg-[#d5d3d] mt-[2rem] flex flex-col justify-between pl-10 pr-10 items-center">
        <p className="font-gruppo text-[20px] font-medium">Gallery</p>
        <h1 className="font-mono text-[30px] font-bold">Word-famous luxury</h1>

        <div className="w-[100%] h-[100%] bg-[#bcd6bc] flex justify-between">

        </div>
      </section>

      <section className="w-full h-[70vh] bg-[#d5d3d] mt-[7rem] flex flex-col justify-between pl-10 pr-10 items-center">
        <h1 className="font-mono text-[30px] font-bold">Facilities</h1>

        <div className="w-[100%] h-[100%] bg-[#bcd6b] flex justify-between flex-wrap">
          <Facilities img={"./image5.png"} meet={"Meeting Room"} para={"A 20-seater meeting room is on ground at the Kigamo for your business meetings and client negotiations."} />
          <Facilities img={"./image6.png"} meet={"Restaurant  "} para={"Upscale fine dining restaurant and bar serving a variety of local, continental and international dishes."} />
          <Facilities img={"./image7.png"} meet={"Swimming Pool"} para={"An Olympic size pool, two standard size pools and a kiddies' pool,  each offering views of the game reserve."} />
          <Facilities img={"./image8.png"} meet={"Conference Hall"} para={"Two 150-seater conference halls equipped with smart monitors for presentations for conferences and meet-ups."} />
          <Facilities img={"./image9.png"} meet={"Movie Theater"} para={"Three 50-seater movie rooms with standard screens are available to visitors at Kigamo."} />
          <Facilities img={"./image10.png"} meet={"Lounge"} para={"Open lounge with a view of the game reserve and a bar for refreshments. The lounge also features a live band."} />
        </div>

      </section>

      <section className="w-full h-[70vh] bg-[#d5d3d] mt-[16rem] flex flex-col justify-between pl-10 pr-10 items-center">
        <h1 className="font-mono text-[30px] font-bold">A message from the Manager</h1>

        <div className="w-[100%] h-[100%] bg-[#bcdw] flex justify-between flex-wrap mt-12">
          <article className="w-[35%] h-[100%] bg-[#d0d68] flex justify-center items-center">
            <div className="w-[50%] h-[50%] bg-[#d0d68] rounded-full">
              <img src={"./picture.png"} className="w-full h-[100%]" />

            </div>
          </article>

          <article className="w-[60%] h-[100%] bg-[#7a89b] flex flex-col justify-center">
            <p className=" pr-[6rem] text-lg">Kigoma sits in a unique position of being able to offer our guests the very best of Africa. From generous hospitality and refined service, to exceptional experiences and the most beautiful African animals in existence.
            </p>

            <p className="pt-9 pr-[6rem] text-lg">Everyday, we aim to fulfill our purpose: "We love what we do. We believe in changing people's lives and find our own value in their experience."
            </p>

            <p className="pt-9 pr-[6rem] text-lg">Allow the Kigoma family to curate your visit to our beautiful grounds.</p>

            <h1 className="pt-8 font-semibold font-mono text-lg">Michael Joshua</h1>
          </article>
        </div>

      </section>


      <section className="w-full h-[70vh]  mt-[10rem] flex flex-col justify-between pl-10 pr-10 items-center bg-[url('/back.png')]">

        <div className="w-[100%] h-[100%] bg-[#7d6ba] flex justify-center flex-wrap items-center">


          <article className="w-[60%] h-[100%] bg-[#7a89b] flex flex-col gap-7 bg-contain items-center justify-center">
            <p className=" text-center font-mono font-bold text-[20px]">Below in the know</p>

            <p className="text-center">Get the latest info on the best deals, offers and promotions.</p>

            <input type="text" placeholder="*First Name" className="w-[75%] h-[9%] text-center text-[13px] outline-none" />
            <input type="text" placeholder="*Email Address" className="w-[75%] h-[9%] text-center text-[13px] outline-none" />
            <p className="p-3 bg-[#FE7401] text-center text-[white] text-[12px] cursor-pointer">Get Emails Updates</p>
          </article>
        </div>

      </section>

    </main>
  );
}
