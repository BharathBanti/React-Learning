const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
  conversionError: '',
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
        conversionError: '',
      };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    case 'account/converting':
      return { ...state, isLoading: true, conversionError: '' };
    case 'account/conversionFailed':
      return { ...state, isLoading: false, conversionError: action.payload };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === 'USD') {
    return { type: 'account/deposit', payload: +amount };
  }

  return async function (dispatch) {
    dispatch({ type: 'account/converting' });

    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );

      if (!response.ok) {
        throw new Error('Could not fetch exchange rate');
      }

      const data = await response.json();
      const convertedAmount = data.rates?.USD;

      if (!convertedAmount) {
        throw new Error('Invalid exchange-rate response');
      }

      dispatch({ type: 'account/deposit', payload: convertedAmount });
    } catch (error) {
      dispatch({
        type: 'account/conversionFailed',
        payload: error.message || 'Currency conversion failed',
      });
    }
  };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', payload: +amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount, purpose },
  };
}

export function payLoan() {
  return { type: 'account/payLoan' };
}

export default accountReducer;
