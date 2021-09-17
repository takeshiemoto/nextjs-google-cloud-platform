import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      Next App {process.env.NODE_ENV} {process.env.MESSAGE}
    </div>
  );
};

export default Home;
