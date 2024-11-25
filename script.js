document.getElementById("polynomialForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const degree = parseInt(document.getElementById("degree").value);
    const coefficients = document.getElementById("coefficients").value.split(",").map(Number);

    const roots = calculateRoots(coefficients, degree);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Roots: " + roots.join(", ");
});

function calculateRoots(coefficients, degree) {
    // Implement Newton-Raphson method
    function polynomial(x, coefficients) {
        let result = 0;
        for (let i = 0; i <= degree; i++) {
            result += coefficients[i] * Math.pow(x, degree - i);
        }
        return result;
    }

    function derivative(x, coefficients) {
        let result = 0;
        for (let i = 1; i <= degree; i++) {
            result += i * coefficients[i] * Math.pow(x, degree - i);
        }
        return result;
    }

    const roots = [];
    // Implement a root-finding algorithm here
    // ... (e.g., Newton-Raphson)

    // Simplified Newton-Raphson implementation
    const maxIterations = 100;
    const tolerance = 1e-6;

    for (let i = 0; i < degree; i++) {
        let x = Math.random() * 10 - 5; // Initial guess
        for (let j = 0; j < maxIterations; j++) {
            const fx = polynomial(x, coefficients);
            const dfx = derivative(x, coefficients);
            if (Math.abs(dfx) < tolerance) {
                break; // Avoid division by zero
            }
            x -= fx / dfx;
        }
        roots.push(x);
    }

    return roots;
}
