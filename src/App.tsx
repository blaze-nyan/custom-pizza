import { useState } from "react";
import ChooseVegetable from "./components/ChooseVegetable";

const App = () => {
  const [addOn, setAddOn] = useState(["Cheese"]);

  const handleClick = () => {
    console.log("clicked");
  };
  const handleAddOn = (item: string) => {
    setAddOn((prev): string[] => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };
  return (
    <div className="bg-gray-900 h-screen text-center p-5 text-white">
      <h3 className="text-yellow-400 text-3xl">Make Custom Pizza</h3>
      <h4 className="text-2xl underline mb-4">Choose Addon</h4>
      <ChooseVegetable handleAddOn={handleAddOn} addOn={addOn} />
      <div className="w-full h-1 bg-white mt-2"></div>
      <ul className="bg-slate-500 w-1/3 m-auto rounded-md mt-10">
        {addOn.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className="text-white bg-red-500 p-4 py-2 rounded-md"
      >
        Bake
      </button>
    </div>
  );
};

export default App;
