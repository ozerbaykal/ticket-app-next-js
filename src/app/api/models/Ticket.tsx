import mongoose, { Schema } from "mongoose";

//ticket verisini typeScripti çin tanımlama
export interface ITicket {
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
}

//mongodb den gelen cevap için ticket tipini tanımlama
export interface ITicketData extends ITicket {
  _id: String;
  _v: number;
  createdAt: string;
  updatedAt: string;
}

//ticket verisi için bir şema oluştur
const ticketSchema = new Schema<ITicket>(
  {
    title: { type: String },
    description: { type: String },
    priority: { type: Number, enum: [1, 2, 3, 4, 5] },
    status: { type: String, enum: ["Beklemede", "Devam Ediyor", "Çözüldü"] },
    category: { type: String, enum: ["Yazılım Sorunu", "Donanım Sorunu", "Bağlantı Sorunu"] },
    progress: { type: Number, min: 0, max: 100 },
  },

  { timestamps: true }
);

// Ticket verilerini yönetmek için  bir model oluştur
//Eğerki daha önce oluşturulan bir ticket modeli varsa onu kullan yoksa yenisini oluştur
const Ticket = mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
