'use client';
import React, { useState } from 'react';

import * as styles from './styles';

type DisplayMode = 'list' | 'cards';

export default function DashBoardContainer() {
  const [displayMode, setDisplayMode] = useState<DisplayMode>('list');

  const handleDisplayMode = (state: DisplayMode) => {
    setDisplayMode(state);
  };

  return (
    <div className=" mt-8 mr-8 ">
      <div className="flex justify-between items-center gap-10">
        <div className="flex">
          <button
            className={styles.buttonList(displayMode)}
            onClick={() => handleDisplayMode('list')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
          <button
            className={styles.buttonCard(displayMode)}
            onClick={() => handleDisplayMode('cards')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path>
            </svg>
          </button>
        </div>
        <button className=" flex justify-center items-center w-10 h-10 bg-primary4 rounded-[8px] hover:cursor-pointer transition duration-200 hover:bg-primary3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
