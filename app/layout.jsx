import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css'
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: 'YUBRA™',
  description:
  'YUBRA Property is a real estate company that provides affordable housing solutions to its clients.',
  keyword: 'rental, property, real estate',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default MainLayout
