import React from 'react';
import { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons/lib';

interface IconWrapperProps {
  icon: IconType;
  size?: number;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, size, className }) => {
  const props: IconBaseProps = {
    size,
    className,
    'aria-hidden': true
  };
  
  // Cast Icon to any to bypass the type checking issue
  // This is safe because we know IconType from react-icons will always be a valid component
  return React.createElement(Icon as any, props);
}; 