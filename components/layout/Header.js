import { Grid, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

import {ConnectButton} from '@rainbow-me/rainbowkit';
import Router from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ color = false, ...props }) {
  const [phoneMenuShow, setPhoneMenuShow] = useState(false);
  const toggleDrawer = (show) => () => {
    setPhoneMenuShow(show);
  };
  const navitem = [
    { to: "/", label: "home" },
    { to: "/", label: "contact us" },
  ];
  
  return (
    <div
      className={`fixed w-full ${
        color ? "bg-white" : "bg-white md:bg-white"
      } z-50 py-2 px-0 md:px-20`}
    >
      <Grid container className="items-center">
        <Grid item lg={3} md={3} sm={4} xs={4}>
          <div
            className="cursor-pointer text-3xl text-black font-bold"
            onClick={() => {
              Router.push("/");
            }}
          >
            Donate
          </div>
        </Grid>

        <Grid
          item
          lg={3}
          md={3}
          sm={0}
          xs={0}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="m-auto w-fit flex flex-row items-center space-x-4">
            <img src="/images/phoneIcon.png"></img>
            <div className="flex flex-col">
              <div className="text-black text-lg font-bold">
                +1 111-222-3333
              </div>
              <div className="text-base text-black text-opacity-70">
                Call us for any question
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={0}
          xs={0}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="m-auto w-fit flex flex-row items-center space-x-4">
            <img src="/images/LocationIcon.png"></img>
            <div className="flex flex-col">
              <div className="text-black text-lg font-bold">New York</div>
              <div className="text-base text-black text-opacity-70">
                1051 Texas
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={3}
          md={3}
          sm={6}
          xs={6}
        >
          <div className="flex justify-end">
            <ConnectButton />
          </div>
        </Grid>
        <Grid
          item
          lg={0}
          md={0}
          sm={2}
          xs={2}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <div
            className=" pr-2 flex justify-end"
            onClick={() => {
              setPhoneMenuShow(!phoneMenuShow);
            }}
          >
            <MenuIcon />
          </div>
        </Grid>
      </Grid>
      {phoneMenuShow == true ? (
        <div className="fixed top-0 h-full w-full">
          <div className="fixed bg-gray-200 h-screen w-full">
            <div className="flex justify-end pr-4 py-3">
              <img
                src="/images/closeIcon.svg"
                className="h-8"
                onClick={toggleDrawer(false)}
              ></img>
            </div>
            {navitem.map((items, itemIndex) => (
              <div
                className="mx-4 py-4 border-b border-blue_gray border-opacity-10"
                key={itemIndex}
              >
                <div
                  onClick={() => {
                    setPhoneMenuShow(!phoneMenuShow);
                    Router.push(items.to);
                  }}
                >
                  <div className="text-black text-lg text-left">
                    {items?.label ?? ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <></>
        </div>
      ) : null}
    </div>
  );
}
