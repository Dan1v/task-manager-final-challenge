'use client';
import React from 'react';

import { CardTaskComponent } from '@/components/card-task-component/card-task-component';

export function DashBoardContainer() {
  return (
    <section className=" mr-8 mt-4">
      <div className=" grid grid-cols-[348px_348px_348px] grid-rows-[32px_1fr] gap-x-8 text-neutral1 font-[600] text-[18px] gap-y-4 max-h-[672px] ">
        <div className="">
          <h3>Working (03)</h3>
        </div>
        <div>
          <h3>In progress (03)</h3>
        </div>
        <div>
          <h3>Completed (03)</h3>
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4  overflow-auto h-full overflow-x-hidden">
          <CardTaskComponent />
          <CardTaskComponent />
          <CardTaskComponent />
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4 overflow-y-auto h-full overflow-x-hidden">
          <CardTaskComponent />
          <CardTaskComponent />
          <CardTaskComponent />
          <CardTaskComponent />
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4  overflow-auto h-full overflow-x-hidden">
          <CardTaskComponent />
          <CardTaskComponent />
          <CardTaskComponent />
          <CardTaskComponent />
          <CardTaskComponent />
        </div>
      </div>
    </section>
  );
}
