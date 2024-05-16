import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    const t = useTranslations('Header')

  return (
    <section>
  <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="Header Image"
          src="/imageheader.jpeg"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />
      </div>

      <div className="lg:py-14 flex flex-col justify-center items-center text-center lg:justify-normal lg:items-start lg:text-start gap-2 ">
        <h2 className="text-3xl font-bold sm:text-4xl">{t("welcome")}</h2>
        <p className="mt-4 text-gray-600 leading-8">{t("description")}</p>
        <div className='flex items-center gap-4 mt-8'>
        <Link href="/category" className="inline-block rounded-md border-red-500 hover:bg-red-700 hover:border-red-600 bg-red-500 px-12 border-2 py-3 text-sm font-medium text-white transition-all">
          {t("shop")}
        </Link>
        <Link href="/contact" className="inline-block rounded-md bg-white border-red-500 hover:text-white hover:bg-red-500 border-2 text-red-500 px-12 py-3 text-sm font-medium  transition-all">
        {t("contact")}
        </Link>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Header