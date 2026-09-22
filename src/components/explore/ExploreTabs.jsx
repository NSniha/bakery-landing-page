const ExploreTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="relative mt-9 border-b border-black/12 sm:mt-11">
      {/* Explore categories */}
      <div className="flex items-center gap-7 overflow-x-auto px-1 pb-0 sm:justify-center sm:gap-9 lg:gap-11">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={`relative shrink-0 pb-3 text-[14px] font-medium transition-colors duration-300 sm:text-[15px] lg:text-[16px] ${
              activeTab === tab
                ? "text-[#a9432c]"
                : "text-[#5f5f5f] hover:text-[#a9432c]"
            }`}
          >
            {tab}

            <span
              className={`absolute bottom-[-1px] left-0 h-0.75 rounded-full bg-[#a9432c] transition-all duration-300 ${
                activeTab === tab
                  ? "w-full opacity-100"
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