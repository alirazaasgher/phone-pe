import './globals.css'
import Header from '../components/layouts/Header'
import FilterSidebar from "../components/Sidebar";
import { Inter, Poppins } from 'next/font/google';
import { SidebarProvider } from './context/SidebarContext';
import FilterSidebarWrapper from './FilterSidebarWrapper';
// Module-scope declaration
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'MobileFinder - Latest & Upcoming Mobile Phones',
  description: 'Discover the latest and upcoming mobile phones with detailed specs, prices, and reviews',
  keywords: 'mobile phones, smartphones, latest mobiles, upcoming phones, phone specs, mobile reviews',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`flex flex-col h-screen ${poppins.className}`}>
        
        <Header />
        <div className="flex flex-1 min-h-0 overflow-hidden">
          <FilterSidebarWrapper />
          <main className="background flex-1 p-6 overflow-y-auto bg-gray-50">
            {children}
          </main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
 
  )
}
