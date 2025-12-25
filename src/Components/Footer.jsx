const Footer = () => {
    return (
        <>
            <div className="flex  bg-sky-400 justify-center items-center gap-20 p-30">
                <div >
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 ">
                        <i class="fa-brands fa-instagram"></i>
                        <span>Instagram</span>
                    </div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 ">
                        <i class="fa-brands fa-facebook"></i>
                        <span>Facebook</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center flex-col  p-2 rounded-lg  cursor-pointer my-4 text-orange-800 ">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Odisha,Aska,Ganjam</p>
                        <i class="fa-solid fa-envelope"></i>
                        <p>digitalexpress@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 ">
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>Whatsapp</span>
                    </div>
                    <div className="flex items-center bg-orange-500 p-2 rounded-lg text-sky-50 cursor-pointer my-4 ">
                        <i class="fa-solid fa-phone"></i>
                        <span>Phone Call</span>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Footer