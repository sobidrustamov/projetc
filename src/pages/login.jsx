const Login = () => {
  return (
    <div className="p-5 md:px-[100px] bg-slate-50">
      <div className="grid md:grid-cols-2 items-center shadow-2xl rounded-2xl py-3 bg-white">
        <div className="flex items-center justify-center">
          <img
            className="w-[50%] md:w-[80%]"
            src="https://img.freepik.com/premium-vector/cleaning-service-man-with-scrubber-machine-male-janitor-cartoon-character_338371-878.jpg?w=740"
            alt="11"
          />
        </div>
        <div className="flex flex-col p-8 items-center gap-2 justify-center">
          <h2 className="font-medium text-4xl">Xush kelibsiz!</h2>
          <form className="w-full md:w-[80%]">
            <div className="flex flex-col my-4 gap-1">
              <label htmlFor="username">Username</label>
              <input
                className="border py-2 px-4 rounded-2xl outline-none"
                id="username"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col my-4 gap-1">
              <label htmlFor="password">Password</label>
              <input
                className="border py-2 px-4 rounded-2xl outline-none"
                id="password"
                type="password"
                required
              />
            </div>
            <div className="my-6">
              <button className="w-full bg-blue-600 text-white p-3 rounded-2xl">
                Kirish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
