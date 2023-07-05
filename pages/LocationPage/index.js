import LocationPage from '@/components/LocationPage';
import Head from 'next/head';

const index = () => (
  <div>
    <Head>
      <title>User Location</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <LocationPage />
  </div>
);

export default index;
