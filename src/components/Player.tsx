import { DiscordLogo, Lightning } from "phosphor-react";

export default function Player() {
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] h-full-[60vh] aspect-video'></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto ">
        <div className="flex items-start gap-16">
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold">
              Class - 1 Opening
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              OASHSAOJDOSAJDISAJDOJIAS
            </p>
            <div className="flex items-center gap-4 mt-6">
                <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/wandersonce.png" 
                alt="Teacher Image" 
                />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Wanderson Castro
                  </strong>
                <span className="text-gray-200 text-sm block">
                  Web Developer
                  </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
             <DiscordLogo size={24} />
              Discord Community 
            </a>
            <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
             <Lightning size={24} />
              Access Challange
            </a>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
