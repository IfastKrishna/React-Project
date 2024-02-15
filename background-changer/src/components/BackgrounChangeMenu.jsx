import { Button } from "./Button";

export default function BackgrounChangeMenu({ setBackgroun }) {
  const backgroundColor = [
    {
      backgroundColor: "bg-slate-900",
      color: "text-white",
      btnText: "Default",
    },
    { backgroundColor: "bg-green-500", color: "text-white", btnText: "Green" },
    { backgroundColor: "bg-red-500", color: "text-white", btnText: "Red" },
    { backgroundColor: "bg-blue-500", color: "text-white", btnText: "Blue" },
    {
      backgroundColor: "bg-yellow-500",
      color: "text-black",
      btnText: "Yellow",
    },
    {
      backgroundColor: "bg-purple-500",
      color: "text-white",
      btnText: "Purple",
    },
    {
      backgroundColor: "bg-indigo-500",
      color: "text-white",
      btnText: "Indigo",
    },
    { backgroundColor: "bg-gray-500", color: "text-white", btnText: "Gray" },
    { backgroundColor: "bg-pink-500", color: "text-white", btnText: "Pink" },
  ];

  return (
    <div className="flex justify-center items-center bg-slate-700 py-3 mx-auto h-16 my-8 rounded-full w-[90%]">
      {backgroundColor.map(({ backgroundColor, color, btnText }, i) => (
        <Button
          key={i}
          btnText={btnText}
          backgroundColor={backgroundColor}
          color={color}
          handler={() => setBackgroun(backgroundColor)}
        />
      ))}
    </div>
  );
}
