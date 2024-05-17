import { Link } from '@/src/navigation'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import { LinkedinIcon, FacebookIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'


const Footer = () => {
    const f = useTranslations('Footer')
    const c = useTranslations('Category')
    
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className='bg-red-500 w-full mt-12 text-white'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="sm:col-span-1 md:col-span-2">
                    <div className='grid grid-cols-1 gap-2'>
                        <h1 className='text-2xl font-bold'>PMOT</h1>
                        <a href="https://maps.app.goo.gl/oUk99k2yUrY7uTfg6" className='cursor-pointer'>
                            <p>Torenstraat 13, 9679 BN</p>
                            <p>Scheemda, {f("netherlands")}</p>
                        </a>
                        <a href='tel: +310597591596' className='cursor-pointer underline underline-offset-4'>+31 (0)597 591596</a>
                        <a href='mailto:info@pmot.nl' className='cursor-pointer  underline underline-offset-4'>info@pmot.nl</a>
                    </div>
                </div>
                <div className="sm:col-span-1 md:col-span-1">
                    <div className='grid grid-cols-1 gap-2'>
                        <h1 className='text-2xl font-bold'>{f("categories")}</h1>
                        <Link href='/robotics' className='cursor-pointer  hover:underline'>{c("robotics.title")}</Link>
                        <Link href='#' className='cursor-pointer hover:underline'>{c("renewable energy")}</Link>
                        <Link href='#' className='cursor-pointer hover:underline'>{c("arithmetic.title")}</Link>
                        <Link href='#' className='cursor-pointer hover:underline'>{c("physics.title")}</Link>
                        <Link href='#' className='cursor-pointer hover:underline'>{c("woodensets.title")}</Link>
                        <Link href='#' className='cursor-pointer hover:underline'>{c("tools")}</Link>
                    </div>
                </div>
                <div className="sm:col-span-1 md:col-span-1">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-bold'>{f("companyinfo")}</h1>
                        <p>KVK: 02057913</p>
                        <p>BTW NL: 0781.39.338 B01</p>
                        <p>Bank NL: IBAN NL03 ABNA 0605 1377 22</p>
                        <p>Bank BE: IBAN BE68 0682 2823 2034</p>
                    </div>
                </div>
                <div className="sm:col-span-1 md:col-span-1">
                    <div className='grid grid-cols-1 gap-2'>
                        <h1 className='text-2xl font-bold'>{f("legal")}</h1>
                        <a href="#" className='cursor-pointer hover:underline'>{f("terms")}</a>
                        <a href="#" className='cursor-pointer hover:underline'>{f("privacy")}</a>
                        <a href="#" className='cursor-pointer hover:underline'>Cookies</a>
                        <Link href="#" className='cursor-pointer hover:underline'>Sitemap</Link>
                    </div>
                </div>
                <div className='col-span-1 sm:col-span-2 md:col-span-4 row-start-3 flex items-center flex-col sm:flex-row justify-start sm:justify-between border-t pt-4 border-white'>
                    <div className="">
                        <p className='font-bold mb-0.5'>{f("subscribe")}</p>
                        <p>{f("subscribe-subtitle")}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full">
                        <Input radius='sm' type='email' className='w-56' placeholder={f("enteremail")} />
                        <Button radius='sm' >{f("sub")}</Button>
                    </div>
                    
                </div>
                <div className='col-span-1 sm:col-span-2 md:col-span-4 row-start-4 border-t border-white -mt-12 sm:-mt-0  sm:pt-4 pt-0 flex items-center justify-between '>
                    <div className="flex sm:items-center  justify-start">
                    <p className='text-white text-sm'>© {currentYear} PMOT. {f("allrights")}. {f("allprices")}</p>
                    </div>
                    <div className=" flex justify-end gap-4 items-center">
                        <a className='cursor-pointer text-white'>
                            <FacebookIcon size={26}/>
                        </a>
                        <a className='cursor-pointer text-white'>
                            <LinkedinIcon size={26} />
                        </a>
                    </div>
                </div>
                
                
            </div>
        </footer>
    )
}

export default Footer