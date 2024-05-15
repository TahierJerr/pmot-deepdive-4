import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const HeaderRobotics = () => {
    const t = useTranslations('Category.robotics')

  return (
    <section>
  <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <Image
          alt="Header Image"
          src="/robotics.jpeg"
          className="absolute inset-0 h-full w-full object-cover"
          fill
        />
      </div>

      <div className="lg:py-24 flex flex-col gap-2">
        <h2 className="text-3xl font-bold sm:text-4xl">{t("title")}</h2>
        <p className="mt-4 text-gray-600 leading-8">{t("description")}</p>
        <div className='flex items-center gap-4 mt-8'>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default HeaderRobotics