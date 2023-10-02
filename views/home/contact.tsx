"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiOutlineSmallDash } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TContact } from "@/lib/types";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const handleOnSubmit: SubmitHandler<Inputs> = async (values: TContact) => {
    setLoading(true);
    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await res.json();
    if (!res.ok) {
      toast.error("Something went wrong!");
    }
    toast.success("Message sent successfully!");
    setLoading(false);
  };

  type Inputs = {
    email: string;
    subject: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="mt-10">
      <div className="mx-4 md:mx-12">
        {/* contact form with name, email, phone, subject, message */}
        <AiOutlineSmallDash className="text-4xl" />
        <h2 className="text-xl font-bold hover:underline hover:underline-offset-4">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center place-items-center">
          <div className="mt-6 md:mt-0">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-4">
              <Image
                src={"/icon.png"}
                alt="Abdi Zamed"
                className="h-full w-full rounded-full object-cover object-top"
                width={128}
                height={128}
                style={{
                  filter: "grayscale(40%)",
                }}
                quality={100}
              />
            </div>
            <h3 className="py-1 text-xl font-bold ">Abdi Zamed</h3>
            <p className="text-sm font-light">Software Engineer</p>
          </div>

          <form className="w-full" onSubmit={handleSubmit(handleOnSubmit)}>
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>

            <Input
              placeholder="email (example@gmail.com)"
              className="my-2"
              {...register("email", { required: true })}
            />

            <Label htmlFor="subject">
              Subject <span className="text-red-500">*</span>
            </Label>

            <Input
              placeholder="subject ( example: I want to hire you)"
              className="my-2"
              {...register("subject", { required: true })}
            />

            <Label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </Label>

            <Textarea
              placeholder="message ( example: Hello Abdi, I want to hire you for my project)"
              className="my-2"
              {...register("message", { required: true })}
            />

            <div className="my-2 flex justify-end">
              <Button loading={loading} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
