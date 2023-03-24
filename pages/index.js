import dynamic from "next/dynamic";
import Blog from "../src/components/Blog";
import Home from "../src/components/Home";
// import Testimonials from "../src/components/Testimonials";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Meesto | Home</title>
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      <Testimonials />
      <Blog />
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};
export default Index;
