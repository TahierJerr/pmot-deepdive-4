"use client"

import { Link } from '@/src/navigation'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { LanguagesIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState } from 'react'

const LanguageChooser = () => {
    const locale = useLocale();
    const [selectedKeys, setSelectedKeys] = useState([locale]);

    return (
        <Dropdown title='Languages'>
            <DropdownTrigger>
                <Button isIconOnly variant='bordered'><LanguagesIcon size={20} /></Button>
            </DropdownTrigger>
            <DropdownMenu selectionMode='single' selectedKeys={selectedKeys}>
                <DropdownItem key="en"><Link href="/" locale='en'>English</Link></DropdownItem>
                <DropdownItem key="de"><Link href="/" locale='de'>Deutsch</Link></DropdownItem>
                <DropdownItem key="it"><Link href="/" locale='it'>Italiano</Link></DropdownItem>
                <DropdownItem key="nl"><Link href="/" locale='nl'>Nederlands</Link></DropdownItem>
                <DropdownItem key="pl"><Link href="/" locale='pl'>Polski</Link></DropdownItem>
                <DropdownItem key="sv"><Link href="/" locale='sv'>Svenska</Link></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default LanguageChooser