//ticket verisi için bir şema oluştur

import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    priority: { type: Number, enum: [1, 2, 3, 4, 5] },
    status: { type: String, enum: ["Başladı", "Başlamadı", "Bitti"] },
    category: { type: String, enum: ["Yazılım Sorunu", "Donanım Sorunu", "Bağlantı Sorunu"] },
    progress: { type: Number, min: 0, max: 100 },
  },

  { timestamps: true }
);

// Ticket verilerini yönetmek için  bir model oluştur
//Eğerki daha önce oluşturulan bir ticket modeli varsa onu kullan yoksa yenisini oluştur
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
