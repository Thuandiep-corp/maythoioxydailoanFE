import { ChevronDown, ChevronRight, Clock, Headset, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <article className="container mx-auto px-4 w-full py-6 sm:py-10 ">
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <aside className="lg:col-span-5 bg-white rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden">
                    <div className="p-8 space-y-8">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                        <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Hotline Kinh Doanh
                        </h3>
                        <div className="text-slate-900 font-semibold text-base leading-tight">
                            <p>0938 542 969</p>
                            <p>0938 542 969</p>
                        </div>
                        </div>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                        <Headset className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                        <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Hotline Kỹ Thuật
                        </h3>
                        <p className="text-slate-900 font-semibold text-base">0903 345 678</p>
                        </div>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                        <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Hỗ Trợ</h3>
                        <div className="text-slate-900 font-semibold text-base leading-tight">
                            <p>nguyenthanhdat19741975@gmail.com</p>
                            <p>nguyenthanhdat19741975@gmail.com</p>
                        </div>
                        </div>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                        <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Giờ Làm Việc</h3>
                        <div className="text-slate-900 font-medium text-[15px] space-y-1">
                            <p>
                            Thứ 2 - Thứ 6: <span className="font-bold text-slate-900">8:00 - 17:30</span>
                            </p>
                            <p>
                            Thứ 7: <span className="font-bold text-slate-900">8:00 - 12:00</span>
                            </p>
                            <p className="text-sm text-slate-500 italic font-normal">Chủ nhật & Ngày lễ: Nghỉ</p>
                        </div>
                        </div>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#3b82f6]" />
                        </div>
                        <div className="space-y-3">
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Địa Chỉ Văn Phòng
                        </h3>
                        <p className="text-slate-900 font-semibold leading-relaxed text-[15px]">
                            995 Quốc Lộ 1A, Phường Bình Hưng Hòa, Quận Bình Tân, TP. Hồ Chí Minh
                        </p>
                        <Link
                            href="https://maps.app.goo.gl/kLt7PksZQDgrd4ab6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-[#3b82f6] hover:text-[#2563eb] group transition-colors"
                        >
                            Xem bản đồ
                            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        </div>
                    </div>
                    </div>
                </aside>
                <section className="lg:col-span-7 bg-white rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-10">
                    <div className="mb-10">
                    <h1 className="text-[28px] font-bold text-slate-900 mb-2">Gửi tin nhắn yêu cầu</h1>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                        Vui lòng điền thông tin vào biểu mẫu bên dưới, chúng tôi sẽ phản hồi trong vòng 24h.
                    </p>
                    </div>

                    <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <label htmlFor="fullname" className="block text-sm font-bold text-slate-900">
                            Họ và tên
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Nhập họ tên của bạn"
                            className="w-full h-12 px-4 bg-[#f8fafc] border border-slate-100 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] focus:bg-white transition-all"
                        />
                        </div>
                        <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="VD: 0901 234 567"
                            className="w-full h-12 px-4 bg-[#f8fafc] border border-slate-100 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] focus:bg-white transition-all"
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email@company.com"
                            className="w-full h-12 px-4 bg-[#f8fafc] border border-slate-100 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] focus:bg-white transition-all"
                        />
                        </div>
                        <div className="space-y-2">
                        <label htmlFor="department" className="block text-sm font-bold text-slate-900">
                            Phòng ban liên hệ
                        </label>
                        <div className="relative">
                            <select
                            id="department"
                            className="w-full h-12 px-4 bg-[#f8fafc] border border-slate-100 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] focus:bg-white transition-all cursor-pointer"
                            >
                            <option value="sales">Tư vấn mua hàng</option>
                            <option value="support">Hỗ trợ kỹ thuật</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-bold text-slate-900">
                        Nội dung liên hệ
                        </label>
                        <textarea
                        id="message"
                        placeholder="Mô tả chi tiết yêu cầu của bạn..."
                        rows={6}
                        className="w-full p-4 bg-[#f8fafc] border border-slate-100 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] focus:bg-white transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-lg shadow-[0_10px_15px_-3px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98]"
                        >
                        Gửi yêu cầu
                        <Send className="w-4 h-4" />
                        </button>
                    </div>
                    </form>
                </section>
            </section>
        </article>
    );
}