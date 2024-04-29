import React, { useState, useEffect } from 'react';
import Navbar from "@/Pages/Navbar/Navbar";
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/footer";
import AdminNavbar from "../Navbar/AdminNavbar";
import SellerNavbar from "../Navbar/SellerNav";
import CardDemo from "./CardDemo";
import axios from "axios";
import config from '@/config';
export default function Shop() {
  const [userRole, setUserRole] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const storedUserRole = localStorage.getItem("userRole");
    if (storedUserRole) {
      setUserRole(storedUserRole);
    }
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${config.url}/getItems`);
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  const renderNavbar = () => {
    switch (userRole) {
      case "admin":
        return <AdminNavbar />;
      case "seller":
        return <SellerNavbar />;
      case "buyer":
        return <UserNavbar />;
      default:
        return <Navbar />;
    }
  };

  return (
    <div>
      {renderNavbar()}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {productData.filter(product => product.category === 'photography').map((product) => (
            <CardDemo
              key={product._id} 
              name={product.name}
              artist={product.artist}
              price={product.price}
              description={product.description}
              image={product.image} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
