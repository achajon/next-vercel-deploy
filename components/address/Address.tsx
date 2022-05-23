import { FC } from "react";
import PropTypes from "prop-types";
import LabelWithIcon from "../labelWithIcon/LabelWithIcon";

type Props = {
  address1?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  city?: string;
  stateAbbr?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  shortAddress?: boolean;
};

/** Component to display locations address including the country and phone
 *  TODO: support for different address format city, state postal code for different
 *  countries other than USA
 */
const Address: FC<Props> = ({
  address1,
  address2,
  address3,
  address4,
  city,
  stateAbbr,
  postalCode,
  country,
  phone,
  shortAddress,
}) => {
  return (
    <address className="mb-1">
      <ul className="list-unstyled mb-1">
        {address1 && <li className="address1">{address1}</li>}
        {!shortAddress && address2 && <li className="address2">{address2}</li>}
        {address3 && (
          <li className="address3" hidden>
            {address3}
          </li>
        )}
        {address4 && (
          <li className="address4" hidden>
            {address4}
          </li>
        )}
        <li>
          {city && <span className="city">{city}</span>}
          {city && (stateAbbr || postalCode) ? "," : ""}{" "}
          {stateAbbr && <span className="stateAbbr">{stateAbbr}</span>}{" "}
          {postalCode && <span className="postalCode">{postalCode}</span>}
        </li>
        {!shortAddress && (
          <li>{country && <span className="country">{country}</span>}</li>
        )}
        {!shortAddress && phone && (
          <li>
            <LabelWithIcon
              containerClass="mt-1"
              url={"tel:" + phone}
              title={phone}
              btIcon={{ btIconName: "telephone-outbound-fill", size: 16 }}
            />
          </li>
        )}
      </ul>
    </address>
  );
};

Address.propTypes = {
  /** Main street address */
  address1: PropTypes.string,
  /** Extra information like suite, office, etc */
  address2: PropTypes.string,
  /** City */
  city: PropTypes.string,
  /** Two letter state or province abbreviation */
  stateAbbr: PropTypes.string,
  /** Postal Code, Zip Code, etc. */
  postalCode: PropTypes.string,
  /** Full Name for the country */
  country: PropTypes.string,
  /** If this prop is present the phone will show as link with tel: */
  phone: PropTypes.string,
  /** if shortAddress = true, hides Address 2, Country and Phone fields*/
  shortAddress: PropTypes.bool.isRequired,
};

// Specifies the default values for props:
Address.defaultProps = {
  shortAddress: false,
};

export default Address;
