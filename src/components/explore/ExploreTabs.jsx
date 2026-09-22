const ExploreTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="relative mt-9 border-b border-black/10 pb-3 sm:mt-11 sm:pb-0">
      {/* Explore categories */}
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-2 min-[420px]:grid-cols-3 sm:flex sm:items-center sm:justify-center sm:gap-8 lg:gap-11">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={`group relative flex min-h-11 w-full items-center justify-center rounded-[4px] px-2 text-[13px] font-medium transition-all duration-300 sm:min-h-0 sm:w-auto sm:shrink-0 sm:rounded-none sm:px-0 sm:pb-3 sm:text-[15px] lg:text-[16px] ${
              activeTab === tab
                ? "bg-[#a9432c]/8 text-[#a9432c] sm:bg-transparent"
                : "text-[#565656] hover:bg-[#a9432c]/5 hover:text-[#a9432c] sm:hover:bg-transparent"
            }`}
          >
            {tab}

            <span
              className={`absolute bottom-0 left-1/2 h-0.75 -translate-x-1/2 rounded-full bg-[#a9432c] transition-all duration-300 ${
                activeTab === tab
                  ? "w-8 opacity-100 sm:w-full"
                  : "w-0 opacity-0"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreTabs;