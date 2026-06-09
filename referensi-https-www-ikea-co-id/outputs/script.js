const categories = [
  {
    id: "ruang-keluarga",
    title: "Ruang keluarga",
    description: "Sofa, meja kopi, rak TV, dan dekorasi untuk area bersantai.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kamar-tidur",
    title: "Kamar tidur",
    description: "Tempat tidur, lemari, kasur, tekstil, dan lampu tidur.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "dapur",
    title: "Dapur",
    description: "Kabinet, meja makan, perlengkapan memasak, dan penyimpanan.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ruang-kerja",
    title: "Ruang kerja",
    description: "Meja, kursi ergonomis, lampu, dan aksesori kerja dari rumah.",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "penyimpanan",
    title: "Penyimpanan",
    description: "Rak, kotak, lemari modular, dan solusi hemat ruang.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "dekorasi",
    title: "Dekorasi rumah",
    description: "Karpet, vas, bingkai, tanaman tiruan, dan sentuhan akhir.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
  },
];

const products = [
  {
    id: "soderhamn",
    name: "SÖDERHAMN",
    type: "Sofa 3 dudukan ringkas, krem muda",
    category: "ruang-keluarga",
    price: 5795000,
    oldPrice: 6995000,
    rating: "4.7",
    stock: "Stok online tersedia",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?auto=format&fit=crop&w=900&q=80",
    ],
    description:
      "Tampilan ringkas dengan dudukan dalam dan bantal punggung longgar, cocok untuk ruang keluarga modern.",
  },
  {
    id: "malm",
    name: "MALM",
    type: "Rangka tempat tidur, putih",
    category: "kamar-tidur",
    price: 3499000,
    rating: "4.6",
    stock: "Tersedia untuk pengiriman",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Desain bersih dengan ruang penyimpanan opsional di bawah tempat tidur.",
  },
  {
    id: "poang",
    name: "POANG",
    type: "Kursi berlengan, birch veneer",
    category: "ruang-keluarga",
    price: 1799000,
    rating: "4.7",
    stock: "Tersedia online",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Kursi santai dengan sandaran tinggi dan bantalan empuk untuk membaca atau beristirahat.",
  },
  {
    id: "bekant",
    name: "BEKANT",
    type: "Meja kerja, hitam/cokelat",
    category: "ruang-kerja",
    price: 2999000,
    rating: "4.5",
    stock: "Tersedia di toko pilihan",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Permukaan kerja luas untuk laptop, monitor, dan catatan harian.",
  },
  {
    id: "kallax",
    name: "KALLAX",
    type: "Unit rak, putih, 77x147 cm",
    category: "penyimpanan",
    price: 1299000,
    rating: "4.8",
    stock: "Banyak stok",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Rak serbaguna untuk buku, mainan, kotak penyimpanan, atau pajangan.",
  },
  {
    id: "ingolf",
    name: "INGOLF",
    type: "Kursi makan, putih",
    category: "dapur",
    price: 899000,
    rating: "4.4",
    stock: "Tersedia online",
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Kursi makan klasik yang mudah dipadukan dengan banyak gaya meja.",
  },
  {
    id: "ribb",
    name: "RIBBA",
    type: "Bingkai foto, hitam, 50x70 cm",
    category: "dekorasi",
    price: 199000,
    rating: "4.3",
    stock: "Tersedia online",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Bingkai minimalis untuk poster, karya seni, atau foto keluarga.",
  },
  {
    id: "ranarp",
    name: "RANARP",
    type: "Lampu lantai, kuning tua",
    category: "dekorasi",
    price: 999000,
    rating: "4.5",
    stock: "Stok terbatas",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Lampu lantai bergaya klasik untuk cahaya fokus di ruang baca, kamar, atau ruang keluarga.",
  },
  {
    id: "lack",
    name: "LACK",
    type: "Meja samping, hitam-cokelat",
    category: "ruang-keluarga",
    price: 199000,
    oldPrice: 299000,
    rating: "4.6",
    stock: "Tersedia online",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=80",
    ],
    description: "Meja samping ringan yang mudah ditempatkan di samping sofa, tempat tidur, atau kursi baca.",
  },
];

