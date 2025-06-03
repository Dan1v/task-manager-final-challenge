'use client';

import { format, isBefore, isToday, isValid, isYesterday, parseISO } from 'date-fns';
import React from 'react';

import ChipSoftwareComponent from '@/components/chip-software-component/chip-software-component';
import { Tasktags } from '@/types/types';

interface ListItemProps {
  taskName: string;
  taskTags: Tasktags[];
  estimate: string;
  taskAssignName?: string;
  dueDate: string;
}

export function ListItem({ dueDate, estimate, taskAssignName, taskName, taskTags }: ListItemProps) {
  const date = parseISO(dueDate);

  let displayText = '';

  let borderColor = 'bg-secondary4';

  let textColor = 'text-neutral2';

  if (isValid(date)) {
    if (isToday(date)) {
      displayText = 'TODAY';
      textColor = 'text-tertiary4';
    } else if (isYesterday(date)) {
      displayText = 'YESTERDAY';
      textColor = 'text-primary3';
      borderColor = 'bg-primary4';
    } else {
      displayText = format(date, 'dd MMMM, yyyy').toUpperCase();
      if (isBefore(date, new Date())) {
        textColor = 'text-primary3';
        borderColor = 'bg-primary4';
      }
    }
  } else {
    displayText = 'INVALID DATE';
  }

  const pointEstimateMap: Record<string, number> = {
    EIGHT: 8,
    FOUR: 4,
    ONE: 1,
    TWO: 2,
    ZERO: 0,
  };

  return (
    <tr>
      <th className=" align-middle text-[15px] font-normal text-start border border-neutral3 w-[500px]">
        <div className="flex items-center h-full gap-9">
          <div className={`h-12 w-1 ${borderColor}`} />
          {taskName}
        </div>
      </th>
      <th className=" align-middle text-[15px] font-normal text-start border border-neutral3 w-[168px]">
        <div className="flex gap-2 justify-center mx-4">
          {taskTags
            ?.slice(0, 1)
            .map((item, index) => <ChipSoftwareComponent key={index} taskTag={item} />)}

          {taskTags.length > 1 && (
            <div className="text-[15px] font-semibold py-1 w-full text-sm rounded bg-neutral3 text-white text-center">
              +{taskTags.length - 1}
            </div>
          )}
        </div>
      </th>
      <th className=" align-middle  pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[140px]">
        {pointEstimateMap[estimate]} Points
      </th>
      <th className=" align-middle pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[159px]">
        {taskAssignName}
      </th>

      <th
        className={` align-middle  pl-4 py-4 text-[15px] font-normal ${textColor} text-start border border-neutral3 w-[141px]`}
      >
        {displayText}
      </th>
    </tr>
  );
}
