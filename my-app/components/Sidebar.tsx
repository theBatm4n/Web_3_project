'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import cn from '@/lib/utils';
import React from 'react'
import { sidebarLinks } from '@/constants';


const Sidebar = () => {
    const pathname = usePathname();

  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="https://www.wmcubehk.com/" className='mb-12 cursor-pointer items-center gap-2'> 
            <h1 className='sidebar-logo'>WMC</h1>
            </Link>

            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                    <Link href={item.route} key={item.label} 
                    className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                    >
                    {item.label}
                    </Link>
                )
                })
            }

        </nav>
    </section>
  )
}

export default Sidebar