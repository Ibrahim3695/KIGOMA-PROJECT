import React from 'react'
import Card from '../components/componet'

export default function Page() {
  return (
    <div className='mt-[7rem] flex flex-wrap w-[100%] h-[100%] bg-[#bcd6b] justify-between pl-10 pr-10 gap-[6.8rem] mb-[15rem] relative'>

      <Card
        text1={"Garden Premier"}
        text2={"Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view."}
        img={"./image2.png"}
        w={"27%"}
        mh={"65%"}
        h={"54vh"}
        bottom={"7.4rem"}
        text3={"From ₦ 170,000/night"}
        bg={"#FE7401"} bgText={"Book Now"}
        roombg={"#9191918f"}
      />

      <Card
        text1={"Family Suite"}
        text2={"Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family."}
        img={"./image3.png"}
        w={"27%"}
        mh={"65%"}
        h={"54vh"}
        bottom={"8.7rem"}
        text3={"From ₦ 200,000/night"}
        bg={"#FE7401"} bgText={"Book Now"}
        roombg={"#9191918f"}
      />

      <Card
        text1={"Premier Executive"}
        text2={"Elegant room with king size bed, warmly decorated, carpeted or wooden or tiled floors."}
        img={"./Swimmingss.png"}
        w={"27%"}
        h={"54vh"}
        bottom={"6.1rem"}
        text3={"From ₦ 100,000/night"}
        bg={"#FE7401"} bgText={"Book Now"}
        roombg={"#9191918f"}
      />

      <Card
        text1={"Luxury Suite"}
        text2={"Luxurious master bedroom with a king size bed with a spacious living room and a guest restroom, lavishly decorated in African style with a dining area including a table for 6 and a sitting area furnished with leather sofas."}
        img={"./Meetings.png"}
        w={"27%"}
        h={"54vh"}
        bottom={"10rem"}
        text3={"From ₦ 750,000/night"}
        bg={"#FE7401"} bgText={"Book Now"}
        roombg={"#9191918f"}
      />

      <Card
        text1={"Royal Suite"}
        text2={"An atmosphere of modern simplicity and luxury, one master bedroom with king size bed and an oversized marble bathroom in addition to a living area with a large sofa and a private working station, a table for 4 persons and tea/coffee amenities."}
        img={"./Restaurantss.png"}
        w={"27%"}
        h={"54vh"}
        bottom={"11.3rem"}
        text3={"From ₦ 320,000/night"}
        bg={"#FE7401"} bgText={"Book Now"}
        roombg={"#9191918f"}
      />

      <Card
        text1={"Governor's Suite"}
        text2={"Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m."}
        img={"./Swimmingp.png"}
        w={"27%"}
        h={"54vh"}
        bottom={"11.3rem"}
        text3={"From ₦ 770,000/night"}
        bg={"#FE7401"} bgText={"Book Now"}
        roombg={"#9191918f"}
      />

    </div>
  )
}

