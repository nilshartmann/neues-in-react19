/// <reference types="react/experimental" />
import { createFileRoute } from "@tanstack/react-router";
import { createContext, ReactNode, use, useState } from "react";

export const Route = createFileRoute("/20_use_context/")({
  component: CounterExample,
});

type ICounterContext = {
  currentValue: number;
  increase(): void;
};

const CounterContext = createContext<ICounterContext | null>(null);

type CounterContextProviderProps = {
  children: ReactNode;
};
function CounterContextProvider({ children }: CounterContextProviderProps) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);

  return (
    <CounterContext value={{ currentValue: count, increase }}>
      {children}
    </CounterContext>
  );
}

function getCounter(): ICounterContext {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ctx = use(CounterContext);
  if (!ctx) {
    throw new Error("Invalid setup");
  }

  return ctx;
}

function CountButton() {
  console.log("Render Count Button");
  const counter = getCounter();

  return (
    <div className={"rounded border border-slate-400 p-4"}>
      <button onClick={() => counter.increase()}>Increase</button>
    </div>
  );
}

function CounterDisplay() {
  console.log("Render Counter Display");

  const [showValue, setShowValue] = useState(true);

  return (
    <div className={"rounded border border-slate-400 p-4"}>
      <button onClick={() => setShowValue(!showValue)}>
        {showValue ? "Hide" : "Show"} Value
      </button>

      {showValue && <p>Current value: {getCounter().currentValue}</p>}
    </div>
  );
}

function CounterExample() {
  return (
    <CounterContextProvider>
      <div className={"flex gap-x-4"}>
        <CountButton />
        <CounterDisplay />
      </div>
    </CounterContextProvider>
  );
}
