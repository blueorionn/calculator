import Header from "@/components/Header";
import BasicCalculator from "@/calculators/basic/BasicCalculator";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header headerMsg="Basic calculator" />
      <BasicCalculator />
      <Footer />
    </>
  );
}
