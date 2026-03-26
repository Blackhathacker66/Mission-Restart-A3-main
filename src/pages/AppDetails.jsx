import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import toast from 'react-hot-toast';
import apps from '../data/apps.js';
import Loading from '../components/Loading.jsx';

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
}

function formatReviews(num) {
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
}

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

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  const app = apps.find((a) => a.id === Number(id));

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [id]);

  useEffect(() => {
    if (app) {
      const list = getInstalled();
      setInstalled(list.some((item) => item.id === app.id));
    }
  }, [app]);

  if (loading) return <Loading />;

  // App not found
  if (!app) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-4 page-enter">
        <div className="text-center max-w-md">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-52 h-40 bg-amber-50 rounded-3xl flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <div className="text-6xl mb-2">🐱</div>
                  <div className="bg-amber-400 rounded-lg px-4 py-2">
                    <p className="text-amber-900 font-black text-lg leading-tight">NOT<br />FOUND</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 uppercase tracking-wide mb-3">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            The App you are requesting is not found on our system. please try another apps
          </p>
          <button
            id="btn-go-back-app-not-found"
            onClick={() => navigate(-1)}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  const handleInstall = () => {
    if (installed) return;
    const list = getInstalled();
    list.push(app);
    saveInstalled(list);
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`, {
      duration: 3000,
      style: {
        borderRadius: '10px',
        background: '#0f172a',
        color: '#fff',
      },
    });
  };

  // Recharts data — put 5 star on top for visual match
  const chartData = [...app.ratings].reverse();

  return (
    <div className="min-h-screen bg-slate-100 page-enter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* ── Top Section ── */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* App Image */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 sm:w-40 sm:h-40 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-28 h-28 object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            </div>

            {/* App Info */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-1 leading-tight">
                {app.title}
              </h1>
              <p className="text-sm text-slate-500 mb-4">
                Developed by{' '}
                <span className="text-violet-600 font-semibold">{app.companyName}</span>
              </p>

              {/* Stats */}
              <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-8 mb-5">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 16L6 10h4V4h4v6h4l-6 6zm-6 4v-2h12v2H6z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500">Downloads</span>
                  <span className="text-2xl font-extrabold text-slate-800">
                    {formatDownloads(app.downloads)}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5 text-orange-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500">Average Ratings</span>
                  <span className="text-2xl font-extrabold text-slate-800">{app.ratingAvg}</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5 text-violet-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500">Total Reviews</span>
                  <span className="text-2xl font-extrabold text-slate-800">
                    {formatReviews(app.reviews)}
                  </span>
                </div>
              </div>

              {/* Install Button */}
              <button
                id={`btn-install-${app.id}`}
                onClick={handleInstall}
                disabled={installed}
                className={`inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm ${
                  installed
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-md'
                }`}
              >
                {installed ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Installed
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 16L6 10h4V4h4v6h4l-6 6zm-6 4v-2h12v2H6z" />
                    </svg>
                    Install Now ({app.size} MB)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── Ratings Chart ── */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-bold text-slate-800 mb-6">Ratings</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis
                type="number"
                tick={{ fontSize: 11, fill: '#94a3b8' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: '#64748b' }}
                axisLine={false}
                tickLine={false}
                width={45}
              />
              <Tooltip
                cursor={{ fill: '#f1f5f9' }}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="count" radius={[0, 4, 4, 0]} maxBarSize={24}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#f97316" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── Description ── */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Description</h2>
          {app.description.split('\n\n').map((para, i) => (
            <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 last:mb-0">
              {para.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
