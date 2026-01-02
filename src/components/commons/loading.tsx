"use client"

import React from 'react';

export function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 z-[9999] relative">
      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          } 
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <div className="relative h-24 w-24 rounded-full bg-gray-700 flex items-center justify-center shadow-xl animate-float z-20">
            <div className="relative z-10 flex flex-col gap-2 items-center justify-center">
              <div className="h-0.5 bg-gray-300 rounded-full" style={{ width: "36px" }} />
              <div className="h-0.5 bg-gray-300 rounded-full" style={{ width: "28px" }} />
              <div className="h-0.5 bg-gray-300 rounded-full" style={{ width: "36px" }} />
            </div>
          </div>
          <div className="absolute inset-0 animate-spin z-10" style={{ animationDuration: "3s" }}>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-md blur-[0.5px]" />
          </div>
          <div className="absolute inset-0 animate-spin-reverse z-10" style={{ animationDuration: "2.5s" }}>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-red-500 shadow-md blur-[0.5px]" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1 text-xl font-semibold text-gray-700">
            <span>Đang tải</span>
            <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
          </div>
          <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
            Máy thổi khí Thành Đạt
          </p>
        </div>
      </div>
    </div>
  )
}