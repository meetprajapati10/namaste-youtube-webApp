import FilteredButton from "./FilteredButton";

const FilteredButtonsList = () => {
  const btnList = [
    "All",
    "Music",
    "JavaScript",
    "React",
    "Comedy",
    "Live",
    "News",
    "Cricket",
    "Gaming",
    "Cooking",
    "Sports",
    "Recently uploaded",
  ];

  return (
    <div className="flex mt-2">
      {btnList.map((btnName) => (
        <FilteredButton key={btnName} name={btnName} />
      ))}
    </div>
  );
};

export default FilteredButtonsList;
