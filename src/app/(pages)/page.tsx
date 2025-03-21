import { FaTicket } from "react-icons/fa6";
import ValueList from "../components/value-list";
import { getStatics } from "../utils/service";
import DashboardValue from "../components/dashboard-value";
import { FaFire } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Home = async () => {
  const data = await getStatics();

  return (
    <div className="flex flex-col gap-10 pt-5">
      <div className="flex flex-col xl:flex-row max-xl:gap-10 w-full gap-5">
        <DashboardValue
          title="Toplam Ticket"
          value={data.totalTickets}
          icon={<FaTicket className="text-blue-500" />}
        />
        <DashboardValue
          title="Ortalama Öncelik"
          value={data.averagePriority}
          icon={<FaFire className="text-red-500" />}
        />
        <DashboardValue
          title="Ortalama İlerleme"
          value={data.averageProgress + " %"}
          icon={<IoMdCheckmarkCircle className="text-green-500" />}
        />
      </div>

      <ValueList title="Kategori Özeti" arr={data.ticketsByCategory} />
      <ValueList title="Durum Özeti" arr={data.ticketsByStatus} />
    </div>
  );
};

export default Home;
