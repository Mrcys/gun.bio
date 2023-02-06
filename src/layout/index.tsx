import React from 'react';
import Head from 'next/head';
import { Header } from '@/layout/Header';

interface LayoutProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  url?: string;
  image?: string;
}

export const Layout = ({
  children,
  title = 'Guns :: biolink',
  description = 'Guns - The best biolink service for Discord!',
  keywords = 'biolink, discord card, bio',
  type = 'website',
  url = 'https://guns.lol',
  image,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen dark:bg-black bg-white dark:text-white text-black">
        <Header />
        {children}
      </div>
    </>
  );
};