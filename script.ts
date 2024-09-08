const toggleSkillsBtn = document.getElementById('toggle-skills');
const skillsSection = document.querySelector('.skills');

toggleSkillsBtn?.addEventListener('click', () => {
  if (skillsSection instanceof HTMLElement) {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
  }
});
