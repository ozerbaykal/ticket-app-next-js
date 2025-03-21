"use client";
import { deleteTicket } from "@/app/utils/service";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

type Props = {
  id: string;
};

const DeleteBlock = ({ id }: Props) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      if (!confirm("Silmek istediğinizden emin misiniz")) return;
      await deleteTicket(id);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cursor-pointer hover:text-red-500 transition">
      <FaTrash onClick={() => handleDelete()} />
    </div>
  );
};

export default DeleteBlock;
