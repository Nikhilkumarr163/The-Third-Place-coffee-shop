/* ═══════════════════════════════════════════════════════════
   BREW HAVEN — Premium Coffee Café
   script.js  —  Full Feature JavaScript
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════════
   1. DATA — Products, Testimonials, Gallery
   ══════════════════════════════════════════════════════════ */

const COFFEE_PRODUCTS = [
  {
    id: 'c1', name: 'Classic Espresso', category: 'espresso', price: 149,
    rating: 5, badge: 'Best Seller',
    desc: 'Bold, intense single-origin shot with a rich crema — the purest expression of coffee.',
    img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80'
  },
  {
    id: 'c2', name: 'Cappuccino', category: 'milk', price: 199,
    rating: 5, badge: 'Popular',
    desc: 'Perfect 1:1:1 ratio of espresso, steamed milk, and airy microfoam. Italian-style.',
    img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80'
  },
  {
    id: 'c3', name: 'Signature Latte', category: 'milk', price: 219,
    rating: 4, badge: null,
    desc: 'Velvety steamed whole-milk with a double-shot base. Soothing and smooth.',
    img: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=500&q=80'
  },
  {
    id: 'c4', name: 'Americano', category: 'espresso', price: 169,
    rating: 4, badge: null,
    desc: 'Espresso diluted with hot water — long, clean, and wonderfully drinkable.',
    img: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80'
  },
  {
    id: 'c5', name: 'Dark Mocha', category: 'milk', price: 249,
    rating: 5, badge: 'Chef\'s Pick',
    desc: '72% Belgian dark chocolate blended with espresso and steamed milk. Pure indulgence.',
    img: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80'
  },
  {
    id: 'c6', name: 'Flat White', category: 'milk', price: 229,
    rating: 4, badge: null,
    desc: 'Ristretto-based with a micro-thin layer of textured milk. Rich and balanced.',
    img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=500&q=80'
  },
  {
    id: 'c7', name: 'Caramel Macchiato', category: 'milk', price: 259,
    rating: 5, badge: 'New',
    desc: 'Vanilla syrup, steamed milk, espresso, and a generous drizzle of house caramel.',
    img: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=500&q=80'
  },
  {
    id: 'c8', name: 'Cold Brew', category: 'cold', price: 279,
    rating: 5, badge: 'Summer Fav',
    desc: '24-hour cold-steeped single-origin. Naturally sweet, zero bitterness. Served over ice.',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80'
  }
];

const FOOD_PRODUCTS = [
  {
    id: 'f1', name: 'Chocolate Lava Cake', price: 199,
    desc: 'Warm flourless cake with a molten dark-chocolate centre. Served with crème fraîche.',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
    badge: 'Must Try', rating: 5
  },
  {
    id: 'f2', name: 'Classic Brownie', price: 129,
    desc: 'Dense, fudgy, and loaded with walnuts. Gluten-free option available.',
    img: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=500&q=80',
    badge: null, rating: 4
  },
  {
    id: 'f3', name: 'Butter Croissant', price: 119,
    desc: 'Flaky, golden, 36-layer laminated croissant. Baked fresh every morning at 6 AM.',
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80',
    badge: 'Fresh Daily', rating: 5
  },
  {
    id: 'f4', name: 'Club Sandwich', price: 249,
    desc: 'Triple-decker with grilled chicken, avocado, lettuce, tomato, and garlic aioli.',
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80',
    badge: null, rating: 4
  },
  {
    id: 'f5', name: 'Café Burger', price: 299,
    desc: 'Smash-style beef patty, aged cheddar, caramelised onions, house sauce on brioche.',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',
    badge: 'Bestseller', rating: 5
  },
  {
    id: 'f6', name: 'Truffle Pasta', price: 349,
    desc: 'Hand-cut pappardelle, wild mushroom, truffle oil, parmesan, and toasted pine nuts.',
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80',
    badge: 'Chef\'s Pick', rating: 5
  },
  {
    id: 'f7', name: 'Cheesy Garlic Bread', price: 149,
    desc: 'Thick sourdough, compound herb butter, mozzarella. Broiled until golden and bubbly.',
    img: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=500&q=80',
    badge: null, rating: 4
  },
  {
    id: 'f8', name: 'Ricotta Pancakes', price: 229,
    desc: 'Fluffy stacked ricotta pancakes with house berry compote and maple cream.',
    img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&q=80',
    badge: 'Weekend Special', rating: 5
  }
];

