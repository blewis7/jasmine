describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('test the submitPaymentInfo() function', function(){
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    });

    it('test the createCurPayment() function', function(){
        let test = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20
          };
        
        expect(createCurPayment()).toEqual(test);
    });

    it('test the appendPaymentTable(curPayment) function', function(){
        let test = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20
          };

          appendPaymentTable(test);

          let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        
        expect(paymentTbody.children.length).toEqual(1);
        expect(curTdList.length).toEqual(3);
    });

    it('test the updateSummary() function', function(){
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$20');
        expect(summaryTds[2].innerHTML).toEqual('20%');
    });

    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
});