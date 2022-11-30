window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.leng = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.container');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    const fireEmoji = transcript.replace(/boom|boo|fire|boom/gi, '🔥');
    p.textContent = fireEmoji;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
});

recognition.addEventListener('end', recognition.start);
recognition.start();
