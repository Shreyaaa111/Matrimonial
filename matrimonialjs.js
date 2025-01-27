document.getElementById('year').textContent = new Date().getFullYear();

function searchMatches() {
    alert('Searching for matches!');
    window.location.href = "index1.html"; // Directly provide the URL
}

function updateCasteOptions() {
    const casteDropdown = document.getElementById('caste');
    const religion = document.getElementById('religion').value;

    const castes = {
        Hindu: ['Brahmin', 'Kshatriya', 'Vaishya', 'Shudra', 'Dalit', 'Lingayat', 'Vokkaliga', 'Yadav', 'Kurmi', 'Kayastha'],
        Muslim: ['Sunni', 'Shia', 'Ahmadiyya', 'Bohra', 'Ansari', 'Sheikh', 'Sayyid', 'Pathan', 'Qureshi'],
        Christian: ['Catholic', 'Protestant', 'Orthodox', 'Pentecostal', 'Syrian Christian', 'Anglican', 'Evangelical'],
        Sikh: ['Jat', 'Ramgarhia', 'Khatri', 'Arora', 'Mazhabi Sikh', 'Labana', 'Ahluwalia'],
        Buddhist: ['Theravada', 'Mahayana', 'Vajrayana', 'Dalit Buddhist'],
        Jain: ['Digambar', 'Shwetambar', 'Terapanthi', 'Sthanakvasi', 'Oswal'],
        Parsi: ['Irani', 'Zoroastrian'],
        Jewish: ['Ashkenazi', 'Sephardi', 'Mizrahi', 'Beta Israel'],
        Baháí: ['No specific caste'],
        Zoroastrian: ['No specific caste'],
        Spiritual: ['No specific caste'],
        Other: ['No specific caste']
    };

    casteDropdown.innerHTML = '';
    if (castes[religion]) {
        castes[religion].forEach(caste => {
            const option = document.createElement('option');
            option.value = caste;
            option.textContent = caste;
            casteDropdown.appendChild(option);
        });
    } else {
        const option = document.createElement('option');
        option.value = 'None';
        option.textContent = 'None';
        casteDropdown.appendChild(option);
    }
}

function showTerms() {
    document.getElementById('termsModal').style.display = 'block';
}

function hideTerms() {
    document.getElementById('termsModal').style.display = 'none';
}
document.getElementById('logoutButton').addEventListener('click', () => {
    alert('Logged Out');
    // Add your logout functionality here
});

// Initialize caste options on page load
updateCasteOptions();
