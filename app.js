/* Noble Homes — Nobsed Properties. Interactions + data rendering. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- year ---------- */
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Trust seals ---------- */
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
      '<p class="text-xs uppercase tracking-widest font-bold text-[#4A4A4A] mb-4">' + s.authority + '</p>' +
      '<p class="text-sm text-[#7A7A7A] leading-relaxed flex-grow">' + s.description + '</p></div>';
  }).join('');
  $$('[data-seals]').forEach(function (el) { el.innerHTML = sealHTML; });

  /* ---------- Unit features ---------- */
  var feats = [
    ['home', '3-Bedroom Townhouse'], ['bed-double', 'Master w/ Walk-in Closet'], ['bed-double', 'Bedroom 1 & 2'],
    ['check-circle-2', 'Modern Kitchen'], ['layers', 'Laundry & Store Room'], ['bath', "Visitor's WC"],
    ['maximize-2', 'Spacious Terraces'], ['car', '2 Dedicated Parking Spaces']
  ];
  var uf = $('[data-unit-features]');
  if (uf) uf.innerHTML = feats.map(function (f) {
    return '<div class="flex items-center space-x-4 group"><div class="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300"><i data-lucide="' + f[0] + '" class="w-5 h-5"></i></div><span class="text-sm font-sans font-medium text-primary tracking-wide">' + f[1] + '</span></div>';
  }).join('');

  /* ---------- Render gallery ---------- */
  var renders = [
    { cat: 'Exterior', title: 'Modern Facade - Block A', url: 'images/render-ext2.jpg' },
    { cat: 'Interior', title: 'Open-Plan Living Space', url: 'images/render-living.jpg' },
    { cat: 'Interior', title: 'Gourmet Kitchen Design', url: 'images/render-interior2.jpg' },
    { cat: 'Exterior', title: 'Landscaped Entrance', url: 'images/render-ext3.jpg' },
    { cat: 'Interior', title: 'Master Bedroom Sanctuary', url: 'images/render-living.jpg' },
    { cat: 'Exterior', title: 'Sunset View - Terrace', url: 'images/hero-exterior.png' }
  ];
  var gal = $('[data-gallery]');
  if (gal) gal.innerHTML = renders.map(function (r) {
    return '<div class="relative aspect-[4/3] group overflow-hidden bg-white reveal"><img src="' + r.url + '" alt="' + r.title + '" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />' +
      '<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"><span class="text-[10px] uppercase tracking-widest text-accent bg-background px-3 py-1 w-fit mb-3">' + r.cat + '</span><h4 class="text-white font-serif text-xl">' + r.title + '</h4></div></div>';
  }).join('');

  /* ---------- Pedigree stats ---------- */
  var stats = [['building-2', '12+', 'Years Operating'], ['trophy', '450+', 'Completed Units'], ['users', '85', 'In-House Specialists'], ['calendar', '2012', 'Established']];
  var ped = $('[data-pedigree]');
  if (ped) ped.innerHTML = stats.map(function (s) {
    return '<div class="bg-white p-8 border border-border group hover:border-accent transition-colors duration-300 reveal"><div class="p-3 bg-muted w-fit mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300"><i data-lucide="' + s[0] + '" class="w-6 h-6"></i></div><div class="text-4xl font-serif mb-2 text-primary">' + s[1] + '</div><div class="text-xs uppercase tracking-widest font-bold text-secondary">' + s[2] + '</div></div>';
  }).join('');

  /* ---------- Timeline ---------- */
  var tl = [
    { date: 'Q3 2023', title: 'Site Acquisition & Title Clearance', description: 'Secured prime land in East Legon Hills. Conducted exhaustive searches at the Lands Commission to ensure 100% encumbrance-free title.', status: 'completed' },
    { date: 'Q4 2023', title: 'Environmental & Municipal Approvals', description: 'EPA permit secured and structural architectural designs approved by the Municipal Assembly.', status: 'completed' },
    { date: 'Q1 2024', title: 'Groundbreaking & Site Preparation', description: 'Mobilization of heavy machinery and establishment of site security and worker quarters.', status: 'completed' },
    { date: 'Q2 2024', title: 'Foundation & Sub-Structure', description: 'Casting of foundations and basement levels for the main towers. Currently 85% complete.', status: 'in-progress' },
    { date: 'Q4 2024', title: 'Super-Structure Topping Out', description: 'Completion of the structural frame for all residence floors.', status: 'upcoming' },
    { date: 'Q2 2025', title: 'Finishing & Landscape', description: 'Interior fit-outs, facade glazing, and development of community green spaces.', status: 'upcoming' },
    { date: 'Q3 2025', title: 'Final Handover', description: 'Key handover ceremonies for the first phase of homeowners.', status: 'upcoming', last: true }
  ];
  function statusCls(s) { return s === 'completed' ? 'bg-accent text-white' : s === 'in-progress' ? 'bg-primary text-white animate-pulse' : 'bg-muted text-secondary'; }
  var tlEl = $('[data-timeline]');
  if (tlEl) tlEl.innerHTML = tl.map(function (i) {
    return '<div class="relative flex gap-8 pb-12">' + (!i.last ? '<div class="absolute left-[15px] top-8 bottom-0 w-[1px] bg-border"></div>' : '') +
      '<div class="relative z-10 w-8 h-8 flex items-center justify-center ' + statusCls(i.status) + ' text-[10px] font-bold shrink-0">' + (i.status === 'completed' ? '<i data-lucide="check-circle-2" class="w-4 h-4"></i>' : '') + '</div>' +
      '<div class="flex-1"><div class="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1">' + i.date + '</div><h4 class="text-xl font-serif mb-2 text-primary">' + i.title + '</h4><p class="text-secondary text-sm leading-relaxed max-w-xl">' + i.description + '</p></div></div>';
  }).join('');

  /* ---------- Documents ---------- */
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

  /* ---------- Diaspora steps ---------- */
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

  /* ---------- FAQ ---------- */
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

  /* ---------- lucide icons ---------- */
  function icons() { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }
  icons();

  /* ---------- Navbar scroll ---------- */
  var nav = $('#siteNav');
  function onScroll() {
    var s = window.scrollY > 50;
    nav.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ' + (s ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6');
    $$('.nav-link').forEach(function (a) { a.classList.toggle('text-white', !s); a.classList.toggle('text-primary', s); });
    var brand = $('.nav-brand'), sub = $('.nav-sub'), logo = $('.nav-logo'), cta = $('.nav-cta');
    if (brand) { brand.classList.toggle('text-white', !s); brand.style.color = s ? '#1A1A1A' : '#FFFFFF'; }
    if (sub) sub.style.color = s ? '#4A4A4A' : '#FFFFFF';
    if (logo) logo.style.filter = s ? 'none' : 'brightness(0) invert(1)';
    if (cta) cta.className = 'nav-cta px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 border ' + (s ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white text-white hover:bg-white hover:text-primary');
    var tgl = $('#navToggle'); if (tgl) tgl.className = 'md:hidden ' + (s ? 'text-primary' : 'text-white');
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = $('#navToggle'), mob = $('#mobileMenu');
  toggle.addEventListener('click', function () { mob.classList.toggle('hidden'); });
  $$('.mob-link').forEach(function (a) { a.addEventListener('click', function () { mob.classList.add('hidden'); }); });

  /* ---------- Floor plan tabs ---------- */
  $$('.floor-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var plan = btn.getAttribute('data-plan');
      $$('.floor-tab').forEach(function (b) {
        var on = b === btn;
        b.className = 'floor-tab pb-4 text-sm uppercase tracking-widest font-bold transition-all ' + (on ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground hover:text-primary');
      });
      $$('.floor-panel').forEach(function (p) {
        var on = p.getAttribute('data-plan') === plan;
        p.classList.toggle('hidden', !on);
        p.classList.toggle('grid', on);
      });
    });
  });

  /* ---------- Payment calculator ---------- */
  var state = { price: 245000, deposit: 25, tenure: 18, currency: 'USD' };
  var RATE = 12.5;
  function fmt(v) { try { return new Intl.NumberFormat(state.currency === 'USD' ? 'en-US' : 'en-GH', { style: 'currency', currency: state.currency, maximumFractionDigits: 0 }).format(v); } catch (e) { return (state.currency === 'USD' ? '$' : 'GH₵') + Math.round(v).toLocaleString(); } }
  function calc() {
    var price = state.currency === 'USD' ? state.price : state.price * RATE;
    var reservation = 5000 * (state.currency === 'USD' ? 1 : RATE);
    var deposit = price * state.deposit / 100;
    var balance = price - deposit - reservation;
    var monthly = balance / state.tenure;
    var set = function (id, v) { var e = $(id); if (e) e.textContent = v; };
    set('#outTotal', fmt(price)); set('#outRes', fmt(reservation)); set('#outDep', fmt(deposit));
    set('#outMonthly', fmt(monthly)); set('#outMonths', 'Fixed for ' + state.tenure + ' Months');
    set('#depVal', state.deposit + '%'); set('#tenVal', state.tenure + ' Months');
  }
  var dep = $('#depRange'), ten = $('#tenRange'), cu = $('#curUSD'), cg = $('#curGHS');
  function curStyle() {
    cu.className = 'cur-btn px-6 py-2 text-xs font-bold transition-all ' + (state.currency === 'USD' ? 'bg-white shadow-sm text-primary' : 'text-[#7A7A7A]');
    cg.className = 'cur-btn px-6 py-2 text-xs font-bold transition-all ' + (state.currency === 'GHS' ? 'bg-white shadow-sm text-primary' : 'text-[#7A7A7A]');
  }
  if (dep) dep.addEventListener('input', function () { state.deposit = +dep.value; calc(); });
  if (ten) ten.addEventListener('input', function () { state.tenure = +ten.value; calc(); });
  if (cu) cu.addEventListener('click', function () { state.currency = 'USD'; curStyle(); calc(); });
  if (cg) cg.addEventListener('click', function () { state.currency = 'GHS'; curStyle(); calc(); });
  if (dep) { curStyle(); calc(); }

  /* ---------- Reservation form ---------- */
  var form = $('#reserveForm');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.querySelector('[name=name]').value.trim();
    var email = form.querySelector('[name=email]').value.trim();
    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      alert('Please enter your name and a valid email.'); return;
    }
    form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.setAttribute('disabled', 'true'); });
    $('#formOk').classList.remove('hidden');
  });

  /* ---------- Reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  $$('.reveal').forEach(function (el) { io.observe(el); });

  /* ---------- Progress bar ---------- */
  var pio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.style.transition = 'width 1.5s ease-out'; en.target.style.width = '34%'; pio.unobserve(en.target); } });
  }, { threshold: 0.5 });
  var pb = $('.progress-bar'); if (pb) pio.observe(pb);

  /* re-init icons after dynamic content */
  icons();
})();
