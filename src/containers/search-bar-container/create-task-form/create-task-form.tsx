'use client';

import 'react-datepicker/dist/react-datepicker.css';

import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';

import { CreateTaskFormValues, createTaskSchema } from '@/schema/create-task-schema';

interface CreateTaskFormProps {
  onSubmit: (data: CreateTaskFormValues) => void;
  assignees: { id: string; name: string }[];
  labels: string[];
}

export function CreateTaskForm({ onSubmit, assignees, labels }: CreateTaskFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<CreateTaskFormValues>({
    resolver: zodResolver(createTaskSchema),
  });

  const dueDateValue = watch('dueDate');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('taskName')}
          placeholder="Task name"
          className="w-full px-3 py-2 rounded bg-neutral3 text-neutral1 placeholder-neutral1 outline-0"
        />
        {errors.taskName && <p className="text-red-500 text-sm">{errors.taskName.message}</p>}
      </div>

      <div className=" flex gap-4 ">
        <div>
          <select
            {...register('estimate')}
            defaultValue=""
            className="w-full px-3 py-2 rounded bg-[#94979A1A] text-white"
          >
            <option value="" disabled>
              Select Estimate
            </option>
            <option value="ZERO">0</option>
            <option value="ONE">1</option>
            <option value="TWO">2</option>
            <option value="FOUR">4</option>
            <option value="EIGHT">8</option>
          </select>
          {errors.estimate && <p className="text-red-500 text-sm">{errors.estimate.message}</p>}
        </div>

        <div>
          <select
            {...register('assignee')}
            defaultValue=""
            className="w-full px-3 py-2 rounded bg-[#94979A1A] text-white"
          >
            <option value="" disabled>
              Select Assignee
            </option>
            {assignees.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
          {errors.assignee && <p className="text-red-500 text-sm">{errors.assignee.message}</p>}
        </div>

        <div>
          <select
            {...register('label')}
            defaultValue=""
            className="w-full px-3 py-2 rounded bg-[#94979A1A] text-white"
          >
            <option value="" disabled>
              Select Label
            </option>
            {labels.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
          {errors.label && <p className="text-red-500 text-sm">{errors.label.message}</p>}
        </div>

        <div>
          <DatePicker
            selected={dueDateValue}
            onChange={(date: Date | null) => {
              setValue('dueDate', date!);
            }}
            className="w-full px-3 py-2 rounded bg-[#94979A1A] text-white"
            placeholderText="Select Due Date"
            dateFormat="dd/MM/yyyy"
          />
          {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate.message}</p>}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="px-4 py-2 bg-neutral3 text-white rounded">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-primary3 text-white rounded">
          Create
        </button>
      </div>
    </form>
  );
}