const app = document.querySelector("#app");
const cartCount = document.querySelector("[data-cart-count]");
const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");
const nav = document.querySelector("[data-main-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const drawerBackdrop = document.querySelector("[data-drawer-backdrop]");
const drawerClose = document.querySelector("[data-drawer-close]");

let cart = JSON.parse(localStorage.getItem("ikeaDemoCart") || "[]");
let activeCategory = "all";
let searchTerm = "";

const formatPrice = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const saveCart = () => {
  localStorage.setItem("ikeaDemoCart", JSON.stringify(cart));
  updateCartCount();
};

const updateCartCount = () => {
  cartCount.textContent = cart.reduce((total, item) => total + item.qty, 0);
};

const addToCart = (productId, qty = 1) => {
  const item = cart.find((entry) => entry.id === productId);
  if (item) item.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart();
  showToast("Produk ditambahkan ke keranjang.");
};

const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  render();
};

const setCartQty = (productId, qty) => {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart();
  render();
};

const showToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  Object.assign(toast.style, {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    zIndex: 50,
    padding: "14px 18px",
    color: "white",
    background: "#111111",
    borderRadius: "8px",
    boxShadow: "0 12px 30px rgba(0,0,0,.25)",
    fontWeight: 800,
  });
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
};

const productCard = (product) => `
  <article class="product-card">
    <a href="#product/${product.id}">
      <img src="${product.image}" alt="${product.name} ${product.type}" loading="lazy">
    </a>
    <h3>${product.name}</h3>
    <p>${product.type}</p>
    <div class="meta">
      <div>
        <div class="price">${formatPrice(product.price)}</div>
        ${product.oldPrice ? `<p><s>${formatPrice(product.oldPrice)}</s></p>` : ""}
      </div>
      <span class="stock">${product.stock}</span>
    </div>
    <div class="product-actions">
      <a class="secondary-btn" href="#product/${product.id}">Detail</a>
      <button class="primary-btn" type="button" data-add="${product.id}">Tambah</button>
    </div>
  </article>
`;

const categoryCard = (category) => `
  <a class="category-card" href="#products?category=${category.id}">
    <img src="${category.image}" alt="${category.title}" loading="lazy">
    <h3>${category.title}</h3>
    <p>${category.description}</p>
  </a>
`;

const renderHome = () => `
  <section class="prototype-home">
    <div class="promo-hero">
      <div class="promo-block">
        <span>Promo</span>
        <strong>Murah</strong>
        <p>Harga hemat, kualitas hebat</p>
      </div>
      <div class="hero-product hero-product-left">
        <b>GLADOM</b>
        <span>Meja baki, putih, 45x53 cm</span>
        <strong>Rp199.000</strong>
      </div>
      <div class="hero-product hero-product-right">
        <b>FORSASONG</b>
        <span>Rak manajemen kabel, putih</span>
        <strong>Rp79.900</strong>
      </div>
    </div>
    <section class="prototype-products" aria-label="Produk utama">
      <a class="prototype-card" href="#product/poang" aria-label="Buka produk POANG">
        <span class="favorite-mark">♡</span>
        <img src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=700&q=80" alt="POANG kursi berlengan" loading="lazy">
        <div class="prototype-card-info">
          <h2>POANG</h2>
          <p>Kursi berlengan, birch veneer</p>
          <div class="swatches"><i class="gold"></i><i class="gray"></i><i class="white"></i></div>
          <strong>Rp 1.799.000</strong>
        </div>
      </a>
      <a class="prototype-card" href="#product/malm" aria-label="Buka produk MALM">
        <span class="favorite-mark">♡</span>
        <span class="stock-label sold">Stok Habis</span>
        <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80" alt="MALM rangka tempat tidur" loading="lazy">
        <div class="prototype-card-info">
          <h2>MALM</h2>
          <p>Rangka tempat tidur, putih</p>
          <div class="swatches"><i class="white"></i><i class="gold"></i></div>
          <strong>Rp 2.999.000</strong>
        </div>
      </a>
      <a class="prototype-card" href="#product/ranarp" aria-label="Buka produk RANARP">
        <span class="favorite-mark">♡</span>
        <span class="stock-label low">Stok Terbatas</span>
        <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80" alt="RANARP lampu lantai" loading="lazy">
        <div class="prototype-card-info">
          <h2>RANARP</h2>
          <p>Lampu lantai, kuning tua</p>
          <div class="swatches"><i class="gold"></i><i class="black"></i></div>
          <strong>Rp 999.000</strong>
        </div>
      </a>
      <a class="prototype-card" href="#product/lack" aria-label="Buka produk LACK">
        <span class="favorite-mark">♡</span>
        <img src="https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=700&q=80" alt="LACK meja samping" loading="lazy">
        <div class="prototype-card-info">
          <h2>LACK</h2>
          <p>Meja samping, hitam-cokelat</p>
          <div class="swatches"><i class="white"></i><i class="gold"></i></div>
          <strong><s>Rp 299.000</s> Rp 199.000</strong>
        </div>
      </a>
    </section>
  </section>
`;

