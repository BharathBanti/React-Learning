import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
  conversionError: '',
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
      state.conversionError = '';
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    converting(state) {
      state.isLoading = true;
      state.conversionError = '';
    },
    conversionFailed(state, action) {
      state.isLoading = false;
      state.conversionError = action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount: +amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
  },
});

export const {
  deposit: depositAction,
  withdraw,
  requestLoan,
  payLoan,
  converting,
  conversionFailed,
} = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === 'USD') {
    return depositAction(+amount);
  }

  return async function (dispatch) {
    dispatch(converting());

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

      dispatch(depositAction(convertedAmount));
    } catch (error) {
      dispatch(conversionFailed(error.message || 'Currency conversion failed'));
    }
  };
}

export default accountSlice.reducer;

/* 
function accountReducer(state = initialState, action) {
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
*/
