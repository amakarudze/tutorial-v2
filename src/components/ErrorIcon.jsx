import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorIcon() {
  return (
    <FontAwesomeIcon
      icon={faCircleExclamation}
      style={{ color: "red", width: "1em", height: "1em" }}
    />
  );
}