import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;

    try {

        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
          }),
        });
        
        const data = await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        console.log(data);
    } catch (error) {
        toast.error(error.message)
        
    }finally{
        setLoading(false)
    }
  };
  return {loading,signup}
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill all the feilds");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if(password.length <6){
    toast.error('password must ab at least 6 characters');
    return false;
  }

  return true;
}
