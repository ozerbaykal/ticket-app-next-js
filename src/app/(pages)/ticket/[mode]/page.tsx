import { ITicketData } from "@/app/api/models/Ticket";
import Form from "@/app/components/form";
import { getTicket } from "@/app/utils/service";

type Props = {
  params: Promise<{
    mode: string;
  }>;
};

const Ticket = async ({ params }: Props) => {
  const { mode } = await params;
  //aldığımız parametreye göre sayfa hangi modda çalışcak
  const isEditMode = mode !== "new" ? true : false;

  //güncelenecek eleman
  let editItem: ITicketData | null = null;

  //eğer güncelleme modundaysak güncellenecek elemanın verilerini al
  if (isEditMode) {
    editItem = (await getTicket(mode)).ticket;
  }

  return (
    <div className=" flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-zinc-500"> {isEditMode ? "Ticket Güncelle" : "Ticket Ekle "}</h1>
      <Form editItem={editItem} />
    </div>
  );
};

export default Ticket;
