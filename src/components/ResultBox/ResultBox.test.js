import { render, screen, cleanup } from "@testing-library/react";
import ResultBox from "./ResultBox";

describe("Component ResultBox", () => {
  it("should render without crashing", () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  const testCasesPLNToUSD = [
    { amount: 100.0, from: "PLN", to: "USD", convertAmount: "28.57" },
    { amount: 20.0, from: "PLN", to: "USD", convertAmount: "5.71" },
    { amount: 200.0, from: "PLN", to: "USD", convertAmount: "57.14" },
    { amount: 345.0, from: "PLN", to: "USD", convertAmount: "98.57" },
  ];
  for (const testobj of testCasesPLNToUSD) {
    it("should render proper info about conversion when PLN -> USD", () => {
      render(<ResultBox from={testobj.from} to={testobj.to} amount={testobj.amount} />);
      const output = screen.getByTestId("output");
      //   expect(output).toHaveTextContent(`PLN ${testobj.amount} = $${testobj.convertAmount}`);
      expect(output).toHaveTextContent(`PLN ${testobj.amount}`);
      expect(output).toHaveTextContent(`$${testobj.convertAmount}`);
    });
    cleanup();
  }
  const testCasesUSDToPLN = [
    { amount: 100.0, from: "USD", to: "PLN", convertAmount: "350.00" },
    { amount: 20.0, from: "USD", to: "PLN", convertAmount: "70.00" },
    { amount: 200.0, from: "USD", to: "PLN", convertAmount: "700.00" },
    { amount: 345.0, from: "USD", to: "PLN", convertAmount: "1,207.50" },
  ];
  for (const testobj of testCasesUSDToPLN) {
    it("should render proper info about conversion when USD -> PLN", () => {
      render(<ResultBox from={testobj.from} to={testobj.to} amount={testobj.amount} />);
      const output = screen.getByTestId("output");
      //   expect(output).toHaveTextContent(`$${testobj.amount} = PLN ${testobj.convertAmount}`);
      expect(output).toHaveTextContent(`$${testobj.amount}`);
      expect(output).toHaveTextContent(`PLN ${testobj.convertAmount}`);
    });
    cleanup();
  }
  const testCasesPLNToPLN = [
    { amount: 100.0, from: "PLN", to: "PLN", convertAmount: "100" },
    { amount: 20.0, from: "PLN", to: "PLN", convertAmount: "20.0" },
  ];
  for (const testobj of testCasesPLNToPLN) {
    it("should render proper info about conversion when PLN -> PLN", () => {
      render(<ResultBox from={testobj.from} to={testobj.to} amount={testobj.amount} />);
      const output = screen.getByTestId("output");
      //   expect(output).toHaveTextContent(`PLN ${testobj.amount} = PLN ${testobj.convertAmount}`);
      expect(output).toHaveTextContent(`PLN ${testobj.amount}`);
      expect(output).toHaveTextContent(`PLN ${testobj.convertAmount}`);
    });
    cleanup();
  }
  const testCasesUSDToUSD = [
    { amount: 100.0, from: "USD", to: "USD", convertAmount: "100" },
    { amount: 20.0, from: "USD", to: "USD", convertAmount: "20.0" },
  ];
  for (const testobj of testCasesUSDToUSD) {
    it("should render proper info about conversion when USD -> USD", () => {
      render(<ResultBox from={testobj.from} to={testobj.to} amount={testobj.amount} />);
      const output = screen.getByTestId("output");
      //   expect(output).toHaveTextContent(`$${testobj.amount} = $${testobj.convertAmount}`);
      expect(output).toHaveTextContent(`$${testobj.amount}`);
      expect(output).toHaveTextContent(`$${testobj.convertAmount}`);
    });
    cleanup();
  }
  const testCasesAmountlessthanZero = [
    { amount: -1, from: "PLN", to: "USD", convertAmount: "Wrong value…" },
    { amount: -1, from: "USD", to: "PLN", convertAmount: "Wrong value…" },
    { amount: -1, from: "PLN", to: "PLN", convertAmount: "Wrong value…" },
    { amount: -1, from: "USD", to: "USD", convertAmount: "Wrong value…" },
  ];
  for (const testobj of testCasesAmountlessthanZero) {
    it("should render proper info about conversion when amount less than 0", () => {
      render(<ResultBox from={testobj.from} to={testobj.to} amount={testobj.amount} />);
      const output = screen.getByTestId("output");
      expect(output).toHaveTextContent(`${testobj.convertAmount}`);
    });
    cleanup();
  }
});
