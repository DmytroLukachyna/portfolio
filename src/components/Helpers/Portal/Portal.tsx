import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) =>
  createPortal(children, document.getElementById('modals') as HTMLElement);

export default Portal;
