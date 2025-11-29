"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          FAQs
        </h2>
        <p className="md:text-md">
          Get answers to the most common questions about our farm and products.
        </p>
        <div className="mt-6 md:mt-8">
          <Button title="Contact" variant="secondary">
            Contact
          </Button>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              How are crops grown?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We use sustainable farming methods that prioritize soil health and
              minimal environmental impact. Our crops are grown using organic
              practices and carefully managed irrigation systems.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Are products certified?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our products meet strict quality standards. We work closely with
              local agricultural certification bodies to ensure our produce
              meets the highest safety and quality requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              What delivery options exist?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer local delivery and pickup options. Our farm-fresh
              products can be collected directly from our farm or delivered to
              select locations within our service area.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Do you offer bulk orders?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we accommodate bulk orders for restaurants, markets, and
              institutions. Contact our sales team to discuss specific
              requirements and pricing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Can I visit the farm?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We welcome visitors and offer scheduled farm tours. These tours
              provide insights into our sustainable agricultural practices and
              allow you to see our production firsthand.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
