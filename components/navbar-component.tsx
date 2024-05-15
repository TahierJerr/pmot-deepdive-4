"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, } from '@nextui-org/navbar'
import PmotLogo from './pmot-logo'
import Link from 'next/link'
import { Input } from '@nextui-org/input'
import { useTranslations } from 'next-intl'
import LagnuageChooser from './Language-chooser'
import { useState, } from 'react'
import { SearchIcon, ShoppingCartIcon } from 'lucide-react'
import Carousel from './Carousel'

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const t = useTranslations('Nav')
    const tc = useTranslations('Category')
    
    const menuItems = [
    { title: `${tc('robotics')}`, href: '/robotics' },
    { title: `${tc('renewable energy')}`, href: '/renewable-energy' },
    { title: `${tc('arithmetic')}`, href: '/arithmetic' },
    { title: `${tc('physics')}`, href: '/physics' },
    { title: `${tc('woodensets')}`, href: '/wooden-techiniquesets' },
    { title: `${tc('profile')}`, href: '/profile' },
    { title: `${tc('logout')}`, href: '/logout' },
    ];

    return (
    <>
    <div className='h-10 mb-2 bg-red-500 w-full sticky flex items-center justify-center'>
        <Carousel />
    </div>
    <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen} className='sm:pb-2'>
        <NavbarContent >
            <NavbarMenuToggle aria-label={isMenuOpen ? `${t("close menu")}` : `${t("open menu")}`} className='sm:hidden' />
            <NavbarBrand className='hidden sm:flex'>
                <Link href='/'>
                    <PmotLogo />
                </Link>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="center">
            <Link href='/'>
                <PmotLogo />
            </Link>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">   
            <NavbarItem className='flex items-center'>
                <Input startContent={<SearchIcon size={20} className='pointer-events-none flex-shrink-0' />} isClearable  placeholder={t('search')}  type='text' className='mr-2 sm:w-72 md:w-96 h-10 shadow-md rounded-lg border-none active:ring-black' />
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className='hidden sm:flex'>
                <LagnuageChooser />
            </NavbarItem>
            <NavbarItem>
                <Link className='flex items-center border-gray-600 p-2' href='/cart'>
                    <ShoppingCartIcon />
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={index}>
                    <Link className='w-full' color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} href={item.href
                    }>{item.title}</Link>
                </NavbarMenuItem>
                ))}
        </NavbarMenu>
    </Navbar>
    </>
    )
}
    
    export default NavbarComponent