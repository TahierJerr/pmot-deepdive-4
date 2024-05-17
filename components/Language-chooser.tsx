"use client"

import { Link, usePathname } from '@/src/navigation'
import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { ChevronDownIcon, LanguagesIcon } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState } from 'react'

interface LanguageChooserProps {
    className?: string
}

const LanguageChooser: React.FC<LanguageChooserProps> = ({ className }) => {
    const locale = useLocale();
    const [selectedKeys, setSelectedKeys] = useState([locale]);

    const pathname = usePathname();

    const languages = [
        { key: 'en', title: 'English' },
        { key: 'de', title: 'Deutsch' },
        { key: 'it', title: 'Italiano' },
        { key: 'nl', title: 'Nederlands' },
        { key: 'pl', title: 'Polski' },
        { key: 'sv', title: 'Svenska' },
    ];

    const currentLanguage = languages.find((lang) => lang.key === locale);
    const currentLanguageTitle = currentLanguage?.title;

    return (
        <Dropdown title='Languages'>
            <DropdownTrigger>
                <Button className={`rounded-md font-semibold ${className}`} endContent={<ChevronDownIcon size={20} />} variant='bordered'>{currentLanguageTitle}</Button>
            </DropdownTrigger>
            <DropdownMenu selectionMode='single' selectedKeys={selectedKeys}>
                {languages.map((language) => (
                    <DropdownItem key={language.key} className={language.key === currentLanguage?.key ? 'font-semibold' : ''}>
                        <Link className="block w-full h-full" href={pathname} locale={language.key as "en" | "de" | "it" | "nl" | "pl" | "sv" | undefined}>{language.title}</Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default LanguageChooser
