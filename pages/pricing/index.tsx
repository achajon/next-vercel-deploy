import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

const PricingPage = () => {
  return (
    <>
      <h1>Pricing Page</h1>

      <h1 className={"title"}>
        Ir a{" "}
        <Link href="/">
          <a>Home!</a>
        </Link>
      </h1>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </>
  );
};

export default PricingPage;

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return <MainLayout>{page}</MainLayout>;
};
