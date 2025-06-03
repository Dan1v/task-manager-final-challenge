'use client';

import React from 'react';

import { CardTaskComponent } from '@/containers/card-view-container/card-task-component/card-task-component';
import { GetTasksQuery, Status } from '@/graphql/generated/graphql';

interface CardViewContainerProps {
  tasks: GetTasksQuery;
}

export function CardViewContainer({ tasks }: CardViewContainerProps) {
  const todoTasks = tasks?.tasks.filter((task) => task.status === Status.Todo);

  const inProgressTasks = tasks?.tasks.filter((task) => task.status === Status.InProgress);

  const doneTasks = tasks?.tasks.filter((task) => task.status === Status.Done);

  return (
    <section className=" mr-8 mt-4 ">
      <div className="grid grid-cols-[348px_348px_348px] grid-rows-[32px_1fr] gap-x-8 text-neutral1 font-[600] text-[18px] gap-y-4 h-full min-h-[672px] ">
        <div className="">
          <h3>Working ({todoTasks.length})</h3>
        </div>
        <div>
          <h3>In progress ({inProgressTasks.length})</h3>
        </div>
        <div>
          <h3>Completed ({doneTasks.length})</h3>
        </div>
        <div className="grid grid-cols-[348px] auto-rows-[208px] gap-y-4  overflow-auto h-full ">
          {todoTasks.map((item) => {
            return <CardTaskComponent key={item.position} task={item} />;
          })}
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4 overflow-y-auto h-full ">
          {inProgressTasks.map((item) => {
            return <CardTaskComponent key={item.position} task={item} />;
          })}
        </div>
        <div className=" grid grid-cols-[348px] auto-rows-[208px] gap-y-4  overflow-auto h-full ">
          {doneTasks.map((item) => {
            return <CardTaskComponent key={item.position} task={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
