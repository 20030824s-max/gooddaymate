"use client";

import { useState } from "react";
import { CalendarDays, Users, ChevronRight } from "lucide-react";

interface BookingWidgetProps {
  propertyId?: string;
  propertyName?: string;
  compact?: boolean;
}

export default function BookingWidget({
  propertyId,
  propertyName,
  compact = false,
}: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkin: checkIn,
      checkout: checkOut,
      guests: guests.toString(),
      ...(propertyId && { property: propertyId }),
    });
    window.location.href = `#contact?${params.toString()}`;
  };

  if (compact) {
    return (
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-2xl p-6 flex flex-col sm:flex-row gap-4 items-end"
      >
        <div className="flex-1 min-w-0">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-ocean-dark font-medium mb-2">
            チェックイン
          </label>
          <div className="relative">
            <CalendarDays
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-9 pr-3 py-3 border border-gray-200 text-sm focus:outline-none focus:border-ocean bg-sand-light"
              required
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-ocean-dark font-medium mb-2">
            チェックアウト
          </label>
          <div className="relative">
            <CalendarDays
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-9 pr-3 py-3 border border-gray-200 text-sm focus:outline-none focus:border-ocean bg-sand-light"
              required
            />
          </div>
        </div>
        <div className="w-28">
          <label className="block text-[10px] tracking-[0.2em] uppercase text-ocean-dark font-medium mb-2">
            人数
          </label>
          <div className="relative">
            <Users
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full pl-9 pr-3 py-3 border border-gray-200 text-sm focus:outline-none focus:border-ocean bg-sand-light appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n}名
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="btn-primary whitespace-nowrap h-[46px]"
        >
          空き確認
          <ChevronRight size={15} />
        </button>
      </form>
    );
  }

  return (
    <div className="bg-white shadow-2xl p-8">
      <h3 className="font-serif text-2xl text-ocean-dark mb-1">
        空き状況を確認
      </h3>
      {propertyName && (
        <p className="text-sm text-gray-500 mb-6">{propertyName}</p>
      )}
      <form onSubmit={handleSearch} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-ocean-dark font-medium mb-2">
              チェックイン
            </label>
            <div className="relative">
              <CalendarDays
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-9 pr-3 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-ocean"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.2em] uppercase text-ocean-dark font-medium mb-2">
              チェックアウト
            </label>
            <div className="relative">
              <CalendarDays
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-9 pr-3 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-ocean"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-ocean-dark font-medium mb-2">
            ご人数
          </label>
          <div className="relative">
            <Users
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full pl-9 pr-3 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-ocean appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n}名
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="btn-primary w-full justify-center">
          空き状況を確認する
          <ChevronRight size={16} />
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          直接予約で最低価格保証。OTA手数料なし。
        </p>
      </form>
    </div>
  );
}
