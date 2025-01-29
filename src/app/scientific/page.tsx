import Header from "@/components/header/Header";
import ScientificCalculator from "@/calculators/scientific/ScientificCalculator";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <Header headerMsg="Scientific calculator" />
      <ScientificCalculator />
      <Footer />
    </>
  );
}
