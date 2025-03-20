import { ITicket } from "../api/models/Ticket";

const baseURL = "http://localhost:3000";

export const createTicket = async (ticketData: ITicket): Promise<void> => {
  try {
    await fetch(`${baseURL}/api/tickets`, {
      method: "POST",
      body: JSON.stringify(ticketData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("bir sorun oluştu");
  }
};

export const getTickets = async () => {
  const res = await fetch(`${baseURL}/api/tickets`);

  if (!res.ok) {
    throw new Error("Ticket verileri alınamadı");
  }
  return res.json();
};
