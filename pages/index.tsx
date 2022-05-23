import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import Address from "../components/address/Address";
import CardWrapper from "../components/cardWrapper/CardWrapper";

const HomePage = () => {
  return (
    <MainLayout>
      <h1>I am in the Home Page</h1>
      <CardWrapper>
        <Address
          address1="Address 1"
          address2="Address 2"
          address3="Address 3"
          address4="Address 4"
          city="Branburg"
          stateAbbr="NJ"
          postalCode="08876"
          country="United States"
          phone="(201) 1235-58469"
          shortAddress={false}
        ></Address>
      </CardWrapper>
      <h1 className={"title"}>
        Ir a{" "}
        <Link href={{ pathname: "/about/", query: { name: "Alex" } }}>
          <a>About!</a>
        </Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
};

export default HomePage;
