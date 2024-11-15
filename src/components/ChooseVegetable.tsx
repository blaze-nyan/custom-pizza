import { vegetableAddOn } from "../data";
interface Props {
  handleAddOn: (item: string) => void;
  addOn: Array<string>;
}
const ChooseVegetable = ({ handleAddOn, addOn }: Props) => {
  return (
    <div>
      <ul className="max-w-xs m-auto">
        {vegetableAddOn.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleAddOn(item)}
              className={
                addOn.includes(item)
                  ? "text-green-700 cursor-pointer hover:scale-125 transition-transform duration-200"
                  : "text-white cursor-pointer hover:scale-125 transition-transform duration-200"
              }
            >
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChooseVegetable;
