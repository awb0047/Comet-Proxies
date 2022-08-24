import Stars from '../../images/landing/stars.png';
import Cubes from '../../images/landing/cubes.png';
import Uptime from '../../images/landing/uptime.png';

export function Features({
  props
}) {

  return (
    <section
      className="flex w-full items-center justify-center px-1 py-16 md:py-32"
      id="features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <h2 className="text-center text-3xl font-medium text-primary-default">
            Features
          </h2>
          <h3 className="text-center text-5xl font-semibold text-white">
            Powering your setup.
          </h3>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 text-center md:grid-cols-3">
          <div class="flex flex-col space-y-6 overflow-hidden rounded-3xl border border-[#232525] bg-transparent">
            <div>
              <img src={Uptime} alt="" className="w-full" />
            </div>
            <div className="space-y-5 pb-6">
              <p className="text-3xl font-semibold">99.9% Uptime</p>
              <p className="text-lg font-medium text-[#8FA2AD]">
                Never worry about your proxies going down when you need them
                most.
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-6 overflow-hidden rounded-3xl border border-[#232525] bg-transparent">
            <div>
             <img src={Cubes} alt="" className="w-full" />
            </div>
            <div className="space-y-5 pb-6">
              <p className="text-3xl font-semibold">Private Resi IP Pools</p>
              <p className="text-lg font-medium text-[#8FA2AD]">
                Access our private pool of IPs, which are constantly updated, to
                stay ahead of the competition.
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-6 overflow-hidden rounded-3xl border border-[#232525] bg-transparent">
            <div>
              <img src={Stars} alt="" className="w-full" />
            </div>
            <div className="space-y-5 pb-6">
              <p className="text-3xl font-semibold">Best-In-Class ISPs</p>
              <p className="text-lg font-medium text-[#8FA2AD]">
                Stay tuned for further updates on our ISPs. Currently testing.
                Coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}