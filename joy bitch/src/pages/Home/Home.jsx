/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import header from "../../assets/search.png";
import { AddBlood } from "../AddBlood/AddBlood";
export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <main className="text-gray-900">
          <section className=" ">
            <div className="container mx-auto px-8 lg:flex">
              <div className="text-center lg:text-left lg:w-1/2 pt-20">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                  Search People for Blood!
                </h1>
                <p className="text-xl lg:text-2xl mt-6 font-light">
                  Find blood donors in your area. Register as a donor and save
                  lives. We are in this together.
                </p>
                <p className="mt-8 md:mt-12">
                  <button
                    onClick={() => {
                      navigate("/find-bloods");
                    }}
                    type="button"
                    className=" py-4 px-12 bg-teal-500 hover:bg-teal-600 rounded text-white"
                  >
                    Find Bloods
                  </button>
                </p>
                <p className="mt-4 text-gray-600">
                  life is in blood, donate blood save life
                </p>
              </div>
              <div className="lg:w-1/3 lg:mx-auto pt-10 ">
                <img className="w-full" src={header} alt="" />
              </div>
            </div>
          </section>

          <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
            <h3 className="text-5xl font-semibold">Ready to Become a Donor?</h3>
            <p className="mt-8 text-xl font-light">
              Register as a donor and save lives. Blood donation is a voluntary
              procedure that can help save the lives of others.
            </p>
            <div className="mt-8">
              <AddBlood />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
