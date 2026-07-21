const PAGE_SIZE = 8;
let currentPage = 1;
let filteredList = [];

function applyFilters() {
  const lt     = document.getElementById("loan-filter");
  const tp     = document.getElementById("type-filter");
  const rf     = document.getElementById("refi-filter");
  const st     = document.getElementById("sort-filter").value;
  const tm     = document.getElementById("term-filter");
  const pt     = document.getElementById("property-filter");
  const search = document.getElementById("search");

  filteredList = houses.filter(h => {
    if (lt.value !== "all" && h.loan !== lt.value) return false;
    if (tp.value !== "all" && h.type !== tp.value) return false;
    if (rf.value === "yes" && !h.refi) return false;
    if (rf.value === "no" && h.refi) return false;
    if (tm.value !== "all" && h.term !== parseInt(tm.value, 10)) return false;
    if (pt.value !== "all" && h.proptype !== pt.value) return false;
    const query = search.value.trim().toLowerCase();
    if (query) {
      const cityMatch = h.city.toLowerCase().includes(query);
      const abbr = h.city.split(", ")[1]?.toLowerCase();
      const fullState = Object.keys(stateMap).find(k => stateMap[k] === abbr);
      const stateMatch = fullState ? fullState.startsWith(query) : false;
      const propMatch = h.proptype.toLowerCase().includes(query);
      if (!cityMatch && !stateMatch && !propMatch) return false;
    }
    return true;
  });

  if      (st === "loanamt-asc")  filteredList.sort((a, b) => a.loanamt - b.loanamt);
  else if (st === "loanamt-desc") filteredList.sort((a, b) => b.loanamt - a.loanamt);
  else if (st === "rate-asc")     filteredList.sort((a, b) => a.rate - b.rate);
  else if (st === "rate-desc")    filteredList.sort((a, b) => b.rate - a.rate);
  else if (st === "term-asc")     filteredList.sort((a, b) => a.term - b.term);
  else if (st === "term-desc")    filteredList.sort((a, b) => b.term - a.term);

  currentPage = 1;
  renderCards();
}

function renderCards() {
  const container = document.getElementById("cards");
  const btn       = document.getElementById("load-more-btn");
  const countEl   = document.getElementById("count");
  const heroEl    = document.getElementById("hero-count");
  const visible   = filteredList.slice(0, currentPage * PAGE_SIZE);

  if (countEl) {
    countEl.textContent =
      `Showing ${visible.length} of ${filteredList.length} propert${filteredList.length === 1 ? "y" : "ies"}`;
  }
  if (heroEl) heroEl.textContent = filteredList.length;

  if (!filteredList.length) {
    container.innerHTML = '<div class="no-results">No properties match your filters</div>';
    btn.style.display = "none";
    return;
  }

  container.innerHTML = visible.map(h => `
    <a href="${h.link}" target="_blank" rel="noopener" class="card">
      <div class="card-header">
        <div>
          <div class="card-proptype">${h.proptype}</div>
          <div class="card-city">${h.city}</div>
        </div>
        ${h.refi ? '<span class="badge badge-refi">Refi</span>' : ''}
      </div>
      <span class="badge ${badgeClass[h.loan]}">${h.loan}</span>
      <span class="badge ${typeClass[h.type]}">${h.type}</span>
      <div class="card-row"><span>Loan Amount</span><span>$${h.loanamt.toLocaleString()}</span></div>
      <div class="card-row"><span>Rate</span><span>${h.rate.toFixed(2)}%</span></div>
      <div class="card-row"><span>Loan term</span><span>${h.term} years</span></div>
    </a>
  `).join("");

  btn.style.display = visible.length >= filteredList.length ? "none" : "inline-block";
}

function loadMore() {
  currentPage++;
  renderCards();
}

function resetFilters() {
  document.getElementById("search").value = "";
  document.getElementById("type-filter").value = "all";
  document.getElementById("loan-filter").value = "all";
  document.getElementById("term-filter").value = "all";
  document.getElementById("refi-filter").value = "all";
  document.getElementById("property-filter").value = "all";
  document.getElementById("sort-filter").value = "loanamt-asc";
  applyFilters();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyFilters);
} else {
  applyFilters();
}
