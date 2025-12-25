
import { imageList } from "../Dummydata/FetchData"
import Imagedata from "./ImageData"
import { useState } from "react"




const Cards = () => {
    const [selectedImage, setSelectedImage] = useState(null)




    return (
        <>
            <div className="">
                <div className="flex flex-wrap gap-4 p-2 items-center justify-center  ">
                    {imageList.map((c) => (<Imagedata key={c?.id} updateData={c} onClick={() => setSelectedImage(c.img)} />))}
                </div>
                {selectedImage && (<div className=" inset-0  flex items-center justify-center z-50 fixed shadow-2xl shadow-gray-400" onClick={() => setSelectedImage(null)}>

                    <div>
                        <img src={selectedImage} alt="" className="w-[60vw] h-[80vh] rounded-xl   " />
                    </div>

                </div>
                )}
            </div>
        </>
    )
}
export default Cards