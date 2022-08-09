import React, { useState } from 'react';
import styled from 'styled-components';
import { CalculatorActions, CalculatorOperations } from '../../types/types';
import Button from '../Button/Button';
import calculate from '../../utilities/calculate/calculate';

interface Props {
  screenValue: string;
  setScreenValue: React.Dispatch<React.SetStateAction<string>>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
`;

function Keyboard(props: Props) {
  const { screenValue, setScreenValue } = props;
  const [currentSum, setCurrentSum] = useState<string | undefined>(undefined);
  const [previousAction, setPreviousAction] = useState<CalculatorActions | undefined>(undefined);
  const [currentOperation, setCurrentOperation] = useState<CalculatorOperations | undefined>(undefined);

  const addValueToScreen = (value: string) => {
    if (screenValue === '0' || previousAction === 'operator') {
      setScreenValue(value);
    } else {
      setScreenValue(screenValue + value);
    }
  };

  const togglePositiveOrNegative = () => {
    let value: number;
    const screenValueAsNumber = parseFloat(screenValue);

    if (Math.sign(screenValueAsNumber) === -1) {
      value = Math.abs(screenValueAsNumber);
    } else {
      value = -Math.abs(screenValueAsNumber);
    }

    setScreenValue(value.toString());
  };

  const handlePercent = () => {
    setScreenValue(((1 / 100) * parseFloat(screenValue)).toString());
  };

  const addDecimalPointToScreen = () => {
    const decimal = '.';

    if (!screenValue.includes(decimal)) {
      setScreenValue(screenValue + decimal);
    }
  };

  const handleOperation = (operation: CalculatorOperations) => {
    if (currentSum && currentOperation && previousAction === 'number') {
      const calculation = calculate(currentOperation, parseFloat(currentSum), parseFloat(screenValue)).toString();

      setCurrentSum(calculation);
      setScreenValue(calculation);
    } else {
      setCurrentSum(screenValue);
    }

    setCurrentOperation(operation);
  };

  const handleEquals = () => {
    if (currentSum && currentOperation) {
      const calculation = calculate(currentOperation, parseFloat(currentSum), parseFloat(screenValue)).toString();

      setScreenValue(calculation);
      setCurrentSum(undefined);
      setCurrentOperation(undefined);
    }
  };

  const resetCalculator = () => {
    setScreenValue('0');
    setCurrentSum(undefined);
    setPreviousAction(undefined);
    setCurrentOperation(undefined);
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    const button = event.target as HTMLButtonElement;
    const dataset = button.dataset;
    const { action, value } = dataset as { action: string; value: string };

    switch (action) {
      case 'number':
        addValueToScreen(value);
        break;
      case 'positiveOrNegative':
        togglePositiveOrNegative();
        break;
      case 'percent':
        handlePercent();
        break;
      case 'decimalPoint':
        addDecimalPointToScreen();
        break;
      case 'operator':
        handleOperation(value as CalculatorOperations);
        break;
      case 'equals':
        handleEquals();
        break;
      case 'reset':
        resetCalculator();
        break;
    }

    setPreviousAction(action as CalculatorActions);
  };

  return (
    <Grid>
      <Button action="reset" theme="secondary" ariaLabel="All Clear" handleOnClick={handleButtonClick}>
        AC
      </Button>

      <Button
        action="positiveOrNegative"
        theme="secondary"
        ariaLabel="Positive / Negative"
        handleOnClick={handleButtonClick}
      >
        + / &minus;
      </Button>

      <Button action="percent" theme="secondary" ariaLabel="Percentage" handleOnClick={handleButtonClick}>
        %
      </Button>

      <Button action="operator" value="divide" theme="tertiary" ariaLabel="Divide" handleOnClick={handleButtonClick}>
        &divide;
      </Button>

      <Button action="number" value="7" handleOnClick={handleButtonClick}>
        7
      </Button>

      <Button action="number" value="8" handleOnClick={handleButtonClick}>
        8
      </Button>

      <Button action="number" value="9" handleOnClick={handleButtonClick}>
        9
      </Button>

      <Button
        action="operator"
        value="multiply"
        theme="tertiary"
        ariaLabel="Multiply"
        handleOnClick={handleButtonClick}
      >
        &times;
      </Button>

      <Button action="number" value="4" handleOnClick={handleButtonClick}>
        4
      </Button>

      <Button action="number" value="5" handleOnClick={handleButtonClick}>
        5
      </Button>

      <Button action="number" value="6" handleOnClick={handleButtonClick}>
        6
      </Button>

      <Button action="operator" value="subtract" theme="tertiary" handleOnClick={handleButtonClick}>
        &minus;
      </Button>

      <Button action="number" value="1" handleOnClick={handleButtonClick}>
        1
      </Button>

      <Button action="number" value="2" handleOnClick={handleButtonClick}>
        2
      </Button>

      <Button action="number" value="3" handleOnClick={handleButtonClick}>
        3
      </Button>

      <Button action="operator" value="add" ariaLabel="Add" theme="tertiary" handleOnClick={handleButtonClick}>
        +
      </Button>

      <Button action="number" value="0" columnSpan={2} handleOnClick={handleButtonClick}>
        0
      </Button>

      <Button action="decimalPoint" ariaLabel="Decimal Point" handleOnClick={handleButtonClick}>
        .
      </Button>

      <Button action="equals" theme="tertiary" ariaLabel="Equals" handleOnClick={handleButtonClick}>
        =
      </Button>
    </Grid>
  );
}

export default Keyboard;
