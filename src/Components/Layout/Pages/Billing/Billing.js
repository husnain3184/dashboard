import Creditcard from './Billingcom/Creditcard/Creditcard'
import Pymentcard from './Billingcom/Pymentcard/Pymentcard'
import PaymentMethod from './Billingcom/PaymentMethod/PaymentMethod'
import Invoices from './Billingcom/Invoices/Invoices'
import BillingInformation from './Billingcom/BillingInformation/BillingInformation'
import YourTransaction from './Billingcom/YourTransaction/YourTransaction'


const Billing = () =>{
  return(
      <>
          <div className="container-fluid py-4">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <Creditcard/>
          <Pymentcard/>
         <PaymentMethod/>
        </div>
      </div>
      <Invoices/>
    </div>
    <div className="row">
      <BillingInformation/>
      <YourTransaction/>
    </div>
  </div>
      </>
  )           
}
export default Billing
