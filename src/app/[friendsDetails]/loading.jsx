const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">

      {/* Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <p className="mt-6 text-white text-lg tracking-wide animate-pulse">
        Loading Data
      </p>

    </div>
  );
};

export default Loading;