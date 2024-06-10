"use client";

import { usePathname } from 'next/navigation'

export default function NavBar() {
    const pathname = usePathname()

    return (
        <nav className="bg-gray-800 mb-8">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <span className="text-white">Example integrations:</span>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="/static" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname == '/static' || pathname == '/' ? 'text-green-500' : 'text-white'}`}>Static</a>
                                <a href="/jwts" className={`rounded-md px-3 py-2 text-sm font-medium text-white ${pathname == '/jwts' ? 'text-green-500' : 'text-white'}`}>JWTs</a>
                                <a href="/iframes" className={`rounded-md px-3 py-2 text-sm font-medium text-white ${pathname == '/iframes' ? 'text-green-500' : 'text-white'}`}>iFrames</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


