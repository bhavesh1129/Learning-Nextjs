import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center px-4 py-2 lg:px-6">
            <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
              <p className="text-xs font-medium md:text-sm">
                Lorem ipsum dolor sit amet consectetur.
                <span className="ml-2 cursor-pointer font-bold">Read More &rarr;</span>
              </p>
            </div>
            <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who really cares about your business
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam nulla aperiam quo
              possimus, nihil molestiae modi tenetur esse qui repudiandae cum fuga aspernatur ea?
            </p>
          </div>
          <div className="rounded-lg bg-gray-200 mt-6 p-4">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              alt="Banner Image"
            />
          </div>
        </div>
      </div>

      <section className="pt-28 mb-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl  text-center">
            <div className="isolate flex justify-center -space-x-2">
              <img
                className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://images.pexels.com/photos/977402/pexels-photo-977402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dan_Abromov"
              />
              <img
                className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
                alt="Guillermo_Rauch"
              />
              <img
                className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
                alt="Lee_Robinson"
              />
              <img
                className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white"
                src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
                alt="Delba"
              />
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-black sm:text-4xl lg:mt-12 lg:text-5xl">
              Join <span className="border-b-8 border-yellow-300">5,482</span> other developers
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-gray-600 md:mt-10 lg:text-xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis.
            </p>
          </div>
        </div>
      </section>
      <hr />

      <Footer />
    </>
  )
}
