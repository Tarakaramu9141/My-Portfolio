import Link from 'next/link';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md p-4 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-400">
          K Taraka Ramu
        </Link>
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-300 hover:text-green-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}