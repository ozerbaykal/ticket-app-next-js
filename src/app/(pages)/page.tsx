import { FaTicket } from "react-icons/fa6";
import ValueList from "../components/value-list";
import { getStatics } from "../utils/service";

const Home = async () => {
  const data = await getStatics();
  console.log(data);

  return (
    <div className="flex flex-col gap-10 pt-5">
      <div className="bg-zinc-700 p-5 lg:p-10 text-zinc-300 font-semibold flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">{data.totalTickets}</h1>
          <p>Toplam Ticket</p>
        </div>

        <FaTicket className="text-5xl text-blue-500 mt-12" />
      </div>
      <ValueList title="Kategori Özeti" arr={data.ticketsByCategory} />
      <ValueList title="Durum Özeti" arr={data.ticketsByStatus} />
    </div>
  );
};

export default Home;
