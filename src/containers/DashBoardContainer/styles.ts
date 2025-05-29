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
