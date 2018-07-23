// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hidden Results
  document.getElementById('results').style.display = 'none';

  // Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);

  e.preventDefault();
});


// Calculate Results
function calculateResults() {
  
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  // Claculated Vars
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;
  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatePayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
    
    // Hide loader
    document.getElementById('loading').style.display = 'none';

    // Show results
    document.getElementById('results').style.display = 'block';

  } else {
    // Hide loader
    document.getElementById('loading').style.display = 'none';

    showError('Please check your input');
  }
}

function showError(error,e) {
  // Create a div
  const errorDiv = document.createElement('div');
  const closeError = document.createElement('button');
  const closeSymbol = document.createElement('span');

  closeError.setAttribute('type', 'button');
  closeError.className = 'close';
  closeError.setAttribute('data-dismiss' , 'alert');

  closeSymbol.textContent = "×";
  closeError.appendChild(closeSymbol);
  // Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add Class
  errorDiv.className = 'alert alert-danger alert-dismissible fade show';
  // Create text node and append to div
  errorDiv.appendChild(closeError);
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above Heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError,4000);
  // e.preventDefault;
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}