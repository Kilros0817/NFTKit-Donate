import React, { useState, useEffect } from "react";
import { Container, Divider, Grid } from "@mui/material";
import Router from "next/router";
export default function Footer({ ...props }) {
  return (
    <>
      <div className="w-full h-full bg-[#F5F5F5] p-4 md:px-12 flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <div className="flex justify-center md:justify-start py-4">
            <div className="text-black text-2xl font-bold">Donate Test</div>
          </div>
          <div className="text-xl text-[#353535] text-center md:text-left break-words">
            I am very happy with the makrov task vnade tasonde. Hemiskade I am
            very happy with the makrov task vnade tasonde. Hemiskade
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-2/3 space-x-8 flex flex-row justify-around">
            <ul>
              <p className="text-2xl text-[#030303] font-bold py-4">
                Quick Links
              </p>
              <li
                className="text-xl text-[#353535] cursor-pointer py-2"
                onClick={() => {
                  Router.push("/about_us");
                }}
              >
                About Us
              </li>
              <li className="text-xl text-[#353535] cursor-pointer py-2">
                For Business
              </li>
              <li className="text-xl text-[#353535] cursor-pointer py-2">
                News
              </li>
            </ul>
            <ul>
              <p className="text-2xl text-[#030303] font-bold py-4">Connect</p>
              <li
                className="text-xl text-[#353535] cursor-pointer py-2"
                onClick={() => {
                  Router.push("/blog");
                }}
              >
                Blog
              </li>
              <li
                className="text-xl text-[#353535] cursor-pointer py-2"
                onClick={() => {
                  Router.push("/teams");
                }}
              >
                Contact Us
              </li>
            </ul>
            <ul>
              <p className="text-2xl text-[#030303] font-bold py-4">Legal</p>
              <li
                className="text-xl text-[#353535] cursor-pointer py-2"
                onClick={() => {
                  Router.push("/teams");
                }}
              >
                Terms of Service
              </li>
              <li className="text-xl text-[#353535] cursor-pointer py-2">
                Privacy Policy
              </li>
              <li className="text-xl text-[#353535] cursor-pointer py-2">
                Cookies
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 space-x-4 flex flex-row justify-center md:justify-end p-4 md:p-0">
            <img src="/images/twitter.svg" className="h-8"></img>
            <img src="/images/github.svg" className="h-8"></img>
            <img src="/images/website.svg" className="h-8"></img>
            <img src="/images/instagram.svg" className="h-8"></img>
            <img src="/images/linkedin.svg" className="h-8"></img>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#F5F5F5] p-4 md:px-12 text-center md:text-left">
        @1999-2022 Design
      </div>
    </>
  );
}
