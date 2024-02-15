import { useState } from "react";
import BackgrounChangeMenu from "./components/BackgrounChangeMenu";
const App = () => {
  const [background, setBackgroun] = useState("bg-slate-900");

  return (
    <div className={`${background} h-screen w-full flex flex-col-reverse`}>
      <BackgrounChangeMenu setBackgroun={setBackgroun} />
    </div>
  );
};

export default App;
