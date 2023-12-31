
import { useEffect, useState } from "react";
import bannerImg from "../../../assets/image/bg-img.png"

import Card from "../../Card/Card";
const Banner = () => {
    const [searchInput, setSearchInput] = useState([]);
    const [donationData, setDonationData] = useState([]);
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonationData(data))
    }, [])
    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setSearchResult(data))
    }, [])
    const handleSearch = (event) => {
        setSearchInput(event.target.value);
    }
    const handleSearchBtn = () => {
        const getSearchData = donationData.filter((item) => item.category.toLowerCase() === searchInput.toLowerCase());
        if (getSearchData) {
            setSearchResult(getSearchData);
        }
        else (
            setSearchResult(donationData)
        )
    }
    return (
        <div>
            <div className="relative">
                <div  >
                    <img className="h-48 md:h-full" src={bannerImg} alt="" />
                </div>
                <div className=" min-h-full min-w-full bg-base-200 absolute top-0 left-0 bg-opacity-80">
                    <div className="hero-content  text-center">
                        <div className="mt-5 md:mt-24 lg:mt-44">
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-5">I Grow By Helping People In Need</h1>
                            <input type="text" placeholder="Search here...." className=" w-44 md:w-auto py-2 pl-3 pr-1 md:pr-36 md:py-3 md:px-5 border rounded-l-lg" onChange={handleSearch}
                            />
                            <button onClick={handleSearchBtn} className="px-2 py-2 md:px-6 md:py-3 bg-[#FF444A] rounded-e-lg text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 static ">

                {
                    searchResult.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Banner



