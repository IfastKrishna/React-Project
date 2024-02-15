function Button({ from, to, onClick }) {
  return (
    <button
      className="bg-black/70 text-white rounded-md py-2 text-xl w-full hover:bg-black hover:ring-2 hover:ring-white active:right-2 active:ring-whitef"
      onClick={onClick}
    >
      Convert {from.toUpperCase()} to {to.toUpperCase()}
    </button>
  );
}

export default Button;
