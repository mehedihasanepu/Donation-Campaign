import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const DonationCard = ({ cardDonationData }) => {
    const { id, card_img, title, category, category_bg_color, text_and_btn_bg_color, price } = cardDonationData;

    return (
        <div className="mt-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-72 h-64" src={card_img} alt="Donation img" /></figure>

                <div className="pl-5 pt-10 space-y-2">
                    <span style={{ backgroundColor: `${category_bg_color}`, color: `${text_and_btn_bg_color}` }} className="w-fit px-3 py-1 rounded-md font-semibold">{category}</span>

                    <h2 className="text-2xl font-semibold">{title}</h2>

                    <h2 style={{ color: `${text_and_btn_bg_color}` }} className="text-lg font-semibold">{price}</h2>

                    <Link to={`/donation_details/${id}`}>
                        <button style={{ backgroundColor: `${text_and_btn_bg_color}` }} className="text-white w-fit px-4 lg:px-10 py-2 rounded-md font-semibold" >View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
DonationCard.propTypes = {
    cardDonationData: PropTypes.object.isRequired
}
export default DonationCard;