const COLD_PRODUCTS = [
  {
    id: 'cd1', name: 'Iced Caramel Latte', price: 249,
    desc: 'Cold espresso, house caramel, oat milk, and heaps of ice. Ultra refreshing.',
    img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80',
    badge: 'Top Rated', rating: 5
  },
  {
    id: 'cd2', name: 'Cold Coffee', price: 199,
    desc: 'Classic Indian-style chilled coffee. Strong, sweet, and deeply satisfying.',
    img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&q=80',
    badge: null, rating: 4
  },
  {
    id: 'cd3', name: 'Vanilla Milkshake', price: 229,
    desc: 'Tahitian vanilla bean ice cream blended with chilled whole milk. Pure nostalgia.',
    img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80',
    badge: 'Popular', rating: 5
  },
  {
    id: 'cd4', name: 'Chocolate Shake', price: 239,
    desc: 'Triple-chocolate blend — cacao, dark chocolate syrup, and chocolate ice cream.',
    img: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=500&q=80',
    badge: null, rating: 4
  },
  {
    id: 'cd5', name: 'Strawberry Shake', price: 239,
    desc: 'Fresh strawberry purée, vanilla ice cream, and a garnish of real berries on top.',
    img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&q=80',
    badge: 'Summer Hit', rating: 5
  },
  {
    id: 'cd6', name: 'Virgin Mojito', price: 179,
    desc: 'Fresh lime, garden mint, raw cane sugar, sparkling water. Aggressively refreshing.',
    img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
    badge: null, rating: 4
  },
  {
    id: 'cd7', name: 'Lemon Soda', price: 149,
    desc: 'Hand-squeezed lemon, rock salt, and black pepper over fizzy mineral water.',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80',
    badge: 'Refreshing', rating: 4
  },
  {
    id: 'cd8', name: 'Fresh Juice', price: 169,
    desc: 'Seasonal cold-pressed blend — orange, carrot, turmeric, and a hint of ginger.',
    img: 'https://images.unsplash.com/photo-1534353473418-4cfa0c177ee5?w=500&q=80',
    badge: 'Healthy', rating: 5
  }
];

const TESTIMONIALS = [
  {
    name: 'Priya Sharma', role: 'Food Blogger · Mumbai',
    rating: 5,
    quote: 'Brew Haven is the only café I\'ve been to where the coffee is genuinely better than what I make at home. The cold brew alone is worth the trip across the city. Absolutely stunning space too.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'Arjun Mehta', role: 'Software Engineer · Bengaluru',
    rating: 5,
    quote: 'I\'ve worked from Brew Haven three days a week for the past year. The WiFi is fast, the flat whites are perfect, and the truffle pasta is something I think about at night. Highly recommend.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'
  },
  {
    name: 'Kavya Nair', role: 'Interior Designer · Kochi',
    rating: 5,
    quote: 'As someone who designs spaces for a living, I can say that Brew Haven\'s interiors are exceptional. Warm, intentional, never trying too hard. The coffee matches the ambience perfectly.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  },
  {
    name: 'Rohan Iyer', role: 'Architect · Chennai',
    rating: 5,
    quote: 'The ricotta pancakes with berry compote are the best brunch dish in the city. I\'ve brought every client meeting here and the caramel macchiato never disappoints. This place is special.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80'
  },
  {
    name: 'Sneha Patel', role: 'Marketing Director · Delhi',
    rating: 5,
    quote: 'I specifically flew in from Delhi and made a detour to Brew Haven after reading about it. Worth every minute of the journey. The chef\'s mocha is liquid poetry. I\'m already planning a return.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80'
  },
  {
    name: 'Vikram Rao', role: 'Photographer · Hyderabad',
    rating: 5,
    quote: 'The light in this café at golden hour is something photographers dream about. Pair that with the best cappuccino in Karnataka and you understand why my Instagram is 40% Brew Haven content.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
  }
];

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Café interior golden hour' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', alt: 'Espresso close-up' },
  { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', alt: 'Brew Haven seating area' },
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80', alt: 'Latte art' },
  { src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80', alt: 'Coffee beans' },
  { src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80', alt: 'Pastry display' }
];

/* ══════════════════════════════════════════════════════════
   2. STATE
   ══════════════════════════════════════════════════════════ */

let cart           = JSON.parse(localStorage.getItem('bhCart') || '[]');
let currentFilter  = 'all';
let carouselIndex  = 0;
let carouselTimer  = null;
let lightboxIndex  = 0;
let searchQuery    = '';

/* ══════════════════════════════════════════════════════════
   3. LOADER
   ══════════════════════════════════════════════════════════ */

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hide');
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }, 1800);
});

