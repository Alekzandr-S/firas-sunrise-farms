"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta36() {
  return (
    <section  className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="mb-5 size-12 md:mb-6"
                alt="Jaz logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Connect with our farm
            </h2>
            <p>
              Interested in our fresh produce? Reach out to learn more about our
              sustainable farming practices and product availability.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Order</Button>
              <Button variant="secondary">Inquire</Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                className="mb-5 size-12 md:mb-6"
                alt="Jaz logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Visit our farm
            </h2>
            <p>
              Schedule a tour and see firsthand how we grow and produce our
              high-quality agricultural products.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button variant="primary">Tour</Button>
              <Button variant="secondary">Learn</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
