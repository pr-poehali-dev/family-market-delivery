import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";
import AboutSection from "@/components/AboutSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Banner />
          <ProductList />
          <AboutSection />
          <OrderForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
