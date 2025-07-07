// const linkData = {  
//     "Home & Living": ["BedSheet", "Sofa Covers", "Cottons Bedsheets", "Decorative Items", "Blankets", "Home Temple", "Curtains", "Pillows", "Towels", "Bathrobes", "Tablecloths", "Wall Decor", "Mirrors", "Storage solutions", "Kitchenware", "Candles", "Indoor Plants", "Rugs", "Throws", "Lamps"],  
//     "Women's Clothes": ["Dresses", "Skirts", "Blouses", "Jeans", "Tops", "Jackets", "Coats", "Sweaters", "Cardigans", "Leggings", "Pants", "Shorts", "Rompers", "Jumpsuits", "Swimsuits", "Underwear", "Loungewear", "Activewear", "Outerwear", "Plus Size"],  
//     "Women's Ethnic Wear": ["Sarees", "Salwar Kameez", "Lehengas", "Anarkalis", "Ghagras", "Kurtis", "Dupattas", "Shawls", "Sarees", "Blouses", "Jewelry"],  
//     "Women Footwear": ["Heels", "Flats", "Juttis", "Boots", "Sandals", "Sneakers", "Slippers", "Flip-flops", "Clogs", "Loafers", "Oxfords", "Mary Janes"],  
//     "Women's Accessories": ["Handbags", "Wallets", "Jewelry", "Belts", "Scarves", "Sunglasses", "Hats", "Gloves", "Hair Accessories", "Watches", "Headbands", "Earrings", "Necklaces", "Bracelets", "Rings", "Brooches", "Hairpins", "Cufflinks", "Tie Clips", "Socks"],  
//     "Makeup Items": ["Foundation", "Concealer", "Powder", "Blush", "Eyeshadow", "Eyeliner", "Mascara", "Lipstick", "Lip Gloss", "Highlighter", "Bronzer", "Primer", "Setting Spray", "Makeup Brushes", "Makeup Sponges", "Makeup Remover", "Lipstick", "Eyebrow Pencil", "Eyebrow Gel", "False Eyelashes"],  
//     "Men's Clothes": ["Shirts", "Pants", "T-shirts", "Jackets", "Suits", "Sweaters", "Jeans", "Shorts", "Underwear", "Socks", "Pajamas", "Formal Wear", "Casual Wear", "Athletic Wear", "Outerwear"],  
//     "Men's Ethnic Wear": ["Sherwanis", "Kurtas", "Dhotis", "Pajamas", "Waistcoats", "Turbans", "Safa", "Nehru Jackets", "Kurta Pajamas", "Ethnic Accessories"]  
// };  

// const linkContainers = document.querySelectorAll('.link-container');  

// linkContainers.forEach(container => {  
//     const category = container.dataset.category;  
//     const itemsList = linkData[category];  

//     const itemsDiv = container.querySelector('.items');  
//     itemsList.forEach(item => {  
//         const linkElement = document.createElement('span');  
//         linkElement.innerHTML = `<a href="#">${item}</a><span class="link_divider">|</span>`;  
//         itemsDiv.appendChild(linkElement);  
//     });  
//     //Remove last divider  
//     itemsDiv.lastChild.remove();  
// });