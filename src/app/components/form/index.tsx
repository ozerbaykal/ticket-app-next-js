"use client";
import { ITicket } from "@/app/api/models/Ticket";
import { createTicket } from "@/app/utils/service";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const Form = () => {
  const router = useRouter();
  //form gönderilince
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //formdata ile inputlardaki verileri nesneye çevir
    const formData = new FormData(e.currentTarget);
    const ticketData = Object.fromEntries(formData.entries());

    // api ya ticket oluşturma isteği at
    await createTicket(ticketData as unknown as ITicket);

    //işlem başarılı olursa anasayfaya yönlendir
    router.push("/tickets");
    //satfayı yenile
    router.refresh();
  };
  return (
    <div className="grid place-items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:w-8/12  w-10/12 ">
        <fieldset>
          <label htmlFor="">Başlık</label>
          <input type="text" name="title" required />
        </fieldset>

        <fieldset>
          <label htmlFor="">Açıklama</label>
          <textarea name="description" required />
        </fieldset>

        <fieldset>
          <label>Öncelik</label>
          <div className="flex gap-5">
            {new Array(5).fill("").map((i, key) => (
              <div key={key} className="flex gap-1">
                <input type="radio" id={String(key)} name="priority" value={key + 1} />
                <label htmlFor={String(key)}>{key + 1}</label>
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <label>Kategori</label>
          <select name="category">
            <option>Yazılım Sorunu</option>
            <option>Donanım Sorunu</option>
            <option>Bağlantı Sorunu</option>
          </select>
        </fieldset>
        <fieldset>
          <label>İlerleme</label>
          <input type="range" name="progress" />
        </fieldset>

        <fieldset>
          <label>Durum</label>
          <select name="status">
            <option>Devam Ediyor</option>
            <option>Beklemede</option>
            <option>Çözüldü</option>
          </select>
        </fieldset>

        <button className="mt-5 bg-blue-600 p-2 rounded-md font-semibold hover:bg-blue-700 cursor-pointer transition">
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default Form;
