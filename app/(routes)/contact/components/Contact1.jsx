"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fadeIn } from "@/hooks/variants";
import {
  // Checkbox,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { motion } from "motion/react";
import { Checkbox } from "@/components/ui/checkbox";

export function Contact6() {
  return (
    <section id="JazSystems" className="bg-orange-light px-[5%] py-16 md:py-24 lg:py-28">
      <div className="sm:container  grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <motion.p 
              className="mb-3 font-semibold md:mb-4"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >Connect</motion.p>
            <motion.h2 
              className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="md:text-md"
              variants={fadeIn('center', 0.23)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              We'd love to hear from you. Reach out today!
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <BiEnvelope className="size-6 flex-none" />
              <p>info@firasfarms.com</p>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <BiPhone className="size-6 flex-none" />
              <p>+260 (95) 004-590</p>
            </motion.div>
            <motion.div 
              className="flex items-center gap-4"
              variants={fadeIn('center', 0.25)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <BiMap className="size-6 flex-none" />
              <p>Farm No.20, Buchetekolo Community, Off Mumbwa Rd, Lusaka</p>
            </motion.div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First Name
              </Label>
              <Input type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last Name
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone Number
              </Label>
              <Input type="text" id="phone" />
            </div>
          </motion.div>
          <motion.div 
            className="grid w-full items-center"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Label className="mb-2">Select a Topic</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose one..." />
              </SelectTrigger>
              <SelectContent className="bg-mint-dark">
                <SelectItem value="inquiry">Inquiry`</SelectItem>
                <SelectItem value="purchase">Purchase</SelectItem>
                <SelectItem value="tour">Tour</SelectItem>
                <SelectItem value="donate">Donate</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          {/* <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Your Role Here</Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Student Inquiry" id="#first_choice" />
                <Label htmlFor="#first_choice">Student Inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#second_choice" />
                <Label htmlFor="#second_choice">Internship Interest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#third_choice" />
                <Label htmlFor="#third_choice">General Question</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#fourth_choice" />
                <Label htmlFor="#fourth_choice">Feedback Request</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#fifth_choice" />
                <Label htmlFor="#fifth_choice">Other Inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="First choice" id="#other" />
                <Label htmlFor="#other">Other</Label>
              </div>
            </RadioGroup>
          </div> */}
          <motion.div 
            className="grid w-full items-center"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Label htmlFor="message" className="mb-25">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Write your message..."
              className="min-h-[11.25rem] overflow-auto"
            />
          </motion.div>
          <motion.div 
            className="mb-3 flex items-center space-x-2 text-sm md:mb-4"
            variants={fadeIn('center', 0.25)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
          >
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the Terms
            </Label>
          </motion.div>
          <div>
            <Button variant="secondary" title="Submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
