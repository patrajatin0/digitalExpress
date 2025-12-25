



const Imagedata = ({ updateData, onClick }) => {


    return (
        <>
            <div>
                <div onClick={onClick} className="cursor-pointer" >
                    <img className="rounded-2xl " src={updateData?.img} alt="" />
                </div>

            </div>
        </>
    )
}
export default Imagedata