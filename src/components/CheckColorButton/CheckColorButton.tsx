const CheckColorButton: React.FC<{
  onColorChange: clickButtonHandler;
  color: string;
  btnColor: string;
}> = ({ onColorChange, color, btnColor }) => {
  return (
    <button
      name="color"
      className={
        color === localStorage.getItem("filterByColor")
          ? "color__btn active"
          : "color__btn"
      }
      style={{ backgroundColor: btnColor }}
      data-color={btnColor}
      onClick={(e) => onColorChange(e)}
    >
      <img src="/react-shoppie/icons/check.svg" alt="check" />
    </button>
  );
};

export default CheckColorButton;
