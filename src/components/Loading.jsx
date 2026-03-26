export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
      <div className="spinner"></div>
      <p className="text-slate-500 text-sm font-medium">Loading...</p>
    </div>
  );
}
