var comboset = [
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_1024x1024.jpg?v=1647863372",
      name:"NicoLips Lip Scrub & LipBalm Combo For Dry, Chapped & Da..",
      reviews:"★★★★★",
      treviews:"2300 Reviews",
      stPrice:"Rs. 675",
      price:538,
      save:"(Save Rs. 137)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-Women-_-Men_1024x1024.jpg?v=1647342718",
      name:"DeoWhite Natural Under Arm Skin Whitening Roll-On Deo..",
      reviews:"★★★★★",
      treviews:"435 Reviews",
      stPrice:"Rs. 398",
      price:349,
      save:"(Save Rs. 49)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-02_1024x1024.jpg?v=1647345121",
      name:"NicoLips Lip Lightening Scrub For Dry & Chapped Lips - Pa.. ",
      reviews:"★★★★★",
      treviews:"2255 Reviews",
      stPrice:"Rs. 900",
      price:699,
      save:"(Save Rs. 201)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/12_1_1024x1024.jpg?v=1632397421",
      name:"Aroma Candles 4 X 60g each, 100% Pure Soy Wax Vanilla..",
      reviews:"★★★★★",
      treviews:"299 Reviews",
      stPrice:"Rs. 499",
      price:399,
      save:"(Save Rs. 100)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Glowner_1024x1024.jpg?v=1643781091",
      name:"Pore Minimizing Combo - Face Wash and Face Toner",
      reviews:"★★★★★",
      treviews:"1156 Reviews",
      stPrice:"Rs. 548",
      price:465,
      save:"(Save Rs. 83)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-02_1024x1024.jpg?v=1647345121",
      name:"NicoLips Lip Lightening Scrub For Dry & Chapped Lips - Pa.. ",
      reviews:"★★★★★",
      treviews:"2255 Reviews",
      stPrice:"Rs. 900",
      price:699,
      save:"(Save Rs. 201)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/12_1_1024x1024.jpg?v=1632397421",
      name:"Aroma Candles 4 X 60g each, 100% Pure Soy Wax Vanilla..",
      reviews:"★★★★★",
      treviews:"299 Reviews",
      stPrice:"Rs. 499",
      price:399,
      save:"(Save Rs. 100)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Glowner_1024x1024.jpg?v=1643781091",
      name:"Pore Minimizing Combo - Face Wash and Face Toner",
      reviews:"★★★★★",
      treviews:"1156 Reviews",
      stPrice:"Rs. 548",
      price:465,
      save:"(Save Rs. 83)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_1024x1024.jpg?v=1647863372",
      name:"NicoLips Lip Scrub & LipBalm Combo For Dry, Chapped & Da..",
      reviews:"★★★★★",
      treviews:"2300 Reviews",
      stPrice:"Rs. 675",
      price:538,
      save:"(Save Rs. 137)"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-Women-_-Men_1024x1024.jpg?v=1647342718",
      name:"DeoWhite Natural Under Arm Skin Whitening Roll-On Deo..",
      reviews:"★★★★★",
      treviews:"435 Reviews",
      stPrice:"Rs. 398",
      price:349,
      save:"(Save Rs. 49)"
    },
    ]
    
    
    var addToCart = JSON.parse(localStorage.getItem("cartItem"))||[];
    

    window.addEventListener("load", function () {
        displayData(comboset);
      });
      
      function sorting(){
      
          var selected = document.querySelector("#sorting").value;
          //console.log(selected);
          if(selected=="lth"){
            comboset.sort(function(a,b){
                  return a.price-b.price;
              })
              //console.log(bestSellerItems)
              displayData(comboset)
          }
          if(selected=="htl"){
            comboset.sort(function(a,b){
                  return b.price-a.price;
              })
              //console.log(bestSellerItems)
              displayData(comboset)
          }
          if(selected=="az"){
            comboset.sort(function(a,b){
                 if(a.name>b.name) return 1;
                 if(a.name<b.name) return -1;
                 return 0;
              })
             // console.log(bestSellerItems)
              displayData(comboset) 
          }
      
          if(selected=="za"){
              comboset.sort(function(a,b){
                 if(a.name>b.name) return -1;
                 if(a.name<b.name) return 1;
                 return 0;
              })
              //console.log(comboset)
              displayData(comboset) 
          }
      
      }

    function displayData(comboset){
    document.querySelector("#box9").innerHTML = ""
    comboset.map(function(elem){
      //console.log(elem);
      var box=document.createElement("div");
      box.setAttribute("id","innerBox");
    
      var image=document.createElement("img");
      image.src=elem.img;
      image.setAttribute("class","image");
    
    
      var name =document.createElement("p");
      name.innerText=elem.name;
      name.setAttribute("class","name");
    
      var insideInnerBox=document.createElement("div");
      insideInnerBox.setAttribute("id","insideInnerBox")
    
      var review=document.createElement("p");
      review.innerText=elem.reviews;
      review.setAttribute("class","star");
    
    
      var totalReviews=document.createElement("p");
      totalReviews.innerText=elem.treviews;
      totalReviews.setAttribute("class","review")
    
      var strkPrice=document.createElement("p");
      strkPrice.innerText=elem.stPrice;
      strkPrice.setAttribute("class","skprice")
    
      var newPrice=document.createElement("p");
      newPrice.innerText=`Rs. ${elem.price}`;
      newPrice.setAttribute("class","newPrice")
    
      var save=document.createElement("p");
      save.innerText=elem.save;
      save.setAttribute("class","save");
    
      insideInnerBox.append(review,totalReviews,strkPrice,newPrice)
    
      
      var btn = document.createElement("button");
      btn.innerText="Add To Cart";
      btn.setAttribute("class","btn");
      btn.addEventListener("click",function(){
          OnHoveringCart(elem);
      });
      box.append(image,btn,name,insideInnerBox,save);
      document.querySelector("#box9").append(box);
    
     
    });
} 
    function OnHoveringCart(elem){
      //console.log("My name");
      addToCart.push(elem);
      localStorage.setItem("cartItem",JSON.stringify(addToCart));
    
    }