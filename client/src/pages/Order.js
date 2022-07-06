import React, {useContext, useState, useEffect} from "react";
import OrderItems from "../component/Order-items";
import {Context} from "../Context";

export default function Order () {

  const {orderItems} = useContext(Context);
  const [category, changeCategory] = useState("all");
  const [catItems, setCategoryItems] = useState([]);

  useEffect(() => {
    setCategoryItems(orderItems);
  }, []);

  useEffect(()=> {
  }, [catItems]);

  function handleClick(cat) {
    changeCategory(cat);
    setCategoryItems(orderItems.filter(item => item.category === cat));
  }

  function renderItems() {
    if (category === "all") {
      return orderItems.map(item => {
        return (
          <OrderItems item={item} key={item.id} />
        )
      });
    } else {
      if (catItems.length >= 3) {
        return catItems.map(item => {
          return (
            <OrderItems item={item} key={item.id} />
          );
        });
      } else {
        return (
          <div className="small-container">
            {catItems.map(item => <OrderItems item={item} key={item.id} />)}
          </div>
        );
      }
    }
  }

  function setUnderline (category) {
    document.querySelector(".active-filter").classList.remove("active-filter");
    document.querySelector(`.category__${category}`).classList.add("active-filter");
  }

  return (
    <main className="order-page">
      <div className="order-category">
        <span
          className="category-items active-filter category__all"
          onClick={() => {
            handleClick("all");
            setUnderline("all");
          }}
        >All</span>

        <span
          className="category-items  category__appetizers"
          onClick={() => {
            handleClick("appetizers");
            setUnderline("appetizers");
          }}
          >Appetizers </span>

        <span
          className="category-items  category__donburi"
          onClick={() => {
            handleClick("donburi");
            setUnderline("donburi");
          }}
        >Donburi</span>

        <span
          className="category-items  category__cold-noodles"
          onClick={() => {
            handleClick("cold noodles");
            setUnderline("cold-noodles");
          }}
        >Cold Noodles</span>
      </div>
      <div className="order-container">
      {renderItems()}
      </div>
    </main>
  )
}