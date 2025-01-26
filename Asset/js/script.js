 // Menambahkan atau menghapus class sticky pada navbar ketika di-scroll
 window.onscroll = function() {
    var navbar = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Bagian awal Q & A
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
  
      // Toggle content visibility
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
        button.classList.remove('active');
      } else {
        document.querySelectorAll('.accordion-content').forEach(content => {
          content.style.maxHeight = null;
        });
        document.querySelectorAll('.accordion-header').forEach(header => {
          header.classList.remove('active');
        });
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        button.classList.add('active');
      }
    });
  });
// Bagian akhir Q & A

// Bagian awal memunculkan isi dari Layanan & jasa
  document.querySelectorAll('.show-btn').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });
  
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.closest('.overlay').classList.remove('active');
    });
  });
// Bagian akhir memunculkan isi dari Layanan & jasa

// Fungsi untuk menyalin link dan menampilkan pesan berhasil
function copyLink(popupId) {
  // Ambil elemen teks link dan info message berdasarkan ID popup
  const popup = document.getElementById(`popup-${popupId}`);
  const linkBox = popup.querySelector('.link-box');
  const infoMessage = popup.querySelector('.info-message');
  
  if (linkBox && infoMessage) {
      const linkText = linkBox.innerText;
      navigator.clipboard.writeText(linkText).then(() => {
          // Tampilkan pesan berhasil dengan animasi popup muncul
          infoMessage.style.display = 'block';
          infoMessage.style.animation = 'none';

          // Sembunyikan pesan setelah 2 detik dengan animasi fade keluar
          setTimeout(() => {
              infoMessage.style.animation = 'fadeOutAnimation 0.3s ease-out forwards';
              setTimeout(() => {
                  infoMessage.style.display = 'none';
              }, 500);
          }, 2000);
      }).catch(err => {
          alert('Gagal menyalin link: ' + err);
      });
  } else {
      alert('Elemen link atau pesan tidak ditemukan!');
  }
}
// Bagian akhir isi dari konten pop up (copy link)

// Bagian awal memunculkan isi content medsos pop up
  function showPopup(id) {
    const popup = document.getElementById(`popup-${id}`);
    if (popup) {
        popup.style.display = 'block';
        popup.style.animation = 'popupAnimation 0.5s forwards';
    }
}

function closePopup(id) {
    const popup = document.getElementById(`popup-${id}`);
    if (popup) {
        popup.style.display = 'none';
    }
}
// Bagian akhir memunculkan isi content medsos pop up

// bagian memunculkan lihat selengkapnya
const toggleButton = document.getElementById('toggle-button');
const secondParagraph = document.getElementById('second-paragraph');

toggleButton.addEventListener('click', () => {
  const isVisible = secondParagraph.classList.toggle('visible');
  if (isVisible) {
    toggleButton.textContent = 'Lihat lebih sedikit...';
  } else {
    toggleButton.textContent = 'Lihat selengkapnya...';
  }
});


 // Ambil elemen tombol share
const shareBtn = document.getElementById('share-btn');

 // Event listener untuk tombol share
shareBtn.addEventListener('click', async () => {
   // Cek apakah Web Share API didukung
  if (navigator.share) {
    try {
       // Data yang akan dibagikan
      await navigator.share({
        title: 'AL2ZEL BIO',
        text: 'Curious about AL2ZEL? Check out the bio here and find out exciting information',
         url: window.location.href // URL halaman
      });
      console.log('Berhasil dibagikan!');
    } catch (error) {
      console.error('Gagal membagikan:', error);
    }
  } else {
    alert('Browser Anda tidak mendukung Web Share API.');
  }
});