import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Hero } from '@/components';
import { Layout } from '@/layout';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title='Guns ;; Home' description='Welcome nigga'>
      {page}
    </Layout>
  );
};

export default Home;