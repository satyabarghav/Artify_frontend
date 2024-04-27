import React, { useState, useEffect } from 'react';
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/footer";
import Hero from "./Hero";
import AdminNavbar from "../Navbar/AdminNavbar";
import SellerNavbar from "../Navbar/SellerNav";
import Navbar from "../Navbar/Navbar";

export default function UserHome() {
  // Define user role state
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Retrieve user role from localStorage when component mounts
    const storedUserRole = localStorage.getItem('userRole');
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
  }, []);

  // Render different navbars based on user role
  const renderNavbar = () => {
    switch (userRole) {
      case 'admin':
        return <AdminNavbar />;
      case 'seller':
        return <SellerNavbar />;
      case 'buyer':
        return <UserNavbar />;
      default:
        return <Navbar />;
    }
  };

  return (
    <div>
      {renderNavbar()}
      <Hero />
      <Footer />
    </div>
  );
}
