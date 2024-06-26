import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Preview from "./components/Preview";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileTree } from "./data/fileTree";
import WelcomeTab from "./components/WelcomeTab";

const App = () => {
  const {openedFile} = useSelector(({tree}: RootState) => tree);
  
  return (
    <div>
      <div className="flex h-screen">
        <ResizablePanel
          showLeftPanel
          leftPanel={
            <div className="w-64 p-2">
              <RecursiveComponent fileTree={fileTree} />
            </div>
          }
          rightPanel={openedFile.length ? <Preview /> : <WelcomeTab />}
        />
      </div>
    </div>
  );
};

export default App;
