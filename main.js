
const recognition = new webkitSpeechRecognition()
recognition.lang = 'th-TH'
recognition.continuous = true;
recognition.interimResults = true;

let p = document.createElement('p')

recognition.addEventListener('result', function(event) {
    const texts = Array.from(event.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join(' ')

    console.log(texts);
    p.innerText = texts

    texts.appenChild(p)
  });

  recognition.start();