import { BarChart3, Clock, LayoutGrid, List, User, type LucideIcon } from 'lucide-react';

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { to: '/', label: 'Головна', icon: LayoutGrid },
  { to: '/transactions', label: 'Операції', icon: List },
  { to: '/analytics', label: 'Аналітика', icon: BarChart3 },
  { to: '/budgets', label: 'Бюджети', icon: Clock },
  { to: '/settings', label: 'Налаштування', icon: User },
];
