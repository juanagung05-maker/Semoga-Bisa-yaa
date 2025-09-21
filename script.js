document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const nextBtn = document.getElementById('nextBtn');
  const envelopeScreen = document.getElementById('envelopeScreen');
  const envelope = document.getElementById('envelope');
  const text = document.getElementById('text');
  const choice = document.getElementById('choice');
  const btnYes = document.getElementById('btnYes');
  const btnNo = document.getElementById('btnNo');
  const janji = document.getElementById('janji');
  const loveText = document.getElementById('loveText');
  const flowers = document.getElementById('flowers');
  const hint = document.querySelector('.hint');
  const bgMusic = document.getElementById('bgMusic');

  const message = [
   "Hai Arum Virdila Pramesti",
  "Aku nggak tahu gimana harus mulai, tapi akhir-akhir ini aku sering kepikiran tentang kita. Tentang semua kenangan yang pernah kita lewati bareng.",
  "Aku sadar, aku mungkin banyak salah dulu. Ada hal-hal yang seharusnya bisa aku jaga lebih baik, tapi malah aku lepasin. Dan jujur, aku nyesel banget.",
  "Sejak kamu nggak ada di sisiku, aku ngerasa ada ruang kosong yang nggak bisa diisi siapa pun. Aku kangen kamu, cara kamu membujuk aku, cara kamu nenangin aku, bahkan hal-hal kecil yang sering kita ributin, masih ingat semua",
  "Aku nggak berani maksa, tapi aku pengen jujur aja: aku masih sayang sama kamu.",
  "Kalau kamu kasih kesempatan sekali lagi, aku janji bakal jaga kamu lebih baik daripada sebelumnya.",
  "Aku cuma ingin kita coba lagi, mulai dari awal, dengan cara yang lebih dewasa.",
  "Kalau pun kamu belum siap atau nggak mau, aku bisa ngerti. Tapi semoga kamu tahu, perasaanku ke kamu nggak pernah benar-benar hilang.",
  "Maaf Mulai-mulai ini aku agak ganggu kamu dan aku jujur aku agak cemburu aja sih tpi yaa gimana juga kann",
  "Maaf yaa Arum aku sebelumnya udh kayak gitu aku jane masih suka kamu dan masih sayang kamu dan aku mau balikan lagi dan memperbaiki lagi hubungan ini",
  "Sejujurnya aku khawatir dann gak ikhlas:("
  ];

  // Step 1: klik selanjutnya
  nextBtn.addEventListener('click', () => {
    intro.classList.add('hidden');
    envelopeScreen.classList.remove('hidden');
  });

  // Step 2: klik amplop
  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    hint.style.display = 'none';

    // Play music
    bgMusic.play();

    // Confetti hearts
    for (let i = 0; i < 12; i++) {
      setTimeout(() => { createBurstHeart(envelope.offsetLeft + envelope.offsetWidth/2, envelope.offsetTop + 50); }, i*120);
    }

    setTimeout(() => { typeWriter(); }, 1500);
  });

  // Efek ketik isi surat
  let i = 0, j = 0;
  function typeWriter() {
    if (i < message.length) {
      if (j < message[i].length) {
        text.textContent += message[i][j];
        j++;
        setTimeout(typeWriter, 45);
      } else {
        text.textContent += "\n\n";
        i++; j = 0;
        setTimeout(typeWriter, 600);
      }
    } else {
      choice.classList.remove('hidden');
      setTimeout(() => { choice.style.opacity = 1; }, 200);
    }
  }

  // Yes → janji + love text + flowers
  btnYes.addEventListener('click', () => {
    choice.classList.add('hidden');
    janji.textContent = "💖 Aku janji selalu ada buat kamu 💕";
    janji.classList.remove('hidden');

    setTimeout(() => {
      loveText.classList.remove('hidden');
      flowers.classList.remove('hidden');
      loveText.style.opacity = 1;
      flowers.style.opacity = 1;
    }, 1000);
  });

  // No → tombol kabur
  btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Floating hearts global
  const heartsContainer = document.getElementById('hearts');
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 14) + 'px';
    const symbols = ['❤️','💖','🌸','✨','💕'];
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
  setInterval(createHeart, 600);

  // Burst hearts confetti
  function createBurstHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = ['❤️','💖','💕'][Math.floor(Math.random()*3)];
    document.body.appendChild(heart);
    heart.style.position = 'absolute';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '20px';
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random()*50;
    const targetX = x + Math.cos(angle) * distance;
    const targetY = y + Math.sin(angle) * distance;

    heart.animate([
      { transform: `translate(0,0) scale(1)`, opacity: 1 },
      { transform: `translate(${targetX-x}px,${targetY-y}px) scale(1.5)`, opacity: 0 }
    ], { duration: 1500, easing: 'ease-out' });
    setTimeout(() => heart.remove(), 1500);
  }
  function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.textContent = '✨';
  sparkle.style.left = x + Math.random()*60 - 30 + 'px';
  sparkle.style.top = y + Math.random()*60 - 30 + 'px';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}

// panggil saat amplop dibuka
for (let i=0; i<10; i++) {
  setTimeout(() => createSparkle(envelope.offsetLeft + envelope.offsetWidth/2, envelope.offsetTop + 50), i*150);
}

});
