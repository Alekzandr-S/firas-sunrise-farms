'use client'
import React from "react";
import { Header98 } from "./sections/Header";
import { Layout141 } from "./sections/Layout-01";
import { Layout394 } from "./sections/Layout-02";
import { Testimonial13 } from "./sections/Testimonial";
import { Cta36 } from "./sections/Cta";
import { Faq6 } from "./sections/Faq";
import { Layout022 } from "../dairy/components";
import dynamic from "next/dynamic";

const Layout518 = dynamic(() => import("./sections/Layout-03"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Header98 />
      <Layout141 />
      <Layout394 />
      <Layout518 />
      <Testimonial13 />
      <Cta36 />
      {/* <Faq6 /> */}
    </>
  );
}
