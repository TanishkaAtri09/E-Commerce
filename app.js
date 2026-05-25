/**
 * 1. MOCK DATA CONTEXT
 * Structured product metadata utilizing modern optimized assets.
 */
const PRODUCTS = [
    { 
      id: 1, 
      name: "Quantum Mechanoid", 
      price: 299, 
      desc: "Next-generation edge processing node with automated cooling architectures built directly into the housing.", 
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 2, 
      name: "Neural Interface V2", 
      price: 849, 
      desc: "Direct neural telemetry processor featuring low-latency processing speeds and seamless optical integration setups.", 
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 3, 
      name: "Optic Matrix Array", 
      price: 125, 
      desc: "Multi-layered high-density optical filtering grid suitable for high-end server farm operations and arrays.", 
      img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      id: 4, 
      name: "Vector Core Unit", 
      price: 410, 
      desc: "A streamlined, hardware-accelerated unit optimized for complex matrix transformations and real-time processing.", 
      img: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80" 
    }
  ];
  
  /**
   * 2. APPLICATION RUNTIME STATE
   */
  let cart = [];
  
  /**
   * 3. CLIENT SIDE ROUTER ENGINE
   * Programmatically alters visibility parameters of single-page DOM containers.
   */
  function navigate(pageId, productId = null) {
    // Hide all logical layout page elements
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    if (pageId === 'home') {
      document.getElementById('homePage').classList.add('active');
      window.scrollTo(0, 0);
    } else if (pageId === 'details' && productId) {
      renderProductDetails(productId);
      document.getElementById('detailsPage').classList.add('active');
      window.scrollTo(0, 0);
    }
  }
  
  /**
   * 4. STATE ALIGNMENT MUTATORS
   */
  function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      document.getElementById('cartCount').textContent = cart.length;
    }
  }
  
  /**
   * 5. COMPONENT RENDERING ARCHITECTURES
   */
  function renderCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
  
    grid.innerHTML = PRODUCTS.map(product => `
      <article class="product-card">
        <div class="img-container">
          <img class="product-img" src="${product.img}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3 class="product-title" data-id="${product.id}">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          <div class="product-meta">
            <span class="price">$${product.price}</span>
            <button class="btn add-to-cart-btn" data-id="${product.id}">
              <i data-lucide="plus" style="width: 16px; height: 16px"></i> Add
            </button>
          </div>
        </div>
      </article>
    `).join('');
    
    // Re-hydrate dynamically generated layout icons
    lucide.createIcons();
    setupCatalogEventListeners();
  }
  
  function renderProductDetails(productId) {
    const container = document.getElementById('productDetailContainer');
    if (!container) return;
  
    const product = PRODUCTS.find(p => p.id === productId);
  
    if (!product) {
      container.innerHTML = `<p>Requested operational asset details unavailable.</p>`;
      return;
    }
  
    container.innerHTML = `
      <div>
        <img class="detail-img" src="${product.img}" alt="${product.name}">
      </div>
      <div style="display: flex; flex-direction: column; justify-content: center;">
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">${product.name}</h2>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem;">${product.desc}</p>
        <div style="display: flex; align-items: center; gap: 2rem; margin-top: 1rem;">
          <span class="price" style="font-size: 2rem; color: var(--primary);">$${product.price}</span>
          <button class="btn detailed-add-btn" data-id="${product.id}" style="padding: 0.8rem 2rem; font-size: 1rem;">
            <i data-lucide="shopping-cart" style="width: 20px"></i> Add to Cart System
          </button>
        </div>
      </div>
    `;
    
    lucide.createIcons();
    setupDetailsEventListeners();
  }
  
  /**
   * 6. MODULAR EVENT HANDLER DELEGATIONS
   */
  function setupGlobalEventListeners() {
    // Navigation elements
    document.getElementById('brandLogo').addEventListener('click', (e) => {
      e.preventDefault();
      navigate('home');
    });
    
    document.getElementById('backToCatalogBtn').addEventListener('click', () => {
      navigate('home');
    });
  }
  
  function setupCatalogEventListeners() {
    // Catch item contextual description link adjustments
    document.querySelectorAll('.product-title').forEach(title => {
      title.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-id'));
        navigate('details', id);
      });
    });
  
    // Action binding for item collection selection additions
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-id'));
        addToCart(id);
      });
    });
  }
  
  function setupDetailsEventListeners() {
    const detailedBtn = document.querySelector('.detailed-add-btn');
    if (detailedBtn) {
      detailedBtn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-id'));
        addToCart(id);
      });
    }
  }
  
  /**
   * 7. SYSTEM LIFECYCLE INVOCATION
   */
  document.addEventListener("DOMContentLoaded", () => {
    setupGlobalEventListeners();
    renderCatalog();
  });