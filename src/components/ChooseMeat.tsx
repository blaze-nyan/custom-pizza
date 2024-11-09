import { meatAddOn } from "../data";

const ChooseVegetable = () => {
  return (
    <div>
      <ul>
        {meatAddOn.map((item, index) => {
          return (
            <li key={index} className="text-white">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChooseVegetable;
