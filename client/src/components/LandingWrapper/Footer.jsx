export function Footer({
  props
}) {

  return (
    <footer className="grid bg-primary-default px-4 py-8 md:grid-cols-2 md:px-24">
      <div className="flex flex-col space-y-5 pb-8 md:pb-0 text-center md:text-left">
        <div className="flex flex-row space-x-3 items-center justify-center md:justify-start">
          <img src="/footerLogo.png" alt="Footer Logo" />
          <p className="text-xl font-semibold">Comet Proxies</p>
        </div>
        <p className="text-[#C4D6EA]">
          © 2022 Comet Proxies | All Rights Reserved.
        </p>
      </div>
      <div className="font-lg flex flex-row space-x-6 md:space-x-24 items-center justify-center">
        <div>
          <p className="pb-5 font-semibold">Legal</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="trans text-[#C4D6EA] hover:text-white hover:underline"
          >
            Privacy Policy
          </a><br />
          <a
            href="/TOS.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="trans text-[#C4D6EA] hover:text-white hover:underline"
          >
            Terms & Conditions
          </a>
        </div>
        <div>
          <p className="pb-5 font-semibold">Contact</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="trans text-[#C4D6EA] hover:text-white hover:underline"
          >
            Support
          </a> <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="trans text-[#C4D6EA] hover:text-white hover:underline"
          >
            General Inquiries
          </a>
        </div>
      </div>
    </footer>
  );
}