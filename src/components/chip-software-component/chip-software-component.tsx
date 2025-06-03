import React from 'react';

import { Tasktags } from '@/types/types';

type ChipSoftwareComponentProps = {
  taskTag: Tasktags;
};

export default function ChipSoftwareComponent({ taskTag }: ChipSoftwareComponentProps) {
  switch (taskTag) {
    case 'ANDROID':
      return (
        <div className="px-4 py-1 bg-[#E5B4541A] text-tertiary4 text-[15px] font-[600] rounded-[4px]">
          ANDROID
        </div>
      );
    case 'IOS':
      return (
        <div className="px-4 py-1 bg-[#70B2521A] text-secondary4 text-[15px] font-[600] rounded-[4px]">
          IOS APP
        </div>
      );
    case 'NODE_JS':
      return (
        <div className="px-4 py-1 bg-[#94979A1A] text-neutral1 text-[15px] font-[600] rounded-[4px]">
          NODE.JS
        </div>
      );
    case 'RAILS':
      return (
        <div className="px-4 py-1 bg-[#DA584B1A] text-primary4 text-[15px] font-[600] rounded-[4px]">
          RAILS
        </div>
      );
    case 'REACT':
      return (
        <div className="px-4 py-1 bg-[#2F61BF1A] text-[#2F61BF] text-[15px] font-[600] rounded-[4px]">
          REACT
        </div>
      );
    default:
      return null;
  }
}
