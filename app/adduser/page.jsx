"use client";
import React, { useState } from "react";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

const About = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return alert("Please fill in all fields");
    }
    let obj = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      id: nanoid(),
    };
    dispatch(addUser(obj));
    router.push("/");
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div>
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default About;
