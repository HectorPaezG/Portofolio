import { FaEye } from "react-icons/fa"
import { HiCodeBracket } from "react-icons/hi2"
import Link from "next/link"
import Image from 'next/image';

const WorkCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="container mx-auto">
            <div className="h-52 md:h-72 rounded-t-xl relative group">
                <Image 
                    src={imgUrl} 
                    alt={title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-xl" 
                />
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#232329] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl">
                    <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-white/60 hover:border-blue-700 group/link">
                        <HiCodeBracket className="h-10 w-10 text-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-700" />
                    </Link>
                    <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-white/60 hover:border-blue-700 group/link">
                        <FaEye className="h-10 w-10 text-white/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-700" />
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl  bg-[#232329] py-6 px-4">
                <h5 className="text-4xl font-bold">{title}</h5>
                <p className="text-white/60">{description}</p>
            </div>
        </div>
    )
}

export default WorkCard
