"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseIcon,
  InboxArrowDownIcon,
  BookOpenIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/solid";
import {
  FaTwitter,
  FaLinkedin,
  FaFileDownload,
  FaFacebook,
  FaGithub,
  FaBook,
} from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { AiOutlineSmallDash } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TContact } from "@/lib/types";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { About, Contact, Hero, Links } from "@/views/home";

export default function Home() {
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
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="max-w-4xl mt-4 mx-auto relative">
      <Hero />

      <Links />

      <Separator className="mt-6" />

      <About />

      <Contact />
    </div>
  );
}
