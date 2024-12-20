import FloatingLabelInput from "@/components/ui/FloatingLabelInput";

const Register = () => {


  return ( 
    <div className="fom">
      <div
        className="min-h-screen bg-no-repeat bg-cover text-gray-900 flex justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1729277133095-bff46b56c29a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 rounded-l-lg  bg-indigo-100 text-center hidden lg:flex">
            <div
              className="rounded-l-lg  bg-center w-full  bg-cover bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1542317854-f9596ae570f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div></div>
            <div className=" flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div className="w-full flex-1 mt-5">
                <div className="mx-auto flex flex-col gap-8 max-w-xs">
                  <FloatingLabelInput
                    id="FullName"
                    label="Full Name"
                    placeholder="Enter your Full Name"
                    type="text"
                  />

                  <FloatingLabelInput
                    id="email"
                    label="Email"
                    placeholder="Enter your email"
                    type="Email"
                  />

                  <FloatingLabelInput
                    id="Phone Number"
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    type="tel"
                  />

                  <FloatingLabelInput
                    id="password"
                    label="password"
                    placeholder="Enter your password"
                    type="password"
                  />

                  <div className="">
                    <input
                      id="example1"
                      type="file"
                      className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                    />
                  </div>

                  <button className="mt-3 tracking-wide font-semibold bg-yellow-300 text-black-100 w-full py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <div className=" border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      If you have already an account-
                      <a href="login" className=" text-blue-900">Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
