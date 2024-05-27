export interface IAction {
    type: "like" | "follow",
    count: number,
    isDetail: boolean,
    id: string
}