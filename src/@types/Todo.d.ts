declare type Todo = {
  value: string;
  readonly id: number;
  checked: boolean;
  removed: boolean;
};

declare type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

declare type State = {
  text: string;
  todos: Todo[];
  filter: Filter;
};
