export interface ITodo {
    id: string;
    content?: string;
    completed?: boolean;
}

export const defaultValue: Readonly<ITodo> = {
    id: '',
    content: '',
    completed: false
};