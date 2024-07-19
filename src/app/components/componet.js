// import "./globals.css";

export default function Card({ text1, text2, text3, img, bg, bgText, w, h, mh, bottom, roombg }) {
  return (
    <main className=" h-[100%] bg-slate-40 " style={{ width: w, heigh: mh, position: "relative" }}>
      <div className="w-[100%] bg-slate-400" style={{ height: h }}>

        <img src={img} className="w-full h-[100%]" />

      </div>

      <h1 className="font-mono text-[25px] font-medium pt-2">{text1}</h1>

      <div className="w-[100%] h-[10%]">
        <p className="pt-2 font-montserrat text-justify text-[14px] font-light">{text2}</p>
      </div>

      <span className="flex w-[100%] h-[6%] bg-[] justify-between mt-[4rem]" style={{ position: "absolute", bottom: bottom, background: roombg }}>
        <p className="p-[10px] flex justify-center items-center text-center bg-[#76625] font-bold font-mono text-[19px]">{text3}</p>
        <button className="p-[15px] flex justify-center items-center text-center text-white text-[12px] font-semibold" style={{ background: bg }}>{bgText}</button>
      </span>
    </main>
  );
}
