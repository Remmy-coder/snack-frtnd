import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { CircleArrowUp } from "lucide-react";

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
              className="w-full max-w-md "
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
      <section className="pt-16" id="how">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            How it <span className="text-green-600">works</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Follow these easy steps to get started
          </p>
        </div>

        <div className="flex items-center justify-between gap-8">
          <img
            src="../../assests/images/file (11).png"
            alt="Retiree"
            className="w-1/5 h-96 object-cover  mt-60"
          />
          <Tabs defaultValue="step1" className="w-full max-w-4xl flex-grow">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
              <TabsTrigger
                value="step1"
                className="data-[state=active]:bg-white data-[state=active]:text-green-600"
              >
                Retiree
              </TabsTrigger>
              <TabsTrigger
                value="step2"
                className="data-[state=active]:bg-white data-[state=active]:text-green-600"
              >
                PFA
              </TabsTrigger>
              <TabsTrigger
                value="step3"
                className="data-[state=active]:bg-white data-[state=active]:text-green-600"
              >
                MDA
              </TabsTrigger>
            </TabsList>
            <TabsContent value="step1">
              <div className="flex flex-col items-start space-y-8 p-8">
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-gray-600">
                      Start by creating an account. You’ll be asked to provide
                      basic personal information to get started.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Submit Employment History
                    </h3>
                    <p className="text-gray-600">
                      Enter relevant employment details through a simple, guided
                      form. This information helps verify your eligibility for
                      retirement payments.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Verify and Confirm
                    </h3>
                    <p className="text-gray-600">
                      Once submitted, your information is reviewed for accuracy.
                      Additional verification documents may be required.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Receive Your Benefits
                    </h3>
                    <p className="text-gray-600">
                      Once your history is confirmed, you can begin receiving
                      your retirement payments seamlessly, right into your bank
                      account.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>{" "}
            <TabsContent value="step2">
              <div className="flex flex-col items-start space-y-8 p-8">
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Verify Retiree Information
                    </h3>
                    <p className="text-gray-600">
                      As a PFA, your role is to review and verify the employment
                      history submitted by retirees. Cross-check the data
                      provided to ensure it aligns with official records,
                      ensuring accuracy and eligibility.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Capture Biometric Data
                    </h3>
                    <p className="text-gray-600">
                      Once the retirees employment details have been verified,
                      PFAs are responsible for capturing biometric data, such as
                      fingerprints and facial recognition. This added layer of
                      security helps prevent fraud and ensures the authenticity
                      of the retiree's claims.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Submit and Approve
                    </h3>
                    <p className="text-gray-600">
                      After validating the information and capturing biometrics,
                      submit the data to the platform for final approval. This
                      step ensures that the retiree can start receiving their
                      payments seamlessly.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="step3">
              <div className="flex flex-col items-start space-y-8 p-8">
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Upload Employee Records
                    </h3>
                    <p className="text-gray-600">
                      Employers can log in and upload employee data for
                      compliance and verification purposes. This helps ensure
                      that former employees records are correctly matched to
                      receive retirement benefits.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Review and Validate
                    </h3>
                    <p className="text-gray-600">
                      Our platform automatically validates the uploaded records
                      against internal databases, making sure the information is
                      accurate and up to date.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Ensure Compliance
                    </h3>
                    <p className="text-gray-600">
                      By completing this process, youll meet regulatory
                      requirements while ensuring your employees have access to
                      the benefits they ve earned.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <img
            src="../../assests/images/file (9).png"
            alt="Retiree"
            className="w-1/6 h-96 object-cover mt-60"
          />
        </div>
      </section>
      <footer className="mt-0">
        <div className="bg-[#066523]">
          <div className="flex justify-between">
            <div className="w-1/3 my-10 ml-10 flex flex-col">
              <small className="text-white font-bold">Address</small>
              <small className="text-white">
                123 Maple Street, Springfield, IL 62704, Lagos
              </small>
            </div>
            <div className="my-10 flex flex-col">
              <small className="text-white font-bold">Info</small>
              <small className="text-white my-3">About</small>
              <small className="text-white">How it works</small>
            </div>
            <div className="my-10 flex flex-col">
              <small className="text-white font-bold">Contact us</small>
              <small className="text-white my-3 flex">
                0800-125 -500-6266{" "}
                <CircleArrowUp className="ml-40 text-white" />
              </small>
              <small className="text-white">info@abcd.com.ng</small>
            </div>
            <div className="flex  w-25 items-center"></div>
          </div>
          <hr className="mx-10 text-gray-100 mb-4" />
          <div className="flex justify-between">
            <small className="ml-10 text-white mb-8">
              Powered by StellarSync Technology © 2024
            </small>
            <small className="mr-10 text-white mb-8">v.1.0.0</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
