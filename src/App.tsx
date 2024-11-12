import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChooseVegetable from "./components/ChooseVegetable";
import CheckOut from "./pages/CheckOut";

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
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-gray-900 h-screen text-center p-5 text-white">
            <h3 className="text-yellow-400 text-3xl">Make Custom Pizza</h3>
            <h4 className="text-2xl underline mb-4">Choose Addon</h4>
            <ChooseVegetable handleAddOn={handleAddOn} addOn={addOn} />
            <div className="w-full h-1 bg-white mt-2"></div>
            <ul className=" w-1/3 m-auto rounded-md mt-10 flex flex-row flex-wrap gap-2">
              {addOn.map((item, index) => (
                <li key={index} className="bg-black rounded-lg p-1">
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
        }
      />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default App;
