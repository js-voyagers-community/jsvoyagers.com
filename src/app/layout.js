import './globals.css';
import '../components/header/style.module.scss';
import '../components/footer/style.module.scss';
import '../components/community-info/style.module.scss';
import '../components/banners/style.module.scss';
import '../components/cards/style.module.scss';
import '../components/intro/style.module.scss';
import '../components/javascript-frameworks/style.module.scss';
import '../components/meetour-team/style.module.scss';
import '../components/our-speakers/style.module.scss';
import '../components/sponsors/style.module.scss';
import '../components/upcoming-meets/style.module.scss';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: [ 'latin' ]});

export const metadata = {
  title: 'JS Voyagers',
  description: 'Gujarat\'s Biggest Javascript Community',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
