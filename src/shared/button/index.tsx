import React from 'react'
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to?: any;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  state?: any;
}

const CustomButton: React.FC<LinkButtonProps> = ({ to, className = '', children, onClick, state, ...props }) => {

  
    return (
      <Link
        to={to}
        className={`bg-blue-500 font-league text-lg rounded-md w-full p-2 text-white text-center block ${className}`}
        {...props}
        onClick={onClick}
        state={state}
      >
        {children}
      </Link>
    );
  };
export default CustomButton