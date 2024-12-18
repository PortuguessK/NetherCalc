let netherX = document.getElementById('netherX');
let netherY = document.getElementById('netherY');
let netherZ = document.getElementById('netherZ');
let overworldX = document.getElementById('overworldX');
let overworldY = document.getElementById('overworldY');
let overworldZ = document.getElementById('overworldZ');

function calculateNether() {
    netherX.value = overworldX.value ? (overworldX.value / 8).toFixed(0) : '';
    netherY.value = overworldY.value || '';
    netherZ.value = overworldZ.value ? (overworldZ.value / 8).toFixed(0) : '';
}

function calculateOverworld() {
    overworldX.value = netherX.value ? (netherX.value * 8).toFixed(0) : '';
    overworldY.value = netherY.value || '';
    overworldZ.value = netherZ.value ? (netherZ.value * 8).toFixed(0) : '';
}

overworldX.addEventListener("input", calculateNether);
overworldY.addEventListener("input", calculateNether);
overworldZ.addEventListener("input", calculateNether);
netherX.addEventListener("input", calculateOverworld);
netherY.addEventListener("input", calculateOverworld);
netherZ.addEventListener("input", calculateOverworld);
