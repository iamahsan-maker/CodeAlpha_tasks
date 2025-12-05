function sideber_close() {
    document.getElementById("sideber").style.display = "none";
}
function w3_open() {
    document.getElementById("sideber").style.display = "block";
}
function form_close() {
    document.getElementById("sideber_M").style.display = "none";
}
function form_open() {
    document.getElementById("sideber_M").style.display = "block";
}

function close_btn() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("side").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}
function toggleFilter() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("side").style.width = "25%";
    document.getElementById("side").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function sortProducts(option) {
    const container = document.querySelector(".grid_images");
    const items = Array.from(container.querySelectorAll(".grid_item"));

    items.sort((a, b) => {
        const nameA = a.querySelector(".span_item").innerText.trim().toUpperCase();
        const nameB = b.querySelector(".span_item").innerText.trim().toUpperCase();

        const priceA = parseFloat(a.querySelector(".call_for").innerText.replace(/[^\d.]/g, "").replace(",", ""));
        const priceB = parseFloat(b.querySelector(".call_for").innerText.replace(/[^\d.]/g, "").replace(",", ""));

        switch (parseInt(option)) {
            case 5: // Name: A to Z
                return nameA.localeCompare(nameB);
            case 6: // Name: Z to A
                return nameB.localeCompare(nameA);
            case 10: // Price: Low to High
                return priceA - priceB;
            case 11: // Price: High to Low
                return priceB - priceA;
            default:
                return 0;
        }
    });

    // Re-append sorted items
    container.innerHTML = "";
    items.forEach(item => container.appendChild(item));
}
