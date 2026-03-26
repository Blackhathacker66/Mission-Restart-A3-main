import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Loading from '../components/Loading.jsx';

const INSTALLED_KEY = 'hero_io_installed';

function getInstalled() {
  try {
    return JSON.parse(localStorage.getItem(INSTALLED_KEY)) || [];
  } catch {
    return [];
  }
}

function saveInstalled(list) {
  localStorage.setItem(INSTALLED_KEY, JSON.stringify(list));
}

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
}

export default function Installation() {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState('default');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      setInstalled(getInstalled());
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const handleUninstall = (id, title) => {
    const updated = installed.filter((app) => app.id !== id);
    saveInstalled(updated);
    setInstalled(updated);
    toast.error(`${title} has been uninstalled.`, {
      duration: 3000,
      style: {
        borderRadius: '10px',
        background: '#0f172a',
        color: '#fff',
      },
    });
  };

  const sorted = [...installed].sort((a, b) => {
    if (sort === 'size-asc') return a.size - b.size;
    if (sort === 'size-desc') return b.size - a.size;
    return 0;
  });

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-slate-100 page-enter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
            Your Installed Apps
          </h1>
          <p className="text-slate-500 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <p className="text-slate-700 font-semibold text-sm">
            {sorted.length} Apps Found
          </p>
          <select
            id="sort-installed"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 border border-slate-200 bg-white rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-sm cursor-pointer"
          >
            <option value="default">Sort By Size</option>
            <option value="size-asc">Size: Low → High</option>
            <option value="size-desc">Size: High → Low</option>
          </select>
        </div>

        {/* Empty State */}
        {sorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-4xl">
              📭
            </div>
            <h3 className="text-xl font-bold text-slate-700">No Apps Installed</h3>
            <p className="text-slate-500 text-sm text-center max-w-xs">
              You haven't installed any apps yet. Browse the marketplace and find your favorites!
            </p>
            <button
              id="btn-browse-apps"
              onClick={() => navigate('/apps')}
              className="mt-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm"
            >
              Browse Apps
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {sorted.map((app) => (
              <div
                key={app.id}
                id={`installed-item-${app.id}`}
                className="bg-white rounded-2xl shadow-sm px-5 py-4 flex items-center gap-4 hover:shadow-md transition-all duration-200"
              >
                {/* Image */}
                <div
                  className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => navigate(`/apps/${app.id}`)}
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 h-12 object-contain"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Info */}
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => navigate(`/apps/${app.id}`)}
                >
                  <h3 className="text-sm font-semibold text-slate-800 truncate mb-1">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-emerald-500 font-semibold text-xs flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16L6 10h4V4h4v6h4l-6 6zm-6 4v-2h12v2H6z" />
                      </svg>
                      {formatDownloads(app.downloads)}
                    </span>
                    <span className="text-orange-400 font-semibold text-xs flex items-center gap-1">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {app.ratingAvg}
                    </span>
                    <span className="text-slate-500 text-xs">{app.size} MB</span>
                  </div>
                </div>

                {/* Uninstall */}
                <button
                  id={`btn-uninstall-${app.id}`}
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="flex-shrink-0 bg-emerald-500 hover:bg-red-500 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
