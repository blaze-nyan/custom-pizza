interface Props {
  handleSelectAll: (vegetableAddOn: string[]) => void;
  vegetableAddOn: string[];
  children: string;
}
const SelectAll = ({ handleSelectAll, vegetableAddOn, children }: Props) => {
  return (
    <button
      onClick={() => handleSelectAll(vegetableAddOn)}
      className={
        children === "Delete All"
          ? "absolute top-16 right-1/3 bg-red-500 text-white p-1 rounded-md text-xs hover:scale-110 transition-transform duration-150"
          : "absolute top-16 right-1/3 bg-slate-50 text-black p-1 rounded-md text-xs hover:scale-110 transition-transform duration-150"
      }
    >
      {children}
    </button>
  );
};

export default SelectAll;
