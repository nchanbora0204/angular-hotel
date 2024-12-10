const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');
const bookingList = document.getElementById('booking-list');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

document.getElementById('add-customer-btn').addEventListener('click', function() {
    // Điều hướng đến trang addcustomerform.html
    window.location.href = 'addCustomer.html';
});

// Test Thêm Khách Hàng Mới
const roomTable = document.getElementById('room-list');
const addRoomBtn = document.querySelector('.add-room-btn');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');

let currentPage = 1;
const itemsPerPage = 5;

// Dữ liệu phòng giả lập
let rooms = [
    { name: "Phòng Deluxe", type: "Deluxe", status: "Available", price: "$100" },
    { name: "Phòng Suite", type: "Suite", status: "Occupied", price: "$150" },
    { name: "Phòng Standard", type: "Standard", status: "Available", price: "$80" },
    // Thêm dữ liệu phòng giả lập ở đây...
];

function displayRooms() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    const paginatedRooms = rooms.slice(start, end);

    roomTable.innerHTML = '';
    paginatedRooms.forEach((room, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${room.name}</td>
            <td>${room.type}</td>
            <td>${room.status}</td>
            <td>${room.price}</td>
            <td>
                <button class="edit-btn" onclick="editRoom(${start + index})">Sửa</button>
                <button class="delete-btn" onclick="deleteRoom(${start + index})">Xóa</button>
            </td>
        `;
        roomTable.appendChild(row);
    });

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage * itemsPerPage >= rooms.length;
}

function editRoom(index) {
    // Chức năng chỉnh sửa phòng
    const room = rooms[index];
    const updatedName = prompt("Cập nhật tên phòng:", room.name);
    const updatedType = prompt("Cập nhật loại phòng:", room.type);
    const updatedStatus = prompt("Cập nhật trạng thái phòng:", room.status);
    const updatedPrice = prompt("Cập nhật giá phòng:", room.price);

    if (updatedName && updatedType && updatedStatus && updatedPrice) {
        rooms[index] = { name: updatedName, type: updatedType, status: updatedStatus, price: updatedPrice };
        displayRooms();
    }
}

function deleteRoom(index) {
    rooms.splice(index, 1);
    displayRooms();
}

addRoomBtn.addEventListener('click', () => {
    // Chức năng thêm phòng
    const name = prompt("Nhập tên phòng:");
    const type = prompt("Nhập loại phòng:");
    const status = prompt("Nhập trạng thái phòng:");
    const price = prompt("Nhập giá phòng:");

    if (name && type && status && price) {
        rooms.push({ name, type, status, price });
        displayRooms();
    }
});

// Sự kiện phân trang
nextPageBtn.addEventListener('click', () => {
    if (currentPage * itemsPerPage < rooms.length) {
        currentPage++;
        displayRooms();
    }
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayRooms();
    }
});

// Hiển thị danh sách phòng khi tải trang
displayRooms();




//Hàm Quản lý nhân viên









