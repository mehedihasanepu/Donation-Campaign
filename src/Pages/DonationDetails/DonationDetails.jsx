import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const DonationDetails = () => {
    const [donation, setDonation] = useState([])

    const { id } = useParams();
    const idInt = parseInt(id)
    const donationData = useLoaderData();

    useEffect(() => {
        const findDonation = donationData.find(donation => donation.id === idInt);
        setDonation(findDonation)
    }, [donationData, idInt])
    const { img, title, text_and_btn_bg_color, description, price } = donation;


    const handleAddToDonation = () => {

        const addedDonations = [];

        const donationData = JSON.parse(localStorage.getItem("donations"));

        if (!donationData) {
            addedDonations.push(donation);
            localStorage.setItem("donations", JSON.stringify(addedDonations));
            Swal.fire({
                icon: 'success',
                title: 'Thanks',
                text: `You Donated ${price}`
            })
        }

        else {
            const isDonationExits = donationData.find((donation) => donation.id === idInt);

            if (!isDonationExits) {

                addedDonations.push(...donationData, donation);
                localStorage.setItem("donations", JSON.stringify(addedDonations));
                Swal.fire({
                    icon: 'success',
                    title: 'Thanks',
                    text: `You Donated ${price}`
                })

            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry',
                    text: 'Already Donated',
                })
            }
        }
    }

    return (
        <div>
            <div className="relative">
                <img src={img} className="w-full h-72 md:h-[610px]" alt="" />
                <div className=" absolute bottom-0 pl-10 py-8 bg-black bg-opacity-30 w-full">
                    <button onClick={handleAddToDonation} style={{ backgroundColor: `${text_and_btn_bg_color}` }} className="text-white w-fit px-4 py-3 rounded-md font-semibold" >Donate {price}</button>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-4xl font-semibold py-5">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;