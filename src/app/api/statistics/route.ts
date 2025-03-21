import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../models/Ticket";

export async function GET() {
  try {
    //database e bağlan
    await connectMongo();

    //veri tabanından ticketları al
    const tickets = await Ticket.find();

    //toplam ticket sayısı
    const totalTickets = tickets.length;

    //kategoriye göre dağılım
    const ticketsByCategory = tickets.reduce((acc, ticket) => {
      acc[ticket.category] = (acc[ticket.category] || 0) + 1;
      return acc;
    }, {});

    //statusa göre dağılım
    const ticketsByStatus = tickets.reduce((acc, ticket) => {
      acc[ticket.status] = (acc[ticket.status] || 0) + 1;
      return acc;
    }, {});

    //ortalama öncelik seviyesi
    const totalPriority = tickets.reduce((acc, ticket) => acc + ticket.priority, 0);

    const averagePriority = totalTickets > 0 ? Number((totalPriority / totalTickets).toFixed(2)) : 0;

    //ortalama yüzdelik
    const totalProgress = tickets.reduce((acc, ticket) => acc + ticket.progress, 0);

    const averageProgress = totalTickets > 0 ? Number((totalProgress / totalTickets).toFixed(2)) : 0;

    return NextResponse.json({
      message: "istatistikler hesaplandı",
      totalTickets,
      ticketsByCategory,
      ticketsByStatus,
      averageProgress,
      averagePriority,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "istatistikler hesaplanırken bir sorun oluştu" },
      {
        status: 500,
      }
    );
  }
}
