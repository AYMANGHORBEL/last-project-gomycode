import React from "react";
import Footer from "./Footer";
import ProductList from "./products/ProductList";

const Home = () => {
  return (
    <div>
      <img
        src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/323286931_701984321596600_5976347263085537699_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=W8nLTb487ooAX8CGAYE&_nc_ht=scontent.ftun15-1.fna&oh=00_AfBrelQUJGbKSbWXhQ-KDnNmXTqCs7snBkWJukQUGuGfYA&oe=640F6C38"
        width="100%"
        height={550}
        alt=""
        srcset=""
      />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
