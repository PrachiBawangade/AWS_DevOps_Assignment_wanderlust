async function loadData() {
  const res = await fetch("data.json");
  const data = await res.json();
  displayCards(data);

  document.getElementById("search").addEventListener("input", (e) => {
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    displayCards(filtered);
  });
}

function displayCards(data) {
  const container = document.getElementById("cards");
  container.innerHTML = "";
  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" />
        <h3>${item.title}</h3>
        <p>${item.price}</p>
      </div>
    `;
  });
}

loadData();
