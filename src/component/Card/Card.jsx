import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({data }) => {
    const { id, img, title, category, card_bg_color, category_bg_color, text_and_btn_bg_color } = data;
    return (
        <div>
            <Link to={`/donation_details/${id}`}>
                <div className="card card-compact bg-base-100 shadow-xl" style={{ backgroundColor: `${card_bg_color}` }}>
                    <figure><img src={img} alt="Card img" /></figure>
                    <div className="card-body">
                        <span style={{ backgroundColor: `${category_bg_color}`, color: `${text_and_btn_bg_color}` }} className="w-fit px-3 py-1 rounded-md font-semibold">{category}</span>
                        <h2 style={{ color: `${text_and_btn_bg_color}` }} className="text-xl font-semibold">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};
Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card;