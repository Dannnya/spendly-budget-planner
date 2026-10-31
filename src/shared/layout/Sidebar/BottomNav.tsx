import { NavLink } from 'react-router';
import { Plus } from 'lucide-react';
import { navItems, type NavItem } from '@/shared/layout/Sidebar/navItems';
import { motion } from 'framer-motion';
import { itemVariants } from './animations/itemVariants';

const focusRing =
  'outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]';

// Коротші підписи для мобільного меню
const mobileLabels: Record<string, string> = { '/settings': 'Профіль' };

const pick = (to: string) => navItems.find((item) => item.to === to)!;

const leftItems = ['/', '/transactions'].map(pick);
const rightItems = ['/budgets', '/settings'].map(pick);

type BottomNavProps = {
  onAdd: () => void;
};

export function BottomNav({ onAdd }: BottomNavProps) {
  return (
    <nav
      aria-label="Головне меню"
      className="fixed inset-x-3 bottom-4 z-50 flex h-[70px] items-center justify-around rounded-[22px] border border-[#1F2937] bg-[#111827] md:hidden"
    >
      {leftItems.map((item) => (
        <BottomNavLink key={item.to} item={item} />
      ))}

      <button
        type="button"
        onClick={onAdd}
        aria-label="Додати операцію"
        className={`flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#34D399] transition-colors duration-150 hover:bg-[#6EE7B7] ${focusRing}`}
      >
        <Plus size={24} aria-hidden="true" className="text-[#052E1C]" strokeWidth={2.5} />
      </button>

      {rightItems.map((item) => (
        <BottomNavLink key={item.to} item={item} />
      ))}
    </nav>
  );
}

function BottomNavLink({ item: { to, label, icon: Icon } }: { item: NavItem }) {
  return (
  <motion.div variants={itemVariants} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1}}>
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        [
          'flex h-[52px] w-[52px] flex-col items-center justify-center gap-1 rounded-xl transition-colors duration-150',
          focusRing,
          isActive ? 'text-[#34D399]' : 'text-[#9CA3AF]',
        ].join(' ')
      }
    >
      <Icon size={22} aria-hidden="true" />
      <span className="text-[10px] font-semibold leading-none">{mobileLabels[to] ?? label}</span>
    </NavLink>
  </motion.div>
  );
}
