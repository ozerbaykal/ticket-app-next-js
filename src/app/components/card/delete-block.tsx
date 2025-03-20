import { FaTrash } from "react-icons/fa";

type Props = {
  id: string;
};

const DeleteBlock = ({ id }: Props) => {
  return (
    <div className="cursor-pointer hover:text-red-500 transition">
      <FaTrash />
    </div>
  );
};

export default DeleteBlock;