const renderCategories = () => `
  <div class="page">
    <section class="page-title">
      <span class="eyebrow">Menu kategori</span>
      <h1>Kategori produk dan ruangan</h1>
      <p>Susunan kategori dibuat seperti navigasi utama IKEA: produk, ruangan, inspirasi, dan solusi belanja cepat.</p>
    </section>
    <section class="category-page-grid">${categories.map(categoryCard).join("")}</section>
    <section class="category-row">
      <article class="mini-card">
        <h3>Produk baru</h3>
        <p>Temukan produk segar untuk memperbarui suasana rumah.</p>
        <a class="primary-btn" href="#products">Jelajahi</a>
      </article>
      <article class="mini-card">
        <h3>Produk online terlaris</h3>
        <p>Pilihan pelanggan yang mudah dibeli dari rumah.</p>
        <a class="primary-btn" href="#products">Lihat produk</a>
      </article>
    </section>
  </div>
`;

const getFilteredProducts = () =>
  products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const query = searchTerm.trim().toLowerCase();
    const searchMatch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      categories.find((category) => category.id === product.category)?.title.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });

const renderProducts = () => {
  const filtered = getFilteredProducts();
  const filterButtons = [
    { id: "all", title: "Semua produk" },
    ...categories.map(({ id, title }) => ({ id, title })),
  ];

  return `
    <div class="page">
      <section class="page-title">
        <span class="eyebrow">Menu produk</span>
        <h1>Produk untuk setiap ruangan</h1>
        <p>Gunakan filter kategori atau pencarian untuk melihat produk yang sesuai kebutuhan.</p>
      </section>
      <section class="product-layout">
        <aside class="filters">
          <h2>Filter</h2>
          <div class="filter-list">
            ${filterButtons
              .map(
                (filter) => `
                  <button class="filter-btn ${activeCategory === filter.id ? "is-active" : ""}" type="button" data-filter="${filter.id}">
                    ${filter.title}
                  </button>
                `
              )
              .join("")}
          </div>
        </aside>
        <div>
          <div class="toolbar">
            <strong>${filtered.length} produk ditemukan</strong>
            ${searchTerm ? `<span class="badge">Pencarian: ${searchTerm}</span>` : ""}
          </div>
          <div class="product-grid">
            ${filtered.length ? filtered.map(productCard).join("") : `<div class="empty-state"><div><h1>Produk tidak ditemukan</h1><p>Coba kata kunci atau kategori lain.</p></div></div>`}
          </div>
        </div>
      </section>
    </div>
  `;
};

