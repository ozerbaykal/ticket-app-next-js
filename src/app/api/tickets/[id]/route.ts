import connectMongo from "@/app/utils/connect-mongo";
import { NextResponse } from "next/server";
import Ticket from "../../models/Ticket";

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
