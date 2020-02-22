export type Action<T> = {
    type: Readonly<string>
    payload: Readonly<T>
}