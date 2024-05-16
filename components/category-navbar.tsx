"use client"

import { Link, usePathname } from '@/src/navigation';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { useTranslations } from 'next-intl'

const CategoryNavbar = () => {
    const tc = useTranslations('Category')
    const pathname = usePathname()

    const menuItems = [
        { title: `${tc('robotics.title')}`, href: '/robotics' },
        { title: `${tc('renewable energy')}`, href: '#' },
        { title: `${tc('arithmetic.title')}`, href: '#' },
        { title: `${tc('physics.title')}`, href: '#' },
        { title: `${tc('woodensets.title')}`, href: '#' },
        { title: `${tc('tools')}`, href: '#' },
    ];

    return (
        <Navbar position="sticky" isBordered className='hidden sm:flex font-semibold'>
            <NavbarContent justify='center' className='items-center justify-c</NavbarItem>enter hidden lg:flex mx-auto'>
                {menuItems.slice(0, 6).map((item, index) => (
                    <NavbarItem key={index}>
                        <Link className={`shadow-md rounded-md px-4 py-2 border-red-500 ${pathname === item.href ? 'bg-white text-red-500 border-2 cursor-default' : ' bg-red-500 border-2 text-white hover:bg-white  transition-all hover:border-red-500 hover:text-red-500'}`} href={item.href}>{item.title}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='center' className='items-center justify-center hidden md:flex lg:hidden mx-auto'>
                {menuItems.slice(0, 5).map((item, index) => (
                    <NavbarItem key={index}>
                        <Link className={`shadow-lg rounded-md px-4 py-2 border-red-500 ${pathname === item.href ? 'bg-white text-red-500 border-2' : ' bg-red-500 border-1 text-white'}`} href={item.href}>{item.title}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='center' className='items-center justify-center flex md:hidden mx-auto'>
                {menuItems.slice(0, 4).map((item, index) => (
                    <NavbarItem key={index}>
                        <Link className={`shadow-lg rounded-md px-4 py-2 border-red-500 ${pathname === item.href ? 'bg-white text-red-500 border-2' : ' bg-red-500 border-1 text-white'}`} href={item.href}>{item.title}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    )
}

export default CategoryNavbar
