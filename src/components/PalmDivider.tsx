const PalmDivider = () => {
  return (
    <div className="flex items-center justify-center py-10 gap-4">
      <div className="h-px flex-1 max-w-[120px] bg-border" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="w-10 h-10 text-sage"
        fill="currentColor"
      >
        <path d="M32 58V30" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M32 30c-2-8-10-16-20-18 8 4 14 12 16 18" />
        <path d="M32 30c2-8 10-16 20-18-8 4-14 12-16 18" />
        <path d="M32 26c-4-6-14-12-22-10 6 2 16 6 18 10" />
        <path d="M32 26c4-6 14-12 22-10-6 2-16 6-18 10" />
        <path d="M32 22c-3-7-8-14-18-16 5 4 12 10 14 16" />
        <path d="M32 22c3-7 8-14 18-16-5 4-12 10-14 16" />
        <path d="M30 58h4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <div className="h-px flex-1 max-w-[120px] bg-border" />
    </div>
  );
};

export default PalmDivider;
