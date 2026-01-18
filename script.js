    document.getElementById('iletisimformu')?.addEventListener('submit', function(e){

    const yeniMesaj={
        id: Date.now(),
        ad: document.getElementById('ad').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        mesaj: document.getElementById('mesaj').value,
        tarih: new Date().toLocaleString()
    };

    let mesajlar= JSON.parse(localStorage.getItem('siteMesajlari')) ||[];

    mesajlar.push(yeniMesaj);

    localStorage.setItem('siteMesajlari', JSON.stringify(mesajlar));

    alert('Mesajınız başarıyla kaydedildi! (Mesajlar sayfasından kontrol edebilirsiniz! )')
});

function verileriGetir(){
const tabloGovde= document.getElementById('veriListesi');


if(!tabloGovde) return;

const mesajlar= JSON.parse(localStorage.getItem('siteMesajlari'))||[];

tabloGovde.innerHTML = mesajlar.map(m => `
    <tr>
        <td>${m.ad}</td>
        <td>${m.email}</td>
        <td>${m.tel}</td>
        <td>${m.fiyat}</td>
        <td>${m.mesaj}</td>
        <td>${m.tarih}</td>
    </tr>
    `).join('');
}

document.addEventListener('DOMContentLoaded', verileriGetir)