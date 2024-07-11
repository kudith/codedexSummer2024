// import Header from '../components/Header'

// export default function Home() {
//   return (
//     <div className="bg-sea-blue dark:bg-dark-brown min-h-screen text-eggshell">
//       <Header />
//     </div>
//   )
// }

import Head from 'next/head';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';

export default function Home() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

