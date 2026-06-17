/* ===== Maison & Co. demo logic ===== */

const grid = document.getElementById('listingGrid');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');
let map, markers = [];

const fmtPrice = n => '$' + n.toLocaleString('en-US');

/* ---- Populate the location dropdown from the data ---- */
function buildLocationOptions(){
  const sel = document.getElementById('filterLocation');
  [...new Set(LISTINGS.map(l => l.location))].sort().forEach(loc => {
    const o = document.createElement('option');
    o.value = loc; o.textContent = loc;
    sel.appendChild(o);
  });
}

/* ---- Render listing cards ---- */
function renderCards(list){
  grid.innerHTML = '';
  list.forEach(l => {
    const card = document.createElement('article');
    card.className = 'card';
    card.onclick = () => openModal(l.id);
    card.innerHTML = `
      <div class="card-img" style="background-image:url('${l.img}')">
        <span class="card-tag">${l.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-price">${fmtPrice(l.price)}</div>
        <div class="card-title">${l.title}</div>
        <div class="card-loc">&#9679; ${l.location}</div>
        <div class="card-specs">
          <span>&#128716; ${l.beds} bd</span>
          <span>&#128703; ${l.baths} ba</span>
          <span>&#9633; ${l.area.toLocaleString()} ft&sup2;</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  const has = list.length > 0;
  noResults.hidden = has;
  resultCount.textContent = has
    ? `Showing ${list.length} of ${LISTINGS.length} listings`
    : '';
}

/* ---- Filtering ---- */
function getFiltered(){
  const loc = document.getElementById('filterLocation').value;
  const min = +document.getElementById('filterMin').value;
  const max = +document.getElementById('filterMax').value;
  const amen = document.getElementById('filterAmenity').value;

  return LISTINGS.filter(l =>
    (!loc || l.location === loc) &&
    l.price >= min && l.price <= max &&
    (!amen || l.amenities.includes(amen))
  );
}

function applyFilters(){
  const filtered = getFiltered();
  renderCards(filtered);
  renderMarkers(filtered);
  document.getElementById('listings').scrollIntoView({behavior:'smooth'});
}

function resetFilters(){
  document.getElementById('searchBar').reset();
  renderCards(LISTINGS);
  renderMarkers(LISTINGS);
}

/* ---- Map ---- */
function initMap(){
  map = L.map('map', {scrollWheelZoom:false}).setView([30, 0], 2);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    maxZoom: 19
  }).addTo(map);
  renderMarkers(LISTINGS);
}

function renderMarkers(list){
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  if(!list.length) return;

  const bounds = [];
  list.forEach(l => {
    const m = L.marker([l.lat, l.lng]).addTo(map);
    m.bindPopup(`
      <div class="map-popup">
        <strong>${l.title}</strong><br/>
        <span class="mp-price">${fmtPrice(l.price)}</span><br/>
        <small>${l.location}</small><br/>
        <a href="#" onclick="openModal(${l.id});return false;">View details &rarr;</a>
      </div>`);
    markers.push(m);
    bounds.push([l.lat, l.lng]);
  });
  if(bounds.length > 1) map.fitBounds(bounds, {padding:[50,50]});
  else map.setView(bounds[0], 11);
}

/* ---- Detail modal ---- */
function openModal(id){
  const l = LISTINGS.find(x => x.id === id);
  if(!l) return;
  document.getElementById('modalImg').style.backgroundImage = `url('${l.img}')`;
  document.getElementById('modalPrice').textContent = fmtPrice(l.price);
  document.getElementById('modalTitle').textContent = l.title;
  document.getElementById('modalLocation').innerHTML = '&#9679; ' + l.location;
  document.getElementById('modalSpecs').innerHTML =
    `<span>&#128716; ${l.beds} beds</span>
     <span>&#128703; ${l.baths} baths</span>
     <span>&#9633; ${l.area.toLocaleString()} ft&sup2;</span>`;
  document.getElementById('modalAmenities').innerHTML =
    l.amenities.map(a => `<span>${a}</span>`).join('');
  document.getElementById('modalDesc').textContent = l.desc;
  document.getElementById('modal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('modal').hidden = true;
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ---- Mobile nav (simple toggle) ---- */
document.querySelector('.nav-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.main-nav');
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
});

/* ---- Init ---- */
buildLocationOptions();
renderCards(LISTINGS);
initMap();
