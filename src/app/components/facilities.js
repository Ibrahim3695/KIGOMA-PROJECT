// import "./globals.css";

const Facilities = ({img, meet, para}) => {
    return (
        <div className="w-[28%] h-[69%] bg-orange-20 flex flex-col items-center">
            <article className="w-[100%] h-[50%] bg-orange-100">
            <img src={img} className="w-full h-[100%]" />
            </article>

            <h1 className="p-2 font-semibold font-mono text-[16px] text-[#2e2e2e]">{meet}</h1>
            <p className="text-center w-[1005] font-gruppo text-[13px] ">{para}</p>
        </div>
    )
}

export default Facilities