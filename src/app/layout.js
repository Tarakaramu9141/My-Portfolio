import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'K Taraka Ramu - Portfolio',
  description: 'Portfolio of K Taraka Ramu, a Data Analyst and Data Scientist specializing in SQL, Python, Power BI, and Machine Learning.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-900 to-gray-900 text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}