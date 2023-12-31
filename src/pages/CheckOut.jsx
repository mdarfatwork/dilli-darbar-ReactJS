import React, { useEffect, useState } from 'react';
import BgHeader from '../components/reused/BgHeader'
import { getAuth } from "firebase/auth";
import {db} from '../firebase'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetCart } from '../redux/cartSlice';

const CheckOut = () => {
    const [userAddress, setUserAddress] = useState(null);
    const [shoppingFirst, setShoppingFirst ] = useState(false)
    const auth = getAuth();
    const user = auth.currentUser;
    const dispatch = useDispatch()
    // console.log(user)
    // console.log(user.uid)

    //fetch data from firebase
    const fetchUserAddress = async (uid) => {
      const addressRef = doc(collection(db, 'usersAddress'), uid);
      try {
        const addressSnapshot = await getDoc(addressRef);
        if (addressSnapshot.exists()) {
          return addressSnapshot.data();
        } else {
          return null;
        }
      } catch (error) {
        console.error('Error fetching user address:', error);
        return null;
      }
    };

    useEffect(() => {
      document.title = "CheckOut - Dilli Darbar";
      const fetchAddressData = async () => {
        if (user) {
          const addressData = await fetchUserAddress(user.uid);
          setUserAddress(addressData);
        }
      };
  
      fetchAddressData();
    }, [user]);

    //For Price
    const cart = useSelector((state) => state.cart);
    const calculateTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateShippingCost = (totalCost) => {
      return totalCost > 0 && totalCost < 500 ? 50 : 0;
    };    

    const totalCost = calculateTotalPrice();
    const shippingCost = calculateShippingCost(totalCost);
    const totalPrice = totalCost + shippingCost;
    
    const handlePayment = async () => {
      const CartItem = cart.map((item) => {
        const { photo, ...rest } = item;
        return rest;
      });
    
      const date = new Date().toISOString();
      if (totalPrice > 0 ){
      try {
        const userRef = doc(db, "orders", user.uid);
        const userDoc = await getDoc(userRef);
    
        if (userDoc.exists()) {
          const ordersArray = userDoc.data().orders || [];
          ordersArray.push({
            date,
            items: CartItem,
          });
    
          await setDoc(userRef, { orders: ordersArray }, { merge: true });
          dispatch(resetCart());
    
          // console.log("Your order has been successfully saved in " + docRef.id);
        } else {
          // If the user document doesn't exist, create it
          await setDoc(userRef, { orders: [{ date, items: CartItem }] });
          dispatch(resetCart());
    
          // console.log("User document created, and order has been saved.");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    else {
      setShoppingFirst(true)
    }
    };    
  
  return (
    <div className='pt-20 sm:pt-24 md:pt-30 w-full'>
        <BgHeader data="CheckOut"/>
        <div className="py-16 w-[90%] 2xl:w-[65%] mx-auto flex flex-col md:flex-row justify-between gap-x-4 gap-y-5">
            {/* user info */}
            {userAddress ? (
            <div className="md:w-[65%] flex flex-col gap-4">
              <h3>Your Shipping Address</h3>
              <input defaultValue={userAddress.Name} className='outline-none font-sans border-b border-b-slate-400 py-2 px-4' type="text" placeholder='Enter Your Name' />
              <input defaultValue={userAddress.anotherEmail} className='outline-none font-sans border-b border-b-slate-400 py-2 px-4' type="email" placeholder='Enter Your Email' />
              <input defaultValue={userAddress.phoneNumber} className='outline-none font-sans border-b border-b-slate-400 py-2 px-4' type="number" placeholder='Phone Number' />
              <input defaultValue={userAddress.address} className='outline-none font-sans border-b border-b-slate-400 py-2 px-4' type="text" placeholder='Address' />
              <input defaultValue={userAddress.city} className='outline-none font-sans border-b border-b-slate-400 py-2 px-4' type="text" placeholder='City' />

              <span>Want to Edit? go to <span className='underline hover:text-red-500 cursor-pointer'><Link to="/profile">Profile</Link></span></span>
            </div> 
            ):(
              <div className="flex justify-center items-center w-full text-2xl">Add Your Address in&nbsp;<Link className='underline hover:text-red-500' to="/profile">Profile</Link></div>
            )}
            {/* Payment Amount */}
            <div className="md:w-[35%] bg-red-100 py-5 px-8 h-fit">
              {shoppingFirst && <div className='text-center text-lg md:text-xl pb-3 text-red-500'>Shopping First</div>}
              <div className="flex justify-between pb-3">
                <span>Subtotal:</span>
                <span>₹{calculateTotalPrice()}</span>
              </div>
              <div className="flex justify-between pb-3">
                <span>Shipping:</span>
                <span>₹{shippingCost}</span>
              </div>
              <hr className="border border-slate-300 w-full" />
              <div className="flex justify-between pt-5 text-xl mb-5">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
            <span onClick={handlePayment} className='py-1 px-3 bg-red-500 text-white text-lg font-sans w-fit rounded-md cursor-pointer'>Payment</span>
            </div>
        </div>
      {userAddress ? (<div></div>) : (<div className='md:mb-14 2xl:mb-20'></div>) }
    </div>
  )
}

export default CheckOut