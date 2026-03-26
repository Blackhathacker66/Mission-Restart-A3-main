import { useNavigate } from 'react-router-dom';

function formatDownloads(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
}

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      id={`app-card-${app.id}`}
      className="app-card bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/apps/${app.id}`)}
    >
      {/* App Image */}
      <div className="w-full aspect-[4/3] bg-slate-100 flex items-center justify-center overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = '#e2e8f0';
          }}
        />
      </div>

      {/* Info */}
      <div className="px-3 py-3">
        <h3 className="text-sm font-semibold text-slate-800 truncate mb-2 leading-tight">
          {app.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="badge-downloads">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500">
              <path d="M12 16L6 10h4V4h4v6h4l-6 6zm-6 4v-2h12v2H6z" />
            </svg>
            {formatDownloads(app.downloads)}
          </span>
          <span className="badge-rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
}
