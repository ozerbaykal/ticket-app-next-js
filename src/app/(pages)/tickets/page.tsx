import { getTickets } from "@/app/utils/service";

const Tickets = async () => {
  const data = await getTickets();
  console.log();

  return <div></div>;
};

export default Tickets;
