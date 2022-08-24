export function Contact({
  props
}) {
  return (
    <section
      className="flex w-full items-center justify-center px-1 py-16 md:py-32"
      id="features"
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="space-y-3">
          <h2 className="text-center text-3xl font-medium text-primary-default">
            Contact Us
          </h2>
          <h3 className="text-center text-5xl font-semibold text-white">
            Still Have Questions
          </h3>
        </div>
        <div className="mt-12 w-full">
          <form action="" className="w-full space-y-5">
            <div className="flex flex-col space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
              <div className="w-full flex-col space-y-2">
                <label className="text-xl text-[#8FA2AD]">Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="trans w-full rounded-md border-2 border-[#232525] bg-[#0B0D10] p-3 text-xl font-medium placeholder-[#535F66] hover:border-[#478BC9] focus:outline-none"
                />
              </div>
              <div className="w-full flex-col space-y-2">
                <label className="text-xl text-[#8FA2AD]">Email Address</label>
                <input
                  type="email"
                  placeholder="johnsmith@email.com"
                  className="trans w-full rounded-md border-2 border-[#232525] bg-[#0B0D10] p-3 text-xl font-medium placeholder-[#535F66] hover:border-[#478BC9] focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full flex-col space-y-2">
              <label className="text-xl text-[#8FA2AD]">Your Message</label>
              <textarea
                type="text"
                placeholder="Enter a message ..."
                className="trans flex h-40 w-full resize-none items-start justify-start rounded-md border-2 border-[#232525] bg-[#0B0D10] p-3 text-xl font-medium placeholder-[#535F66] hover:border-[#478BC9] focus:outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
              <p className="text-[#8FA2AD] text-xl text-center md:text-right">
                We will aim to respond to your inquiry within 24 hours.
              </p>
              <button className="trans rounded-md bg-primary-default py-3 px-24 text-lg font-semibold hover:bg-primary-light">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}