import { ITicket, ITicketData } from "../api/models/Ticket";

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
type GetTicketsResponse = {
  message: string;
  tickets: ITicketData[];
};
type GetTicketResponse = {
  message: string;
  ticket: ITicketData;
};

export const getTickets = async (): Promise<GetTicketsResponse> => {
  const res = await fetch(`${baseURL}/api/tickets`);

  if (!res.ok) {
    throw new Error("Ticket verileri alınamadı");
  }
  return res.json();
};

export const deleteTicket = async (id: string): Promise<void> => {
  const res = await fetch(`${baseURL}/api/tickets/${id}`, {
    method: "DELETE",
  });
};

export const getTicket = async (id: string): Promise<GetTicketResponse> => {
  const res = await fetch(`${baseURL}/api/tickets/${id}`);

  if (!res.ok) {
    throw new Error("Ticket verisi alınamadı");
  }
  return res.json();
};

export const updateTicket = async (id: string, data: ITicket): Promise<void> => {
  const res = await fetch(`${baseURL}/api/tickets/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Ticket güncellenirken hata oluştu");
  }
  return res.json();
};
type GetSitatisticType = {
  totalTickets: number;
  ticketsByCategory: {
    "Yazılım Sorunu": number;
    "Donanım Sorunu": number;
  };
  ticketsByStatus: {
    Çözüldü: number;
    "Devam Ediyor": number;
  };
  averageProgress: number;
  averagePriority: number;
};

export const getStatics = async (): Promise<GetSitatisticType> => {
  const res = await fetch(`${baseURL}/api/statistics/`);

  if (!res.ok) {
    throw new Error("İstatistic verisi alınamadı");
  }
  return res.json();
};
