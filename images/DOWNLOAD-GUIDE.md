# Guida Download Immagini Hero Slider

Le immagini per lo slider hero devono essere scaricate manualmente da questa console a causa di restrizioni di rete.

## Immagini da Scaricare (4 foto)

### Opzione A: Immagini Curate da Unsplash (Licenza Gratuita)

Scarica queste 4 immagini di montagne italiane da Unsplash:

**1. hero-slide-1.jpg - Paese di montagna innevato**
- URL: https://unsplash.com/photos/a-snow-covered-mountain-town-with-mountains-in-the-background-s97tvVPUZKI
- Click "Download free" → Rinomina in `hero-slide-1.jpg`
- Autore: Dobbiaco, Dolomiti

**2. hero-slide-2.jpg - Montagne innevate Italia**
- URL: https://unsplash.com/photos/zWt9PnB4pCE
- Click "Download free" → Rinomina in `hero-slide-2.jpg`
- Autore: Mountain coated with snow, Italy

**3. hero-slide-3.jpg - Panorama montano invernale**
- URL: https://unsplash.com/photos/a-mountain-range-with-snow-covered-mountains-in-the-background-qRwLdgi6l18
- Click "Download free" → Rinomina in `hero-slide-3.jpg`
- Autore: Mountain range, Italy

**4. hero-slide-4.jpg - Cime innevate al tramonto**
- URL: https://unsplash.com/photos/snow-capped-mountains-against-a-colorful-sky-78oufSOElMk
- Click "Download free" → Rinomina in `hero-slide-4.jpg`
- Autore: Snow-capped mountains, Italy

### Opzione B: Download Rapido con Script

Copia e incolla questo comando nel terminale del TUO computer (non questa console):

```bash
# Vai nella cartella images
cd images/

# Scarica le 4 immagini
curl -L "https://images.unsplash.com/photo-1701961455988-27e0b7db3f98?w=1920" -o hero-slide-1.jpg
curl -L "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920" -o hero-slide-2.jpg
curl -L "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920" -o hero-slide-3.jpg
curl -L "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1920" -o hero-slide-4.jpg
```

### Opzione C: Immagini Specifiche di Campo di Giove (Consigliato)

Per foto autentiche di Campo di Giove:

1. **Cerca su Google Images**: "Campo di Giove Maiella"
2. **Filtra per**: Tools → Usage rights → "Creative Commons licenses"
3. **Cerca webcam**: https://www.onthesnow.co.uk/abruzzo/campo-di-giove-maiella/webcams
   - Screenshot delle webcam in tempo reale
4. **Wikimedia Commons**: https://commons.wikimedia.org/wiki/Category:Campo_di_Giove_Maiella_train_station

## Specifiche Tecniche

- **Dimensione**: 1920x1080px (16:9)
- **Formato**: JPG
- **Peso max**: 500KB ciascuna (ottimizza se necessario)
- **Nomi file**:
  - hero-slide-1.jpg
  - hero-slide-2.jpg
  - hero-slide-3.jpg
  - hero-slide-4.jpg

## Ottimizzazione Immagini (Opzionale)

Dopo il download, ottimizza le immagini per il web:

```bash
# Con ImageMagick
convert hero-slide-1.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 hero-slide-1.jpg

# Oppure usa servizi online:
# - https://tinypng.com/
# - https://squoosh.app/
```

## Licenze

- **Unsplash**: Licenza gratuita per uso commerciale, no attribuzione richiesta
- **Creative Commons**: Verifica i termini specifici di ogni immagine

## Prossimi Passi

Dopo aver scaricato le 4 immagini:
1. Caricale nella cartella `/images/`
2. Verifica che i nomi siano esatti
3. Fai git add, commit e push
4. Il deployment GitHub Pages si aggiornerà automaticamente

---

**Note**: Le immagini dello slider rappresentano la bellezza di Campo di Giove e dintorni. Scegli foto che mostrano:
- Paesaggi montani della Maiella
- Il borgo storico
- Attività invernali (sci)
- Natura e panorami estivi
