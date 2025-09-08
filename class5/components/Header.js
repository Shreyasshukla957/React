 function Header() {
  return (
    <div id="heading">
     
        <img
          id="logo"
          src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/a607a625-5e5c-5541-a6d0-83b27d82beda/5e66167b-a22f-52f9-bfbb-c2564bcb45cc.jpg"
          
        />
      

      <div className="option">
        <button className="but">MEN</button>
        <button className="but">WOMEN</button>
        <button className="but">KIDS</button>
        <button className="but">HOME</button>
        <button className="but">BEAUTY</button>
        <button className="but">STUDIO</button>
      </div>

      <input placeholder="Search for products brands and more"></input>

      <div>
        <button>Profiles</button>
        <button>Wishlist</button>
        <button>Bag</button>
      </div>

    </div>

  );
}


export default Header;