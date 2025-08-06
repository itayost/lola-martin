// src/components/ui/Button.d.ts
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  disabled?: boolean;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
  animated?: boolean;
  target?: string;
  rel?: string;
}

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

declare const Button: React.FC<ButtonProps> & {
  Icon: React.FC<IconButtonProps>;
};

export default Button;