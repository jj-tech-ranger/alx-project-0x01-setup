import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:underline">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
