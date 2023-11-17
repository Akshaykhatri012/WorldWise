import { useNavigate } from "react-router-dom";
import Button from "./Button";
function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault(); // we do not want page to reload bcoz we are in form page RN.
        navigate(-1); // to move one step back
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
