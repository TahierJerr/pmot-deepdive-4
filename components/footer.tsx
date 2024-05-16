import { Link } from '@/src/navigation'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { Input } from '@nextui-org/input'
import { LinkedinIcon, FacebookIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'


const Footer = () => {
    const f = useTranslations('Footer')
    const c = useTranslations('Category')
    
    const currentYear = new Date().getFullYear()
    
    return (
    <footer className='bg-red-500 w-full mt-12 text-white'>
        <div className="grid grid-cols-4 grid-rows-7 gap-4 mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="row-span-3">
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
            <div className="row-span-3">
                <div className='grid grid-cols-1 gap-2'>
                    <h1 className='text-2xl font-bold'>{c("robotics.title")}</h1>
                    <Link href='/robotics' className='cursor-pointer'>{c("robotics.title")}</Link>
                    <Link href='#' className='cursor-pointer'>{c("renewable energy")}</Link>
                    <Link href='#' className='cursor-pointer'>{c("arithmetic.title")}</Link>
                    <Link href='#' className='cursor-pointer'>{c("physics.title")}</Link>
                    <Link href='#' className='cursor-pointer'>{c("woodensets.title")}</Link>
                    <Link href='#' className='cursor-pointer'>{c("tools")}</Link>
                </div>
            </div>
            <div className="row-span-3">3</div>
            <div className="row-span-3">
                <div className='grid grid-cols-1 gap-2'>
                    <h1 className='text-2xl font-bold'>{f("legal")}</h1>
                    <a href="#" className='cursor-pointer'>{f("terms")}</a>
                    <a href="#" className='cursor-pointer'>{f("privacy")}</a>
                    <a href="#" className='cursor-pointer'>Cookies</a>
                    <Link href="#" className='cursor-pointer'>Sitemap</Link>
                </div>
            </div>
            <div className="col-span-2 col-start-1 row-start-5">
                <p className='font-bold mb-0.5'>{f("subscribe")}</p>
                <p>{f("subscribe-subtitle")}</p>
            </div>
            <div className="col-span-3 -ml-24 mr-8 col-start-4 row-start-5 flex items-center gap-4 ">
                <Input radius='sm' type='email' className='w-56' placeholder={f("enteremail")} />
                <Button radius='sm' >{f("sub")}</Button>
            </div>
            <div className="col-span-2 col-start-1 row-start-7 flex items-center justify-start">
                <p className='text-white'>© {currentYear} PMOT. {f("allrights")}</p>
            </div>
            <div className="col-span-2 col-start-3 row-start-7 flex justify-end gap-4 items-center">
                <a className='cursor-pointer text-white'>
                    <FacebookIcon size={26}/>
                </a>
                <a className='cursor-pointer text-white'>
                    <LinkedinIcon size={26} />
                </a>
            </div>
            <div className="col-span-4 col-start-1 row-start-4">
                <Divider className='bg-white/40 my-2'/>
            </div>
            <div className="col-span-4 col-start-1 row-start-6">
                <Divider className='bg-white/40 my-2'/>
            </div>
        </div>
    </footer>
    )
}

export default Footer