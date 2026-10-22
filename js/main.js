
document.documentElement.classList.add('js');

const $ = s => document.querySelector(s);

const ASSETS = {
  audio: 'public/audio/wedding-music.mp3'
};

/* WEDDING EVENTS */

const EV = [
 
  {
    n: 'Mata Ki Chowki',
    d: 'Sunday, 22 November 2026',
    t: '7:00 PM onwards',
    v: 'Venizia Sarovar Portico, Bhama Shah Marg, Opp. Kirpal Bagh, Kalyan Vihar, New Delhi - 110009',
    q: 'With the blessings of Maa Durga, we begin our wedding celebrations with devotion, prayers, and heartfelt gratitude. We warmly invite you to join us for an auspicious evening of Mata Ki Chowki.',
    u: 'https://maps.app.goo.gl/pkapjNJZWAG4f2WH7?g_st=ac',
    c: ['#fff3d6', '#f6d5d9'],
    img: 'mata-ki-chowki'
  },
   {
    n: 'Mehendi & Haldi',
    d: '',
    t: '',
    v: '',
    q: '',
    u: 'https://maps.app.goo.gl/pkapjNJZWAG4f2WH7?g_st=ac',
    c: ['#dfe9d3', '#fbe6a8'],
    img: 'mehendi'
  },
  {
    n: 'Engagement Ceremony',
    d: 'Monday, 23 November 2026',
    t: '7:00 PM',
    v: 'The Grandeur by Lavanya, Najafgarh Road, Shivaji Marg, Moti Nagar, Karampura Industrial Area, New Delhi - 110015',
    q: 'A beautiful promise, two hearts, and a lifetime of togetherness. Join us as Vishard and Priya celebrate their engagement and take another special step towards forever.',
    u: 'https://maps.app.goo.gl/2hAoAVEQ13KkEuGm6',
    c: ['#e4daf0', '#e9bcc4'],
    img: 'engagement'
  },
  {
    n: 'Wedding Ceremony',
    d: 'Tuesday, 24 November 2026',
    t: 'To be announced',
    v: 'Rajwada Palace ~ The Riyasat, Shalimar Bagh, Block B, Wazirpur Industrial Area, Wazirpur, Delhi, 110052',
    q: 'Two families, two hearts, and one beautiful beginning. With the love and blessings of our families, Vishard and Priya invite you to celebrate their wedding and the beginning of their forever.',
    u: 'https://maps.app.goo.gl/UL2siPrLXqP7ots26',
    c: ['#fbe3d3', '#f6d5d9'],
    img: 'wedding-ceremony'
  }
];

/* PLACEHOLDER FUNCTION */

function ph(c, img, label) {
  return `
    <div class="ph" style="--c1:${c[0]};--c2:${c[1]}" data-img="${img}">
      <svg><use href="#lotus"></use></svg>
      <small>${label}</small>
    </div>
  `;
}





/* RENDER EVENTS */

$('#events').innerHTML = EV.map((e, i) => {

  // MATA KI CHOWKI: VIDEO ONLY
  if (e.n === 'Mata Ki Chowki') {
    return `
      <section
        class="mata-video-section"
        id="ev${i}"
        aria-label="Mata Ki Chowki"
      >
        <video
          class="mata-video"
          muted
          playsinline
          preload="metadata"
          aria-label="Mata Ki Chowki video"
        ></video>

        <a
          class="mata-directions-btn"
          href="https://maps.app.goo.gl/pkapjNJZWAG4f2WH7?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET DIRECTIONS ↗
        </a>
      </section>
    `;
  }

  // MEHENDI & HALDI: VIDEO ON PHONE, IMAGE ON LAPTOP
  if (e.n === 'Mehendi & Haldi') {
    return `
      <section
        class="haldi-rasam-section"
        id="ev${i}"
        aria-label="Mehendi and Haldi"
      >
        <video
          class="haldi-phone-video"
          src="public/videos/haldi-rasam.mp4"
          muted
          playsinline
          autoplay
          preload="metadata"
          aria-label="Haldi Rasam video"
        ></video>

        <img
          class="mehendi-laptop-image"
          src="public/images/gallery/mehendi-desktop.jpg"
          alt="Mehendi and Haldi celebration"
        >
      </section>
    `;
  }

 
  // ENGAGEMENT CEREMONY: PHONE VIDEO, EXISTING LAPTOP CONTENT
  if (e.n === 'Engagement Ceremony') {
    return `
      <section
        class="ev${i % 2 ? ' flip' : ''} engagement-event"
        id="ev${i}"
        aria-labelledby="t${i}"
      >
        <div class="engagement-phone-video-wrap">
          <video
            class="engagement-phone-video"
            muted
            playsinline
            preload="metadata"
            aria-label="Engagement Ceremony video"
          ></video>

          <a
            class="engagement-directions-btn"
            href="${e.u}"
            target="_blank"
            rel="noopener noreferrer"
            hidden
          >GET DIRECTIONS ↗</a>
        </div>

        <div class="wrap row engagement-laptop-content">
          <div class="txt">
            <p class="tag">Wedding celebrations</p>

            <h2 id="t${i}">${e.n}</h2>

            <div
              class="rule"
              style="justify-content:flex-start;margin-left:0"
            >❖</div>

            <p class="quote">${e.q}</p>

            <div class="det">
              <strong>${e.d}</strong>
              <span>${e.t}</span>
            </div>

            <div class="map">
              <span>${e.v || 'Venue details to be announced'}</span>
              <a
                class="btn"
                href="${e.u}"
                target="_blank"
                rel="noopener"
              >GET DIRECTIONS</a>
            </div>
          </div>

          <div class="pic">
            ${ph(
              e.c,
              'public/images/gallery/engagement.jpg',
              'public/images/gallery/engagement.jpg'
            )}
          </div>
        </div>
      </section>
    `;
  }

  // WEDDING CEREMONY: PHONE VIDEO, EXISTING LAPTOP CONTENT
  if (e.n === 'Wedding Ceremony') {
    return `
      <section
        class="ev${i % 2 ? ' flip' : ''} wedding-event"
        id="ev${i}"
        aria-labelledby="t${i}"
      >
        <div class="wedding-phone-video-wrap">
          <video
            class="wedding-phone-video"
            muted
            playsinline
            preload="metadata"
            aria-label="Wedding Ceremony video"
          ></video>

          <a
            class="wedding-directions-btn"
            href="${e.u}"
            target="_blank"
            rel="noopener noreferrer"
          >GET DIRECTIONS ↗</a>
        </div>

        <div class="wrap row wedding-laptop-content">
          <div class="txt">
            <p class="tag">The main celebration</p>
            <h2 id="t${i}">${e.n}</h2>
            <div class="rule" style="justify-content:flex-start;margin-left:0">❖</div>
            <p class="quote">${e.q}</p>
            <div class="det">
              <strong>${e.d}</strong>
              <span>${e.t}</span>
            </div>
            <div class="map">
              <span>${e.v || 'Venue details to be announced'}</span>
              <a class="btn" href="${e.u}" target="_blank" rel="noopener">GET DIRECTIONS</a>
            </div>
          </div>

          <div class="pic">
            ${ph(
              e.c,
              'public/images/gallery/' + e.img + '.jpg',
              'public/images/gallery/' + e.img + '.jpg'
            )}
          </div>
        </div>
      </section>
    `;
  }


  // ALL OTHER WEDDING EVENTS
  return `
    <section
      class="ev${i % 2 ? ' flip' : ''}"
      id="ev${i}"
      aria-labelledby="t${i}"
    >
      <div class="wrap row">
        <div class="txt">
          <p class="tag">
            ${i === 3 ? 'The main celebration' : 'Wedding celebrations'}
          </p>

          <h2 id="t${i}">${e.n}</h2>

          <div
            class="rule"
            style="justify-content:flex-start;margin-left:0"
          >❖</div>

          <p class="quote">${e.q}</p>

          <div class="det">
            <strong>${e.d}</strong>
            <span>${e.t}</span>
          </div>

          <div class="map">
            <span>${e.v || 'Venue details to be announced'}</span>
            <a
              class="btn"
              href="${e.u}"
              target="_blank"
              rel="noopener"
            >GET DIRECTIONS</a>
          </div>
        </div>

        <div class="pic">
          ${ph(
            e.c,
            'public/images/gallery/' + e.img + '.jpg',
            'public/images/gallery/' + e.img + '.jpg'
          )}
        </div>
      </div>
    </section>
  `;
}).join('');


/* MATA KI CHOWKI VIDEO: RESPONSIVE, PLAY ONCE */

const mataVideoSection = document.querySelector('.mata-video-section');

