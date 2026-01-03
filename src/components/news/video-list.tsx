import Link from 'next/link';
import { MonitorPlay, ArrowRight, Play, ArrowLeft } from 'lucide-react';
import { videos } from '@/moocs/video';

interface VideoListProps {
  limit?: number;
  showViewAll?: boolean;
}

export function VideoList({ limit, showViewAll = true }: VideoListProps) {
  
  const displayItems = limit ? videos.slice(0, limit) : videos;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MonitorPlay className="text-[#408ebd]" size={28} />
            Video & Hướng dẫn
          </h2>
          {showViewAll ? (
            <Link 
              href="/tin-tuc/video" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem tất cả video <ArrowRight size={18} />
            </Link>
          ) : (<Link 
              href="/tin-tuc" 
              className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#408ebd] transition-colors"
            >
              <ArrowLeft size={18} /> Trở về trang Tin tức
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((video, index) => {
            const thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
            const videoLink = `https://www.youtube.com/watch?v=${video.videoId}`;

            return (
              <div key={index} className="group cursor-pointer">
                <Link href={videoLink} target="_blank" className="relative aspect-video rounded-xl overflow-hidden bg-black border border-gray-200 mb-3 block">
                  <img 
                    src={thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#408ebd] group-hover:scale-110 transition-all duration-300">
                      <Play className="text-white ml-1" size={24} fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </Link>
                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-[#408ebd] transition-colors line-clamp-2 min-h-[40px]">
                  <Link href={videoLink} target="_blank">
                    {video.title}
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {video.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}