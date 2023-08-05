export interface ITask {
  taskName: string;
  checked: boolean;
}

export interface IProps {
  task: ITask;
  deleteTask(deleteTaskName: string): void;
  toggleCheck: (taskName: string) => void;
}
