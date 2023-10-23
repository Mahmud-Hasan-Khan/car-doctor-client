import PropTypes from 'prop-types';

const SectionTitle = ({ subheading, heading, info }) => {
    return (
        <div className="mx-auto flex flex-col items-center justify-center">
            <h6 className="text-xl text-[#FF3811] font-bold">{subheading}</h6>
            <h2 className="text-5xl font-bold text-[#151515]">{heading}</h2>
            <p className="text-[#737373] text-center mt-5 mb-12 lg:w-[620px]">{info}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    subheading: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    optionalNode: PropTypes.node,
}

export default SectionTitle;