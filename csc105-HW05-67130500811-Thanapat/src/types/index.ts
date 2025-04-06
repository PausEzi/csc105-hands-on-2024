export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CreateTodoInput = {
  title: string;
  completed?: boolean;
};

export type UpdateTodoInput = {
  title?: string;
  completed?: boolean;
};