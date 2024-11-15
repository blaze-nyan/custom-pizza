import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChooseVegetable from "./components/ChooseVegetable";
import ShowPhoto from "./components/ShowPhoto";
import SelectAll from "./components/SelectAll";
import CheckOut from "./pages/CheckOut";
import { vegetableAddOn } from "./data";

const App = () => {
  const [addOn, setAddOn] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(addOn);
    navigate("/checkout");
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
  const handleSelectAll = (itemList: string[]) => {
    if (itemList.length === addOn.length) {
      setAddOn([]);
    } else {
      setAddOn(itemList.map((item) => item));
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-900 min-h-screen text-center p-5 text-white">
            <h3 className="text-yellow-400 text-3xl">Make Custom Pizza</h3>
            <h4 className="text-2xl underline mb-4">Choose Addon</h4>
            <ShowPhoto />
            <SelectAll
              handleSelectAll={handleSelectAll}
              vegetableAddOn={vegetableAddOn}
            >
              {addOn.length === vegetableAddOn.length
                ? "Delete All"
                : "Select All"}
            </SelectAll>
            <ChooseVegetable handleAddOn={handleAddOn} addOn={addOn} />
            <div className="w-full h-1 bg-white mt-2"></div>
            <div className="w-full h-72">
              <ul className=" w-2/3 m-auto rounded-md mt-10 flex items-start justify-start flex-row flex-wrap gap-2">
                {addOn.map((item, index) => (
                  <li
                    key={index}
                    className="bg-black rounded-lg p-1 relative cursor-pointer hover:bg-zinc-950 group"
                  >
                    {item}
                    <button
                      onClick={() =>
                        setAddOn((prev) => prev.filter((i) => i !== item))
                      }
                      className="absolute bg-red-500 rounded-full flex items-center justify-center size-4 top-[-0.5rem] right-[-0.3rem] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleClick}
              className="text-white bg-red-500 p-4 py-2 rounded-md"
            >
              Bake
            </button>
          </div>
        }
      />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default App;
