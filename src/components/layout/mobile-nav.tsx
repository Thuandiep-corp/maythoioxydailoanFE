export function MobileNav() { 
    return (
        <nav className="sticky bottom-0 bg-white shadow-t-md border-t md:hidden">
            <div className="flex justify-between items-center p-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <button className="text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}