if (mataVideoSection) {
  const mataVideo = mataVideoSection.querySelector('.mata-video');
  const mobileScreen = window.matchMedia('(max-width: 700px)');

  const desktopVideoPath =
    'public/videos/MATA-ki-chauki%20-%20laptop.mp4';

  const mobileVideoPath =
    'public/videos/MATA-ki-chauki%20-%20phone.mp4';

  let videoStarted = false;
  let videoFinished = false;
  let selectedSource = '';

  function setVideoSource() {
    if (videoStarted || videoFinished) return;

    const newSource = mobileScreen.matches
      ? mobileVideoPath
      : desktopVideoPath;

    if (selectedSource !== newSource) {
      selectedSource = newSource;
      mataVideo.src = newSource;
      mataVideo.load();
    }
  }

  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !videoFinished) {
        setVideoSource();

        if (!videoStarted) {
          mataVideo.play()
            .then(() => {
              videoStarted = true;
            })
            .catch(error => {
              console.warn(
                'Mata Ki Chowki autoplay failed:',
                error
              );
            });
        } else if (mataVideo.paused) {
          mataVideo.play().catch(error => {
            console.warn(
              'Mata Ki Chowki resume failed:',
              error
            );
          });
        }
      } else if (!entry.isIntersecting && !videoFinished) {
        mataVideo.pause();
      }
    });
  }, {
    threshold: 0.15
  });

  mataVideo.addEventListener('ended', () => {
    videoFinished = true;
    videoStarted = true;
    mataVideo.pause();
    // Keep the final frame. Do not rewind or replay.
  });

  mobileScreen.addEventListener('change', () => {
    if (!videoStarted && !videoFinished) {
      setVideoSource();
    }
  });

  setVideoSource();
  videoObserver.observe(mataVideoSection);
}


/* ENGAGEMENT CEREMONY VIDEO: PHONE ONLY, PLAY ONCE */

const engagementVideo = document.querySelector('.engagement-phone-video');

if (engagementVideo) {
  const engagementSection = engagementVideo.closest('.engagement-event');
  const engagementMobile = window.matchMedia('(max-width: 700px)');

  const engagementVideoPath = 'public/videos/Engagement-Ceremony.mp4';

  const engagementDirectionsBtn =
    engagementSection.querySelector('.engagement-directions-btn');

  let engagementStarted = false;
  let engagementFinished = false;

  // Show the directions button after 8.3 seconds of video playback.
  engagementVideo.addEventListener('timeupdate', () => {
    if (
      engagementVideo.currentTime >= 8.3 &&
      engagementDirectionsBtn
    ) {
      engagementDirectionsBtn.hidden = false;
    }
  });

  // Load the video only on phones.
  function loadEngagementVideo() {
    if (!engagementMobile.matches) return;
    if (engagementVideo.getAttribute('src')) return;

    engagementVideo.src = engagementVideoPath;
    engagementVideo.load();
  }

  // Play when visible; pause when scrolled away.
  const engagementObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!engagementMobile.matches) {
        engagementVideo.pause();
        return;
      }

      if (entry.isIntersecting && !engagementFinished) {
        loadEngagementVideo();

        // Do not restart from the beginning when scrolling back.
        if (engagementVideo.ended) {
          engagementFinished = true;
          return;
        }

        if (engagementVideo.paused) {
          engagementVideo.play()
            .then(() => {
              engagementStarted = true;
            })
            .catch(error => {
              console.warn(
                'Engagement video could not start:',
                error
              );
            });
        }
      } else if (!entry.isIntersecting && !engagementFinished) {
        engagementVideo.pause();
      }
    });
  }, { threshold: 0.15 });

  // Keep the final frame visible after the video finishes.
  engagementVideo.addEventListener('ended', () => {
    engagementFinished = true;
    engagementStarted = true;
    engagementVideo.pause();
  });

  // Handle switching between phone and laptop screen sizes.
  engagementMobile.addEventListener('change', () => {
    if (engagementMobile.matches) {
      loadEngagementVideo();
    } else {
      engagementVideo.pause();
    }
  });

  // Prepare the video on phones.
  if (engagementMobile.matches) {
    loadEngagementVideo();
  }

  // Observe the Engagement Ceremony section.
  if (engagementSection) {
    engagementObserver.observe(engagementSection);
  }
}

/* WEDDING CEREMONY VIDEO: PHONE ONLY, PLAY ONCE */

const weddingVideo = document.querySelector('.wedding-phone-video');

