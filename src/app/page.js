import CircularProgressBar from "@/components/CircularProgressBar";
import LeaderboardCard from "@/components/LeaderboardCard";
import PrepCard from "@/components/PrepCard";
import Image from "next/image";

const leaderboardData = ["Name", "Name", "Name", "You"]

export default function Home() {


  return (
    <div className="lg:flex bg-gradient-to-br from-[#354640] via-[#2a2a2a] to-[#2d332f] text-white min-h-screen" >
      <div className="leaderBoard lg:w-[45vw] min-[1155px]:w-[30vw] lg:h-auto p-10 bg-transparent" >
        <div className="flex items-center" >
          <Image src="/profile-icon.svg" width={36} height={36} alt="profile" />
          <p className="text-2xl ml-2" >Chat<span className="font-semibold" >SAT</span></p>
        </div>

        <div className="bg-[#44554f] shadow-inner shadow-[#616e5d] border border-[#616e5d] p-3 px-4 mt-7 rounded-xl" >
          <p>New Thread</p>
        </div>

        <div className="flex justify-between bg-[#44554f] shadow-inner shadow-[#616e5d] p-5 rounded-xl my-5" >
          <CircularProgressBar progress={4} />
          <div>
            <div className="flex space-x-2 items-center text-3xl" >
              <Image src="/medal-icon.svg" width={40} height={40} alt="medal" />
              <p className="font-medium" >0/223</p>
              <p className="font-semibold text-[#edff85]" >XP</p>
            </div>
            <div className="bg-[#7a8682] text-[#edff85] shadow-inner shadow-[#839490] text-sm w-[70%] py-2 ml-auto mt-2 text-center rounded-xl active:scale-95 cursor-pointer select-none" >Take a Quiz</div>
          </div>
        </div>

        <div className="bg-[#434e4a] shadow-inner shadow-[#616e5d] rounded-xl" >
          <div className="bg-[#4f5a56] shadow-inner shadow-[#616e5d] border border-[#616e5d] p-4 px-5 rounded-xl" >
            <p>Leaderboard</p>
          </div>
          <div className="px-5 pb-4" >
            {leaderboardData?.map((data, index) => (
              <LeaderboardCard key={index} index={index} name={data} />
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 text-lg  mt-5 mb-3" >
          <Image src="/profile-icon.svg" width={40} height={40} alt="profile" />
          <p>Name</p>
        </div>

        <div className="flex items-center space-x-2 text-xs cursor-pointer select-none" >
          <Image className="rotate-180" src="signout-icon.svg" width={15} height={15} alt="sign out" />
          <p>Sign Out</p>
        </div>
      </div>

      <div className="p-10 md:px-32 lg:px-20 min-[1155px]:px-32" >
        <p className="text-2xl md:text-3xl font-semibold" >Hey, <span className="text-[#edff85]" >Ananda!</span></p>
        <p className="text-2xl md:text-3xl font-semibold" >How's your prep for the <span className="text-[#edff85]" >March SAT</span></p>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 mt-10" >
          <PrepCard title="Practice" />
          <PrepCard title="Mock" />
          <PrepCard title="Title Text here" />
          <PrepCard title="Title Text here" />
        </div>
      </div>
    </div >
  );
}
