import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../models/Ticket";

export async function GET() {
  try {
    //mongodb ye bağlan
    await connectMongo();
    //bütün ticketleri al
    const tickets = await Ticket.find();

    //client e cevap gönder
    return NextResponse.json({
      message: "Ticket verileri alındı",
      tickets,
    });
  } catch (e) {
    return NextResponse.json(
      {
        message: "Ticket alınırıken hata oluştu",
        error: e,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    //mongodb ye bağlan
    await connectMongo();

    //isteğin body kısmındaki veriyi al
    const body = await req.json();

    //veri tabanına yeni ticket'i kaydet
    const newTicket = await Ticket.create(body);

    //client e cevap gönder
    return NextResponse.json(
      {
        message: "Ticket oluşturuldu",
        ticket: newTicket,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    //client e cevap gönder
    return NextResponse.json(
      {
        message: "Ticket oluşturma başarısız ",
        error,
      },
      {
        status: 400,
      }
    );
  }
}
