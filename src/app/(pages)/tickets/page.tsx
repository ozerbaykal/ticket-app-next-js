import { ITicket } from "@/app/api/models/Ticket";
import Card from "@/app/components/card";
import { getTickets } from "@/app/utils/service";

const Tickets = async () => {
  const { tickets } = await getTickets();

  const categories = [...new Set(tickets.map((i: ITicket) => i.category))];

  return (
    <div className="p-5">
      {categories.map((category, key) => (
        <div key={key} className="mb-4">
          <h2 className="mb-2 text-2xl text-zinc-400 font-semibold">{category}</h2>

          <div>
            {tickets
              .filter((item) => item.category === category)
              .map((ticket, key) => (
                <Card key={key} ticket={ticket} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
