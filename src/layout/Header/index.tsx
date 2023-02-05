import { useState, Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import { Transition } from '@headlessui/react';
import { useSession, signOut } from 'next-auth/react';

// Icons =>
import { FaBars } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const { t } = useTranslation('header');
  const { data: session } = useSession();
  const [open, setOpen] = useState(true);
  
  return (
    <Fragment>
      <header className='w-full fixed backdrop-blur-md z-10 border-b border-white/10 bg-gradient-to-r from-black to-transparent top-0'>
        <nav className={`${!open ? 'bg-black' : ''} px-4 lg:px-6 py-2.5`}>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <Link href='/' className='flex items-center'>
              <Image
                priority
                src='/logo.png'
                alt='logo'
                width={100}
                height={35}
                quality={100}
              />
            </Link>
            <div className='flex items-center lg:order-2'>
              <a className='text-white dark:text-black dark:bg-white dark:hover:bg-gray-200 hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-black cursor-pointer select-none'>Log in</a>
            <button onClick={() => setOpen(!open)} type='button' className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 select-none' aria-expanded='false'>
              <FaBars />
            </button>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}