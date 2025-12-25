document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDisplay = document.getElementById('result-display');
    const { DateTime } = luxon;

    // Initialize Flatpickr
    flatpickr(dobInput, {
        dateFormat: "Y-m-d",
        maxDate: "today",
        disableMobile: "true", // Prefer flatpickr on mobile for consistent UI
    });

    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        const dobValue = dobInput.value;

        if (!dobValue) {
            resultDisplay.innerHTML = `<p style="color: #ef4444;">Please select your birth date.</p>`;
            return;
        }

        const dob = DateTime.fromISO(dobValue);
        const now = DateTime.now();

        if (dob > now) {
            resultDisplay.innerHTML = `<p style="color: #ef4444;">Date cannot be in the future.</p>`;
            return;
        }

        // Precise calculation using Luxon's diff
        const diff = now.diff(dob, ['years', 'months', 'days']).toObject();

        const years = Math.floor(diff.years);
        const months = Math.floor(diff.months);
        const days = Math.floor(diff.days);

        displayResult(years, months, days);
    }

    function displayResult(years, months, days) {
        resultDisplay.innerHTML = `
            <p>You are <span class="highlight">${years}</span> years, 
            <span class="highlight">${months}</span> months, and 
            <span class="highlight">${days}</span> days old.</p>
        `;
    }
});
