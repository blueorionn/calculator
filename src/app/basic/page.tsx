import Header from "@/components/header/Header";
import BasicCalculator from "@/calculators/basic/BasicCalculator";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <Header headerMsg="Basic calculator" />
      <BasicCalculator />
      <Footer />
    </>
  );
}
