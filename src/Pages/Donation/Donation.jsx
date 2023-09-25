import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [donationData, setDonationData] = useState([]);
    const [noData, setNoData] = useState('');
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        const donationCardData = JSON.parse(localStorage.getItem('donations'));
        if (donationCardData) {
            setDonationData(donationCardData)
        }
        else {
            setNoData('No data')
        }
    }, [setDonationData])

    const handleRemoveBtn = () => {
        localStorage.clear(); setDonationData([]); setNoData('No data')
    }
    return (
        <div>
            <div className="text-right">

                {
                    donationData.length > 0 &&
                    <button onClick={handleRemoveBtn} className="bg-[#FF444A] text-white font-semibold px-4 py-2 rounded-lg">Delete all</button>

                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {isShow ?
                    donationData.map(cardDonationData => <DonationCard key={cardDonationData.id} cardDonationData={cardDonationData}></DonationCard>) :
                    donationData.slice(0, 4).map(cardDonationData => <DonationCard key={cardDonationData.id} cardDonationData={cardDonationData}></DonationCard>)
                }
            </div>
            {
                noData &&
                <p>{noData}</p>

            }

            <div className="text-center my-6">
                {donationData.length > 4 &&
                    <button className="bg-[#009444] text-white font-semibold px-6 py-3 rounded-lg" onClick={() => setIsShow(!isShow)}>
                        {!isShow ?
                            <p >See All</p>
                            : <p>See Less</p>}
                    </button>
                }
            </div>

        </div>
    );
};

export default Donation;