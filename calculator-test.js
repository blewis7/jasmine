
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 15000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('159.10');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 2000,
    years: 8,
    rate: 6.73
  };
  expect(calculateMonthlyPayment(values)).toEqual('27.00');
});