if (weddingVideo) {
  const weddingSection = weddingVideo.closest('.wedding-event');
  const weddingMobile = window.matchMedia('(max-width: 700px)');
  const weddingVideoPath = 'public/videos/wedding.mp4';

  let weddingFinished = false;

  function loadWeddingVideo() {
    if (!weddingMobile.matches) return;
    if (weddingVideo.getAttribute('src')) return;

    weddingVideo.src = weddingVideoPath;
    weddingVideo.load();
  }

  const weddingObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!weddingMobile.matches) {
        weddingVideo.pause();
        return;
      }

      if (entry.isIntersecting && !weddingFinished) {
        loadWeddingVideo();

        if (weddingVideo.ended) {
          weddingFinished = true;
          return;
        }

        if (weddingVideo.paused) {
          weddingVideo.play().catch(error => {
            console.warn('Wedding video could not start:', error);
          });
        }
      } else if (!entry.isIntersecting && !weddingFinished) {
        weddingVideo.pause();
      }
    });
  }, { threshold: 0.15 });

  weddingVideo.addEventListener('ended', () => {
    weddingFinished = true;
    weddingVideo.pause();
    // Keep the final frame visible until the page is refreshed.
  });

  weddingMobile.addEventListener('change', () => {
    if (weddingMobile.matches) {
      loadWeddingVideo();
    } else {
      weddingVideo.pause();
    }
  });

  if (weddingMobile.matches) {
    loadWeddingVideo();
  }

  if (weddingSection) {
    weddingObserver.observe(weddingSection);
  }
}

/* GALLERY PLACEHOLDERS */

const gc = [
  ['#f6d5d9', '#fbe3d3'],
  ['#e4daf0', '#f6d5d9'],
  ['#dfe9d3', '#fbe3d3'],
  ['#fbe3d3', '#e9bcc4'],
  ['#f6d5d9', '#e4daf0'],
  ['#fff3d6', '#f6d5d9']
];

$('#grid').innerHTML = gc.map((c, i) => `
  <button type="button" aria-label="Open photo ${i + 1}">
    ${ph(c, 'public/images/gallery/' + (i + 1) + '.jpg', 'gallery/' + (i + 1) + '.jpg')}
  </button>
`).join('');




/* LOAD IMAGES WHEN AVAILABLE */

document.querySelectorAll('[data-img]').forEach(el => {
  let path = el.dataset.img;

  if (path.includes('mehendi-desktop.jpg')) {
    path = 'public/images/gallery/mehendi-desktop.jpg';
  }

  const im = new Image();
  im.alt = '';
  im.loading = 'eager';

  im.onload = () => {
    el.replaceChildren(im);
    console.log('Image loaded successfully:', im.src);
  };

  im.onerror = () => {
    console.error('Image failed to load:', im.src);
  };

  im.src = path;
});



/* FALLING PETALS */

const P = $('#petals');

const cols = [
  '#f6d5d9',
  '#fbd9cc',
  '#fffaf3',
  '#e9bcc4',
  '#f3c6cf',
  '#fde3d0'
];

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const N = innerWidth < 700 ? 12 : 22;

for (let i = 0; i < N; i++) {
  const p = document.createElement('i');
  p.className = 'petal';

  const s = 8 + Math.random() * 12;

  p.style.cssText = `
    left:${Math.random() * 100}%;
    width:${s}px;
    height:${s * 1.3}px;
    background:${cols[i % cols.length]};
    --dx:${Math.random() * 90 - 45}px;
    animation-duration:${9 + Math.random() * 10}s;
    animation-delay:-${Math.random() * 16}s;
    box-shadow:inset -2px -2px 4px rgba(201,139,149,.35);
  `;

  P.appendChild(p);
}

if (reduce) {
  document.body.classList.add('nopetals');
}

$('#pt').onclick = e => {
  const off = document.body.classList.toggle('nopetals');

  e.currentTarget.setAttribute(
    'aria-label',
    off ? 'Turn petals on' : 'Turn petals off'
  );

  e.currentTarget.style.opacity = off ? 0.45 : 1;
};

/* INTRO VIDEO — TAP TO PLAY OR AUTO-PLAY AFTER 5 SECONDS */

const intro = $('#intro');
const vid = $('#vid');
const doors = $('#doors');
const main = $('#main');
const seal = $('#seal');
const music = $('#music');

let invitationShown = false;
let invitationOpened = false;
let videoStarted = false;
let videoStartTimer = null;

function showInvitation() {
  if (invitationShown) return;

  invitationShown = true;
  clearTimeout(videoStartTimer);

  $('#skip').hidden = true;

  intro.classList.add('out');
  main.classList.add('on');
  music.classList.add('on');

  doors.classList.remove('on');
  doors.classList.remove('open', 'draw', 'gone');

  document.body.classList.remove('lock');
  document.body.classList.add('rev');

  setTimeout(() => {
    vid.pause();
    intro.style.display = 'none';
  }, 1500);

  watch();
}



async function startVideo() {
  if (videoStarted || invitationShown) return;

  videoStarted = true;
  clearTimeout(videoStartTimer);

  // Start music immediately from the user's tap.
  const musicPromise = aud.paused ? play() : Promise.resolve();

  // Start the video from the same tap.
  const videoPromise = vid.play().catch(error => {
    console.warn('Intro video could not start:', error);
    videoStarted = false;
  });

  await Promise.allSettled([musicPromise, videoPromise]);
}



