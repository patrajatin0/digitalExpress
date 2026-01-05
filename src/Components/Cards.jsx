




import { imageList } from "../Dummydata/FetchData"
import Imagedata from "./ImageData"
import { useState } from "react"
import { Link } from "react-router-dom"
import Buttons from "./Buttons"

const Cards = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const [all, setall] = useState("weddingCard")
    const activeCards = imageList.filter((c) => (c?.categories === all))

    return (
        <>
            <div className="flex flex-wrap "  >
                <Buttons setActiveCategory={setall} />
            </div>
            <div className="min-h-screen p-4 sm:p-6 lg:p-8   ">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-[1600px] mx-auto">
                    {activeCards.map((c) => (
                        <Imagedata
                            key={c?.id}
                            updateData={c}
                            onClick={() => setSelectedImage(c.img)}
                        />
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6 animate-in fade-in duration-200"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-[95vw] max-h-[90vh] animate-in zoom-in-95 duration-200  ">
                            <img

                                src={selectedImage}
                                alt="Preview"
                                className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg sm:rounded-xl shadow-2xl object-contain  pointer-events-none select-none "
                            />
                            <button className=" md:top-4 md:right-0  absolute top-2 sm:top-4 sm:ml-[480px] sm:w-12 sm:h-12  mx-46 bg-white/90 p-2 rounded-full w-10 h-10  cursor-pointer hover:bg-white text-gray-800 sm:p-3 shadow-lg  transition-all duration-200 hover:scale-110  ">
                                <Link to={"https://www.whatsapp.com/"}> <i className="fa-solid fa-share text-gray-500  "></i></Link>
                            </button>
                            <button
                                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close preview"
                            >
                                <svg
                                    className="w-5 h-5 sm:w-6 sm:h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}

export default Cards