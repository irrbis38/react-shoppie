const CheckColorButton: React.FC<{ btnColor: string }> = ({
  btnColor = 'red',
}) => {
  return (
    <button
      name="color"
      className="color__btn"
      style={{ backgroundColor: btnColor }}
      data-color={btnColor}
    >
      <img src="/react-shoppie/icons/check.svg" alt="check" />
    </button>
  );
};

export default CheckColorButton;
