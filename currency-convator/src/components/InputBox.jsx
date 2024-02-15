import React from "react";

function InputBox({
  label,
  amount = 0,
  setAmount,
  amountDisebeld = false,
  selectCurrency,
  currencyOptions = [],
  setCurrency,
  currencyDisebeld = false,
}) {
  return (
    <div className=" bg-slate-50 flex items-center p-5 rounded-md">
      <div className="w-1/2 bg-slate-50">
        <div>
          <p className="text-black/40 capitalize block">{label}</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount && setAmount(Number(e.target.value))}
            className="outline-none w-full bg-transparent py-1.5"
            disabled={amountDisebeld}
          />
        </div>
      </div>
      <div className="w-1/2 bg-slate-50 flex flex-wrap justify-end text-right">
        <div>
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            type="number"
            value={selectCurrency}
            onChange={(e) => setCurrency && setCurrency(e.target.value)}
            className="bg-slate-50 rounded-lg px-1 py-1 cursor-pointer outline-none"
            disabled={currencyDisebeld}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
