import startMic from '../../sounds/startMic.wav';
import stopMic from '../../sounds/stopMic.wav';
class SpeechToText {
    constructor(lang = 'en-US') {
        this.micStart = new Audio(`${startMic}`);
        this.micStart.volume = 1;
        this.micStop = new Audio(`${stopMic}`);
        this.micStop.volume = 1;
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error("Web Speech API is not supported in this browser.");
            return null;
        }

        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.lang = lang;
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.transcript = '';
        this.isListening = false;

        // Event handlers
        this.recognition.onresult = (event) => {
            const lastResult = event.results[event.results.length - 1];
            this.transcript = lastResult[0].transcript;
        };

        this.recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            this.isListening = false;
        };

        this.recognition.onend = () => {
            this.isListening = false;
        };
    }

    start() {
        if (!this.recognition) {
            console.error("Speech recognition not initialized due to browser incompatibility.");
            return;
        }
        if (!this.isListening) {
            this.transcript = '';
            this.recognition.start();
            this.micStart.play().then();
            this.isListening = true;
        }
    }

    stop() {
        if (this.isListening) {
            this.recognition.stop();
            this.micStop.play().then();
            this.isListening = false;
        }
    }

    getTranscript() {
        return this.transcript;
    }
}
export default SpeechToText;
