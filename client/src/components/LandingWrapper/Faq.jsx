import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export function Faq({
  props
}) {

  return (
    <div id="faq" className="mx-auto w-full max-w-6xl px-4 pt-32">
      <div>
        <div className="space-y-3">
          <h2 className="text-center text-3xl font-medium text-primary-default">
            FAQ
          </h2>
          <h3 className="text-center text-5xl font-semibold text-white">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="border-gradient-b-faq mx-auto mt-10 w-full space-y-5">
          <Disclosure
            defaultOpen="true"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2">
                <Disclosure.Button
                  className={`font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${
                    open
                      ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>When are plans delivered?</span>
                  <FaChevronDown
                    className={`${
                      open
                        ? "trans rotate-180 transform fill-[#8497AE]"
                        : "fill-[#8497AE]"
                    } h-5 w-5 min-w-[1.25rem] max-w-[1.25rem] `}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg">
                    <span>
                      Plans are usually delivered immediately after purchase,
                      but may take up to 1 hour during busy periods. If you have
                      not received your plan, please join our{" "}
                      <a
                        href="https://discord.gg/KJnHtqfZHD"
                        target="_blank"
                        className="trans text-primary-light hover:text-primary-default hover:underline"
                        rel="noopener noreferrer"
                      >
                        Discord
                      </a>{" "}
                      and create a ticket, so we can get the issue sorted.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2">
                <Disclosure.Button
                  className={`font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${
                    open
                      ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>How long does residential data last?</span>
                  <FaChevronDown
                    className={`${
                      open
                        ? "trans rotate-180 transform fill-[#8497AE]"
                        : "fill-[#8497AE]"
                    } h-5 w-5 min-w-[1.25rem] max-w-[1.25rem]`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg">
                    <span>
                      You have up to 60 days from purchase to use your data.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2">
                <Disclosure.Button
                  className={`font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${
                    open
                      ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>What sites do you support?</span>
                  <FaChevronDown
                    className={`${
                      open
                        ? "trans rotate-180 transform fill-[#8497AE]"
                        : "fill-[#8497AE]"
                    } h-5 w-5 min-w-[1.25rem] max-w-[1.25rem] `}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg">
                    <span>
                      Although we cannot guarantee supported sites due to the
                      nature of proxy protection, our proxies should work on
                      sites such as Yeezy Supply, Nike, Shopify, Footsites,
                      Walmart, Target, etc.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2">
                <Disclosure.Button
                  className={`font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${
                    open
                      ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>How do I receive a refund?</span>
                  <FaChevronDown
                    className={`${
                      open
                        ? "trans rotate-180 transform fill-[#8497AE]"
                        : "fill-[#8497AE]"
                    } h-5 w-5 min-w-[1.25rem] max-w-[1.25rem]`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg">
                    <span>
                      As per our{" "}
                      <a
                        href="https://discord.gg/KJnHtqfZHD"
                        target="_blank"
                        className="trans text-primary-light hover:text-primary-default hover:underline"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </a>{" "}
                      , all sales are final. However, if you have an issue with
                      the proxies, please join our{" "}
                      <a
                        href="https://discord.gg/KJnHtqfZHD"
                        target="_blank"
                        className="trans text-primary-light hover:text-primary-default hover:underline"
                        rel="noopener noreferrer"
                      >
                        Discord
                      </a>{" "}
                      and create a ticket. We'll help you out.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2">
                <Disclosure.Button
                  className={`font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${
                    open
                      ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>
                    Where can I find a more detailed FAQ for each product?
                  </span>
                  <FaChevronDown
                    className={`${
                      open
                        ? "trans rotate-180 transform fill-[#8497AE]"
                        : "fill-[#8497AE]"
                    }  h-5 w-5 min-w-[1.25rem] max-w-[1.25rem]`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg">
                    <span>
                      That can be found in our{" "}
                      <a
                        href="https://discord.gg/KJnHtqfZHD"
                        target="_blank"
                        className="trans text-primary-light hover:text-primary-default hover:underline"
                        rel="noopener noreferrer"
                      >
                        Discord
                      </a>{" "}
                      under #residential-info and #isp-info.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {({ open }) => (
              <div className="trans mx-auto w-full rounded-xl bg-[#1B1F25] p-8 ring-[#478BC9] hover:ring-2">
                <Disclosure.Button
                  className={`font-metBold flex w-full items-center justify-between space-x-4 text-left text-xl focus:outline-none ${
                    open
                      ? "rounded-t-2xl bg-[#1B1F25] bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>
                    My question isn't listed. How do I get further help?
                  </span>
                  <FaChevronDown
                    className={`${
                      open
                        ? "trans rotate-180 transform fill-[#8497AE]"
                        : "fill-[#8497AE]"
                    } h-5 w-5 min-w-min min-w-[1.25rem] max-w-[1.25rem] `}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-in-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-100 ease-in-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="text-faqTxt rounded-b-2xl bg-[#1B1F25] pt-5 text-base md:text-lg">
                    <span>
                      Please join our{" "}
                      <a
                        href="https://discord.gg/KJnHtqfZHD"
                        target="_blank"
                        className="trans text-primary-light hover:text-primary-default hover:underline"
                        rel="noopener noreferrer"
                      >
                        Discord
                      </a>{" "}
                      and create a ticket. Our dedicated staff team will help
                      you right away.
                    </span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}