intro.addEventListener('pointerdown', startVideo);
videoStartTimer = setTimeout(startVideo, 5000);

vid.addEventListener('ended', showInvitation);

vid.addEventListener('error', () => {
  console.error('The intro video could not load:', vid.currentSrc);
  showInvitation();
});

$('#skip').onclick = showInvitation;

/* BACKGROUND MUSIC */

const aud = new Audio(ASSETS.audio);

aud.loop = true;
aud.volume = 0.6;
aud.preload = 'auto';

let muted = false;
let playing = false;

function ui() {
  music.classList.toggle('playing', playing);
  $('#pp').textContent = playing ? '❚❚' : '▶';

  $('#pp').setAttribute(
    'aria-label',
    playing ? 'Pause music' : 'Play music'
  );
}

async function play() {
  aud.muted = muted;

  try {
    await aud.play();
    playing = true;
  } catch (error) {
    playing = false;

    console.warn(
      'Wedding music could not start. Check the MP3 path or browser autoplay permissions.',
      error
    );
  }

  ui();
}

function pause() {
  aud.pause();
  playing = false;
  ui();
}

aud.addEventListener('play', () => {
  playing = true;
  ui();
});

aud.addEventListener('pause', () => {
  playing = false;
  ui();
});

aud.addEventListener('error', () => {
  console.error('Could not load the music file:', ASSETS.audio, aud.error);
});

function startOpeningMusic() {
  if (aud.paused) {
    play();
  }
}

window.addEventListener('load', startOpeningMusic);

document.addEventListener('pointerdown', function startMusicOnce() {
  if (aud.paused) play();

  if (!aud.paused) {
    document.removeEventListener('pointerdown', startMusicOnce);
  }
});

/* MUSIC PLAY/PAUSE */

$('#pp').onclick = () => {
  if (!aud.paused) {
    pause();
  } else {
    play();
  }
};

/* MUTE/UNMUTE */

$('#mu').onclick = e => {
  muted = !muted;
  aud.muted = muted;

  e.currentTarget.textContent = muted ? '✕' : '♪';

  e.currentTarget.setAttribute(
    'aria-label',
    muted ? 'Unmute music' : 'Mute music'
  );
};

/* OPEN THE INVITATION DOORS */

seal.onclick = () => {
  if (invitationOpened) return;
  invitationOpened = true;

  const k = reduce ? 0.1 : 1;

  main.classList.add('on');
  music.classList.add('on');

  doors.classList.add('open');

  setTimeout(() => {
    doors.classList.add('draw');
  }, 2500 * k);

  setTimeout(() => {
    document.body.classList.add('rev');
  }, 3800 * k);

  setTimeout(() => {
    doors.classList.add('gone');
    document.body.classList.remove('lock');
    watch();
  }, 4900 * k);

  setTimeout(() => {
    doors.classList.remove('on');
  }, 6200 * k);
};

/* REVEAL SECTIONS ON SCROLL */

function watch() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
      }
    });
  }, {
    threshold: 0.25
  });

  document.querySelectorAll('.ev, #close').forEach(section => {
    io.observe(section);
  });
}

/* WEDDING COUNTDOWN — INDIA TIME */

const T = new Date('2026-11-24T00:00:00+05:30').getTime();

const z = n => String(n).padStart(2, '0');

function tick() {
  const ms = T - Date.now();

  if (ms <= 0) {
    $('#cd').hidden = true;
    $('#cdmsg').hidden = false;
    return;
  }

  const s = Math.floor(ms / 1000);

  $('#d').textContent = Math.floor(s / 86400);
  $('#h').textContent = z(Math.floor((s % 86400) / 3600));
  $('#m').textContent = z(Math.floor((s % 3600) / 60));
  $('#s').textContent = z(s % 60);
}

tick();
setInterval(tick, 1000);

/* GALLERY LIGHTBOX */

document.querySelectorAll('#grid button').forEach(button => {
  button.onclick = () => {
    const phEl = button.querySelector('.ph');

    $('#lbph').innerHTML = button.innerHTML;

    if (phEl) {
      $('#lbph').style.cssText = phEl.getAttribute('style') || '';
    }

    $('#lb').classList.add('on');
    $('#lb .x').focus();
  };
});

const closeLb = () => {
  $('#lb').classList.remove('on');
};

$('#lb .x').onclick = closeLb;

$('#lb').onclick = e => {
  if (e.target.id === 'lb') {
    closeLb();
  }
};

addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLb();
  }
});
