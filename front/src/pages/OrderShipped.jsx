import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

export default function OrderShipped() {
    useEffect(() => {
      Swal.fire({
        title: `Your Order is on the Way!`,
        icon: 'success',
        html: `
        <p class='fw-bold fs-5'>🚚 Expected delivery time: 1-2 hours.</p>
        <p class='fw-bold fs-5'>😊 Hope you enjoy it.</p>`,
        confirmButtonText: 'OK'
      });
    })


  
  return (
    <div className=' mt-5'style={{height:'70vh', backgroundImage:'url(https://img.freepik.com/free-vector/delivery-boy-picks-up-parcel-from-online-store-sending-customer-with-location-application-by-motorcycle-vector-illustration_1150-56229.jpg?uid=R182639791&ga=GA1.1.897827715.1735997478&semt=ais_hybrid)',
    backgroundSize:'contain', backgroundPosition:'center', backgroundRepeat:'no-repeat'
     }}>
        <div className="shipping d-flex  flex-column m-" style={{display:'inline',marginTop:'30px'}} >
            
                <Link to='/shop'>
            <button className='btn btn-primary ms-4 mt-5 fw-bold'>Back To Shop</button>
                </Link>
        </div>
    </div>
  )
}
