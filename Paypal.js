import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
function Paypal(props) {
    // 스타일 커스텀
    const style = {
        size: 'responsive',
        color: 'white',
        shape: 'rect',
        label: 'checkout',
        tagline: 'true'
    }
    let env = 'sandbox'; 
    let currency = 'USD';
    // 결제 금액
    let total = props.subTotal;
	
    // 결제 성공
    const onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
    }
	
    // 결제 취소
    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }
	
    // 결제 실패
    const onError = (err) => {
        console.log("Error!", err);
    }
	
    // 클라이언트 정보
    const client = {
        sandbox:    'Client ID',
        production: 'App Name',
    }

    return (
        <PaypalExpressBtn 
            style={style} env={env} client={client} 
            total={total} currency={currency}
            onSuccess={onSuccess} onError={onError} onCancel={onCancel} 
        />
    );
}

export default Paypal;
