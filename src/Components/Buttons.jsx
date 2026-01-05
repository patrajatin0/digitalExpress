

const Buttons = ({ setActiveCategory }) => {

    return (
        <div>
            <div className=" flex flex-wrap    ">
                <button className="hover:animate-none animate-pulse  text-orange-400 text-[8px]   m-4 border-2 border-orange-400   rounded-full cursor-pointer w-[80px]  text-center " onClick={() => { setActiveCategory("weddingCard") }}>WEDDING </button>
                <button className="hover:animate-none animate-pulse text-orange-400 text-[8px]   m-4  rounded-full border-2 border-orange-400  cursor-pointer   w-[60px] text-center  " onClick={() => { setActiveCategory("Personilized Gifts") }}>GIFT </button>
                <button className=" hover:animate-none animate-pulse border-2 text-orange-400    border-orange-400   text-[8px]  m-4  px-5  rounded-full  cursor-pointer w-[80px] text-center " onClick={() => { setActiveCategory("DigitalPrint") }} >DIGITAL PRINT</button>

            </div>
        </div>
    )
}
export default Buttons