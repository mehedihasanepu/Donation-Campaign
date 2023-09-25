import DonationCard from "./DonationCard";

const Donation = () => {
    const donationData = JSON.parse(localStorage.getItem("donations"));
    console.log(donationData);
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    donationData.map(cardDonationData => <DonationCard key={cardDonationData.id} cardDonationData={cardDonationData}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donation;