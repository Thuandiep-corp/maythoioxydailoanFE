export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen flex-1 bg-linear-to-br from-blue-50 to-blue-100 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-3xl w-full flex flex-col items-center border border-blue-100">
        <img
          src="/thuandiep-logo.png"
          alt="Thuandiep Corp Logo"
          className="w-24 h-24 mb-6 rounded-full shadow-lg border-4 border-blue-200 object-cover bg-white"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 tracking-tight drop-shadow-lg">
          Welcome to Thuandiep Corp
        </h1>
        <p className="text-xl text-gray-700 mb-4 font-medium">
          Leading the way in digital innovation and technology solutions.
        </p>
        <div className="text-base text-gray-600 mb-6">
          <p className="mb-2">
            Thuandiep Corp is a technology company dedicated to delivering innovative solutions and digital transformation services. Our mission is to empower businesses with cutting-edge technology, drive growth, and create value through excellence in software development, cloud computing, and IT consulting.
          </p>
          <p>
            With a passionate team of experts and a commitment to quality, Thuandiep Corp partners with clients worldwide to build the future of technology.
          </p>
        </div>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-md hover:bg-blue-800 transition-colors duration-200"
        >
          Learn More
        </a>
      </div>
      
    </main>
  );
}