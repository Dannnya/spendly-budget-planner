import { NavLink } from 'react-router';
import { navItems } from '@/shared/layout/Sidebar/navItems';
import { motion } from 'framer-motion';
import { sidebarVariants } from './animations/sidebarVariants';
import { itemVariants } from './animations/itemVariants';

const focusRing =
  'outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F17]';

type MonobankStatusProps = {
  connected: boolean;
};

type SidebarProps = MonobankStatusProps;

export function Sidebar({ connected }: SidebarProps) {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial='hidden'
      animate='visible'
      className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-8 border-r border-[#1F2937] px-5 py-7 md:flex">
      <Logo />

      <nav aria-label="Головне меню" className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <motion.div variants={itemVariants} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1}}>
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                [
                  'flex h-[46px] items-center gap-3 rounded-[10px] px-3.5 text-[15px] transition-colors duration-150',
                  focusRing,
                  isActive
                    ? 'bg-[#111827] font-semibold text-[#F9FAFB]'
                    : 'bg-transparent font-medium text-[#9CA3AF] hover:text-[#F9FAFB]',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    aria-hidden="true"
                    className={isActive ? 'text-[#34D399]' : undefined}
                  />
                  {label}
                </>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <MonobankStatus connected={connected} />
    </motion.aside>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        aria-hidden="true"
        className="flex h-9 w-9 items-end justify-center gap-[3px] rounded-[9px] border border-[#1F2937] bg-[#111827] pb-2"
      >
        <span className="h-[6px] w-[5px] rounded-[3px] bg-[#34D399]" />
        <span className="h-[12px] w-[5px] rounded-[3px] bg-[#34D399]" />
        <span className="h-[18px] w-[5px] rounded-[3px] bg-[#34D399]" />
      </div>
      <span className="text-[20px] font-extrabold tracking-[-0.02em] text-[#F9FAFB]">Spendly</span>
    </div>
  );
}

export function MonobankStatus({ connected }: MonobankStatusProps) {
  return (
    <NavLink
      to="/settings"
      className={`mt-auto block rounded-xl border border-[#1F2937] bg-[#111827] p-4 transition-colors duration-150 hover:border-[#374151] ${focusRing}`}
    >
      <div className="flex items-center text-[13px] font-semibold text-[#F9FAFB] gap-6">
        <span
          aria-hidden="true"
          className={`h-2 w-2 shrink-0 rounded-full ${connected ? 'bg-[#34D399]' : 'bg-[#6B7280]'}`}
        />
        {connected ? 'Monobank підключено' : 'Monobank вимкнено'}
      </div>
    </NavLink>
  );
}
