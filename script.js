// Toggle เมนูบนมือถือ
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
toggle?.addEventListener('click', () => {
  navList?.classList.toggle('open');
});

// ปิดเมนูเมื่อคลิกลิงก์
navList?.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') navList.classList.remove('open');
});

// ปีในลิขสิทธิ์อัตโนมัติ
document.getElementById('year').textContent = new Date().getFullYear();

// ส่งฟอร์ม (ตัวอย่างแบบไม่เชื่อมแบ็กเอนด์)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = 'กำลังส่ง...';
  await new Promise((r) => setTimeout(r, 800)); // จำลองการส่ง
  statusEl.textContent = 'ส่งสำเร็จ! เราจะติดต่อกลับเร็วๆ นี้';
  form.reset();
});