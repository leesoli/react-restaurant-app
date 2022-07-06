import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {Link} from "react-router-dom";
import chefPhoto from "../../../images/mitya-ivanov-Pq64mh1H2WA-unsplash.jpg";
import sobaPhoto from "../../../images/charlesdeluvio-nAV0ojj-m4k-unsplash.jpg";
import data from "../data.json";
import MenuItem from "../component/Menu-items";
import {setUnderline} from "../helper";

export default function Home () {
  const favMenu = [data[5], data[2], data[0]];

  return (
    <main className="homepage">
      <section className="homepage-newsletter">
        <p>We will be closed on <strong>July 3-4th</strong> in observance of <strong>Independence Day</strong>.</p>
      </section>

      <section className="homepage-intro">
        <h2 className="homepage-intro-title">Traditional Japanese buckwheat noodles, made entirely from scratch.</h2>
        <img src={chefPhoto} alt="chef cutting soba noodles into thin pieces"></img>
        <div className="homepage-intro-column-2">
          <p>Nutty and earthy in flavor, soba noodles are made of buckwheat and are incredibly nutritious and healthy. Enjoy this simple dish anyway you like, hot or cold. Vegan or non-vegan, there's food for everyone!</p>
          <img src={sobaPhoto} alt="bowl of cold soba noodles freshly served"></img>
        </div>
      </section>

      <section className="mini-menu-container">
        <h3>Some of Our Favorites</h3>
        <div className="mini-menu-item-container">
          {favMenu.map(item => <MenuItem key={item.id} item={item} />)}
        </div>
        <Link
          to="/menu"
          onClick={() => setUnderline("menu")}
          className="menu-link"
        >
          See Full Menu
        </Link>
      </section>

      <section className="homepage-recruiting">
        <span>Join our team -</span>
        <h2>{`We're currently accepting resumes for assistant cook and server positions. `}
         <br></br>
          <Link
            to="/contact"
            className="recruiting-link"
            onClick={() => setUnderline("contact")}
          >
            Reach out <BsArrowRight />
          </Link>
        </h2>
      </section>
    </main>
  )
}