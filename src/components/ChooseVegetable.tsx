import { vegetableAddOn } from "../data";
interface Props {
  handleAddOn: (item: string) => void;
  addOn: Array<string>;
}
const ChooseVegetable = ({ handleAddOn, addOn }: Props) => {
  return (
    <div>
      <ul>
        {vegetableAddOn.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleAddOn(item)}
              className={addOn.includes(item) ? "text-green-700" : "text-white"}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChooseVegetable;
