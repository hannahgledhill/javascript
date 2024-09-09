'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const eurToUsd = 1.1;
let currentAccount;

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
    containerMovements.innerHTML = ''; // empty the pre-existing transactions
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
                <div class="movements__value">${mov}</div>
            </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html); // new child will go in first as want to see most recent transactions at the top, rather than beforeend and afterend (outside container)
    });
};

const calcDisplayBalance = function(acc){
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function(acc){
    labelSumIn.textContent = `${acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0)}€`;
    labelSumOut.textContent = `${Math.abs(acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0))}€`;
    labelSumInterest.textContent = `${acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate/100).filter(interest => interest >= 1).reduce((acc, interest) => acc + interest, 0)}€`;
};

const updateUI = function(acc) {
    displayMovements(acc.movements);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
}

const createUsernames = function(acc) {
    acc.forEach(function(acc){
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    }); // use foreach because we want to modify the original array not create a new one
};
createUsernames(accounts);

// Event handlers
btnLogin.addEventListener('click', function(e){
    e.preventDefault(); // stops the form from submitting and reloading the page
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

    if (currentAccount?.pin === Number(inputLoginPin.value)) { // the ? is the same as saying if currentAccount & currentAccount.pin etc.
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;
        updateUI(currentAccount);
    }

    inputLoginUsername.value = inputLoginPin.value = ''; // can clear both input fields at the same time, assignment operator works from right to left
    inputLoginPin.blur(); // causes field to loose focus
});

btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
    
    if (amount > 0 && receiverAccount && currentAccount.balance >= amount && receiverAccount.username != currentAccount.username) {
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);
        updateUI(currentAccount);
    }

    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
});

