const Buttons = ({ setAll, imageList }) => {
    return (
        <div>
            <div className=" flex flex-wrap  sm:w-full ">
                <button className=" text-white text-[8px]   m-4 bg-orange-400  hover:bg-orange-500  rounded-lg  cursor-pointer   w-[60px] text-center  " onClick={() => { setAll(imageList.filter((c) => (c?.categories === "Personilized Gifts"))) }}>GIFT CARDS</button>
                <button className=" text-white text-[8px]  m-4 bg-orange-400  px-5 hover:bg-orange-500  rounded-lg cursor-pointer w-[80px] text-center " onClick={() => { setAll(imageList.filter((c) => (c?.categories === "DigitalPrint"))) }} >DIGITAL PRINT</button>
                <button className=" text-white text-[8px]   m-4 bg-orange-400 px-5 hover:bg-orange-500 rounded-lg cursor-pointer w-[80px]  text-center " onClick={() => { setAll(imageList.filter((c) => (c?.categories === "weddingCard"))) }}>WEDDING CARD</button>
            </div>
        </div>
    )
}
export default Buttons