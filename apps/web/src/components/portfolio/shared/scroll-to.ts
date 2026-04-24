// Smooth-scrolls the section with the given id into view and briefly
// flashes the section header to confirm the jump.
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.classList.add('sec-flash');
  setTimeout(() => el.classList.remove('sec-flash'), 900);
}
