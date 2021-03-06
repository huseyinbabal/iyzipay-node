'use strict';

var IyzipayResource = require('../IyzipayResource');

function PaymentAuth() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/iyzipos/auth/ecom',
            method: 'POST',
            requestModel: 'CreatePaymentRequest'
        },
        retrieve: {
            path: '/payment/detail',
            method: 'POST',
            requestModel: 'RetrievePaymentRequest'
        }
    };
}

PaymentAuth.prototype = new IyzipayResource();

module.exports = PaymentAuth;