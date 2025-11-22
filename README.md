# 🏔️ Sito Web Appartamenti Campo di Giove

Sito web moderno e responsive per affitto appartamenti vacanza a Campo di Giove (AQ), nel cuore del Parco Nazionale della Maiella, Abruzzo.

## 📋 Caratteristiche

- **Design Moderno e Accattivante**: Interfaccia pulita e professionale con palette di colori ispirata alla montagna
- **Completamente Responsive**: Ottimizzato per desktop, tablet e smartphone
- **100% in Italiano**: Tutti i contenuti sono in italiano
- **SEO Ottimizzato**: Meta tag e struttura semantica HTML5
- **Navigazione Fluida**: Smooth scrolling e menu mobile interattivo
- **Form di Contatto**: Validazione completa lato client
- **Animazioni Eleganti**: Effetti scroll e transizioni fluide
- **Performance Ottimizzate**: Lazy loading immagini e codice ottimizzato

## 🎨 Struttura del Sito

### Sezioni Principali

1. **Header con Navigazione**
   - Logo e nome del sito
   - Menu di navigazione responsive
   - Menu hamburger per dispositivi mobili

2. **Hero Section**
   - Immagine di sfondo accattivante
   - Titolo e sottotitolo
   - Call-to-action button

3. **Introduzione**
   - Presentazione dell'offerta
   - Descrizione di Campo di Giove

4. **Appartamenti**
   - 3 tipologie di appartamenti:
     - Monolocale Maiella (2 persone, 35 m²)
     - Bilocale Montagna (4 persone, 55 m²)
     - Trilocale Panorama (6 persone, 75 m²)
   - Card con dettagli, caratteristiche e pulsanti di richiesta informazioni

5. **Servizi Inclusi**
   - Wi-Fi gratuito
   - Parcheggio
   - Riscaldamento autonomo
   - Biancheria fornita
   - Cucina attrezzata
   - Deposito sci

6. **Territorio**
   - Informazioni su Campo di Giove
   - Attività disponibili
   - Stagionalità (estate, inverno, primavera/autunno)

7. **Contatti**
   - Informazioni di contatto
   - Form di richiesta informazioni con validazione
   - Indirizzo, telefono, email, orari

8. **Footer**
   - Link rapidi
   - Informazioni utili
   - Social media
   - Copyright

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica e accessibile
- **CSS3**: Styling moderno con CSS Grid, Flexbox, animazioni
- **JavaScript ES6+**: Interattività e validazione form
- **Google Fonts**: Montserrat (testo) e Playfair Display (titoli)

## 📁 Struttura File

```
Campodigiove_website/
├── index.html          # Pagina principale
├── styles.css          # Stili CSS
├── script.js           # JavaScript per interattività
├── images/             # Cartella immagini
│   └── README.md       # Istruzioni per le immagini
└── README.md           # Questo file
```

## 🚀 Come Utilizzare

### Opzione 1: Apertura Diretta
Apri semplicemente il file `index.html` nel tuo browser preferito.

### Opzione 2: Server Locale
Per una migliore esperienza, usa un server locale:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

Poi visita `http://localhost:8000` nel browser.

## 📸 Aggiungere le Immagini

Per completare il sito, aggiungi le foto degli appartamenti nella cartella `images/`:

- `images/appartamento-1.jpg` - Monolocale Maiella
- `images/appartamento-2.jpg` - Bilocale Montagna
- `images/appartamento-3.jpg` - Trilocale Panorama

**Specifiche consigliate:**
- Risoluzione: 1200x800 px
- Formato: JPG o WebP
- Dimensione: max 200-300 KB (ottimizzate per web)

Consulta `images/README.md` per maggiori dettagli.

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti nelle variabili CSS in `styles.css`:

```css
:root {
    --primary-color: #2c5f2d;      /* Verde foresta */
    --secondary-color: #8b4513;     /* Marrone legno */
    --accent-color: #d4af37;        /* Oro/giallo */
}
```

### Contenuti
Modifica i testi direttamente in `index.html`:
- Titoli e descrizioni appartamenti
- Informazioni di contatto (telefono, email, indirizzo)
- Link social media nel footer

### Funzionalità Form
Il form di contatto attualmente mostra solo un messaggio di conferma.
Per inviare email reali, integra un backend o servizio come:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- PHP mail() function
- Backend Node.js/Python

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Mobile Small**: < 480px

## ✨ Caratteristiche Tecniche

### Accessibilità
- Struttura HTML semantica
- Attributi ARIA per screen reader
- Navigazione da tastiera
- Contrasto colori WCAG AA

### Performance
- Lazy loading immagini
- CSS minificabile
- JavaScript ottimizzato
- Animazioni con CSS quando possibile

### SEO
- Meta tag description e keywords
- Struttura heading gerarchica (H1, H2, H3)
- Alt text per immagini
- URL semantici con anchor

### Browser Support
- Chrome (ultimo + 2 versioni precedenti)
- Firefox (ultimo + 2 versioni precedenti)
- Safari (ultimo + 2 versioni precedenti)
- Edge (ultimo + 2 versioni precedenti)

## 🔧 Prossimi Sviluppi Suggeriti

1. **Galleria Fotografica**: Implementare una lightbox per le immagini
2. **Calendario Disponibilità**: Sistema di prenotazione online
3. **Multilingua**: Aggiungere inglese e tedesco
4. **Blog**: Sezione con articoli su territorio e attività
5. **Recensioni**: Integrazione TripAdvisor o Google Reviews
6. **Backend**: Sistema di gestione prenotazioni
7. **CMS**: Integrazione con WordPress o sistema custom

## 📞 Informazioni di Contatto (da personalizzare)

- **Indirizzo**: Campo di Giove (AQ), Abruzzo, Italia
- **Telefono**: +39 123 456 7890 *(da modificare)*
- **Email**: info@appartamenticampodigiove.it *(da modificare)*
- **Orari**: Lun-Dom: 9:00 - 20:00

## 📄 Licenza

Questo progetto è stato creato per uso personale/commerciale.

## 🙏 Credits

- **Design e Sviluppo**: Claude
- **Fonts**: Google Fonts (Montserrat, Playfair Display)
- **Icone**: Emoji Unicode

---

**Nota**: Ricordati di aggiornare le informazioni di contatto, aggiungere le foto reali e testare il sito su diversi dispositivi prima della pubblicazione online!

Per pubblicare il sito, puoi utilizzare servizi gratuiti come:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
