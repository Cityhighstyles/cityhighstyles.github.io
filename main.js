const products = [
  {
    id: 1,
    name: "Essential Graphic Tee",
    price: 45,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    images: [
      "https://m.media-amazon.com/images/I/61x7r7LXMLL._AC_UY1000_.jpg",
      "https://m.media-amazon.com/images/I/61ETIupdWLL._AC_UY1000_.jpg",
      "https://www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=54%2054w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=74%2074w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=104%20104w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=162%20162w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=208%20208w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=324%20324w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=416%20416w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=550%20550w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=750%20750w,%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842&width=1100%201100w,%20%20%20%20%20%20%20%20%20%20%20%20//www.underratedclub.com/cdn/shop/files/LetItFlowWithHypeblackMensOversizedBaggyT-shirt3.jpg?v=1725350842%201440w",
      "https://images-cdn.ubuy.co.in/6770a16b5663963d1a001cd5-into-the-am-vintage-graphic-tees-for-men.jpg",
      "https://www.underratedclub.com/cdn/shop/files/23-2175.jpg?v=1748340050",
      "https://www.scramblertales.com/wp-content/uploads/2024/11/3312365778353151072_v2_2048_custom.jpeg",
      "https://img.joomcdn.net/5d132d06ee68c2b27dcfdcf02a35c9d795f80fa5_original.jpeg",
      "https://i5.walmartimages.com/seo/Mens-Funny-T-Shirts-Born-In-The-1900s-Sarcastic-Graphic-Tee-For-Men-Graphic-Tees_ed2e65fa-115c-4128-b72c-cc01d214fbe3.d4d04065b07ada4009a3bc80966e1e1f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      "https://www.underratedclub.com/cdn/shop/files/12-1864_05d2cccd-349c-404e-af85-5ba3baa2875a.jpg?v=1742459842",
      "https://img.abercrombie.com/is/image/anf/KIC_123-5264-00589-303_prod1?policy=product-medium",

    ],
    video: "public/graphic-tee.mp4",
    details: {
      fabric: "100% Premium Cotton",
      care: "Machine wash cold, tumble dry low.",
    },
    fit: "Oversized Fit",
  },
  {
    id: 2,
    name: "Premium Hoodie",
    price: 89,
    category: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Olive"],
    images: [
      "public/hoodies/1.jpg",
      "public/hoodies/2.jpg",
      "public/hoodies/3.jpg",
      "public/hoodies/4.jpg",
      "public/hoodies/5.jpg",
      "public/hoodies/6.jpg",
      "public/hoodies/7.jpg",
      "public/hoodies/8.jpg",
      "public/hoodies/9.jpg",

    ],
    video: "public/hoodies/vid.mp4",
    details: {
      fabric: "80% Cotton, 20% Polyester",
      care: "Machine wash warm, do not bleach.",
    },
    fit: "Regular Fit",
  },
  {
    id: 3,
    name: "Classic Polo Shirt",
    price: 65,
    category: "polo",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Red"],
    images: [
      "public/polo/1.jpg",
      "public/polo/2.jpg",
      "public/polo/3.jpg",
      "public/polo/4.jpg",
      "public/polo/5.jpg",
      "public/polo/6.jpg",
      "public/polo/7.jpg",
      "public/polo/8.jpg",

    ],
    video: "public/polo/vid.mp4",
    details: {
      fabric: "100% Pique Cotton",
      care: "Machine wash cold, hang dry.",
    },
    fit: "Regular Fit",
  },
  {
    id: 4,
    name: "Premium Denim Jeans",
    price: 85,
    category: "jeans",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    images: [
      "public/jeans/1.jpg",
      "public/jeans/2.jpg",
      "public/jeans/3.jpg",
      "public/jeans/4.jpg",
      "public/jeans/5.jpg",
      "public/jeans/6.jpg",
      "public/jeans/7.jpg",
      "public/jeans/8.jpg",
    ],
    video: "public/jeans/vid.mp4",
    details: {
      fabric: "98% Cotton, 2% Elastane",
      care: "Wash inside out, with like colors.",
    },
    fit: "Slim Fit",
  },
  {
    id: 5,
    name: "Utility Cargo Pants",
    price: 79,
    category: "cargo",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Black", "Olive"],
    images: [
      "public/cargo-pants/1.jpg",
      "public/cargo-pants/2.jpg",
      "public/cargo-pants/3.jpg",
      "public/cargo-pants/4.jpg",
      "public/cargo-pants/5.jpg",
      "public/cargo-pants/6.jpg",
      "public/cargo-pants/7.jpg",
      "public/cargo-pants/8.jpg",
    ],
    video: "public/cargo-pants/vid.mp4",
    details: {
      fabric: "100% Ripstop Cotton",
      care: "Machine wash cold, gentle cycle.",
    },
    fit: "Relaxed Fit",
  },
  {
    id: 6,
    name: "Premium Singlet Tank",
    price: 35,
    category: "singlets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    images: [
      "public/singlet/1.jpg",
      "public/singlet/2.jpg",
      "public/singlet/3.jpg",
      "public/singlet/4.jpg",
      "public/singlet/5.jpg",
      "public/singlet/6.jpg",
    ],
    video: "public/singlet/vid.mp4",
    details: {
      fabric: "100% Combed Cotton",
      care: "Machine wash cold, lay flat to dry.",
    },
    fit: "Regular Fit",
  },
  {
    id: 7,
    name: "Corporate Shirt",
    price: 95,
    category: "english",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"],
    images: [
      "public/english/1.jpg",
      "public/english/2.jpg",
      "public/english/3.jpg",
      "public/english/4.jpg",
      "public/english/5.jpg",
      "public/english/6.jpg",
      "public/english/7.jpg",
    ],
    video: "public/english/vid.mp4",
    details: {
      fabric: "100% Oxford Cotton",
      care: "Dry clean recommended.",
    },
    fit: "Slim Fit",
  },
  {
    id: 8,
    name: "Jersey T-Shirt",
    price: 52,
    category: "tees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Brown"],
    images: [
      "public/jersey/1.jpg",
      "public/jersey/2.jpg",
      "public/jersey/3.jpg",
      "public/jersey/4.jpg",
      "public/jersey/5.jpg",
      "public/jersey/6.jpg",
      "public/jersey/7.jpg",
      "public/jersey/8.jpg",
    ],
    video: "public/jersey/vid.mp4",
    details: {
      fabric: "100% Washed Cotton",
      care: "Machine wash cold, inside out.",
    },
    fit: "Regular Fit",
  },
  {
    id: 9,
    name: "Up and Down Short",
    price: 99,
    category: "wears",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    images: [
      "public/up-and-down/1.jpg",
      "public/up-and-down/2.jpg",
      "public/up-and-down/3.jpg",
      "public/up-and-down/4.jpg",
      "public/up-and-down/5.jpg",
      "public/up-and-down/6.jpg",
      "public/up-and-down/7.jpg",
      "public/up-and-down/8.jpg",
      "public/up-and-down/9.jpg",
    ],
    video: "public/up-and-down/vid.mp4",
    details: {
      fabric: "66% Cotton, 34% Polyester",
      care: "Machine wash cold, do not iron.",
    },
    fit: "Slim Fit",
  },
  {
    id: 10,
    name: "Multi-Pocket Cargo Shorts",
    price: 62,
    category: "cargo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "White", "Black"],
    images: [
      "public/cargo-shorts/1.jpg",
      "public/cargo-shorts/2.jpg",
      "public/cargo-shorts/3.jpg",
      "public/cargo-shorts/4.jpg",
      "public/cargo-shorts/5.jpg",
      "public/cargo-shorts/6.jpg",
      "public/cargo-shorts/7.jpg",
      "public/cargo-shorts/8.jpg",
    ],
    video: "public/cargo-shorts/vid.mp4",
    details: {
      fabric: "100% Cotton Twill",
      care: "Machine wash warm, tumble dry.",
    },
    fit: "Relaxed Fit",
  },
  {
    id: 11,
    name: "Slim Fit Chinos",
    price: 75,
    category: "chinos",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Beige", "Navy", "Olive"],
    images: [
      "public/chinos/1.jpg",
      "public/chinos/2.jpg",
      "public/chinos/3.jpg",
      "public/chinos/4.jpg",
      "public/chinos/5.jpg",
      "public/chinos/6.jpg",
      "public/chinos/7.jpg",
    ],
    video: "public/chinos/vid.mp4",
    details: {
      fabric: "100% Cotton Twill",
      care: "Machine wash warm, tumble dry.",
    },
    fit: "Slim Fit",
  },
  {
    id: 12,
    name: "Boxers",
    price: 68,
    category: "underwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    images: [
      "public/boxers/1.jpg",
      "public/boxers/2.jpg",
      "public/boxers/3.jpg",
      "public/boxers/4.jpg",
      "public/boxers/5.jpg",
      "public/boxers/6.jpg",
      "public/boxers/7.jpg",
      "public/boxers/8.jpg",
    ],
    video: "public/boxers/vid.mp4",
    details: {
      fabric: "95% Cotton, 5% Spandex",
      care: "Machine wash cold, tumble dry low.",
    },
    fit: "Comfort Fit",
  },

  {
    id: 13,
    name: "Cap",
    price: 80,
    category: "more",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"],
    images: [
      "public/caps/1.jpg",
      "public/caps/2.jpg",
      "public/caps/3.jpg",
      "public/caps/4.jpg",
      "public/caps/5.jpg",
      "public/caps/6.jpg",
      "public/caps/7.jpg",
      "public/caps/8.jpg",
    ],
    video: "public/caps/vid.mp4",
    details: {
      fabric: "100% Cotton",
      care: "Machine wash cold, tumble dry low.",
    },
    fit: "Regular Fit",
  },

  {
    id: 14,
    name: "Up and Down long",
    price: 55,
    category: "wears",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    images: [
      "public/up-and-down-long/1.jpg",
      "public/up-and-down-long/2.jpg",
      "public/up-and-down-long/3.jpg",
      "public/up-and-down-long/4.jpg",
      "public/up-and-down-long/5.jpg",
      "public/up-and-down-long/6.jpg",
      "public/up-and-down-long/7.jpg",
      "public/up-and-down-long/8.jpg",

    ],
    video: "public/up-and-down-long/vid.mp4",
    details: {
      fabric: "66% Cotton, 34% Polyester",
      care: "Machine wash cold, do not iron.",
    },
    fit: "Slim Fit",
  },
];

