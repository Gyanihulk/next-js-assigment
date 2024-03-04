import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Akhil System pvt limited",
  description: "This is Sign Up page for Akhil System pvt limited",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
