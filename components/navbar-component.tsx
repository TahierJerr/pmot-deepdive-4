"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, } from '@nextui-org/navbar'
import PmotLogo from './pmot-logo'
import AuthButton from './AuthButton'
import Link from 'next/link'
import { Input } from '@nextui-org/input'
import { useTranslations } from 'next-intl'
import LagnuageChooser from './Language-chooser'
import { useState } from 'react'

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const t = useTranslations('Nav')
    const tc = useTranslations('Category')

    const menuItems = [
        `${tc('robotics')}`,
        `${tc('renewable energy')}`,
        `${tc('arithmetic')}`,
        `${tc('physics')}`,
        `${tc('wooden techiniquesets')}`,
        `${tc('profile')}`,
        `${tc('logout')}`,
      ];


    return (
    <Navbar position='sticky' isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? `${t("close menu")}` : `${t("open menu")}`} className='sm:hidden' />
        <NavbarBrand>
            <Link href='/'>
                <PmotLogo />
            </Link>
        </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">   
            <NavbarItem className='flex items-center'>
                <Input label={t('search')} type='search' className='mr-2 m:w-40 md:w-96 h-10' />
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <LagnuageChooser />
            </NavbarItem>
            <NavbarItem>
                <AuthButton />
            </NavbarItem>
        </NavbarContent>
    </Navbar>
    )
}

export default NavbarComponent