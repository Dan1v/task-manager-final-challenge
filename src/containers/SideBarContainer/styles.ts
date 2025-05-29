export const containerSideBar =
  'bg-neutral4 rounded-3xl w-full h-full flex justify-start items-center flex-col ';

export const buttonSideBarDashboard = (path: string) =>
  `w-ful h-14 flex gap-5 items-center ml-4 ${
    path === '/'
      ? 'bg-[linear-gradient(90deg,_rgba(186,37,37,0)_0%,_rgba(210,77,77,0.1)_100%)] border-r-4 border-primary4 text-primary4  transition-all duration-200'
      : 'text-neutral2 font-[600] '
  } `;

export const buttonSideBarMyTasks = (path: string) =>
  `w-ful h-14 flex gap-5 items-center ml-4 ${
    path === '/my-tasks'
      ? 'bg-[linear-gradient(90deg,_rgba(186,37,37,0)_0%,_rgba(210,77,77,0.1)_100%)] border-r-4 border-primary4 text-primary4  transition-all duration-200'
      : 'text-neutral2 font-[600] '
  } `;
