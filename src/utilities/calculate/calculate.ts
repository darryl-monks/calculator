import { CalculatorOperations } from '../../types/types';

const calculate = (operation: CalculatorOperations, numberOne: number, numberTwo: number): number => {
  switch (operation) {
    case 'add':
      return numberOne + numberTwo;
    case 'subtract':
      return numberOne - numberTwo;
    case 'multiply':
      return numberOne * numberTwo;
    case 'divide':
      return numberOne / numberTwo;
  }
};

export default calculate;