/* ══════════════════════════════════════════════════════════
   4. NAVBAR — sticky, hamburger, active link
   ══════════════════════════════════════════════════════════ */

const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNavLink();
  toggleScrollTopBtn();
  animateStats();
}, { passive: true });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

function updateActiveNavLink() {
  const sections = ['home', 'coffee', 'food', 'cold-drinks', 'about', 'contact'];
  const fromTop  = window.scrollY + 100;
  sections.forEach(id => {
    const sec = document.getElementById(id);
    const link = navLinks.querySelector(`a[href="#${id}"]`);
    if (!sec || !link) return;
    if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
      navLinks.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

/* ══════════════════════════════════════════════════════════
   5. DARK / LIGHT MODE
   ══════════════════════════════════════════════════════════ */

const themeToggle = document.getElementById('themeToggle');
const savedTheme  = localStorage.getItem('bhTheme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('bhTheme', next);
  showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on');
});

/* ══════════════════════════════════════════════════════════
   6. PARALLAX HERO
   ══════════════════════════════════════════════════════════ */

const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (!heroBg) return;
  heroBg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   7. ANIMATED STATS
   ══════════════════════════════════════════════════════════ */

let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  const hero = document.getElementById('home');
  if (!hero) return;
  if (window.scrollY > hero.offsetHeight * 0.5) return;

  const els = document.querySelectorAll('.stat-num');
  if (!els.length) return;

  // Only fire when stats are visible
  const firstStat = els[0].getBoundingClientRect();
  if (firstStat.top > window.innerHeight) return;

  statsAnimated = true;
  els.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString('en-IN');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

/* ══════════════════════════════════════════════════════════
   8. SEARCH
   ══════════════════════════════════════════════════════════ */

const searchToggle = document.getElementById('searchToggle');
const searchBox    = document.getElementById('searchBox');
const searchInput  = document.getElementById('searchInput');
const searchCount  = document.getElementById('searchCount');
const ALL_PRODUCTS = [...COFFEE_PRODUCTS, ...FOOD_PRODUCTS, ...COLD_PRODUCTS];

searchToggle.addEventListener('click', e => {
  e.stopPropagation();
  searchBox.classList.toggle('open');
  if (searchBox.classList.contains('open')) searchInput.focus();
});

document.addEventListener('click', e => {
  if (!searchBox.contains(e.target) && e.target !== searchToggle) {
    searchBox.classList.remove('open');
  }
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  if (!searchQuery) { searchCount.textContent = ''; return; }

  const matches = ALL_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery) ||
    (p.desc && p.desc.toLowerCase().includes(searchQuery))
  );
  searchCount.textContent = `${matches.length} result${matches.length !== 1 ? 's' : ''} found`;

  // Highlight matching cards across all grids
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('.product-desc')?.textContent.toLowerCase() || '';
    const match = name.includes(searchQuery) || desc.includes(searchQuery);
    card.style.opacity   = match ? '1' : '0.3';
    card.style.transform = match ? '' : 'scale(0.97)';
  });
});

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') searchBox.classList.remove('open');
  if (e.key === 'Enter' && searchQuery) {
    const matches = ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(searchQuery));
    if (matches.length) {
      // Scroll to first match's section
      const id = matches[0].id;
      if (id.startsWith('c')) document.getElementById('coffee')?.scrollIntoView({ behavior: 'smooth' });
      else if (id.startsWith('f')) document.getElementById('food')?.scrollIntoView({ behavior: 'smooth' });
      else document.getElementById('cold-drinks')?.scrollIntoView({ behavior: 'smooth' });
      searchBox.classList.remove('open');
    }
  }
});

/* ══════════════════════════════════════════════════════════
   9. RENDER HELPERS
   ══════════════════════════════════════════════════════════ */

function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star">${i < rating ? '★' : '☆'}</span>`
  ).join('');
}

function getProductQty(id) {
  const item = cart.find(i => i.id === id);
  return item ? item.qty : 1;
}

