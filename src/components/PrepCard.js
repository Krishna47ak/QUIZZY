import Image from "next/image";

const PrepCard = ({ title }) => {
    return (
        <div className="border border-gray-500 bg-[#404040] w-[95%] p-5 rounded-xl" >
            <div className="text-gray-400 text-xs" >
                <p>Last practice linear etc etc</p>
                <p>28/02/2023</p>
            </div>
            <Image className="my-2" src="/uptrend-icon.svg" width={100} height={100} alt="trend" />
            <div>
                <p className="text-3xl mb-2" >{title}</p>
                <p className="text-xs" >A description of above parameter goes here</p>
            </div>
        </div>
    )
}

export default PrepCard