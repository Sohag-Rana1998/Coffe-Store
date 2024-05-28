const Banner2 = () => {
  return (
    <div>
      <div className="w-full h-[550px] bg-[url(https://i.postimg.cc/ry5bjTwj/3.png)] bg-no-repeat bg-cover bg-center flex items-center rounded-t-xl">
        <div className="w-full hidden md:block"></div>
        <div className="w-full space-y-4 p-5 md:p-3  md:pr-5">
          <h2 className="text-4xl font-bold text-white">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white">
            Its coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#E3B577] ">Learn More</button>
        </div>
      </div>

      <div>
        <div className="grid bg-[#ECEAE3] w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 px-5 md:px-52 py-8">
          <div>
            <img
              className="w-24 h-24"
              src="https://i.postimg.cc/5yGX7r1W/1.png"
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Awesome Aroma</h3>
              <p>
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-24 h-24"
              src="https://i.postimg.cc/J7gtW9w9/2.png"
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">High Quality</h3>
              <p>
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-24 h-24"
              src="https://i.postimg.cc/MGPffH4G/3.png"
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Pure Grades</h3>
              <p>
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-24 h-24"
              src="https://i.postimg.cc/br8PzHTS/4.png"
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Proper Roasting</h3>
              <p>
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