let currentFilter = 'all';
const selectedOptions = {};

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.images[0]}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
      </div>
    </div>
  `).join('');

  setupProductInteractions();
}

function updateWhatsAppLink(productId) {
  const product = products.find(p => p.id == productId);
  const options = selectedOptions[productId] || {};
  const size = options.size || 'Not selected';
  const color = options.color || 'Not selected';
  const pageUrl = window.location.href;
  const message = `Hello! I'm interested in the ${product.name} for $${product.price} in size ${size} and color ${color}. Please let me know if it's available. Thank you!`;
  const whatsappUrl = `https://wa.me/+2347046625465?text=${encodeURIComponent(message)}`;
  document.getElementById('modalWhatsAppBtn').href = whatsappUrl;
}

function openQuickViewModal(productId) {
  const product = products.find(p => p.id == productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const mainImage = document.getElementById('modalMainImage');
  const thumbnailsContainer = document.getElementById('modalThumbnails');
  const videoContainer = document.getElementById('modalVideoContainer');
  const video = document.getElementById('modalVideo');
  const detailsContainer = document.getElementById('modalDetails');

  mainImage.src = product.images[0];
  mainImage.alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = `$${product.price}`;
  document.getElementById('modalFit').textContent = product.fit;

  thumbnailsContainer.innerHTML = product.images.map((img, index) => `
    <img src="${img}" alt="Thumbnail ${index + 1}" class="modal-thumbnail" data-src="${img}">
  `).join('');

  if (product.video) {
    thumbnailsContainer.innerHTML += `<button class="modal-thumbnail" data-type="video">Video</button>`;
    video.src = product.video;
  } else {
    videoContainer.style.display = 'none';
    video.src = "";
  }

  detailsContainer.innerHTML = `
    <p><strong>Fabric:</strong> ${product.details.fabric}</p>
    <p><strong>Care:</strong> ${product.details.care}</p>
  `;

  document.querySelectorAll('.modal-thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function () {
      if (this.dataset.type === 'video') {
        videoContainer.style.display = 'block';
        mainImage.style.display = 'none';
      } else {
        video.pause();
        videoContainer.style.display = 'none';
        mainImage.style.display = 'block';
        mainImage.src = this.dataset.src;
      }
    });
  });

  const sizesContainer = document.getElementById('modalSizes');
  sizesContainer.innerHTML = product.sizes.map(size => `
    <button class="size-option" data-size="${size}" data-product="${productId}">${size}</button>
  `).join('');

  const colorsContainer = document.getElementById('modalColors');
  colorsContainer.innerHTML = product.colors.map(color => `
    <button class="color-option" data-color="${color}" data-product="${productId}">${color}</button>
  `).join('');

  const whatsappBtn = document.getElementById('modalWhatsAppBtn');
  whatsappBtn.dataset.productId = productId;

  modal.style.display = 'flex';
  setupModalInteractions(productId);
  updateWhatsAppLink(productId);
}

function closeQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  modal.style.display = 'none';
}

function setupModalInteractions(productId) {
  const modal = document.getElementById('quickViewModal');

  document.querySelectorAll('#modalSizes .size-option').forEach(btn => {
    btn.addEventListener('click', function () {
      const container = this.parentElement;
      container.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      if (!selectedOptions[productId]) selectedOptions[productId] = {};
      selectedOptions[productId].size = this.dataset.size;
      updateWhatsAppLink(productId);
    });
  });

  document.querySelectorAll('#modalColors .color-option').forEach(btn => {
    btn.addEventListener('click', function () {
      const container = this.parentElement;
      container.querySelectorAll('.color-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      if (!selectedOptions[productId]) selectedOptions[productId] = {};
      selectedOptions[productId].color = this.dataset.color;
      updateWhatsAppLink(productId);
    });
  });

  document.getElementById('modalWhatsAppBtn').onclick = function () {
    const product = products.find(p => p.id == productId);
    const options = selectedOptions[productId] || {};

    const size = options.size || 'Not selected';
    const color = options.color || 'Not selected';

    const pageUrl = window.location.href;

    const message = `Hi! I'm interested in:\n\nProduct: ${product.name}\nPrice: $${product.price}\nSize: ${size}\nColor: ${color}\n\nFrom: ${pageUrl}`;

    const whatsappUrl = `https://wa.me/+2347046625465?text=${encodeURIComponent(message)}`;
    this.href = whatsappUrl;
  };
}

function setupProductInteractions() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function () {
      const productId = parseInt(this.dataset.id);
      openQuickViewModal(productId);
    });
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.dataset.category;
      currentFilter = category;
      renderProducts(category);
    });
  });
}

function startImageTransitions() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productId = parseInt(card.dataset.id);
    const product = products.find(p => p.id === productId);
    const productImage = card.querySelector('.product-image');

    if (product && product.images.length > 1) {
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * product.images.length);
        productImage.style.opacity = 0;
        setTimeout(() => {
          productImage.src = product.images[randomIndex];
          productImage.style.opacity = 1;
        }, 500);
      }, 5000);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilters();
  startImageTransitions();

  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn.addEventListener('click', closeQuickViewModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeQuickViewModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeQuickViewModal();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
