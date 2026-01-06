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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0WzlK0GCWsxzXuO6kinRSVs1Lr8bnwN7NA&s",
      "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/31163017/Trendy-vintage-graphic-tees-in-Hong-Kong.jpg",
      "https://images-cdn.ubuy.co.in/6770a16b5663963d1a001cd5-into-the-am-vintage-graphic-tees-for-men.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1B1yDPHkUFv41Rk9Q5vPqGXi4jXMcILpKUw&s",
      "https://www.scramblertales.com/wp-content/uploads/2024/11/3312365778353151072_v2_2048_custom.jpeg",
      "https://www.joom.com/en/products/5d88b92e8b2c370101dcd481?srsltid=AfmBOoqV0XiXtDQJ3oxTCM2AgBVVP2bwmIRe7w7Fx4PRqv41w2ixtbkt",
      "https://i5.walmartimages.com/seo/Mens-Funny-T-Shirts-Born-In-The-1900s-Sarcastic-Graphic-Tee-For-Men-Graphic-Tees_ed2e65fa-115c-4128-b72c-cc01d214fbe3.d4d04065b07ada4009a3bc80966e1e1f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSyJGGg4LYaI09h_WDHwNtYlvrlMPmOlvVCKsD5aQpA&s",
      "https://img.abercrombie.com/is/image/anf/KIC_123-5264-00589-303_prod1?policy=product-medium",

    ],
    video: "https://youtube.com/shorts/aczQVyKEFKQ?si=fXN2tajVJD1EpqbD",
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
      "https://images.pexels.com/photos/8148586/pexels-photo-8148586.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: "https://videos.pexels.com/video-files/8148586/8148586-hd.mp4",
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
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
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
      "https://images.pexels.com/photos/5702424/pexels-photo-5702424.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
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
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
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
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Combed Cotton",
      care: "Machine wash cold, lay flat to dry.",
    },
    fit: "Regular Fit",
  },
  {
    id: 7,
    name: "Traditional English Shirt",
    price: 95,
    category: "english",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"],
    images: [
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Oxford Cotton",
      care: "Dry clean recommended.",
    },
    fit: "Slim Fit",
  },
  {
    id: 8,
    name: "Vintage Graphic Tee",
    price: 52,
    category: "tees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Brown"],
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Washed Cotton",
      care: "Machine wash cold, inside out.",
    },
    fit: "Regular Fit",
  },
  {
    id: 9,
    name: "Tech Fleece Hoodie",
    price: 99,
    category: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    images: [
      "https://images.pexels.com/photos/8148586/pexels-photo-8148586.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "66% Cotton, 34% Polyester",
      care: "Machine wash cold, do not iron.",
    },
    fit: "Slim Fit",
  },
  {
    id: 10,
    name: "Designer Polo",
    price: 125,
    category: "polo",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "White"],
    images: [
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Mercerized Cotton",
      care: "Hand wash or dry clean.",
    },
    fit: "Regular Fit",
  },
  {
    id: 11,
    name: "Skinny Fit Jeans",
    price: 75,
    category: "jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Dark Blue", "Grey"],
    images: [
      "https://images.pexels.com/photos/5702424/pexels-photo-5702424.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "99% Cotton, 1% Spandex",
      care: "Wash as little as possible.",
    },
    fit: "Skinny Fit",
  },
  {
    id: 12,
    name: "Multi-Pocket Cargo Shorts",
    price: 62,
    category: "cargo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Black"],
    images: [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Cotton Twill",
      care: "Machine wash warm, tumble dry.",
    },
    fit: "Relaxed Fit",
  },
  {
    id: 13,
    name: "Athletic Singlet",
    price: 40,
    category: "singlets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy"],
    images: [
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "90% Polyester, 10% Spandex",
      care: "Machine wash cold, do not use fabric softener.",
    },
    fit: "Slim Fit",
  },
  {
    id: 14,
    name: "Oxford Button-Down",
    price: 88,
    category: "english",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Cream"],
    images: [
      "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Oxford Cotton",
      care: "Iron on low heat.",
    },
    fit: "Regular Fit",
  },
  {
    id: 15,
    name: "Premium Leather Belt",
    price: 55,
    category: "more",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    images: [
      "https://images.pexels.com/photos/4389727/pexels-photo-4389727.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Genuine Leather",
      care: "Wipe clean with a damp cloth.",
    },
    fit: "One Size Fits All",
  },
  {
    id: 16,
    name: "Wool Knit Sweater",
    price: 110,
    category: "more",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Grey", "Cream"],
    images: [
      "https://images.pexels.com/photos/1690293/pexels-photo-1690293.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    video: null,
    details: {
      fabric: "100% Merino Wool",
      care: "Hand wash cold, lay flat to dry.",
    },
    fit: "Regular Fit",
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
        <button class="btn-whatsapp-product quick-view-btn" data-product-id="${product.id}">
          Quick View
        </button>
      </div>
    </div>
  `).join('');

  setupProductInteractions();
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
    thumb.addEventListener('click', function() {
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
  whatsappBtn.href = "#";

  modal.style.display = 'flex';
  setupModalInteractions(productId);
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
    btn.addEventListener('click', function() {
      const container = this.parentElement;
      container.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      if (!selectedOptions[productId]) selectedOptions[productId] = {};
      selectedOptions[productId].size = this.dataset.size;
    });
  });

  document.querySelectorAll('#modalColors .color-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const container = this.parentElement;
      container.querySelectorAll('.color-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      if (!selectedOptions[productId]) selectedOptions[productId] = {};
      selectedOptions[productId].color = this.dataset.color;
    });
  });

  document.getElementById('modalWhatsAppBtn').onclick = function() {
    const product = products.find(p => p.id == productId);
    const options = selectedOptions[productId] || {};

    const size = options.size || 'Not selected';
    const color = options.color || 'Not selected';

    const pageUrl = window.location.href;

    const message = `Hi! I'm interested in:\n\nProduct: ${product.name}\nPrice: $${product.price}\nSize: ${size}\nColor: ${color}\n\nFrom: ${pageUrl}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    this.href = whatsappUrl;
  };
}

function setupProductInteractions() {
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const productId = parseInt(this.dataset.productId);
      openQuickViewModal(productId);
    });
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.dataset.category;
      currentFilter = category;
      renderProducts(category);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilters();

  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn.addEventListener('click', closeQuickViewModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeQuickViewModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeQuickViewModal();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
