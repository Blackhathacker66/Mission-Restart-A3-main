import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 page-enter">
      <div className="text-center max-w-lg">
        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-52">
            {/* Background blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-36 bg-blue-100 rounded-full opacity-60"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-2 left-12 text-violet-400 text-xl">+</div>
            <div className="absolute top-6 left-20 w-3 h-3 rounded-full border-2 border-violet-300"></div>
            <div className="absolute top-1 right-20 w-2 h-2 rounded-full bg-violet-400"></div>
            <div className="absolute top-3 right-12">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#a78bfa" opacity="0.7">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </div>

            {/* Laptop / Monitor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56">
              {/* Screen */}
              <div className="bg-slate-800 rounded-t-xl px-3 pt-2 pb-3 relative">
                <div className="flex gap-1 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-white rounded-lg flex items-center justify-center py-3">
                  <span className="text-5xl font-black text-violet-600" style={{fontFamily:'Impact, Arial Black, sans-serif'}}>
                    404
                  </span>
                </div>
              </div>
              {/* Base */}
              <div className="bg-slate-700 rounded-b-xl h-2"></div>
              {/* Stand */}
              <div className="flex justify-center">
                <div className="w-16 h-2 bg-slate-700"></div>
              </div>
              <div className="flex justify-center">
                <div className="w-24 h-2 bg-slate-600 rounded-b-lg"></div>
              </div>

              {/* Mouse */}
              <div className="absolute bottom-[-16px] right-4">
                <div className="w-7 h-10 bg-violet-500 rounded-full relative shadow-md">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-1 bg-violet-300 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-slate-400 -translate-x-1/2 translate-y-full rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Leaves / Plants */}
            <div className="absolute top-4 left-4 text-teal-600 opacity-60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 4-12 8 0-2 4-6 7-7-2 1-4 3-5 5z"/>
              </svg>
            </div>
            <div className="absolute top-4 right-4 text-teal-600 opacity-60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 8C16 10 18.1 16.17 20.18 21.34L18.29 22l-1-2.3A4.49 4.49 0 0116 20C5 20 2 3 2 3c1 2 8 4 12 8 0-2-4-6-7-7 2 1 4 3 5 5z"/>
              </svg>
            </div>

            {/* Plug */}
            <div className="absolute bottom-[-24px] left-14">
              <div className="w-7 h-5 bg-violet-400 rounded-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-2 bg-white rounded-full"></div>
                  <div className="w-0.5 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">
          Oops, page not found!
        </h2>
        <p className="text-slate-500 text-sm mb-8">
          The page you are looking for is not available.
        </p>
        <button
          id="btn-go-back-404"
          onClick={() => navigate('/')}
          className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
}
