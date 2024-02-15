const Button = ({ btnText, color, backgroundColor, handler }) => {
  return (
    <button
      className={`${backgroundColor} ${color} rounded-full mx-3 py-2 px-5`}
      onClick={handler}
    >
      {btnText}
    </button>
  );
};

export { Button };
