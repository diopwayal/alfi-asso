// menu toggle for mobile
document.getElementById('menuToggle').addEventListener('click', function(){
  const nav = document.querySelector('.main-nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// events placeholder
const events = [
  { date: '02/05/2026', title: 'Événement culturel ALFI', location: 'Paris', desc: 'Grande soirée culturelle et collecte de fonds.' }
];
const eventsList = document.getElementById('eventsList');
events.forEach(ev=>{
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<h4>${ev.title} — ${ev.date}</h4><p>${ev.desc}</p><p><strong>Lieu:</strong> ${ev.location}</p>`;
  eventsList.appendChild(div);
});

// basic form handlers (demo only — remplacer backend)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Merci — votre message a été enregistré (simulation). Nous vous recontacterons.');
  e.target.reset();
});
document.getElementById('membershipForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Merci pour votre intérêt — votre demande est enregistrée (simulation).');
  e.target.reset();
});