const renderProductDetail = (id) => {
  const product = products.find((item) => item.id === id) || products[0];
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return `
    <div class="page">
      <section class="detail-layout">
        <div class="detail-gallery">
          ${product.gallery.map((image, index) => `<img src="${image}" alt="${product.name} tampilan ${index + 1}" loading="lazy">`).join("")}
        </div>
        <aside class="product-info">
          <div>
            <span class="eyebrow">Page produk tertentu</span>
            <h1>${product.name}</h1>
            <p class="subtitle">${product.type}</p>
          </div>
          <div class="badge-row">
            <span class="badge">Rating ${product.rating}/5</span>
            <span class="badge">IKEA Family points</span>
            <span class="badge">Garansi produk</span>
          </div>
          <div>
            <div class="price">${formatPrice(product.price)}</div>
            ${product.oldPrice ? `<p><s>${formatPrice(product.oldPrice)}</s></p>` : ""}
            <p class="stock">${product.stock}</p>
          </div>
          <p>${product.description}</p>
          <div class="summary-box">
            <h2>Rincian produk</h2>
            <ul class="summary-list">
              <li>Mudah dipadukan dengan furnitur lain.</li>
              <li>Material dipilih untuk penggunaan harian di rumah.</li>
              <li>Dapat dikirim ke rumah atau diambil di toko pilihan.</li>
            </ul>
          </div>
          <div class="product-actions">
            <button class="primary-btn" type="button" data-add="${product.id}">Tambah ke keranjang</button>
            <a class="secondary-btn" href="#checkout">Checkout</a>
          </div>
        </aside>
      </section>
      <section class="section">
        <div class="section-heading">
          <div>
            <h2>Produk terkait</h2>
            <p>Lengkapi ruangan dengan pilihan dari kategori yang sama.</p>
          </div>
        </div>
        <div class="product-grid">${(related.length ? related : products.slice(1, 4)).map(productCard).join("")}</div>
      </section>
    </div>
  `;
};

