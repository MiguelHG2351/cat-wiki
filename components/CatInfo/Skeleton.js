

export default function SkeletonCatInfo() {
  return (
    <div className="flex items-center flex-col lg:grid lg:grid-cols-2 lg:items-start">
      <div className="relative w-5/6 inline-flex justify-center">
        <svg className="w-full h-auto aspect-square animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311 278" fill="none">
          <rect x="18" y="22" width="102" height="234" rx="15" fill="#DEC68B" />
          <rect x="33" width="278" height="278" rx="24" fill="#6C7D89" />
        </svg>
      </div>
      <div className="container mt-8">
        <div className="w-full">
          <div className="h-8 w-1/2 rounded-xl bg-pulse animate-pulse"></div>

          <div className="mt-4 h-4 w-11/12 rounded-xl bg-pulse animate-pulse"></div>
          <div className="mt-1 h-4 w-5/6 rounded-xl bg-pulse animate-pulse"></div>
          <div className="mt-1 h-4 w-2/3 rounded-xl bg-pulse animate-pulse"></div>

          <div className="mt-1 h-4 w-2/3 rounded-xl bg-pulse animate-pulse"></div>
          <div className="mt-1 h-4 w-5/6 rounded-xl bg-pulse animate-pulse"></div>
          <div className="mt-1 h-4 w-11/12 rounded-xl bg-pulse animate-pulse"></div>
        </div>
        <div className="w-full flex flex-col lg:gap-y-6 lg:mt-12">
          <div className="inline-flex gap-3">
            <div className="mt-4 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            <div className="mt-4 h-2 w-12 rounded-xl bg-pulse animate-pulse flex-1"></div>
          </div>
          <div className="inline-flex gap-3">
            <div className="mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            <div className="mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse flex-1"></div>
          </div>
          <div className="inline-flex gap-3">
            <div className="mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            <div className="mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse flex-1"></div>
          </div>
          
          <div className="inline-flex gap-3">
            <div className="mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            <div className="flex-1 flex gap-1">
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            </div>
          </div>
          <div className="inline-flex gap-3">
            <div className="mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            <div className="flex-1 flex gap-1">
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
              <div className="flex-1 mt-1 h-2 w-12 rounded-xl bg-pulse animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
