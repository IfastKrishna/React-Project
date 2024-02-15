import { UserContextProvider, Wraper } from "./components";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full h-screen p-10">
        <Wraper />
      </div>
    </UserContextProvider>
  );
}

export default App;
