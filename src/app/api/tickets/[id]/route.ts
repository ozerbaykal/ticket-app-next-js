import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../../models/Ticket";
import { nextTest } from "next/dist/cli/next-test";

type Params = {
  params: {
    id: string;
  };
};

export async function DELETE(req: Request, { params }: Params) {
  try {
    // mongodb ye bağlan
    await connectMongo();

    //parametreye eriş
    await Ticket.findByIdAndDelete(params.id);

    return NextResponse.json({
      message: "Ticket başarıyla silindi",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Silme işlemi başarısız " },
      {
        status: 400,
      }
    );
  }
}

//id 'si bilinen ticket i döndür
export async function GET(req: Request, { params }: Params) {
  try {
    //mongodb ue bağlan
    await connectMongo();

    //veri tabanından idsi bilinen elamanı al
    const ticket = await Ticket.findById(params.id);

    //eleman bulunamazsa hata fırlat
    if (!ticket) {
      NextResponse.json(
        { message: "aradığınız ticket bulunamadı" },
        {
          status: 404,
        }
      );
    }

    NextResponse.json({ message: "Ticket verisi alındı", ticket });
  } catch (error) {
    return NextResponse.json(
      { message: "ticket verisi alınırken hata oluştu" },
      {
        status: 500,
      }
    );
  }
}

//id'si ve güncel bilgileri bilinen elemanı güncelle
export async function PUT(req: Request, { params }: Params) {
  try {
    //mongodb ue bağlan
    await connectMongo();

    //isteğin bodysinde gelen veriye eriş
    const body = await req.json();

    //veri tabanındaki ticket i güncelle

    const updated = await Ticket.findByIdAndUpdate(params.id, body);

    NextResponse.json({ message: "Ticket verisi güncellendi", ticket: updated });
  } catch (error) {
    return NextResponse.json(
      { message: "Ticket verisi güncellenirken hata oluştu" },
      {
        status: 500,
      }
    );
  }
}
