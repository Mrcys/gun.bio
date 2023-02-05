import { Fragment } from 'react';
import { useTranslation } from 'next-i18next';

export const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <Fragment>
      <main className='relative'>
        <div className='w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0'>
          <h1 className='text-black dark:text-white font-extrabold tracking-[-0.04em] leading-none text-[40px] md:text-5xl lg:text-[50px] max-w-lg md:max-w-xl lg:max-w-4xl text-center text-transparent'>{t('hero.title')}</h1>
        </div>
      </main>
    </Fragment>
  )
}