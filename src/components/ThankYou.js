export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Your message has been sent successfully. I'll get back to you soon!
        </p>
        <a 
          href="/" 
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}