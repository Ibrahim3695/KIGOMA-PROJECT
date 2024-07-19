import React from 'react'
import Card from '../components/componet'

export default function Page() {
  return (
    <div className='mt-[7rem] flex flex-wrap w-[100%] h-[100%] bg-[#bcd6b] justify-between pl-[5rem] pr-[5rem] gap-[8rem] mb-[17rem]'>

      <Card
        text1={"Restaurant"}
        text2={"Enjoy delicious meals  and experience upscale fine dining at our 2-star Michelin restaurant and bar where we servie a variety of mouthwatering local and intercontinental dishes."}
        img={"./Restaurant.png"}
        w={"44%"}
        h={"55vh"} />

      <Card
        text1={"Swimming Pool"}
        text2={"Have a relaxing time in any of our pools. Smash your body goals swimming while enjoying a breathtaking view of the park."}
        img={"./Swimming.png"}
        w={"44%"}
        h={"55vh"} />

      <Card
        text1={"Movie Theatre"}
        text2={"Our movie auditoriums come with standard screens with rows of comfortable padded seats, as well as a foyer area containing a box office for buying tickets."}
        img={"./Movie.png"}
        w={"44%"}
        h={"55vh"} />

      <Card
        text1={"Games Room"}
        text2={"Our very own recreation room outfitted with game consoles, board and table games as well as a children’s KG and playpen so the little ones don’t feel left out."}
        img={"./Games.png"}
        w={"44%"}
        h={"55vh"} />


    </div>
  )
}

