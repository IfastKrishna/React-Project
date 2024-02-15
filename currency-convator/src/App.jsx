import { useState } from "react";
import { Button, InputBox, SwapButton } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const backgroundImage =
    "https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyOptions = useCurrencyInfo(from);
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <div
      className="w-full h-screen grid place-content-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" max-w-screen-lg flex flex-col gap-2 backdrop-blur bg-white/30 ring-2 ring-white p-5 rounded-lg">
        <div className="w-full h-full flex flex-col gap-2 relative ">
          <InputBox
            label={"from"}
            amount={amount}
            setAmount={(amount) => setAmount(amount)}
            currencyOptions={Object.keys(currencyOptions)}
            selectCurrency={from}
            setCurrency={(value) => setFrom(value)}
          />
          <SwapButton handleSwap={handleSwap} />
          <InputBox
            label={"To"}
            amount={convertedAmount}
            setAmount={(amount) => {
              let newamount = (amount * currencyOptions[to]).toFixed(3);
              setConvertedAmount(newamount);
            }}
            currencyOptions={Object.keys(currencyOptions)}
            selectCurrency={to}
            setCurrency={(value) => setTo(value)}
            amountDisebeld={true}
          />
        </div>
        <Button
          from={from}
          to={to}
          onClick={() => {
            let newamount = (amount * currencyOptions[to]).toFixed(3);
            setConvertedAmount(newamount);
          }}
        />
      </div>
    </div>
  );
}

export default App;
