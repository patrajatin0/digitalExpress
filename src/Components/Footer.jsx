const Footer = () => {
    return (
        <>

            <div className="flex flex-col bg-sky-400 justify-center items-center gap-2 p-20">
                <div className="border-b-2 border-b-gray-300 p-4   ">
                    <h1 className="text-4xl text-gray-300 font-mono  ">Digital Express</h1>
                </div>
                <div>
                    <div className="flex items-center flex-col  p-2 rounded-lg  cursor-pointer my-4 text-white ">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Odisha,Berhampur,Ganjam</p>
                        <i class="fa-solid fa-envelope"></i>
                        <p>digitalexpress@gmail.com</p>
                    </div>
                </div>


                <div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 gap w-36 ">
                        <i class="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 gap w-36 ">
                        <i class="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 gap w-36 ">
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>Whatsapp</span>
                    </div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 gap w-36 ">
                        <i class="fa-solid fa-phone"></i>
                        <span>Phone Call</span>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Footer