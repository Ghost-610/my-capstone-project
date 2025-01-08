import "react";

const categories = ["All", "Relax", "Sad", "Party", "Romance", "Energetic", "Relaxing", "Jazz", "Alternative"];

const Categories = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 text-white">
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 whitespace-nowrap">
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
