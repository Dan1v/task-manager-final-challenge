'use client';

import React from 'react';

import { CardTaskComponent } from '@/components/card-task-component/card-task-component';
import { GetTasksQuery, Status } from '@/graphql/generated/graphql';

interface CardViewContainerProps {
  tasks: GetTasksQuery;
}

export function CardViewContainer({ tasks }: CardViewContainerProps) {
  const todoTasks = tasks?.tasks.filter((task) => task.status === Status.Todo);

  const inProgressTasks = tasks?.tasks.filter((task) => task.status === Status.InProgress);

  const doneTasks = tasks?.tasks.filter((task) => task.status === Status.Done);

  return (
    <section className=" mr-8 mt-4">
      <div className="grid grid-cols-[348px_348px_348px] grid-rows-[32px_1fr] gap-x-8 text-neutral1 font-[600] text-[18px] gap-y-4 max-h-[672px] ">
        <div className="">
          <h3>Working (03)</h3>
        </div>
        <div>
          <h3>In progress (03)</h3>
        </div>
        <div>
          <h3>Completed (03)</h3>
        </div>
        <div className="grid grid-cols-[348px] auto-rows-[208px] gap-y-4  overflow-auto h-full overflow-x-hidden">
          {todoTasks.map((item) => {
            return <CardTaskComponent key={item.position} task={item} />;
          })}
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4 overflow-y-auto h-full overflow-x-hidden">
          {inProgressTasks.map((item) => {
            return <CardTaskComponent key={item.position} task={item} />;
          })}
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4  overflow-auto h-full overflow-x-hidden">
          {doneTasks.map((item) => {
            return <CardTaskComponent key={item.position} task={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
