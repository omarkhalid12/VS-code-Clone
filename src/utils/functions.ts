import { IFile } from "../interfaces";

export const isFileObjectExist = (arr: IFile[], id: string)=> {
  return arr.some(obj => obj.id === id)
}