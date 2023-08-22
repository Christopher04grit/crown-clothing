import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

const PaystackCheckoutButton = ({ price }) => {
    const publicKey = "pk_test_828062d1ddc745e92a3517ffe3a6ead2d87ade1a"
    const amount = price * 100;
    console.log(price)
    const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
  
    const componentProps = {
      email: 'mike1234@email.com',
      amount,
      metadata: {
        
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
        alert("Thanks for doing business with us! Come back soon!!"),
      onClose: () => alert("Wait! Don't leave :("),
    }
  
    return (
      <div className="App">
        <div className="container">          
          <div className="checkout-form">            
            <PaystackButton  {...componentProps} />
          </div>
        </div>
      </div>
    )
  } 

export default PaystackCheckoutButton;