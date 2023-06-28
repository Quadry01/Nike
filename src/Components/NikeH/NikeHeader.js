import nike from "../../images/logo/nike-logo.svg";
import cart from "../../images/logo/cart.svg";
import like from "../../images/logo/like.svg";
import search from "../../images/logo/search.svg";
import "./NikeHeader.css";
import SideBar from "./SideBar";
import { Tween } from "jquery";
function NikeHeader() {
  return (
    <div>
      <div className="NikeHeader navbar">
        <img className="nike-logo" src={nike} alt="Nike logo"></img>

        <div className="dropdown">
          <button className="dropbtn">New & Featured</button>
          <div className="dropdown-content">
            <div
              className="feature-wrapper"
              initial={{ height: 0 }}
              animate={{ height: "350px" }}
              transition={{ delay: 0.2, duration: 0.5, type: Tween }}
            >
              <div className="Feature1">
                <h4 className="subsection-header">Featured</h4>
                <a href="Blank">Shop All New Arrivals</a>
                <a href="Blank">New Shoes</a>
                <a href="Blank">New Clothing</a>
                <a href="Blank">SNEAKERS lunch calendar</a>
                <a href="Blank">Membber Shop</a>
                <a href="Blank">Fleece Shop</a>
                <a href="Blank">Bestseller</a>
              </div>
              <div className="feature2">
                <h4 className="subsection-header">Shop Icon</h4>
                <a href="Blank">Air Force 1</a>
                <a href="Blank">Air Jordan 1</a>
                <a href="Blank">Air Max</a>
                <a href="Blank">Dunk</a>
                <a href="Blank">Blaze</a>
                <a href="Blank">Pagasus</a>
                <a href="Blank">Mercurial</a>
              </div>

              <div className="feature3">
                <h4 className="subsection-header">Best Reads</h4>
                <a href="Blank">.Swoosh</a>
                <a href="Blank">Jordan Collection</a>
                <a href="Blank">Nike SD The Vault</a>
                <a href="Blank">Sustainability</a>
                <a href="Blank">
                  Trained Podcast - Body <br /> Positivity
                </a>
                <a href="Blank">
                  Never Done Making History <br />
                  Tigerballes
                </a>
                <a href="Blank">Bust Through Any Metal</a>
                <a href="Blank">Block</a>
              </div>

              <div className="feature2">
                <h4 className="subsection-header">Nike Stories</h4>
                <a href="Blank">All Stories</a>
                <a href="Blank">Athletes</a>
                <a href="Blank">
                  Department of Nike Achives <br /> (DNA)
                </a>
                <a href="Blank">Coaching</a>
                <a href="Blank">Culture</a>
                <a href="Blank">Innovation</a>
                <a href="Blank">Community</a>
              </div>
            </div>
          </div>
        </div>
        {/* Men Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Men</button>
          <div className="dropdown-content">
            <div id="fade-in" className="men-wrapper">
              <div className="men1">
                <h4 className="subsection-header"> Feature</h4>
                <a href="Blank">New Releases</a>
                <a href="Blank">SNKRS Lunch Calendar</a>
                <a href="Blank">Fleece Shop</a>
                <a href="Blank">Best seller</a>
              </div>

              <div className="men2">
                <h4 className="subsection-header"> Shoes</h4>
                <a href="Blank">All Shoes</a>
                <a href="Blank">Lifestyle</a>
                <a href="Blank">Jordan</a>
                <a href="Blank">Running</a>
                <a href="Blank">Football</a>
                <a href="Blank">Basketball</a>
                <a href="Blank">Trainning and Gym</a>
                <a href="Blank">Skateboarding</a>
                <a href="Blank">Nike By You</a>
              </div>

              <div className="men3">
                <h4 className="subsection-header"> Clothing</h4>
                <a href="Blank">All Clothing</a>
                <a href="Blank">Hoodies and Sweatshirts</a>
                <a href="Blank">FTracksuits</a>
                <a href="Blank">Jackets</a>
                <a href="Blank">Trousers and Tights</a>
                <a href="Blank">Shorts</a>
                <a href="Blank">Kit and Jersey</a>
              </div>

              <div className="men4">
                <h4 className="subsection-header"> Shop By Sports</h4>
                <a href="Blank">All Sports</a>
                <a href="Blank">Running</a>
                <a href="Blank">Football</a>
                <a href="Blank">Basketball</a>
                <a href="Blank">Training and Gym</a>
                <a href="Blank">Tennis</a>
                <a href="Blank">Golf</a>
              </div>

              <div className="men5">
                <h4 className="subsection-header">
                  Accessories and <br /> Equipment
                </h4>
                <a href="Blank">
                  All Accessories and <br />
                  Equipment
                </a>
                <a href="Blank">Bags and Backpack</a>
                <a href="Blank">Socks</a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Women</button>
          <div className="dropdown-content">
            <div>
              <div id="fade-in" className="women-wrapper">
                <div className="women1">
                  <h4 className="subsection-header"> Feature</h4>
                  <a href="Blank">New Releases</a>
                  <a href="Blank">SNKRS Lunch Calendar</a>
                  <a href="Blank">Fleece Shop</a>
                  <a href="Blank">Best seller</a>
                </div>

                <div className="women2">
                  <h4 className="subsection-header"> Shoes</h4>
                  <a href="Blank">All Shoes</a>
                  <a href="Blank">Lifestyle</a>
                  <a href="Blank">Jordan</a>
                  <a href="Blank">Running</a>
                  <a href="Blank">Football</a>
                  <a href="Blank">Basketball</a>
                  <a href="Blank">Trainning and Gym</a>
                  <a href="Blank">Skateboarding</a>
                  <a href="Blank">Nike By You</a>
                </div>

                <div className="women3">
                  <h4 className="subsection-header"> Clothing</h4>
                  <a href="Blank">All Clothing</a>
                  <a href="Blank">Hoodies and Sweatshirts</a>
                  <a href="Blank">FTracksuits</a>
                  <a href="Blank">Jackets</a>
                  <a href="Blank">Trousers </a>
                  <a href="Blank">Leggings</a>
                  <a href="Blank">Matching Sets</a>
                  <a href="Blank">Tops and Tshirts</a>
                  <a href="Blank">Shorts</a>
                  <a href="Blank">Sport Bras</a>
                  <a href="Blank">Skirts and Dresses</a>
                </div>

                <div className="women4">
                  <h4 className="subsection-header"> Shop By Sports</h4>
                  <a href="Blank">All Sports</a>
                  <a href="Blank">Running</a>
                  <a href="Blank">Basketball</a>
                  <a href="Blank">Training and Gym</a>
                  <a href="Blank">Tennis</a>
                  <a href="Blank">Football</a>
                  <a href="Blank">Yoga</a>
                  <a href="Blank">Dance</a>
                </div>
                <div className="women5">
                  <h4 className="subsection-header">
                    Accessories and <br />
                    Equipment
                  </h4>
                  <a href="Blank">
                    All Accessories and <br />
                    Equipment
                  </a>
                  <a href="Blank">Bags and Backpack</a>
                  <a href="Blank">Socks</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Kids</button>
          <div className="dropdown-content">
            <div id="fade-in" className="kid-wrapper">
              <div className="kid1">
                <h4 className="subsection-header"> Feature</h4>
                <a href="Blank">New Releases</a>
                <a href="Blank">Fleece Shop</a>
                <a href="Blank">Best seller</a>
              </div>

              <div className="kid2">
                <h4 className="subsection-header"> Shoes</h4>
                <a href="Blank">All Shoes</a>
                <a href="Blank">Lifestyle</a>
                <a href="Blank">Jordan</a>
                <a href="Blank">Running</a>
                <a href="Blank">Football</a>
                <a href="Blank">Basketball</a>
              </div>

              <div className="kid3">
                <h4 className="subsection-header"> Clothing</h4>
                <a href="Blank">All Clothing</a>
                <a href="Blank">Hoodies and Sweatshirts</a>
                <a href="Blank">Tracksuits</a>
                <a href="Blank">Trousers and Leggings</a>
                <a href="Blank">Jackets</a>
                <a href="Blank">tops and T-shirts</a>
                <a href="Blank">Kit and Jersey</a>
                <a href="Blank">Sports Clothing</a>
                <a href="Blank">Shorts</a>
                <a href="Blank">Sport Bras</a>
                <a href="Blank">Skirts and Dresses</a>
              </div>

              <div className="kid4">
                <h4 className="subsection-header"> Kids by Age</h4>
                <a href="Blank">Older Kids (7 - 15 years)</a>
                <a href="Blank">Younger Kids(3 - 7 years)</a>
                <a href="Blank">Baby and Todllers(0 - 3 years)</a>
              </div>

              <div className="kid5">
                <h4 className="subsection-header">
                  Accessories and <br />
                  Equipment
                </h4>
                <a href="Blank">
                  All Accessories and <br />
                  Equipment
                </a>
                <a href="Blank">Bags and Backpack</a>
                <a href="Blank">Socks</a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Sale</button>
          <div className="dropdown-content">
            <div id="fade-in" className="sale-wrapper">
              <div className="sale1">
                <h4 className="subsection-header"> Feature</h4>
                <a href="Blank">Shop All Sale</a>
                <a href="Blank">Bestsellers</a>
              </div>

              <div className="sale2">
                <h4 className="subsection-header"> Sale for Men</h4>
                <a href="Blank">Shop All Sale Men's</a>
                <a href="Blank">Shoes</a>
                <a href="Blank">Clothing</a>
                <a href="Blank">Accessories and Equipment</a>
              </div>

              <div className="sale3">
                <h4 className="subsection-header"> Sale for Women</h4>
                <a href="Blank">Shop All Sale Women's</a>
                <a href="Blank">Shoes</a>
                <a href="Blank">Clothing</a>
                <a href="Blank">Accessories and Equipment</a>
              </div>

              <div className="sale4">
                <h4 className="subsection-header"> Sales for Kids</h4>
                <a href="Blank">Shop All Sale Kids'</a>
                <a href="Blank">Shoes</a>
                <a href="Blank">Clothing</a>
                <a href="Blank">Accessories and Equipment</a>
              </div>

              <div className="sale5">
                <h4 className="subsection-header"> Sale by Sport</h4>
                <a href="Blank">Running</a>
                <a href="Blank">Football</a>
                <a href="Blank">Gym and Training</a>
                <a href="Blank">Basketball</a>
                <a href="Blank">Tennis</a>
                <a href="Blank">Golf</a>
                <a href="Blank">Yoga</a>
              </div>
            </div>
          </div>
        </div>

        <div className=" search-div">
          <label className="label-search">
            <img className="search-icon" src={search} alt="search icon"></img>
            <input
              className="search-input"
              type="input"
              placeholder="Search"
            ></input>
          </label>
        </div>

        <img className="like-icon" src={like} alt="like icon"></img>
        <img className="cart-icon" src={cart} alt="cart icon"></img>
      </div>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="paylater">
        <p className="paylater-p">Introducing Afterpay, Shop Now, Pay Later.</p>
      </div>
    </div>
  );
}

export default NikeHeader;
