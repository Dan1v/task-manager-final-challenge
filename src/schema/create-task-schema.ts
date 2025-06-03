import { z } from 'zod';

export const createTaskSchema = z.object({
  taskName: z.string().min(1, 'Task name is required'),
  estimate: z.enum(['ZERO', 'ONE', 'TWO', 'FOUR', 'EIGHT'], {
    required_error: 'Estimate is required',
  }),
  assignee: z.string().min(1, 'Assignee is required'),
  label: z.string().min(1, 'Label is required'),
  dueDate: z.date({
    required_error: 'Due date is required',
    invalid_type_error: 'Invalid date',
  }),
});

export type CreateTaskFormValues = z.infer<typeof createTaskSchema>;
