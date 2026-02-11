import { ArrowRight, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { VideoCard } from "./video-card";
interface Props {
  data?: {
    Title?: string;
    SubTitle?: string;
    videos: any[];
  }
}

export function VideoSignature({ data }: Props) { 
    const title = data?.Title || 'Video & Hướng dẫn'
    const videos = data?.videos || []
    
    if (videos?.length === 0) return <></>
    return (
              <section>     
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MonitorPlay className="text-[#408ebd]" size={28} />
                    {title}
          </h2>        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {videos.map((data, index) => {
            return (
              <VideoCard data={data}
               key={'video-list-item-'+index}/>
            );
          })}
        </div>
      </section>
    )
}