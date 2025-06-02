import React from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/accordion-component/accordion-component';

export function ListViewContainer() {
  return (
    <section className=" mt-6">
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
              <div>
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
              <div>
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
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </section>
  );
}
