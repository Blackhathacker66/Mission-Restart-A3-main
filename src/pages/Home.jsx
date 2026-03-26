import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apps from '../data/apps.js';
import AppCard from '../components/AppCard.jsx';
import Loading from '../components/Loading.jsx';
import heroImg from '../../assets/hero.png';

function formatNum(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return num;
}

const totalDownloads = apps.reduce((sum, a) => sum + a.downloads, 0);
const totalReviews = apps.reduce((sum, a) => sum + a.reviews, 0);
const activeApps = apps.length;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const topApps = apps.slice(0, 8);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="page-enter">
      {/* ── Hero Section ── */}
      <section className="bg-slate-50 pt-16 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-800 leading-tight mb-4">
            We Build{' '}
            <span className="text-violet-600">Productive</span>{' '}
            Apps
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
            and more exciting. Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>

          {/* Store Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <a
              href="#"
              id="btn-google-play"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-violet-300 hover:shadow-md text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 20.5L13.5 12 3 3.5v17z" fill="#4CAF50"/>
                <path d="M13.5 12L3 3.5l10 5.5 3-1.5L13.5 12z" fill="#8BC34A"/>
                <path d="M13.5 12l2.5-1.5L13.5 12l2.5 1.5L13.5 12z" fill="#FF9800"/>
                <path d="M13 20.5L3 14l10.5-2.5L13 20.5z" fill="#F44336"/>
                <path d="M16 13.5L13.5 12l2.5-1.5L21 12l-5 1.5z" fill="#FF9800"/>
              </svg>
              Google Play
            </a>
            <a
              href="#"
              id="btn-app-store"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-violet-300 hover:shadow-md text-slate-700 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-700">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-center mt-10 mb-8 px-4 w-full">
            <img 
              src={heroImg} 
              alt="Hero Illustration" 
              className="w-full max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="bg-gradient-to-r from-violet-700 to-violet-500 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-white text-center text-2xl sm:text-3xl font-bold mb-10">
            Trusted By Millions, Built For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-violet-200 text-xs uppercase tracking-widest mb-1">Total Downloads</p>
              <p className="text-white text-4xl font-extrabold mb-1">{formatNum(totalDownloads)}</p>
              <p className="text-violet-200 text-xs">21% More Than Last Month</p>
            </div>
            <div>
              <p className="text-violet-200 text-xs uppercase tracking-widest mb-1">Total Reviews</p>
              <p className="text-white text-4xl font-extrabold mb-1">{formatNum(totalReviews)}</p>
              <p className="text-violet-200 text-xs">46% More Than Last Month</p>
            </div>
            <div>
              <p className="text-violet-200 text-xs uppercase tracking-widest mb-1">Active Apps</p>
              <p className="text-white text-4xl font-extrabold mb-1">{activeApps}+</p>
              <p className="text-violet-200 text-xs">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trending Apps ── */}
      <section className="bg-slate-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Trending Apps</h2>
            <p className="text-slate-500 text-sm">Explore All Trending Apps on the Market developed by us</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {topApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/apps"
              id="btn-show-all"
              className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Show All
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
