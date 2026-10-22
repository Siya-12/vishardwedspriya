# Vishard & Priya — Wedding Invitation Website

Plain HTML/CSS/JS. No build step, no dependencies (only Google Fonts).

## Run
Open `index.html`, or serve the folder (recommended):
    python3 -m http.server 8000   ->  http://localhost:8000

## Replace these files (exact names)
- public/videos/wedding-intro.mp4      intro video (portrait, ideally under ~3 MB)
- public/audio/wedding-music.mp3       background music (until added, a soft synthesized pad plays)
- public/images/couple-hero.jpg        hero photo (3:4 portrait)
- public/images/mehendi.jpg            Mehendi event (4:5)
- public/images/mata-ki-chowki.jpg     Mata Ki Chowki event (4:5)
- public/images/engagement.jpg         Engagement event (4:5)
- public/images/wedding-ceremony.jpg   Wedding event (4:5)
- public/images/gallery/1.jpg ... 6.jpg  gallery photos
Missing images keep their placeholder.

## Edit details
Event names, dates, times, venues and Google Maps links: `EV` array at the top of js/main.js.
Wedding Ceremony time is "To be announced" and venue is "Wedding Venue" until confirmed.
Countdown target: `T` in js/main.js (Asia/Kolkata).
Colors: CSS variables at the top of css/style.css.
