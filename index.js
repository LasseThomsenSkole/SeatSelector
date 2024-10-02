
// 20 rækker 12 sæder i hver række
// 25 rækker 16 sæder i hver række
const seats = {};

function initSeats(rows, seatsPerRow) {
    for (let row = 1; row <= rows; row++) {
        seats[`Row ${row}`] = {};
        for (let seat = 1; seat <= seatsPerRow; seat++) {
            seats[`Row ${row}`][`Seat ${seat}`] = `Available`;  // Or other status
        }
    }
}

function renderSeats(rows, seatsPerRow) {
    const seatContainer = document.getElementById('seat-container');

    for (let row = 1; row <= rows; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let seat = 1; seat <= seatsPerRow; seat++) {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');

            const seatInput = document.createElement('input');
            seatInput.type = 'checkbox';
            seatInput.id = `row${row}seat${seat}`;
            seatInput.classList.add('seat-checkbox');

            const seatLabel = document.createElement('label');
            seatLabel.setAttribute('for', `row${row}seat${seat}`);
            seatLabel.classList.add('seat-label');

            seatDiv.appendChild(seatInput);
            seatDiv.appendChild(seatLabel);
            rowDiv.appendChild(seatDiv);

            console.log(`Row ${row} Seat ${seat}: ${seats[`Row ${row}`][`Seat ${seat}`]}`);
        }
        seatContainer.appendChild(rowDiv);
    }
}
window.onload = function() {
    initSeats(20, 12);
    renderSeats(20, 12);
}