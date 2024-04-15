import { v4 as uuid } from 'uuid';
import { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true, 
          children: [
            {
              id: uuid(), name: "react.js", isFolder: false
            }
          ]
        }
      ]
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children:[
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false
            }
          ]
        }
      ]
    }
  ]
}