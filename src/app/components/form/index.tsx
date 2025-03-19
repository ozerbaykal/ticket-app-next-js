"use client";
import React, { FormEvent } from "react";

const Form = () => {
  //form gönderilince
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //formdata ile inputlardaki verileri nesneye çevir
    const formData = new FormData(e.currentTarget);
    const ticketData = Object.fromEntries(formData.entries());

    //todo api ya ticket oluşturma isteği at
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
            <option value="">Yazılım sorunu</option>
            <option value="">Donanım sorunu</option>
            <option value="">Bağlantı sorunu</option>
          </select>
        </fieldset>
        <fieldset>
          <label>İlerleme</label>
          <input type="range" name="progress" />
        </fieldset>

        <fieldset>
          <label>Durum</label>
          <select name="status">
            <option value="pending">Devam Ediyor</option>
            <option value="in-progress">Beklemede</option>
            <option value="solve">Çözüldü</option>
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
