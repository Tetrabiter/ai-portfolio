import{ Button }from "../components/ui/button";

const Payment = () => {
    return ( 
        <div className="">
            {/* Payment Form */}
            <form>
                <p>Payment Details</p>
                <p>Enter your card information to complete the payment.</p>
                <div className="flex">
                    <label>
                        Card Number
                    </label>
                    <input 
                        placeholder="1234 5678 9012 3456" 
                        type="number" 
                        required
                    />
                </div>

                <div className="flex">
                    <label>
                        Expiry Date
                    </label>
                    <input 
                        placeholder="MM / YY" 
                        type="date" 
                        required
                    />
                </div>

                <div className="flex">
                    <label>
                        CVC
                    </label>
                    <input 
                        placeholder="123" 
                        type="number" 
                        required
                    />
                </div>

                <div className="flex">
                    <label>
                        Cardholder Name
                    </label>
                    <input 
                        placeholder="John Doe" 
                        type="text" 
                        required
                    />
                </div>

                <Button variant = 'primary'>
                    Pay now
                </Button>
            </form>


            {/* Summary */}
            <div>
                <p></p>
            </div>

        </div>
    );
}
 
export default Payment;