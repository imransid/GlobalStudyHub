import React from 'react';

export function Button({ children, className = '', variant, ...rest }) {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium shadow-sm focus:outline-none';
  const styles = variant === 'outline'
    ? 'border border-yellow-400 bg-transparent text-yellow-300 hover:bg-yellow-400 hover:text-blue-900'
    : 'bg-yellow-400 text-blue-900 hover:bg-yellow-500';
  return (
    <button className={base + ' px-4 py-2 ' + styles + ' ' + className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
