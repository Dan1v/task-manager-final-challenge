import React from 'react';

import { SearchBarContainer } from '@/containers/search-bar-container/search-bar-container';
import { SideBarContainer } from '@/containers/sidebar-container/sidebar-container';

import * as styles from './styles';

interface MainLayoutsProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutsProps) {
  return (
    <div className={styles.mainLayout}>
      <div className="row-span-2">
        <SideBarContainer />
      </div>
      <div>
        <SearchBarContainer />
      </div>
      <div className="col-start-2 row-start-2">{children}</div>
    </div>
  );
}
