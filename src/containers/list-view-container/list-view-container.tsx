import React from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/accordion-component/accordion-component';
import { GetTasksQuery, Status } from '@/graphql/generated/graphql';

import { ListItem } from './list-item/list-item';

interface CardViewContainerProps {
  tasks: GetTasksQuery;
}

export function ListViewContainer({ tasks }: CardViewContainerProps) {
  const todoTasks = tasks?.tasks.filter((task) => task.status === Status.Todo);

  const inProgressTasks = tasks?.tasks.filter((task) => task.status === Status.InProgress);

  const doneTasks = tasks?.tasks.filter((task) => task.status === Status.Done);

  return (
    <section className=" mt-6  max-h-[672px] overflow-y-auto">
      <div className="overflow-x-auto rounded-md ">
        <table className=" border border-neutral3 bg-neutral4 w-full text-start">
          <thead>
            <tr>
              <th className="pl-4 py-4 text-[15px] font-normal  text-start border border-neutral3 w-[500px]">
                # Task Name
              </th>
              <th className="pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[168px]">
                Task Tags
              </th>
              <th className="pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[140px]">
                Estimate
              </th>
              <th className="pl-4 py-4 text-[15px] font-normal text-start border border-neutral3 w-[159px]">
                Task Assign Name
              </th>
              <th className="pl-4 py-4 text-[15px] font-normal   text-start border border-neutral3 w-[141px]">
                Due Date
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className=" mt-4">
        <AccordionRoot>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              To Do <span className=" text-neutral2">(05)</span>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <table className=" border border-neutral3 bg-neutral4 w-full text-start">
                  <tbody>
                    {todoTasks.map((item) => {
                      return (
                        <ListItem
                          key={item.position}
                          dueDate="TODAY"
                          estimate="5"
                          taskAssignName="Amelia Nells"
                          taskName="01 Create wireframe"
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>

      <div className=" mt-4">
        <AccordionRoot>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              In Progress <span className=" text-neutral2">(05)</span>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <table className=" border border-neutral3 bg-neutral4 w-full text-start">
                  <tbody>
                    {inProgressTasks.map((item) => {
                      return (
                        <ListItem
                          key={item.position}
                          dueDate="TODAY"
                          estimate="5"
                          taskAssignName="Amelia Nells"
                          taskName="01 Create wireframe"
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
      <div className=" mt-4">
        <AccordionRoot>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Reviews <span className=" text-neutral2">(05)</span>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                <table className=" border border-neutral3 bg-neutral4 w-full text-start">
                  <tbody>
                    {doneTasks.map((item) => {
                      return (
                        <ListItem
                          key={item.position}
                          dueDate="TODAY"
                          estimate="5"
                          taskAssignName="Amelia Nells"
                          taskName="01 Create wireframe"
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </section>
  );
}
