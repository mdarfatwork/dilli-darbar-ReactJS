import React, { useEffect, useState, useRef } from "react";
import BgHeader from "../components/reused/BgHeader";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Profile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [formData, setFormData] = useState({
    displayName: "",
    anotherEmail: "",
    phoneNumber: "",
    address: "",
    city: "",
  });

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const cityInputRef = useRef(null);

  useEffect(() => {
    document.title = "Profile - Dilli Darbar";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await setDoc(doc(db, "usersAddress", user.uid), {
        uid: user.uid,
        UserEmail: user.reloadUserInfo.email,
        Name: formData.displayName,
        anotherEmail: formData.anotherEmail,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
      });
      console.log("Your address successfully saved in " + docRef);

      setFormData({
        displayName: "",
        anotherEmail: "",
        phoneNumber: "",
        address: "",
        city: "",
      });

      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      phoneInputRef.current.value = "";
      addressInputRef.current.value = "";
      cityInputRef.current.value = "";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-30 w-full">
      <BgHeader data="Profile" />
      <div className="w-[90%] 2xl:w-[65%] mx-auto py-5 flex flex-col gap-5">
        <span className="text-lg text-gray-600">
          Email: {user.reloadUserInfo.email}
        </span>
        <h1 className="text-2xl font-bold">Your Address</h1>
        <form onSubmit={handleSubmit} className="md:w-[69%] flex flex-col gap-4" >
          <h3>Shipping Address</h3>
          <input ref={nameInputRef} required className="outline-none font-sans border-b border-b-slate-400 py-2 px-4" type="text" name="displayName" placeholder="Enter Your Name" value={formData.displayName} onChange={handleChange} />
          <input ref={emailInputRef} required className="outline-none font-sans border-b border-b-slate-400 py-2 px-4" type="email" name="anotherEmail" placeholder="Enter Your Email" value={formData.anotherEmail} onChange={handleChange} />
          <input ref={phoneInputRef} required className="outline-none font-sans border-b border-b-slate-400 py-2 px-4" type="number" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
          <input ref={addressInputRef} required className="outline-none font-sans border-b border-b-slate-400 py-2 px-4" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
          <input ref={cityInputRef} required className="outline-none font-sans border-b border-b-slate-400 py-2 px-4" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
          <button type="submit" className="py-1 px-3 bg-red-500 text-white text-lg font-sans w-fit rounded-md cursor-pointer">Save My Address</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
