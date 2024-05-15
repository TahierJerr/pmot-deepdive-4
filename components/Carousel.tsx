import useEmblaCarousel from 'embla-carousel-react'
import { SchoolIcon, TruckIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, }, [Autoplay( {delay: 5000, })])

    const t = useTranslations('Nav')

    const offers = [
        { title: `${t('free-shipping')}`, icon: <TruckIcon size={20} className='mr-2' /> },
        { title: `${t('for-schools')}`, icon: <SchoolIcon size={20} className='mr-2' /> },
    ]

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {offers.map((offer, index) => (
            <div className="embla__slide" key={index}>
                <div className="embla__inner">
                    <span className="flex items-center justify-center text-white">
                        {offer.icon} {offer.title}
                    </span>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel