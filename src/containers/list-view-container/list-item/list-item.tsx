import React from 'react';

import { Tasktags } from '@/types/types';

interface ListItemProps {
  taskName: string;
  taskTags?: Tasktags[];
  estimate: string;
  taskAssignName: string;
  dueDate: string;
}

export function ListItem({ dueDate, estimate, taskAssignName, taskName, taskTags }: ListItemProps) {
  return (
    <tr>
      <th className="pl-4 py-4 text-[15px] font-normal  text-start border border-neutral3 w-[500px]">
        {taskName}
      </th>
      <th className="pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[168px]">
        {taskTags}
      </th>
      <th className="pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[140px]">
        {estimate} Points
      </th>
      <th className="pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[159px]">
        {taskAssignName}
      </th>

      <th className="pl-4 py-4 text-[15px] font-normal   text-start border border-neutral3 w-[141px]">
        {dueDate}
      </th>
    </tr>
  );
}
