import {  TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const SkillsCard = ({ skills }) => {
    return (
        <>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((skills, index) => {
                            return (
                                <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                <div className="text-6xl group-hover:text-blue-700 transition-all duration-300">
                                                    {skills.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">
                                                    {skills.name}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </TabsContent>
        </>
    )
}

export default SkillsCard
