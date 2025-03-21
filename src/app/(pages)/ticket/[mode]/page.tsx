import Form from "@/app/components/form";

type Props = {
  params: Promise<{
    mode: string;
  }>;
};

const Ticket = async ({ params }: Props) => {
  const { mode } = await params;
  //aldığımız parametreye göre sayfa hangi modda çalışcak
  const isEditMode = mode !== "new" ? true : false;
  return (
    <div className=" flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-zinc-500"> {isEditMode ? "Ticket Güncelle" : "Ticket Ekle "}</h1>
      <Form />
    </div>
  );
};

export default Ticket;
