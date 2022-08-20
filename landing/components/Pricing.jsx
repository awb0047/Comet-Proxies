const Pricing = () => {
  return (
    <section
      className="flex w-full items-center justify-center px-1 py-16 md:py-32"
      id="features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-center text-3xl font-medium text-primary-default">
            Pricing
          </h2>
          <h3 className="text-center text-5xl font-semibold text-white">
            Made for your needs and beyond.
          </h3>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div class="flex w-full flex-col space-y-6 overflow-hidden rounded-3xl border border-[#232525] bg-black p-9">
            <div className="flex flex-col space-y-4 border-b-2 border-[#232525] pb-9">
              <p className="text-3xl font-semibold text-[#D6DBE3]">
                Residential
              </p>
              <p className="text-5xl font-medium text-primary-default">
                $85.00
              </p>
            </div>
            <ol className="flex-1 space-y-3 py-4 text-xl font-medium text-[#9197A0]">
              <li>Access to Comet Proxies private IP pool</li>
              <li>60 day expiration</li>
              <li>99.9% uptime</li>
              <li>Optimized for United States users</li>
              <li>User:pass authentication, with no IP-auth required</li>
              <li>24/7 support in Comet Proxies Discord server </li>
            </ol>
            <div className="flex flex-col space-y-3">
              <select
                className="form-select trans rounded-md border-2 border-[#232525] bg-black px-4 py-3 text-[#A6BCC8] hover:bg-[#232525] focus:outline-none"
                name="residential"
                id="residential"
              >
                <option value="200">200 IPs | 5GB | $85</option>
                <option value="400">400 IPs | 10GB | $160</option>
                <option value="400">600 IPs | 20GB | $300</option>
                <option value="800">800 IPs | 30GB | $420</option>
                <option value="1000">1000 IPs | 40GB | $520</option>
                <option value="1200">1200 IPs | 50GB | $600</option>
              </select>
              <button className="trans rounded-md bg-primary-default py-3 px-16 text-lg font-semibold hover:bg-primary-light">
                Purchase
              </button>
            </div>
          </div>
          <div class="grid place-content-center space-y-6 overflow-hidden rounded-3xl border border-[#232525] bg-black p-9 text-center">
            <div>
              <p className="text-3xl font-semibold text-[#D6DBE3]">ISPs</p>
              <p className="pt-2 text-xl font-medium text-[#9197A0]">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
