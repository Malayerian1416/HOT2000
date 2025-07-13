import startMic from '../../sounds/startMic.wav';
import stopMic from '../../sounds/stopMic.wav';
class SpeechToText {
    constructor(lang = 'en-US', continuous = true, interimResults = false) {
        this.micStart = new Audio(`${startMic}`);
        this.micStart.volume = 0.3;
        this.micStop = new Audio(`${stopMic}`);
        this.micStop.volume = 0.3;
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.error("Web Speech API is not supported in this browser.");
            return null;
        }
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.lang = lang;
        this.recognition.continuous = continuous;
        this.recognition.interimResults = interimResults;
        this.interimTranscript = '';
        this.finalTranscript = [];
        this.isListening = false;

        this.recognition.onresult = (event) => {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                this.finalTranscript += event.results[i][0].transcript + ".";
            }
        };

        this.recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
            this.isListening = false;
        };

        this.recognition.onend = () => {
            if (this.isListening) {
                console.log(this.finalTranscript)
                this.recognition.start()
            }
        };
    }

    start() {
        if (!this.recognition) {
            console.error("Speech recognition not initialized due to browser incompatibility.");
            return;
        }
        if (!this.isListening) {
            this.interimTranscript = '';
            this.finalTranscript = [];
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

    getFullTranscript() {
        return this.finalTranscript.split(/(?<=[.!?])\s+/);
    }
    getInterimTranscript() {
        return this.interimTranscript;
    }
}
export default SpeechToText;
