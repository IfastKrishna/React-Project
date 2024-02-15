import PasswordGenrater from "./components/PasswordGenrater";
function App() {
  return (
    <div className="bg-slate-900  h-screen w-full p-10">
      <h1 className="text-5xl text-center my-5 bg-clip-text font-bold text-transparent bg-gradient-to-r from-indigo-500 to-green-500">
        Password Genrator
      </h1>
      <PasswordGenrater />
    </div>
  );
}

export default App;
