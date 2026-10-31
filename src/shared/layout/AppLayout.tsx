import { Outlet } from 'react-router';
import { Sidebar } from '@/shared/layout/Sidebar/Sidebar';
import { BottomNav } from '@/shared/layout/Sidebar/BottomNav';

export function AppLayout() {
  // TODO: відкрити форму додавання операції
  const handleAdd = () => {};

  return (
    <div className="flex min-h-screen bg-[#0B0F17] text-[#F9FAFB]">
      <Sidebar connected />
      <main className="min-w-0 flex-1 p-6 pb-28 md:pb-6">
        <Outlet />
      </main>
      <BottomNav onAdd={handleAdd} />
    </div>
  );
}
