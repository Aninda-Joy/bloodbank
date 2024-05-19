export default function About() {
  return (
    <section className="">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Why choose us?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              We give you the best blood donation experience ever.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              Blood is the most precious gift that anyone can give to another.
              So we are here to help you to find the right donor for you.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Powerful API
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  use our api and get the data you need for your application for
                  Blood Donation.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Easy to integrate
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  its easy to integrate our api with your application. Just
                  follow the documentation.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Donate Blood
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Blood donation is a voluntary procedure that can help save the
                  lives of others. So donate blood and save life.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Free Blood
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Sometimes you have to give blood to get blood. So donate blood
                  and save life.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
