/* Noble Homes — Nobsed Properties. Shared nav/footer + data + interactions. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var PAGE = document.body.getAttribute('data-page') || 'home';
  var HOME_HERO = PAGE === 'home'; // only the home page has a dark full-bleed hero behind the nav

  /* ---------------- NAV ---------------- */
  var links = [
    { name: 'The Development', href: 'development.html', key: 'development' },
    { name: 'Construction & Trust', href: 'trust.html', key: 'trust' },
    { name: 'Investment', href: 'investment.html', key: 'investment' },
    { name: 'Contact', href: 'investment.html#contact', key: 'contact' }
  ];
  var navHost = $('#nav');
  if (navHost) {
    navHost.innerHTML =
      '<nav id="siteNav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500">' +
        '<div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">' +
          '<a href="index.html" class="flex items-center gap-3">' +
            '<img src="images/logo-mark.svg" alt="Nobsed" class="nav-logo w-9 h-9" />' +
            '<span class="flex flex-col leading-none">' +
              '<span class="nav-brand text-2xl md:text-[1.7rem] font-serif tracking-tight leading-none">NOBSED</span>' +
              '<span class="nav-sub text-[10px] uppercase tracking-[0.22em] mt-1.5 opacity-80">Properties Limited</span>' +
            '</span>' +
          '</a>' +
          '<div class="hidden md:flex items-center space-x-9">' +
            links.map(function (l) {
              var active = l.key === PAGE ? ' nav-active' : '';
              return '<a href="' + l.href + '" class="nav-link' + active + ' text-sm font-serif tracking-wide transition-opacity duration-300 hover:opacity-60">' + l.name + '</a>';
            }).join('') +
            '<a href="investment.html#contact" class="nav-cta px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border">Reserve Now</a>' +
          '</div>' +
          '<button id="navToggle" class="md:hidden" aria-label="Menu"><i data-lucide="menu"></i></button>' +
        '</div>' +
        '<div id="mobileMenu" class="hidden absolute top-full left-0 right-0 bg-white border-b border-[#E2E2E2] md:hidden">' +
          '<div class="flex flex-col p-8 space-y-6">' +
            links.map(function (l) { return '<a href="' + l.href + '" class="mob-link text-lg font-serif text-primary">' + l.name + '</a>'; }).join('') +
            '<a href="investment.html#contact" class="w-full py-4 text-xs font-bold uppercase tracking-widest border border-primary text-primary flex items-center justify-center gap-2"><span>Reserve Now</span><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i></a>' +
          '</div>' +
        '</div>' +
      '</nav>';
  }

  var nav = $('#siteNav');
  function applyNav(solid) {
    if (!nav) return;
    nav.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ' + (solid ? 'bg-white shadow-sm py-3.5' : 'bg-transparent py-6');
    var dark = solid; // dark text when solid
    $$('.nav-link').forEach(function (a) { a.style.color = dark ? '#262420' : '#FFFFFF'; a.style.opacity = a.classList.contains('nav-active') ? '0.55' : '1'; });
    var b = $('.nav-brand'), s = $('.nav-sub'), lg = $('.nav-logo'), cta = $('.nav-cta'), tg = $('#navToggle');
    if (b) b.style.color = dark ? '#262420' : '#FFFFFF';
    if (s) s.style.color = dark ? '#6E6459' : '#FFFFFF';
    if (lg) lg.style.filter = dark ? 'none' : 'brightness(0) invert(1)';
    if (cta) { cta.style.borderColor = dark ? '#262420' : '#FFFFFF'; cta.style.color = dark ? '#262420' : '#FFFFFF'; }
    if (tg) tg.style.color = dark ? '#262420' : '#FFFFFF';
  }
  if (HOME_HERO) {
    var onScroll = function () { applyNav(window.scrollY > 60); };
    window.addEventListener('scroll', onScroll, { passive: true });
    applyNav(false);
  } else {
    applyNav(true); // subpages: solid nav from top
  }

  /* ---------------- FOOTER ---------------- */
  var footHost = $('#footer');
  if (footHost) {
    footHost.innerHTML =
      '<footer class="bg-primary text-white">' +
        '<div class="max-w-7xl mx-auto px-6 md:px-12 py-12">' +
          '<div class="flex flex-col md:flex-row md:items-center justify-between gap-8">' +
            '<a href="index.html" class="flex items-center gap-3"><img src="images/logo-mark.svg" alt="Nobsed" class="w-8 h-8" style="filter:brightness(0) invert(1)"/><span class="leading-tight"><span class="block text-xl font-serif tracking-tight">NOBSED</span><span class="block text-[10px] uppercase tracking-[0.2em] text-[#8A8175]">Properties Limited &middot; Accra, Ghana</span></span></a>' +
            '<nav class="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-serif">' +
              '<a href="development.html" class="hover:text-[#B9B0A2] transition-colors">The Development</a>' +
              '<a href="trust.html" class="hover:text-[#B9B0A2] transition-colors">Construction &amp; Trust</a>' +
              '<a href="investment.html" class="hover:text-[#B9B0A2] transition-colors">Investment</a>' +
              '<a href="investment.html#contact" class="hover:text-[#B9B0A2] transition-colors">Contact</a>' +
            '</nav>' +
            '<div class="flex items-center gap-4">' +
              '<a href="mailto:info@nobsed.com" class="hover:text-accent transition-colors" aria-label="Email"><i data-lucide="mail" class="w-5 h-5"></i></a>' +
              '<a href="#" class="hover:text-accent transition-colors" aria-label="LinkedIn"><i data-lucide="linkedin" class="w-5 h-5"></i></a>' +
              '<a href="#" class="hover:text-accent transition-colors" aria-label="Instagram"><i data-lucide="instagram" class="w-5 h-5"></i></a>' +
            '</div>' +
          '</div>' +
          '<div class="mt-8 pt-6 border-t border-[#39352E] flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-[#8A8175]">' +
            '<span>&copy; ' + new Date().getFullYear() + ' Nobsed Properties Limited. All rights reserved.</span>' +
            '<span class="flex gap-6"><a href="#" class="hover:text-white">Privacy</a><a href="#" class="hover:text-white">Terms of Sale</a><span>+233 20 000 0000</span></span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  /* ---------------- Trust seals ---------------- */
  var seals = [
    { title: 'Environmental Permit', authority: 'EPA Ghana', status: 'Active', icon: 'shield-check', description: 'Full Environmental Impact Assessment completed and approved for the development site in accordance with national standards.' },
    { title: 'Land Title Registration', authority: 'Lands Commission', status: 'Secured', icon: 'landmark', description: 'Indefeasible title certificate issued. All searches completed and ownership verified to be free of all encumbrances.' },
    { title: 'Company Registration', authority: 'Registrar-General', status: 'Verified', icon: 'file-text', description: 'Nobsed Properties Ltd is fully incorporated as a real estate developer under the Companies Act, 2019 (Act 992).' },
    { title: 'Building Permit', authority: 'Municipal Assembly', status: 'Active', icon: 'check-circle', description: 'Architectural and structural drawings vetted and approved. Development is strictly monitored for building code compliance.' }
  ];
  var sealHTML = seals.map(function (s) {
    return '<div class="bg-white border border-[#EDEDED] p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">' +
      '<div class="flex justify-between items-start mb-6"><div class="p-3 bg-background text-accent"><i data-lucide="' + s.icon + '" class="w-7 h-7"></i></div>' +
      '<div class="flex items-center space-x-1.5 px-2.5 py-1 bg-[#F1F5F0] rounded-full"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div><span class="text-[10px] font-bold uppercase tracking-widest text-accent">' + s.status + '</span></div></div>' +
      '<h3 class="font-serif text-xl mb-2 text-primary">' + s.title + '</h3>' +
      '<p class="text-xs uppercase tracking-widest font-bold text-[#6E6459] mb-4">' + s.authority + '</p>' +
      '<p class="text-sm text-[#7A7A7A] leading-relaxed flex-grow">' + s.description + '</p></div>';
  }).join('');
  $$('[data-seals]').forEach(function (el) { el.innerHTML = sealHTML; });

  /* ---------------- Unit features ---------------- */
  var feats = [
    ['home', '3-Bedroom Townhouse'], ['bed-double', 'Master w/ Walk-in Closet'], ['bed-double', 'Bedroom 1 & 2'],
    ['check-circle-2', 'Modern Kitchen'], ['layers', 'Laundry & Store Room'], ['bath', "Visitor's WC"],
    ['maximize-2', 'Spacious Terraces'], ['car', '2 Dedicated Parking Spaces']
  ];
  var uf = $('[data-unit-features]');
  if (uf) uf.innerHTML = feats.map(function (f) {
    return '<div class="flex items-center space-x-4 group"><div class="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300"><i data-lucide="' + f[0] + '" class="w-5 h-5"></i></div><span class="text-sm font-sans font-medium text-primary tracking-wide">' + f[1] + '</span></div>';
  }).join('');

  /* ---------------- Render gallery ---------------- */
  var renders = [
    { cat: 'Exterior', title: 'Modern Facade - Block A', url: 'images/render-ext2.jpg' },
    { cat: 'Interior', title: 'Open-Plan Living Space', url: 'images/render-living.jpg' },
    { cat: 'Interior', title: 'Gourmet Kitchen Design', url: 'images/render-interior2.jpg' },
    { cat: 'Exterior', title: 'Landscaped Entrance', url: 'images/render-ext3.jpg' },
    { cat: 'Exterior', title: 'Street Elevation', url: 'images/hero-exterior.png' }
  ];
  var gal = $('[data-gallery]');
  if (gal) gal.innerHTML = renders.map(function (r) {
    return '<figure class="reveal group"><div class="relative aspect-[16/10] overflow-hidden plate">' +
      '<img src="' + r.url + '" alt="' + r.title + '" class="img-cover transition-transform duration-700 group-hover:scale-[1.03]" />' +
      '<span class="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-accent bg-background/90 px-3 py-1">' + r.cat + '</span></div>' +
      '<figcaption class="mt-3 text-sm font-serif text-primary">' + r.title + '</figcaption></figure>';
  }).join('');

  /* ---------------- Pedigree stats ---------------- */
  var stats = [['building-2', '12+', 'Years Operating'], ['trophy', '450+', 'Completed Units'], ['users', '85', 'In-House Specialists'], ['calendar', '2012', 'Established']];
  var ped = $('[data-pedigree]');
  if (ped) ped.innerHTML = stats.map(function (s) {
    return '<div class="bg-white p-8 border border-border group hover:border-accent transition-colors duration-300 reveal"><div class="p-3 bg-muted w-fit mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300"><i data-lucide="' + s[0] + '" class="w-6 h-6"></i></div><div class="text-4xl font-serif mb-2 text-primary">' + s[1] + '</div><div class="text-xs uppercase tracking-widest font-bold text-secondary">' + s[2] + '</div></div>';
  }).join('');

  /* ---------------- Timeline ---------------- */
  var tl = [
    { date: 'Q3 2023', title: 'Site Acquisition & Title Clearance', description: 'Secured prime land in East Legon Hills. Conducted exhaustive searches at the Lands Commission to ensure 100% encumbrance-free title.', status: 'completed' },
    { date: 'Q4 2023', title: 'Environmental & Municipal Approvals', description: 'EPA permit secured and structural architectural designs approved by the Municipal Assembly.', status: 'completed' },
    { date: 'Q1 2024', title: 'Groundbreaking & Site Preparation', description: 'Mobilization of heavy machinery and establishment of site security and worker quarters.', status: 'completed' },
    { date: 'Q2 2024', title: 'Foundation & Sub-Structure', description: 'Casting of foundations and basement levels for the main towers. Currently 85% complete.', status: 'in-progress' },
    { date: 'Q4 2024', title: 'Super-Structure Topping Out', description: 'Completion of the structural frame for all residence floors.', status: 'upcoming' },
    { date: 'Q2 2025', title: 'Finishing & Landscape', description: 'Interior fit-outs, facade glazing, and development of community green spaces.', status: 'upcoming' },
    { date: 'Q3 2025', title: 'Final Handover', description: 'Key handover ceremonies for the first phase of homeowners.', status: 'upcoming', last: true }
  ];
  function statusCls(s) { return s === 'completed' ? 'bg-accent text-white' : s === 'in-progress' ? 'bg-primary text-white nh-pulse' : 'bg-muted text-secondary'; }
  var tlEl = $('[data-timeline]');
  if (tlEl) tlEl.innerHTML = tl.map(function (i) {
    return '<div class="relative flex gap-8 pb-12">' + (!i.last ? '<div class="absolute left-[15px] top-8 bottom-0 w-[1px] bg-border"></div>' : '') +
      '<div class="relative z-10 w-8 h-8 flex items-center justify-center ' + statusCls(i.status) + ' text-[10px] font-bold shrink-0">' + (i.status === 'completed' ? '<i data-lucide="check-circle-2" class="w-4 h-4"></i>' : '') + '</div>' +
      '<div class="flex-1"><div class="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">' + i.date + '</div><h4 class="text-xl font-serif mb-2 text-primary">' + i.title + '</h4><p class="text-secondary text-sm leading-relaxed max-w-xl">' + i.description + '</p></div></div>';
  }).join('');

  /* ---------------- Documents ---------------- */
  var docs = [
    { title: 'Certificate of Incorporation', issuer: 'Registrar-General Dept.', id: 'REG-2015-14828' },
    { title: 'Indefeasible Land Title', issuer: 'Lands Commission (Ghana)', id: 'LC-ACC-004-2023' },
    { title: 'Environmental Permit', issuer: 'EPA Ghana', id: 'EPA-PMT-00921' },
    { title: 'Approved Structural Plan', issuer: 'Municipal Authority', id: 'ASMB-PLN-5520' }
  ];
  var dEl = $('[data-docs]');
  if (dEl) dEl.innerHTML = docs.map(function (d) {
    return '<div class="bg-white border border-border p-8 flex flex-col items-center text-center group cursor-pointer hover:border-accent transition-all duration-300 reveal"><div class="w-full aspect-[3/4] bg-muted mb-6 flex items-center justify-center overflow-hidden relative"><div class="absolute inset-0 border-8 border-white/50 m-4"></div><i data-lucide="file-check" class="w-12 h-12 text-border group-hover:text-accent transition-colors duration-300"></i><div class="absolute bottom-4 right-4 bg-primary text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i data-lucide="search" class="w-4 h-4"></i></div></div><h5 class="font-serif text-lg mb-1">' + d.title + '</h5><p class="text-[10px] uppercase tracking-widest text-secondary font-bold mb-4">' + d.issuer + '</p><div class="text-[10px] font-mono text-muted-foreground">' + d.id + '</div></div>';
  }).join('');

  /* ---------------- Diaspora steps ---------------- */
  var steps = [
    ['01', 'calendar', 'Expert Consultation', 'Book a personalized discovery call via Zoom or WhatsApp to review our masterplan, floorplans, and current availability from wherever you are in the world.'],
    ['02', 'file-check', 'Reservation Deposit', 'Secure your preferred unit with a flexible reservation deposit. This locks in the current price and initiates the formal sales agreement process.'],
    ['03', 'user-check', 'Legal & Conveyancing', 'Our legal team coordinates with your solicitors. We handle all Lands Commission searches and Registrar-General documentation on your behalf.'],
    ['04', 'credit-card', 'Milestone Payments', 'Structured installment plans linked to construction progress. Receive monthly photographic reports and site drone footage for complete transparency.']
  ];
  var stEl = $('[data-steps]');
  if (stEl) stEl.innerHTML = steps.map(function (s) {
    return '<div class="relative p-8 bg-white border border-[#EDEDED] flex flex-col items-start group"><div class="text-[10px] uppercase tracking-[0.3em] font-bold text-[#A1A1A1] mb-6">Step ' + s[0] + '</div><div class="mb-6 p-4 bg-background text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500"><i data-lucide="' + s[1] + '" class="w-6 h-6"></i></div><h3 class="text-xl font-serif text-primary mb-4">' + s[2] + '</h3><p class="text-sm text-[#666666] leading-relaxed mb-6 font-sans">' + s[3] + '</p><div class="mt-auto flex items-center text-[10px] uppercase tracking-widest font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity"><span>Learn More</span><i data-lucide="arrow-right" class="ml-2 w-3.5 h-3.5"></i></div></div>';
  }).join('');

  /* ---------------- FAQ ---------------- */
  var faqs = [
    ['How is my investment protected through escrow?', 'We utilize internationally recognized escrow accounts for all reservation deposits. Funds are only released to the project once the Sales & Purchase Agreement is signed and land title searches are verified by the Lands Commission.'],
    ['Do I need to travel to Ghana for the reservation?', 'No. The entire process is designed for remote execution. We use digital signature platforms (like DocuSign) for all contracts, and original documents are dispatched via international courier (DHL/FedEx).'],
    ['How do I appoint a Power of Attorney (PoA)?', 'If you wish for a local representative to sign on your behalf, we can provide a PoA template. This must be notarized in your country of residence and stamped at the Ghana Mission abroad to be legally binding locally.'],
    ['Can I pay in currencies other than USD?', 'Yes, we accept payments in USD, GBP, and EUR via bank transfer to our offshore accounts, as well as GHS to our local project accounts at current BoG exchange rates.']
  ];
  var fEl = $('[data-faq]');
  if (fEl) fEl.innerHTML = faqs.map(function (f) {
    return '<div class="py-8 border-b border-[#EDEDED]"><div class="flex items-start space-x-4"><i data-lucide="help-circle" class="w-5 h-5 mt-1 text-accent shrink-0"></i><div><h4 class="text-lg font-serif text-primary mb-3">' + f[0] + '</h4><p class="text-sm text-[#666666] leading-relaxed font-sans">' + f[1] + '</p></div></div></div>';
  }).join('');

  /* ---------------- lucide ---------------- */
  function icons() { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }
  icons();

  /* ---------------- mobile menu ---------------- */
  var toggle = $('#navToggle'), mob = $('#mobileMenu');
  if (toggle && mob) { toggle.addEventListener('click', function () { mob.classList.toggle('hidden'); }); $$('.mob-link').forEach(function (a) { a.addEventListener('click', function () { mob.classList.add('hidden'); }); }); }

  /* ---------------- floor tabs ---------------- */
  $$('.floor-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var plan = btn.getAttribute('data-plan');
      $$('.floor-tab').forEach(function (b) {
        var on = b === btn;
        b.className = 'floor-tab pb-4 text-sm uppercase tracking-widest font-bold transition-all ' + (on ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground hover:text-primary');
      });
      $$('.floor-panel').forEach(function (p) { var on = p.getAttribute('data-plan') === plan; p.classList.toggle('hidden', !on); p.classList.toggle('grid', on); });
    });
  });

  /* ---------------- payment calculator ---------------- */
  var state = { price: 245000, deposit: 25, tenure: 18, currency: 'USD' };
  var RATE = 12.5;
  function fmt(v) { try { return new Intl.NumberFormat(state.currency === 'USD' ? 'en-US' : 'en-GH', { style: 'currency', currency: state.currency, maximumFractionDigits: 0 }).format(v); } catch (e) { return (state.currency === 'USD' ? '$' : 'GH₵') + Math.round(v).toLocaleString(); } }
  function calc() {
    var price = state.currency === 'USD' ? state.price : state.price * RATE;
    var reservation = 5000 * (state.currency === 'USD' ? 1 : RATE);
    var deposit = price * state.deposit / 100;
    var monthly = (price - deposit - reservation) / state.tenure;
    var set = function (id, v) { var e = $(id); if (e) e.textContent = v; };
    set('#outTotal', fmt(price)); set('#outRes', fmt(reservation)); set('#outDep', fmt(deposit));
    set('#outMonthly', fmt(monthly)); set('#outMonths', 'Fixed for ' + state.tenure + ' Months');
    set('#depVal', state.deposit + '%'); set('#tenVal', state.tenure + ' Months');
  }
  var dep = $('#depRange'), ten = $('#tenRange'), cu = $('#curUSD'), cg = $('#curGHS');
  function curStyle() {
    if (!cu) return;
    cu.className = 'cur-btn px-6 py-2 text-xs font-bold transition-all ' + (state.currency === 'USD' ? 'bg-white shadow-sm text-primary' : 'text-[#7A7A7A]');
    cg.className = 'cur-btn px-6 py-2 text-xs font-bold transition-all ' + (state.currency === 'GHS' ? 'bg-white shadow-sm text-primary' : 'text-[#7A7A7A]');
  }
  if (dep) dep.addEventListener('input', function () { state.deposit = +dep.value; calc(); });
  if (ten) ten.addEventListener('input', function () { state.tenure = +ten.value; calc(); });
  if (cu) cu.addEventListener('click', function () { state.currency = 'USD'; curStyle(); calc(); });
  if (cg) cg.addEventListener('click', function () { state.currency = 'GHS'; curStyle(); calc(); });
  if (dep) { curStyle(); calc(); }

  /* ---------------- form ---------------- */
  var form = $('#reserveForm');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.querySelector('[name=name]').value.trim();
    var email = form.querySelector('[name=email]').value.trim();
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { alert('Please enter your name and a valid email.'); return; }
    form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.setAttribute('disabled', 'true'); });
    var ok = $('#formOk'); if (ok) ok.classList.remove('hidden');
  });

  /* ---------------- reveal + progress ---------------- */
  var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  $$('.reveal').forEach(function (el) { io.observe(el); });
  var pio = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.style.transition = 'width 1.5s ease-out'; en.target.style.width = '34%'; pio.unobserve(en.target); } }); }, { threshold: 0.5 });
  var pb = $('.progress-bar'); if (pb) pio.observe(pb);

  icons();
})();
