
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


/* IMAGE RENDERING FUNCTION */

function ph(c, img, label) {
  return `
    <div
      class="ph"
      style="--c1:${c[0]};--c2:${c[1]}"
    >
      <img
        src="${img}"
        alt="${label}"
        loading="lazy"
        onerror="this.style.display='none';"
      />
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
    '/images/gallery/1.jpg',
    'Engagement Ceremony'
  )}
</div>
        </div>
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
          muted
          playsinline
          preload="none"
          data-src="/public/videos/haldi-rasam.mp4"
          aria-label="Haldi Rasam video"
        ></video>


        <img
          class="mehendi-laptop-image"
          src="/images/gallery/mehendi-desktop.jpg"
          alt="Mehendi and Haldi celebration"
          loading="lazy"
        >

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



/* =========================================
   MEHENDI & HALDI VIDEO
   Play when visible, pause when away,
   resume from the same position
========================================= */

const haldiVideo = document.querySelector('.haldi-phone-video');

if (haldiVideo) {

  const haldiSection = haldiVideo.closest('.haldi-rasam-section');

  const haldiMobile = window.matchMedia('(max-width: 700px)');

  let haldiFinished = false;

  // Load the video only when needed.
  function loadHaldiVideo() {

    if (!haldiMobile.matches) return;

    if (haldiVideo.getAttribute('src')) return;

    const source = haldiVideo.dataset.src;

    if (!source) {
      console.error('Haldi video source is missing.');
      return;
    }

    haldiVideo.src = source;
    haldiVideo.load();

  }

  // Observe the Haldi section.
  const haldiObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!haldiMobile.matches) {
          haldiVideo.pause();
          return;
        }

        if (entry.isIntersecting && !haldiFinished) {

          loadHaldiVideo();

          // Do not restart a completed video.
          if (haldiVideo.ended) {
            haldiFinished = true;
            return;
          }

          // Resume from the existing playback position.
          if (haldiVideo.paused) {

            haldiVideo.play().catch(error => {

              console.warn(
                'Haldi video could not start:',
                error
              );

            });

          }

        } else {

          // Pause without resetting currentTime.
          haldiVideo.pause();

        }

      });

    },
    {
      threshold: 0.5
    }
  );

  // Stop permanently after the video has finished.
  haldiVideo.addEventListener('ended', () => {

    haldiFinished = true;

    haldiVideo.pause();

  });

  // Handle switching between mobile and desktop.
  haldiMobile.addEventListener('change', () => {

    if (haldiMobile.matches) {

      loadHaldiVideo();

    } else {

      haldiVideo.pause();

    }

  });

  // Observe the section only on mobile.
  if (haldiMobile.matches) {
    loadHaldiVideo();
  }

  if (haldiSection) {
    haldiObserver.observe(haldiSection);
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
  ['#fff3d6', '#f6d5d9'],
  ['#e4daf0', '#fff3d6']
];

$('#grid').innerHTML = gc.map((c, i) => {
  const imagePath = i === 6
    ? 'public/images/gallery/7.jpeg'
    : 'public/images/gallery/' + (i + 1) + '.jpg';

  const fallbackPath = i === 6
    ? 'gallery/7.jpeg'
    : 'gallery/' + (i + 1) + '.jpg';

  return `
    <button type="button" aria-label="Open photo ${i + 1}">
      ${ph(c, imagePath, fallbackPath)}
    </button>
  `;
}).join('');

/* LOAD GALLERY IMAGES */

document.querySelectorAll('#grid [data-img]').forEach(el => {
  const path = el.dataset.img;

  const im = new Image();
  im.alt = '';
  im.loading = 'eager';

  im.onload = () => {
    el.replaceChildren(im);
  };

  im.onerror = () => {
    console.error('Gallery image failed to load:', path);
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

  // Start wedding background music after the intro video ends
if (aud.paused) {
  play();
}

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




function startVideo() {
  if (videoStarted || invitationShown) return;

  videoStarted = true;
  clearTimeout(videoStartTimer);

  // Play only the intro video's own audio
  vid.muted = false;
  vid.volume = 1;

  vid.play().catch(error => {
    console.warn('Intro video could not start:', error);
    videoStarted = false;
  });
}



intro.addEventListener('pointerdown', startVideo);
videoStartTimer = setTimeout(startVideo, 1000);

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


/* GALLERY LIGHTBOX — SHOW FULL IMAGE */

document.querySelectorAll('#grid button').forEach(button => {
  button.onclick = () => {
    const sourceImage = button.querySelector('.ph img');
    if (!sourceImage) return;

    const viewer = $('#lbph');
    viewer.replaceChildren();

    const fullImage = new Image();
    fullImage.src = sourceImage.currentSrc || sourceImage.src;
    fullImage.alt = sourceImage.alt || 'Wedding memory';
    fullImage.decoding = 'async';

    viewer.appendChild(fullImage);
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


/* DIRECTIONS BUTTONS — APPEAR AFTER 4 SECONDS AND STAY VISIBLE */

function setupDirectionsButton(sectionSelector, buttonSelector) {
  document.querySelectorAll(sectionSelector).forEach(section => {
    const button = section.querySelector(buttonSelector);

    if (!button || button.classList.contains('show-directions')) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        // Stop observing once the section appears
        observer.unobserve(section);

        // Show the button after 4 seconds
        setTimeout(() => {
          button.classList.add('show-directions');
        }, 4000);
      });
    }, { threshold: 0.15 });

    observer.observe(section);
  });
}

// Mata Ki Chowki
setupDirectionsButton('.mata-video-section', '.mata-directions-btn');

// Wedding Ceremony
setupDirectionsButton('.wedding-event', '.wedding-directions-btn');
/* =========================================
   MOMENTS & MEMORIES PHOTO VIEWER
========================================= */

(() => {
  const viewer = document.getElementById('photoViewer');
  const stage = document.getElementById('viewerStage');
  const image = document.getElementById('viewerImage');
  const zoomLabel = document.getElementById('viewerZoomLevel');

  if (!viewer || !stage || !image) {
    console.warn('Photo viewer HTML was not found.');
    return;
  }

  let photos = [];
  let currentIndex = 0;
  let zoom = 1;
  let startX = 0;
  let startY = 0;

  function collectPhotos() {
    photos = [...document.querySelectorAll('#grid button')]
      .map(button => {
        const img = button.querySelector('img');

        if (img && img.src) {
          return img.currentSrc || img.src;
        }

        const holder = button.querySelector('[data-img]');
        if (holder?.dataset.img) {
          return holder.dataset.img;
        }

        return null;
      })
      .filter(Boolean);
  }

  function setZoom(value) {
    zoom = Math.max(0.5, Math.min(4, value));

    if (zoom <= 1) {
      image.style.width = 'auto';
      image.style.height = 'auto';
      stage.scrollTo({ left: 0, top: 0 });
    } else {
      image.style.width = `${image.naturalWidth * zoom}px`;
      image.style.height = `${image.naturalHeight * zoom}px`;
    }

    viewer.classList.toggle('zoomed', zoom > 1);
    zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  }

  function showPhoto(index) {
    collectPhotos();

    if (!photos.length) {
      console.error('No gallery images were found.');
      return;
    }

    currentIndex = (index + photos.length) % photos.length;
    image.onload = () => {
      setZoom(1);
    };
    image.onerror = () => {
      console.error('Could not load gallery image:', image.src);
    };
    image.src = photos[currentIndex];
    stage.scrollTo({ left: 0, top: 0 });
  }

  function openViewer(index) {
    showPhoto(index);
    viewer.classList.add('active');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeViewer() {
    viewer.classList.remove('active');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    image.removeAttribute('src');
    setZoom(1);
  }

  // document.querySelectorAll('#grid button').forEach((button, index) => {
  //   button.addEventListener('click', () => openViewer(index));
  // });

  
document.querySelectorAll('#grid button').forEach((button, index) => {

  button.addEventListener('click', event => {

    // Ignore the click generated by scratching.

    if (button.dataset.suppressViewerClick === 'true') {

      delete button.dataset.suppressViewerClick;

      event.preventDefault();

      return;

    }

    // Open the full-screen viewer only after revealing.

    if (!button.classList.contains('scratch-revealed')) {

      event.preventDefault();

      return;

    }

    openViewer(index);

  });

});


  document.getElementById('viewerClose')
    ?.addEventListener('click', closeViewer);

  document.getElementById('viewerPrev')
    ?.addEventListener('click', () => showPhoto(currentIndex - 1));

  document.getElementById('viewerNext')
    ?.addEventListener('click', () => showPhoto(currentIndex + 1));

  document.getElementById('viewerZoomIn')
    ?.addEventListener('click', () => setZoom(zoom + 0.25));

  document.getElementById('viewerZoomOut')
    ?.addEventListener('click', () => setZoom(zoom - 0.25));

  document.getElementById('viewerReset')
    ?.addEventListener('click', () => setZoom(1));

  stage.addEventListener('wheel', event => {
    if (!viewer.classList.contains('active')) return;

    event.preventDefault();
    setZoom(zoom + (event.deltaY < 0 ? 0.2 : -0.2));
  }, { passive: false });

  viewer.addEventListener('click', event => {
    if (event.target === viewer) closeViewer();
  });

  document.addEventListener('keydown', event => {
    if (!viewer.classList.contains('active')) return;

    if (event.key === 'Escape') closeViewer();
    if (event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(currentIndex + 1);
  });

  // Allow finger swipes to change photos on phones.
  stage.addEventListener('touchstart', event => {
    if (zoom > 1 || event.touches.length !== 1) return;
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, { passive: true });

  stage.addEventListener('touchend', event => {
    if (zoom > 1 || event.changedTouches.length !== 1) return;

    const dx = event.changedTouches[0].clientX - startX;
    const dy = event.changedTouches[0].clientY - startY;

    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      showPhoto(currentIndex + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });
})();




/* =========================================
   MOMENTS & MEMORIES — SCRATCH TO REVEAL
========================================= */

function initScratchGallery() {

  const galleryButtons = document.querySelectorAll('#grid button');

  galleryButtons.forEach(button => {

    // Prevent duplicate scratch layers.
    if (button.querySelector('.scratch-canvas')) return;

    const img = button.querySelector('img');

    if (!img) return;

    const canvas = document.createElement('canvas');

    canvas.className = 'scratch-canvas';

    button.appendChild(canvas);

    const ctx = canvas.getContext('2d', {
      willReadFrequently: true
    });

    let isScratching = false;

    let lastX = 0;
    let lastY = 0;

    let scratched = false;

    const brushRadius = 24;

    const scratchThreshold = 0.40;

    function drawBlurredImage() {

      if (!img.complete || !img.naturalWidth) return;

      const rect = button.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      if (!width || !height) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, width, height);

      /*
        Draw the image using object-fit: cover.
        This ensures the blurred image matches
        the original gallery thumbnail.
      */

      const imageWidth = img.naturalWidth;
      const imageHeight = img.naturalHeight;

      const scale = Math.max(
        width / imageWidth,
        height / imageHeight
      );

      const scaledWidth = imageWidth * scale;
      const scaledHeight = imageHeight * scale;

      const offsetX = (width - scaledWidth) / 2;
      const offsetY = (height - scaledHeight) / 2;

      // Draw blurred image over the original.

      ctx.save();

      ctx.filter = 'blur(12px)';

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        scaledWidth,
        scaledHeight
      );

      ctx.restore();

      // Add a subtle frosted layer.

      ctx.fillStyle = 'rgba(255, 248, 235, 0.12)';

      ctx.fillRect(0, 0, width, height);

      scratched = false;

      button.classList.remove('scratch-revealed');

    }

    function scratch(x, y) {

      if (!ctx) return;

      ctx.save();

      ctx.globalCompositeOperation = 'destination-out';

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        brushRadius,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

    }

    function scratchLine(x1, y1, x2, y2) {

      ctx.save();

      ctx.globalCompositeOperation = 'destination-out';

      ctx.lineWidth = brushRadius * 2;

      ctx.lineCap = 'round';

      ctx.lineJoin = 'round';

      ctx.beginPath();

      ctx.moveTo(x1, y1);

      ctx.lineTo(x2, y2);

      ctx.stroke();

      ctx.restore();

    }

    function getPosition(event) {

      const rect = canvas.getBoundingClientRect();

      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };

    }

    function getScratchedPercentage() {

      const dpr = window.devicePixelRatio || 1;

      const width = canvas.width;

      const height = canvas.height;

      const pixels = ctx.getImageData(
        0,
        0,
        width,
        height
      ).data;

      let transparentPixels = 0;

      const totalPixels = width * height;

      // Sample every 16th pixel for performance.

      for (let i = 3; i < pixels.length; i += 64) {

        if (pixels[i] < 50) {
          transparentPixels++;
        }

      }

      const sampledPixels = Math.ceil(totalPixels / 16);

      return transparentPixels / sampledPixels;

    }

    function checkReveal() {

      if (scratched) return;

      const percentage = getScratchedPercentage();

      if (percentage >= scratchThreshold) {

        scratched = true;

        button.classList.add('scratch-revealed');

      }

    }

    canvas.addEventListener('pointerdown', event => {

      if (scratched) return;

      isScratching = true;

      canvas.setPointerCapture(event.pointerId);

      const position = getPosition(event);

      lastX = position.x;
      lastY = position.y;

      scratch(position.x, position.y);

      // Prevent the viewer opening during scratching.

      button.dataset.suppressViewerClick = 'true';

      event.preventDefault();

    });

    canvas.addEventListener('pointermove', event => {

      if (!isScratching || scratched) return;

      const position = getPosition(event);

      scratchLine(
        lastX,
        lastY,
        position.x,
        position.y
      );

      lastX = position.x;
      lastY = position.y;

    });

    function stopScratching() {

      if (!isScratching) return;

      isScratching = false;

      checkReveal();

    }

    canvas.addEventListener('pointerup', stopScratching);

    canvas.addEventListener('pointercancel', stopScratching);

    canvas.addEventListener('click', event => {

      // Keep scratch interaction separate
      // from the photo viewer click.

      event.preventDefault();

      event.stopPropagation();

    });

    if (img.complete) {

      drawBlurredImage();

    } else {

      img.addEventListener(
        'load',
        drawBlurredImage,
        { once: true }
      );

    }

  });

}

// Initialize after the gallery has been rendered.

initScratchGallery();
