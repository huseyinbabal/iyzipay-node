'use strict';

var PaymentCard = require('./PaymentCard');

function ConnectPayment() {
}

ConnectPayment.body = function (data) {

    return typeof data !== 'undefined' ? {
        locale: data['locale'],
        conversationId: data['conversationId'],
        price: data['price'],
        paidPrice: data['paidPrice'],
        installment: data['installment'],
        buyerEmail: data['buyerEmail'],
        buyerId: data['buyerId'],
        buyerIp: data['buyerIp'],
        posOrderId: data['posOrderId'],
        paymentCard: PaymentCard.body(data['paymentCard']),
        connectorName: data['connectorName']
    } : undefined
};

module.exports = ConnectPayment;