var toggleSkillsBtn = document.getElementById('toggle-skills');
var skillsSection = document.querySelector('.skills');
toggleSkillsBtn === null || toggleSkillsBtn === void 0 ? void 0 : toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection instanceof HTMLElement) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
