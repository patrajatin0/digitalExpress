import APP_LOGO from "../assets/Logo copy.jpg"

const Header = () => {
    return (
        <>
            <header className=" ">
                <nav className="bg-[#6A1B2D] flex justify-between px-8 items-center w-full fixed ">
                    <div>
                        <img className="w-40 h-20 cursor-pointer " src={APP_LOGO} alt="" />
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="mx-4 text-[#E6C36A] text-lg cursor-pointer border-2 p-2  border-[#6B6B6B] shadow rounded-lg">Call Now</li>
                            <li className="mx-4 text-[#E6C36A] text-lg cursor-pointer border-2 p-2 border-[#6B6B6B] shadow rounded-lg">Message Now</li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header