import Image from "next/image";

const LeaderboardCard = ({ index, name }) => {
    return (
        <div className="flex items-center justify-between bg-[#4f5a56] shadow-inner shadow-[#616e5d] border border-[#616e5d] p-3 px-4 mt-3 hover:bg-gradient-to-b from-[#63755f] to-[#617f77] rounded-xl" >
            <div className="flex items-center space-x-[0.1rem]" >
                <p className="text-[#edff85] font-medium" >0{index + 1}.</p>
                <Image src="/medal-icon.svg" width={17} height={17} alt="medal" />
                <Image src="/profile-icon.svg" width={20} height={20} alt="profile" />
                <p className="pl-1" >{name}</p>
            </div>
            <div className="flex items-center space-x-2" >
                <p className="font-medium" >0/223</p>
                <p className="font-semibold text-[#edff85]" >XP</p>
            </div>
        </div>
    )
}

export default LeaderboardCard