const renderCheckout = () => {
  const cartProductsRaw = cart
    .map((item) => ({ ...products.find((product) => product.id === item.id), qty: item.qty }))
    .filter((item) => item.id);
  const cartProducts = cartProductsRaw.length
    ? cartProductsRaw
    : [
        {
          id: "checkout-demo",
          name: "KLIPPAN",
          type: "sofa 2 dudukan",
          price: 3195000,
          qty: 1,
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
        },
      ];
  const subtotal = cartProducts.reduce((total, item) => total + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 7000 : 0;
  const service = subtotal > 0 ? 800 : 0;
  const grandTotal = subtotal + shipping + service;

  return `
    <div class="checkout-page">
      <h1>Checkout</h1>
      <section class="checkout-prototype-grid">
        <div class="checkout-left">
          <section class="checkout-box">
            <h2>Metode pengiriman</h2>
            <div class="delivery-options">
              <article>
                <span>Pengiriman ke rumah</span>
                <strong>Rumah - Aula Finki</strong>
                <p>Jl. Kebon Jeruk Raya No. 27, Kebon Jeruk, Jakarta Barat 11530, Indonesia</p>
                <button type="button">Ganti</button>
              </article>
              <article>
                <span>Ambil di toko</span>
                <strong>IKEA - Alam Sutera</strong>
                <p>Jl. Jalur Sutera Boulevard No. 45, Kunciran, Pinang, Kota Tangerang</p>
                <b>Gratis</b>
              </article>
            </div>
          </section>

          <section class="checkout-box">
            <h2>Keranjang belanja</h2>
          ${cartProducts
            .map(
              (item) => `
                <div class="checkout-cart-row">
                  <img src="${item.image}" alt="${item.name}" loading="lazy">
                  <div>
                    <h3>${item.name}</h3>
                    <p>${item.type}</p>
                    <small>Berat paket: 45.14 kg<br>Total berat paket: 45.14 kg</small>
                  </div>
                  <span class="checkout-stepper">
                    <button type="button" ${item.id === "checkout-demo" ? "" : `data-qty-minus="${item.id}"`}>-</button>
                    <span>${item.qty}</span>
                    <button type="button" ${item.id === "checkout-demo" ? "" : `data-qty-plus="${item.id}"`}>+</button>
                  </span>
                  <strong>${formatPrice(item.price * item.qty)}</strong>
                </div>
              `
            )
            .join("")}
            <div class="article-entry">
              <strong>Tambahkan produk via artikel</strong>
              <p>Punya nomor artikel dari katalog IKEA? Ketik di sini untuk langsung tambah ke keranjang tanpa harus cari manual.</p>
              <div><span></span><button type="button">Tambah</button></div>
            </div>
          </section>
        </div>

        <aside class="checkout-box payment-box">
          <div class="payment-heading">
            <h2>Metode pembayaran</h2>
            <a href="#">Lihat semua</a>
          </div>
          <form data-checkout-form>
            <label><span>▣ Kartu Kredit/Debit</span><input type="radio" name="payment" required></label>
            <label><span>▣ Virtual Account</span><input type="radio" name="payment"></label>
            <label><span>● Gopay</span><input type="radio" name="payment"></label>
            <label><span>⌘ QRIS</span><input type="radio" name="payment"></label>
            <button class="voucher-btn" type="button">Gunakan voucher biar hemat! <b>›</b></button>
            <div class="payment-summary">
              <p><span>Total Harga (${cartProducts.length} Barang)</span><strong>${formatPrice(subtotal)}</strong></p>
              <p><span>Total Ongkos Kirim</span><strong>${formatPrice(shipping)}</strong></p>
              <p><span>Total Asuransi Pengiriman</span><strong>${formatPrice(service)}</strong></p>
              <p class="grand"><span>Total Pembayaran</span><strong>${formatPrice(grandTotal)}</strong></p>
            </div>
            <button class="pay-now" type="submit">Bayar sekarang</button>
          </form>
        </aside>
      </section>
    </div>
  `;
};

const setActiveNav = () => {
  const hash = window.location.hash || "#home";
  document.querySelectorAll(".drawer-nav a").forEach((link) => {
    link.classList.toggle("is-active", hash.startsWith(link.getAttribute("href")));
  });
};

const closeDrawer = () => {
  nav.classList.remove("is-open");
  nav.setAttribute("aria-hidden", "true");
  drawerBackdrop.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
};

const openDrawer = () => {
  nav.classList.add("is-open");
  nav.setAttribute("aria-hidden", "false");
  drawerBackdrop.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
};

const parseHash = () => {
  const rawHash = window.location.hash.replace("#", "") || "home";
  const [path, queryString] = rawHash.split("?");
  const params = new URLSearchParams(queryString || "");
  if (params.has("category")) activeCategory = params.get("category");
  return path;
};

const render = () => {
  const path = parseHash();
  if (path === "home") app.innerHTML = renderHome();
  else if (path === "categories") app.innerHTML = renderCategories();
  else if (path === "products") app.innerHTML = renderProducts();
  else if (path.startsWith("product/")) app.innerHTML = renderProductDetail(path.split("/")[1]);
  else if (path === "checkout") app.innerHTML = renderCheckout();
  else app.innerHTML = renderHome();

  setActiveNav();
  updateCartCount();
  app.focus({ preventScroll: true });
};

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const filterButton = event.target.closest("[data-filter]");
  const removeButton = event.target.closest("[data-remove]");
  const qtyPlus = event.target.closest("[data-qty-plus]");
  const qtyMinus = event.target.closest("[data-qty-minus]");

  if (addButton) addToCart(addButton.dataset.add);
  if (filterButton) {
    activeCategory = filterButton.dataset.filter;
    window.location.hash = activeCategory === "all" ? "products" : `products?category=${activeCategory}`;
    render();
  }
  if (removeButton) removeFromCart(removeButton.dataset.remove);
  if (qtyPlus) {
    const item = cart.find((entry) => entry.id === qtyPlus.dataset.qtyPlus);
    if (item) setCartQty(item.id, item.qty + 1);
  }
  if (qtyMinus) {
    const item = cart.find((entry) => entry.id === qtyMinus.dataset.qtyMinus);
    if (item) setCartQty(item.id, item.qty - 1);
  }

  if (event.target.closest(".drawer-nav a") || event.target.closest(".drawer-login")) closeDrawer();
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("[data-search-form]")) {
    event.preventDefault();
    searchTerm = searchInput.value;
    window.location.hash = "products";
    render();
  }

  if (event.target.matches("[data-checkout-form]")) {
    event.preventDefault();
    cart = [];
    saveCart();
    app.innerHTML = `
      <div class="page">
        <div class="empty-state">
          <div>
            <span class="eyebrow">Pesanan diterima</span>
            <h1>Terima kasih, pesanan demo berhasil dibuat.</h1>
            <p>Ringkasan pesanan dan kode pelacakan simulasi telah disiapkan.</p>
            <a class="primary-btn" href="#home">Kembali ke beranda</a>
          </div>
        </div>
      </div>
    `;
  }
});

menuToggle.addEventListener("click", () => (nav.classList.contains("is-open") ? closeDrawer() : openDrawer()));
drawerClose.addEventListener("click", closeDrawer);
drawerBackdrop.addEventListener("click", closeDrawer);

window.addEventListener("hashchange", render);
updateCartCount();
render();
