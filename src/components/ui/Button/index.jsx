import PropTypes from 'prop-types';

const SubmitButton = ({ label, onClick, type, borderColor, backgroundColor }) => (
  <div className="flex justify-center mt-[65px] mb-10">
    <button
      type={type}
      onClick={onClick}
      className={`w-[100px] h-[39px] border rounded-[6px] text-white hover:shadow-xl transition-all duration-300 active:bg-violet-700 border-${borderColor} bg-${backgroundColor}`}
    >
      {label}
    </button>
  </div>
);

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default SubmitButton;