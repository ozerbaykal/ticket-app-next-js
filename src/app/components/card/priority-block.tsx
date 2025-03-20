import { FaFire } from "react-icons/fa";

type Props = {
  priority: number;
};
const PriorityBlock = ({ priority }: Props) => {
  return (
    <div className="flex justify-start align-baseline">
      {new Array(5).fill("").map((i, key) => (
        <FaFire key={key} style={{ color: priority > key ? "#ff5c5c" : "#c5c5c5" }} />
      ))}
    </div>
  );
};

export default PriorityBlock;
