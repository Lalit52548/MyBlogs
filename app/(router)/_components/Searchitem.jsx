import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import clsx from "clsx"; // Optional, but useful for conditional classes

const Searchitem = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim().length > 2) {
      router.push(`/search?q=${searchQuery.trim()}`);
      setSearchQuery("");
      setExpanded(false); // collapse after search
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "flex items-center gap-2 transition-all duration-300 bg-white border border-gray-300 rounded-full px-2",
        expanded ? "w-64 md:w-80 p-2" : "w-10 p-2"
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="focus:outline-none"
      >
        <Search className="h-5 w-5 text-gray-500" />
      </button>
      {expanded && (
        <input
          type="text"
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent border-none outline-none text-sm"
        />
      )}
    </form>
  );
};

export default Searchitem;
