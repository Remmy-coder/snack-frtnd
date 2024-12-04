import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-50">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            One Platform, Two Solutions
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Simplifying Benefits for Retirees and Employers
          </p>
          <p className="text-gray-500 mb-8">
            Whether you're a retiree claiming your benefits or an employer
            submitting employee data for verification, we've got you covered
            with a secure and seamless experience.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button variant="green" className="px-6 py-3 rounded-none">
              Claim Your Benefits
            </Button>
            <Button variant="greenOutline" className="px-6 py-3 rounded-none">
              Upload Employee Data
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative">
            <img
              src="../../assests/images/Group 17.png"
              alt="Retirees and Employers"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100" id="about">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Retiree data processing{" "}
            <span className="text-green-600">made easy!</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-4">
              <img
                src="../../assests/icons/shield-check.svg"
                alt="Security Icon"
                //className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Secure and Reliable
            </h3>
            <p className="text-gray-600 mt-2">
              We prioritize your data security with advanced encryption and
              strict privacy protocols, ensuring that your information is always
              protected.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-4">
              <img
                src="../../assests/icons/users-profiles-03.svg"
                alt="User Friendly Icon"
                //className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              User-Friendly Experience
            </h3>
            <p className="text-gray-600 mt-2">
              Our platform is designed with simplicity in mind. Whether you're a
              retiree or an employer, the process is quick and easy, with clear
              instructions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-4">
              <img
                src="../../assests/icons/bank-note-05.svg"
                alt="Payments Icon"
                //className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Accurate and Timely Payments
            </h3>
            <p className="text-gray-600 mt-2">
              Payments are processed promptly and accurately with no delays,
              ensuring the benefits you've earned are delivered on time.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-4">
              <img
                src="../../assests/icons/book-02.svg"
                alt="Compliance Icon"
                //className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Comprehensive Compliance for Employers
            </h3>
            <p className="text-gray-600 mt-2">
              Meet all regulatory requirements by securely uploading employee
              data. Our platform removes the guesswork from compliance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-4">
              <img
                src="../../assests/icons/help-circle-contained.svg"
                alt="Support Icon"
                //className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-600 mt-2">
              Our dedicated support team is available around the clock to assist
              with any questions, ensuring a seamless experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