function buildProductCard(p) {
  const qty = getProductQty(p.id);
  return `
    <div class="product-card reveal" data-id="${p.id}" data-category="${p.category || ''}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-rating">${renderStars(p.rating)}</div>
        <div class="product-footer">
          <span class="product-price">₹${p.price}</span>
          <div class="qty-controls">
            <button class="qty-btn qty-minus" data-id="${p.id}" aria-label="Decrease qty">−</button>
            <span class="qty-num" id="qty-${p.id}">${qty}</span>
            <button class="qty-btn qty-plus" data-id="${p.id}" aria-label="Increase qty">+</button>
          </div>
          <button class="add-to-cart-btn" data-id="${p.id}" aria-label="Add ${p.name} to cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════
   10. RENDER PRODUCTS
   ══════════════════════════════════════════════════════════ */

function renderCoffee(filter = 'all') {
  const grid = document.getElementById('coffeeGrid');
  if (!grid) return;
  const items = filter === 'all' ? COFFEE_PRODUCTS : COFFEE_PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(buildProductCard).join('');
  bindProductEvents(grid);
  revealObserver.observe_new(grid.querySelectorAll('.reveal'));
}

function renderFood() {
  const grid = document.getElementById('foodGrid');
  if (!grid) return;
  grid.innerHTML = FOOD_PRODUCTS.map(buildProductCard).join('');
  bindProductEvents(grid);
  revealObserver.observe_new(grid.querySelectorAll('.reveal'));
}

function renderCold() {
  const grid = document.getElementById('coldGrid');
  if (!grid) return;
  grid.innerHTML = COLD_PRODUCTS.map(buildProductCard).join('');
  bindProductEvents(grid);
  revealObserver.observe_new(grid.querySelectorAll('.reveal'));
}

/* ══════════════════════════════════════════════════════════
   11. FILTER BUTTONS
   ══════════════════════════════════════════════════════════ */

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCoffee(currentFilter);
  });
});

/* ══════════════════════════════════════════════════════════
   12. QTY CONTROLS (event delegation)
   ══════════════════════════════════════════════════════════ */

function bindProductEvents(container) {
  container.addEventListener('click', e => {
    const minusBtn = e.target.closest('.qty-minus');
    const plusBtn  = e.target.closest('.qty-plus');
    const addBtn   = e.target.closest('.add-to-cart-btn');

    if (minusBtn) {
      const id      = minusBtn.dataset.id;
      const numEl   = document.getElementById(`qty-${id}`);
      let   current = parseInt(numEl.textContent, 10);
      if (current > 1) { current--; numEl.textContent = current; }
    }

    if (plusBtn) {
      const id      = plusBtn.dataset.id;
      const numEl   = document.getElementById(`qty-${id}`);
      let   current = parseInt(numEl.textContent, 10);
      current++;
      numEl.textContent = current;
    }

    if (addBtn) {
      const id  = addBtn.dataset.id;
      const qty = parseInt(document.getElementById(`qty-${id}`).textContent, 10);
      const all = [...COFFEE_PRODUCTS, ...FOOD_PRODUCTS, ...COLD_PRODUCTS];
      const prod = all.find(p => p.id === id);
      if (prod) addToCart(prod, qty);
    }
  });
}

/* ══════════════════════════════════════════════════════════
   13. CART — add, remove, update, render, persist
   ══════════════════════════════════════════════════════════ */

function addToCart(product, qty = 1) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  persistCart();
  renderCart();
  updateCartBadge();
  showToast(`☕ ${product.name} added to cart!`);

  // Pulse animation on cart icon
  const badge = document.getElementById('cartBadge');
  badge.classList.add('pulse');
  setTimeout(() => badge.classList.remove('pulse'), 300);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  persistCart();
  renderCart();
  updateCartBadge();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  persistCart();
  renderCart();
  updateCartBadge();
}

function persistCart() {
  localStorage.setItem('bhCart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const itemsEl   = document.getElementById('cartItems');
  const emptyEl   = document.getElementById('cartEmpty');
  const footerEl  = document.getElementById('cartFooter');

  if (!cart.length) {
    emptyEl.style.display  = 'block';
    footerEl.style.display = 'none';
    itemsEl.innerHTML      = '';
    itemsEl.appendChild(emptyEl);
    return;
  }

  emptyEl.style.display  = 'none';
  footerEl.style.display = 'flex';

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax      = Math.round(subtotal * 0.05);
  const total    = subtotal + tax;

  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  document.getElementById('cartTaxes').textContent    = `₹${tax.toLocaleString('en-IN')}`;
  document.getElementById('cartTotal').textContent    = `₹${total.toLocaleString('en-IN')}`;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn cart-qty-minus" data-id="${item.id}" aria-label="Decrease">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn cart-qty-plus" data-id="${item.id}" aria-label="Increase">+</button>
        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove">✕</button>
      </div>
    </div>
  `).join('');

  // Bind cart item controls
  itemsEl.querySelectorAll('.cart-qty-minus').forEach(btn =>
    btn.addEventListener('click', () => updateCartQty(btn.dataset.id, -1)));
  itemsEl.querySelectorAll('.cart-qty-plus').forEach(btn =>
    btn.addEventListener('click', () => updateCartQty(btn.dataset.id, +1)));
  itemsEl.querySelectorAll('.cart-item-remove').forEach(btn =>
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id)));
}

