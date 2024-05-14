"use client"

import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from '@nextui-org/dropdown'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { LogOutIcon, UserIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

const User = () => {

    const t = useTranslations('Auth')

    return ( 
    <Dropdown title={t("account")}>
        <DropdownTrigger>
            <Button className="rounded-md" variant="bordered">
                <UserIcon size={20} />
                {t("account")}
            </Button>
        </DropdownTrigger>
        <DropdownMenu>
            <DropdownItem startContent={ <UserIcon size={20} />}>
            <Link href="/profile">{t("profile")}</Link>
        </DropdownItem>
        <DropdownItem startContent={ <LogOutIcon size={20} />}>
            <Link href="/logout">{t("logout")}</Link>
        </DropdownItem>
        </DropdownMenu>
    </Dropdown>
)
}

export default User