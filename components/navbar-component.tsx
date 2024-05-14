
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, } from '@nextui-org/navbar'
import PmotLogo from './pmot-logo'
import AuthButton from './AuthButton'
import Link from 'next/link'
import { Input } from '@nextui-org/input'
import { useTranslations } from 'next-intl'
import LagnuageChooser from './Language-chooser'

const NavbarComponent = () => {

    const t = useTranslations('Nav')

    return (
    <Navbar position='sticky' isBordered>
        <NavbarBrand>
            <Link href='/'>
                <PmotLogo />
            </Link>
        </NavbarBrand>
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