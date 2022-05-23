import { FC } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Image from "next/image";

const homepage = "/"; // process.env.REACT_APP_VIRTUAL_PATH;

type Props = {
  /** Object with information about the icon */
  btIcon: {
    /** Boostrap name of the icon (https://icons.getbootstrap.com/) */
    btIconName: string;
    /** size of the icon */
    size: number;
  };
  /** label title of the card */
  title?: string;
  url?: string;
  containerClass?: string;
  labelClass?: string;
  customIconUrl?: string;
  hiddenText?: string;
};

/**
 * Component to display a label with one boostrap Icon
 * , more icons: https://icons.getbootstrap.com/
 */
const LabelWithIcon: FC<Props> = ({
  btIcon: { btIconName, size },
  title,
  url,
  containerClass,
  labelClass,
  customIconUrl,
  hiddenText = "",
  ...rest
}) => {
  const [switchHiddenText, setSwitchHiddenText] = useState(!hiddenText);
  return (
    <div className={containerClass}>
      <div className="d-inline-block">
        {customIconUrl && (
          <Image
            className="mr-2"
            style={{ height: size, verticalAlign: "middle" }}
            src={customIconUrl}
            alt="icon"
          />
        )}
        {!customIconUrl && (
          <svg
            className="mr-2"
            width={size}
            height={size}
            // style={{ marginTop: "-0.4rem " }}
          >
            <use
              xlinkHref={`${homepage}images/b-icons/bootstrap-icons.svg#${btIconName}`}
            />
          </svg>
        )}
      </div>
      <span className={"align-middle " + labelClass}>
        {url && switchHiddenText ? (
          <a href={url} {...rest}>
            {title}
          </a>
        ) : hiddenText ? (
          <span
            {...rest}
            className="btn-link"
            onClick={() => setSwitchHiddenText(true)}
            role="button"
          >
            {hiddenText}
          </span>
        ) : (
          title
        )}
      </span>
    </div>
  );
};

LabelWithIcon.propTypes = {
  /** url address to the click */
  url: PropTypes.string,
  /** css class for the container */
  containerClass: PropTypes.string,
  /** css class for the label */
  labelClass: PropTypes.string,
};

// Specifies the default values for props:
LabelWithIcon.defaultProps = {
  containerClass: "",
  labelClass: "",
};

export default LabelWithIcon;
