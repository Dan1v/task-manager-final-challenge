export const inputContainer = 'bg-neutral4 rounded-2xl px-6 py-3  flex justify-between';

export const input = 'min-w-xl outline-0 placeholder:font-[400] placeholder: text-[15px]';

export const buttonList = (
  path: string,
) => `h-10 w-10 flex justify-center items-center hover:cursor-pointer transition-colors duration-300 border rounded-[8px] 
    ${path === 'list' ? 'border-primary4 text-primary4' : 'border-transparent'}
  `;

export const buttonCard = (
  path: string,
) => `h-10 w-10 flex justify-center items-center hover:cursor-pointer transition-colors duration-300 border rounded-[8px] 
    ${path === 'cards' ? 'border-primary4 text-primary4' : 'border-transparent'}
  `;

export const buttonNewTask = ` flex justify-center items-center w-10 h-10 bg-primary4 rounded-[8px] hover:cursor-pointer transition duration-200 hover:bg-primary3 `;
