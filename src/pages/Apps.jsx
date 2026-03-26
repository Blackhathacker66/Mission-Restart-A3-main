import { useState, useEffect, useMemo } from 'react';
import apps from '../data/apps.js';
import AppCard from '../components/AppCard.jsx';
import Loading from '../components/Loading.jsx';
import errorImg from '../../assets/App-Error.png';

export default function Apps() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('high-low');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    let result = [...apps];

    // Search filter
    if (search.trim()) {
      result = result.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort
    if (sort === 'high-low') {
      result.sort((a, b) => b.downloads - a.downloads);
    } else {
      result.sort((a, b) => a.downloads - b.downloads);
    }

    return result;
  }, [search, sort]);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-slate-100 page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
            Our All Applications
          </h1>
          <p className="text-slate-500 text-sm">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <p className="text-slate-700 font-semibold text-sm">
            ({filtered.length}) Apps Found
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                id="search-apps"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search Apps"
                className="pl-9 pr-4 py-2.5 border border-slate-200 bg-white rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent w-full sm:w-64 shadow-sm"
              />
            </div>

            {/* Sort */}
            <select
              id="sort-apps"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2.5 border border-slate-200 bg-white rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm cursor-pointer"
            >
              <option value="high-low">High → Low (Downloads)</option>
              <option value="low-high">Low → High (Downloads)</option>
            </select>
          </div>
        </div>

        {/* Grid or Empty */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-5 text-center px-4">
            <img 
              src={errorImg} 
              alt="App Not Found" 
              className="w-full max-w-[350px] object-contain" 
            />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              OPPS!! APP NOT FOUND
            </h3>
            <p className="text-slate-500 text-base max-w-sm mx-auto">
              The app you are requesting is not found on our system. Please try another app.
            </p>
            <button 
              onClick={() => setSearch('')}
              className="mt-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Go Back!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
