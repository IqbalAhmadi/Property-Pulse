import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'YUBRA™',
  keyword: 'rental, property, real estate',
  description:
    'YUBRA Property is a real estate company that provides affordable housing solutions to its clients.',
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout
