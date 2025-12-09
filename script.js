document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bokningsform');
    const meddelande = document.getElementById('meddelande');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Förhindra att sidan laddas om

        // Hämta värden från formuläret
        const namn = document.getElementById('namn').value.trim();
        const adress = document.getElementById('adress').value.trim();
        const datum = document.getElementById('datum').value.trim();

        // Enkel validering
        if (namn === '' || adress === '' || datum === '') {
            visaMeddelande('Vänligen fyll i alla fält.', 'error');
            return;
        }

        // Simulerar skickande av data (i en verklig applikation skulle du skicka detta till en server)
        
        // Visa bekräftelsemeddelande
        visaMeddelande(`Tack, ${namn}! Din bokning på adress ${adress} för datumet ${datum} är mottagen. Vi kontaktar dig snart!`, 'success');

        // Återställ formuläret
        form.reset();
    });

    function visaMeddelande(text, typ) {
        meddelande.textContent = text;
        meddelande.classList.remove('dolt', 'success', 'error');
        meddelande.classList.add(typ); // Lägg till klass för styling

        // Lägg till specifik stil för felmeddelanden
        if (typ === 'error') {
            meddelande.style.backgroundColor = '#f8d7da';
            meddelande.style.color = '#721c24';
            meddelande.style.border = '1px solid #f5c6cb';
        } else if (typ === 'success') {
            meddelande.style.backgroundColor = '#d4edda';
            meddelande.style.color = '#155724';
            meddelande.style.border = '1px solid #c3e6cb';
        }
        
        // Visa meddelandet i 5 sekunder
        meddelande.classList.remove('dolt');
        setTimeout(() => {
            meddelande.classList.add('dolt');
        }, 5000);
    }
});