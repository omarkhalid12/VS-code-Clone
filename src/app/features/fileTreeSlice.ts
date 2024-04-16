import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFiles {
  activeTabId: string | null
  filename: string;
  fileContent: string | undefined
}
interface IInitialState {
  openedFile: IFile[];
  clickedFile: IClickedFiles;
  tabIdToRemove: string | null
}

const initialState: IInitialState = {
  openedFile: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: ""
  },
  tabIdToRemove: null
}

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFileAction : (state, action: PayloadAction<IFile[]>) => {
      state.openedFile = action.payload
    },
    setClickedFileAction : (state, action: PayloadAction<IClickedFiles>) => {
      state.clickedFile = action.payload
    },
    setTabIdToRemoveAction : (state, action: PayloadAction<string | null>) => {
      state.tabIdToRemove = action.payload
    }
  }
})
export const {setOpenedFileAction, setClickedFileAction, setTabIdToRemoveAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer