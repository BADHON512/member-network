import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user,isAuthenticate } = useSelector((state) => state.user);
  console.log(user);
  if (!isAuthenticate) {
    if(isAuthenticate){
   return <Navigate to={'/collect-bill' } replace/>
    }else{
      return <Navigate to={'/login' } replace/>
    }
  }else{
    return children;
  }
}
