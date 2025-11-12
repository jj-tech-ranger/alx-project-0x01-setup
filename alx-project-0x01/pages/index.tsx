import Header from '@/components/layout/Header';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4"> Welcome to our Application!</h1>
          <p className="text-xl mb-8">We're glad you're here!</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
