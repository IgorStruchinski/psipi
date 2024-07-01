function calculateY(x) {
    if (x === 3 || x === -3) {
        throw new Error("Деление на ноль невозможно");
    }
    return (1 - x) / (x * x - 9);
}

function calculateAndDisplay() {
    const x = parseFloat(document.getElementById("xInput").value);
    try {
        const y = calculateY(x);
        document.getElementById("task4Result").textContent = `y = ${y}`;
    } catch (error) {
        alert(error.message);
    }
}