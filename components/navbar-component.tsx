import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import React from 'react'
import PmotLogo from './pmot-logo'
import AuthButton from './AuthButton'
import Link from 'next/link'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { useTranslations } from 'next-intl'
import { SearchIcon } from 'lucide-react'
import LagnuageChooser from './Language-chooser'

const NavbarComponent = () => {

    const t = useTranslations('Nav')

    return (
    <Navbar position='sticky'>
        <NavbarBrand>
            <Link href='/'>
                <PmotLogo />
            </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem className='flex items-center'>
                <Input label={t('search')} className='mr-2 w-96 h-12' />
                <Button isIconOnly className=' h-12 w-12 bg-red-600 text-white'><SearchIcon size={20} /></Button>
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