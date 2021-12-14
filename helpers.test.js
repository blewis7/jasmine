describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should test the efficacy of sumPaymentTotal(payment)', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(25);
        expect(sumPaymentTotal('billAmt')).toEqual(120);
    });

    it('test calculateTipPercent(billAmt, tipAmt)', function(){
        expect(calculateTipPercent(sumPaymentTotal('billAmt'), sumPaymentTotal('tipAmt'))).toEqual(20);
    });

    it('test appendTd(tr, value)', function(){
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
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