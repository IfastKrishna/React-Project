import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenrater() {
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [length, setLength] = useState(8);
  const [btnText, setBtnText] = useState("Copy");
  const passwordRef = useRef(null);

  const passwordCopy = () => {
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
    const oldBtnText = btnText;
    setBtnText("Copied");
    return setTimeout(() => setBtnText(oldBtnText), 2000);
  };

  const passwordGenrater = useCallback(() => {
    let newPassword = "";
    let string = "ABCDEFGHSIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) string += "0123456789";
    if (specialCharacters) string += "!@#$%^&*()-_=+$~`[]{},";
    for (let i = 0; i < length; i++) {
      newPassword += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(newPassword);
  }, [numbers, specialCharacters, length, setPassword]);

  useEffect(passwordGenrater, [
    numbers,
    specialCharacters,
    length,
    passwordGenrater,
  ]);

  return (
    <div className="bg-slate-600 max-w-xl mx-auto rounded-lg p-10">
      <div className="flex ">
        <input
          type="text"
          value={password}
          readOnly={true}
          ref={passwordRef}
          className="block w-full bg-transparent text-white rounded-l-md border-0 p-3 ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl"
        />
        <button
          className="text-white bg-indigo-600 px-5 rounded-r-md ring-1 ring-inset ring-white hover:bg-indigo-700 font-bold"
          onClick={passwordCopy}
        >
          {btnText}
        </button>
      </div>
      <div className="flex items-center text-white mt-2">
        <div>
          <input
            type="range"
            name="range"
            id="range"
            min="0"
            max="100"
            step="1"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="range">Length : {length}</label>
        </div>
        <div className="mx-2">
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            value={numbers}
            onChange={(e) => {
              setNumbers(e.target.checked);
            }}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="characters"
            value={specialCharacters}
            onChange={(e) => {
              setSpecialCharacters(e.target.checked);
            }}
            id="characters"
          />
          <label htmlFor="characters">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenrater;