/* ── Cart sidebar toggle ── */
const cartToggle  = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose   = document.getElementById('cartClose');

function openCart()  { cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeCart() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); document.body.style.overflow = ''; }

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click',  closeCart);
cartOverlay.addEventListener('click', closeCart);

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!cart.length) { showToast('🛒 Your cart is empty!'); return; }
  showToast('🎉 Order placed! Thank you for choosing Brew Haven.');
  cart = [];
  persistCart();
  renderCart();
  updateCartBadge();
  closeCart();
});

document.getElementById('clearCartBtn').addEventListener('click', () => {
  cart = [];
  persistCart();
  renderCart();
  updateCartBadge();
  showToast('🗑️ Cart cleared');
});

/* ══════════════════════════════════════════════════════════
   14. TESTIMONIALS CAROUSEL
   ══════════════════════════════════════════════════════════ */

function buildTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const dots  = document.getElementById('carouselDots');
  if (!track || !dots) return;

  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-slide">
      <div class="testi-inner glass">
        <div class="testi-stars">${'★'.repeat(t.rating)}</div>
        <p class="testi-quote">"${t.quote}"</p>
        <div class="testi-author">
          <img src="${t.img}" alt="${t.name}" loading="lazy"/>
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-role">${t.role}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  dots.innerHTML = TESTIMONIALS.map((_, i) =>
    `<button class="dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Slide ${i+1}"></button>`
  ).join('');

  dots.querySelectorAll('.dot').forEach(dot =>
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index, 10))));
}

function goToSlide(index) {
  carouselIndex = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
  const track = document.getElementById('testimonialTrack');
  if (track) track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === carouselIndex));
}

function startCarouselAuto() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => goToSlide(carouselIndex + 1), 5000);
}

document.getElementById('prevBtn')?.addEventListener('click', () => { goToSlide(carouselIndex - 1); startCarouselAuto(); });
document.getElementById('nextBtn')?.addEventListener('click', () => { goToSlide(carouselIndex + 1); startCarouselAuto(); });

/* ══════════════════════════════════════════════════════════
   15. GALLERY + LIGHTBOX
   ══════════════════════════════════════════════════════════ */

function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = GALLERY_IMAGES.map((img, i) => `
    <div class="gallery-item reveal" data-index="${i}" style="--d:${i * 0.1}s">
      <img src="${img.src}" alt="${img.alt}" loading="lazy"/>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(item =>
    item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index, 10))));
}

const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(index) {
  lightboxIndex = index;
  lightboxImg.src = GALLERY_IMAGES[lightboxIndex].src;
  lightboxImg.alt = GALLERY_IMAGES[lightboxIndex].alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  lightboxIndex = (lightboxIndex + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
  lightboxImg.style.opacity = '0';
  setTimeout(() => {
    lightboxImg.src     = GALLERY_IMAGES[lightboxIndex].src;
    lightboxImg.style.opacity = '1';
  }, 200);
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click',  () => lightboxNav(-1));
lightboxNext.addEventListener('click',  () => lightboxNav(+1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   lightboxNav(-1);
  if (e.key === 'ArrowRight')  lightboxNav(+1);
});

lightboxImg.style.transition = 'opacity 0.2s ease';

/* ══════════════════════════════════════════════════════════
   16. CONTACT FORM
   ══════════════════════════════════════════════════════════ */

document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  if (!name) { showToast('❗ Please enter your name'); return; }
  showToast(`✅ Thanks, ${name}! We'll get back to you shortly.`);
  form.reset();
});

document.getElementById('newsletterForm')?.addEventListener('submit', e => {
  e.preventDefault();
  showToast('📧 Subscribed! Expect weekly specials in your inbox.');
  e.target.reset();
});

/* ══════════════════════════════════════════════════════════
   17. TOAST NOTIFICATIONS
   ══════════════════════════════════════════════════════════ */

function showToast(message, duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast     = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">☕</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.remove(); }, duration);
}

/* ══════════════════════════════════════════════════════════
   18. SCROLL REVEAL OBSERVER
   ══════════════════════════════════════════════════════════ */

