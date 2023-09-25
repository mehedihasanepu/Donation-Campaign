
const Banner = () => {
    return (
        <div>
            <div className="relative">
                <div>
                    <img src="/src/assets/image/bg-img.png" alt="" />
                </div>
                <div className=" min-h-full min-w-full bg-base-200 absolute top-0 left-0 bg-opacity-70">
                    <div className="hero-content  text-center">
                        <div className="mt-5 md:mt-24 lg:mt-44">
                            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold pb-5">I Grow By Helping People In Need</h1>
                            <input type="search"
                                placeholder="Search here...."
                                className=" pr-12 py-2 px-3  md:pr-36 md:py-3 md:px-5 border rounded-l-lg"
                            />
                            <button className="px-2 py-2 md:px-6 md:py-3 bg-[#FF444A] rounded-e-lg text-white">Search</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Banner;