



const Imagedata = ({ updateData, onClick }) => {


    return (
        <>
            <div>
                <div onClick={onClick} className="cursor-pointer " >
                    <img className="rounded-2xl w-76 pointer-events-none select-none  " src={updateData?.img} alt="" />
                </div>

            </div>
        </>
    )
}
export default Imagedata