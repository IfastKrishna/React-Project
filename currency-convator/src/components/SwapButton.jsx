function SwapButton({ handleSwap }) {
  return (
    <button
      type="button"
      className="block bg-black/90 text-white font-semibold py-1 px-2 rounded-md border-2 border-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      onClick={handleSwap}
    >
      Swap
    </button>
  );
}

export default SwapButton;
