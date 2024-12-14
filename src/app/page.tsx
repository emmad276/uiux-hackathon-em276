
import Header from "./components/header";
import Company from "./components/company";
import ProductCard from "./components/card";
import Categories from "./components/categories";
import HotCategory from "./components/hotcategory";
import OurProducts from "./components/ourproducts";

export default function Home() {
  return (
    <div>
      <Header/>
      <Company/>
      <ProductCard/>
      <Categories/>
      <HotCategory/>
      <OurProducts/>

    </div>
  );
}
