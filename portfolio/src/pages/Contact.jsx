import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertBox from "../components/AlertBox";
import Linkedin from "../assets/images/linkedin.png";
import Gmail from "../assets/images/gmail.png";
import { IoPersonSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoIosMailOpen } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";


function Contact() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z]{5,}$/, "atleast 5 characters"),
    mail: Yup.string()
      .required("Email is required")
      .matches(/^[a-zA-Z0-9.]{5,}@[a-z]{3,}\.com$/, "Enter valid Email address"),
    message: Yup.string()
      .required("Message is required")
      .matches(/^(?=.*[A-Za-z0-9])[A-Za-z0-9., ]{2,}$/, "Minimum 2 Characters required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function handleData(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("mail", data.mail);
    formData.append("message", data.message);
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/contact/",
        formData,
      );
      if(res.status === 201){
        setMessage("Submitted successfully!")
        setAlert(true)
      }
    } catch (e) {
      setMessage("Failed to submit.Try again later!")
      setAlert(true)
      console.error(e);
    }
  }

  function close(){
    setLoading(false)
    navigate("/")
  }
  return (
    <div className="bg-[#F5F5F5] flex items-center justify-center min-h-screen py-10">
      {
       alert && <AlertBox message={message} onclose={close}/>
      }
      <div className="flex flex-col items-center justify-center py-5 max-w-6xl w-full  md:bg-[#6298DA]/50 rounded-lg md:mt-15">
        <div className="flex flex-col items-center gap-5 m-5"><div className="flex items-center gap-2">
          <IoIosMailOpen className="text-2xl md:text-5xl text-gray-800"/>
          <h1 className="text-3xl md:text-6xl font-semibold">Contact</h1>
          </div>
          <p className="md:w-[50%] text-sm md:text-lg break-all text-gray-800">
            I am available for full-time roles and freelance projects. If you
            are hiring, I would love to discuss how I can contribute to your
            team.
          </p>
        </div>
        <div className="bg-gray-300 sm:w-120 p-10 rounded-lg [&>form>div]:flex [&>form>div]:flex-col [&>form>div]:my-5 [&>form>div>input]:border-b [&>form>div>input]:p-2 [&>form>div>input]:outline-0 [&>form>div>div>label]:font-semibold [&>form>div>div>label]:text-lg [&>form>div>div>label>sup]:text-red-600 [&>form>div>div]:flex [&>form>div>div]:items-center [&>form>div>div]:gap-2 [&>form>div]:relative [&>form>div>span]:text-sm [&>form>div>span]:text-red-600 [&>form>div>span]:absolute [&>form>div>span]:top-full">
          <form onSubmit={handleSubmit(handleData)}>
            <div className="">
              <div className="">
                <IoPersonSharp />
                <label>
                  Name <sup>*</sup>
                </label>
              </div>

              <input
                type="text"
                placeholder="Enter Fullname"
                {...register("name")}
              />
              <span className="absolute top-full">{errors?.name?.message}</span>
            </div>
            <div>
              <div>
                <IoMail />

                <label>
                  Email<sup>*</sup>
                </label>
              </div>
              <input
                type="text"
                placeholder="Enter Email Address"
                {...register("mail")}
              />
              <span>{errors?.mail?.message}</span>
            </div>
            <div className="">
              <div>
                <BiSolidMessageAltDetail />
                <label>
                  Message<sup>*</sup>
                </label>
              </div>
              <textarea
                placeholder="Enter your message here"
                className="resize-none border-b outline-0 overflow-hidden"
                {...register("message")}
                minLength={2}
              ></textarea>
              <span>{errors?.message?.message}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6298DA] p-2 rounded mt-6 font-semibold hover:bg-[#6298DA]/80 hover:"
              disabled={loading}
            >
              {loading ? "Loading.." : "Submit"}
            </button>
          </form>
        </div>
        <div className="flex justify-center gap-5 [&>a>img]:w-15 mt-5 [&>a>img]:hover:scale-105  [&>a>img]:transition">
          <Link to="https://www.linkedin.com/in/gokulg28/" title="LinkedIn">
            <img src={Linkedin} alt="linkedin" />
          </Link>
          <Link to="mailto:jormungandr.deathx@gmail.com">
            <img src={Gmail} alt="gmail" title="Gmail"/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
