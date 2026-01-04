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
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">     
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
          ) : (
            <Link 
              href="/tin-tuc" 
              className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-[#408ebd] transition-colors"
            >
              <ArrowLeft size={18} /> Trở về trang Tin tức
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {displayItems.map((video, index) => {
            return (
              <div key={'video-list-youtube-item-'+index} className="group cursor-pointer">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                  <iframe width="580" height="327" loading="lazy" src={ video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight group-hover:text-[#408ebd] transition-colors line-clamp-2">
                    {video.title}
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