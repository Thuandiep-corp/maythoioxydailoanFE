"use client";
import React from 'react';
import Link from 'next/link';
import { MonitorPlay, ArrowRight, Play } from 'lucide-react';

interface VideoListProps {
  limit?: number;
  showViewAll?: boolean;
}

export function VideoList({ limit, showViewAll = true }: VideoListProps) {
  const videos = [
    {
      title: "Quy trình Hàn TIG chuyên nghiệp",
      desc: "Hướng dẫn kỹ thuật hàn cơ bản cho người mới bắt đầu.",
      duration: "04:25",
      image: "https://placehold.co/600x400/222/fff?text=Han+TIG"
    },
    {
      title: "Demo: Robot Cánh tay đòn V5",
      desc: "Trình diễn khả năng tự động hóa trong dây chuyền lắp ráp.",
      duration: "08:10",
      image: "https://placehold.co/600x400/222/fff?text=Robot+Arm"
    },
    {
      title: "An toàn lao động tại công xưởng",
      desc: "Các quy tắc an toàn bắt buộc khi vận hành máy móc hạng nặng.",
      duration: "12:30",
      image: "https://placehold.co/600x400/222/fff?text=Safety"
    }
  ];

  const displayItems = limit ? videos.slice(0, limit) : videos;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <MonitorPlay className="text-[#408ebd]" size={28} />
            Video & Hướng dẫn
          </h2>
          {showViewAll && (
            <Link 
              href="/tin-tuc/video" 
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-[#408ebd] hover:opacity-80 transition-colors"
            >
              Xem tất cả video <ArrowRight size={18} />
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayItems.map((video, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-gray-200 mb-3">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#408ebd] group-hover:scale-110 transition-all duration-300">
                    <Play className="text-white ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-tight group-hover:text-[#408ebd] transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {video.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}