const revealObserver = (() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  return {
    observe_new(elements) {
      elements.forEach(el => observer.observe(el));
    }
  };
})();

function initReveal() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el =>
    revealObserver.observe_new([el]));
}

/* ══════════════════════════════════════════════════════════
   19. SCROLL TO TOP
   ══════════════════════════════════════════════════════════ */

const scrollTopBtn = document.getElementById('scrollTop');

function toggleScrollTopBtn() {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}

scrollTopBtn.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ══════════════════════════════════════════════════════════
   20. CART BADGE PULSE CSS (inject)
   ══════════════════════════════════════════════════════════ */

const styleEl = document.createElement('style');
styleEl.textContent = `
  @keyframes cartPulse {
    0%   { transform: translate(4px,-4px) scale(1); }
    50%  { transform: translate(4px,-4px) scale(1.5); }
    100% { transform: translate(4px,-4px) scale(1); }
  }
  .cart-badge.pulse { animation: cartPulse 0.3s ease; }
`;
document.head.appendChild(styleEl);

/* ══════════════════════════════════════════════════════════
   21. SMOOTH SCROLL for all anchor links
   ══════════════════════════════════════════════════════════ */

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ══════════════════════════════════════════════════════════
   22. SPECIAL OFFER CARD HOVER GLOW (canvas-free)
   ══════════════════════════════════════════════════════════ */

document.querySelectorAll('.offer-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.14), rgba(255,255,255,0.05))`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

/* ══════════════════════════════════════════════════════════
   23. PRODUCT CARD TILT EFFECT
   ══════════════════════════════════════════════════════════ */

function bindTiltEffect() {
  document.querySelectorAll('.product-card, .cat-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-6px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ══════════════════════════════════════════════════════════
   24. KEYBOARD ACCESSIBILITY
   ══════════════════════════════════════════════════════════ */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCart();
    closeLightbox();
    searchBox.classList.remove('open');
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ══════════════════════════════════════════════════════════
   25. PAGE TRANSITION
   ══════════════════════════════════════════════════════════ */

const pageStyle = document.createElement('style');
pageStyle.textContent = `
  body { animation: pageEnter 0.6s ease 1.9s both; }
  @keyframes pageEnter { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
`;
document.head.appendChild(pageStyle);

/* ══════════════════════════════════════════════════════════
   26. INIT — run everything
   ══════════════════════════════════════════════════════════ */

function init() {
  renderCoffee();
  renderFood();
  renderCold();
  buildTestimonials();
  buildGallery();
  renderCart();
  updateCartBadge();
  initReveal();
  startCarouselAuto();
  bindTiltEffect();

  // Re-bind tilt after renders
  setTimeout(bindTiltEffect, 300);
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* ══════════════════════════════════════════════════════════
   27. SECTION PROGRESS INDICATOR (subtle top bar)
   ══════════════════════════════════════════════════════════ */

const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position:fixed;top:0;left:0;height:3px;z-index:9999;
  background:linear-gradient(90deg,var(--coffee-dark),var(--mocha));
  width:0%;transition:width 0.1s linear;pointer-events:none;
`;
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrolled  = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrolled / maxScroll) * 100}%`;
}, { passive: true });

/* ══════════════════════════════════════════════════════════
   28. LAZY IMAGE OBSERVER (performance)
   ══════════════════════════════════════════════════════════ */

if ('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imgObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
}

/* ══════════════════════════════════════════════════════════
   29. CATEGORY CARDS — click to scroll to section
   ══════════════════════════════════════════════════════════ */

document.addEventListener('click', e => {
  const card = e.target.closest('.cat-card');
  if (!card) return;
  const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
  if (['espresso','cappuccino','latte','mocha'].some(k => title.includes(k))) {
    document.getElementById('coffee')?.scrollIntoView({ behavior: 'smooth' });
  } else if (['cake','sandwich','bread','pancake'].some(k => title.includes(k))) {
    document.getElementById('food')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    document.getElementById('cold-drinks')?.scrollIntoView({ behavior: 'smooth' });
  }
});

/* ══════════════════════════════════════════════════════════
   30. FLOATING BEANS — randomise on load
   ══════════════════════════════════════════════════════════ */

document.querySelectorAll('.bean').forEach(bean => {
  bean.style.animationDelay    = `-${Math.random() * 20}s`;
  bean.style.animationDuration = `${16 + Math.random() * 12}s`;
  bean.style.left              = `${Math.random() * 95}%`;
  bean.style.top               = `${Math.random() * 90}%`;
});
