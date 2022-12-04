import React, { useEffect, useState } from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'
import axios from 'axios'


export const Pay = () => {

  const [stripeToken, setStripeToken] = useState<Token | null>(null)
  
  const onToken = (token: Token) => {
   setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await axios.post(
          "http://localhost:4000/api/checkout/payment",
          {
            tokenId: stripeToken?.id,
            amount: 15000
          }
        )
      } catch(err) {
       console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken])


  const key = "pk_test_51MBGEnEix8HkVjiR2Li7qo0PQ77CxCgRXplpunSR4h0bGRUxUpDb4MpI4pFj035Tg6bsMYJZeVycgeCOb9VYHQvH00VNyZ6YEZ"
  
  return (
    <div style={{"display": "flex", "justifyContent": "center", "marginTop": "100px"}}>
      <StripeCheckout
        name='Online Beauty'
        billingAddress
        shippingAddress
        currency='usd'
        image=''
        description='Your total is 150$'
        amount={15000}
        token={onToken}
        stripeKey={key}
      />
    </div>
  )
}
