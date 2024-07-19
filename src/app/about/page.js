import React from 'react'
import Card from '../components/componet'

export default function Page() {
  return (
    <section className="w-full h-[80vh]  mt-[7rem] mb-[17rem] flex flex-col justify-between pl-10 pr-10 items-center">

      <div className="w-[100%] h-[100%] bg-[#7d6ba] flex  flex-wrap items-center ">

        <article className='w-[50%] h-[100%] bg-[#7d6ba]'>
          <img src={"./Map.png"} className="w-full h-[100%]" />
        </article>

        <article className="w-[40%] h-[100%] bg-[#7a89b] ml-8 flex flex-col gap-7 bg-contain justify-center">
          <p className=" font-mono font-bold text-[20px]">Below in the know</p>

          <p className="">Get the latest info on the best deals, offers and promotions.</p>

          <input type="text" placeholder="*First Name" className="w-[100%] h-[9%] bg-[#F0F0F0] pl-5 text-[13px] outline-none" />
          <input type="text" placeholder="*Email Address" className="w-[100%] h-[9%] bg-[#F0F0F0] pl-5 text-[13px] outline-none" />
          <p className="w-[30%] h-[7%] bg-[#FE7401] text-center text-[white] text-[12px] cursor-pointer flex justify-center items-center">Get Emails Updates</p>
        </article>
      </div>

    </section>
  )
}

