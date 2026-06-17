import { ThisReceiver, VoidExpression } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { concat, first, Observable, Subject, switchMap, take } from 'rxjs';
type SpeechResult = {
  onStart: Observable<SpeechSynthesisEvent>
  onEnd: Observable<SpeechSynthesisEvent>
  onPause: Observable<SpeechSynthesisEvent>
}

@Injectable({
  providedIn: 'root',
})
export class VoiceService {

  private readonly _speechSynthesis = speechSynthesis

  constructor() {
    const voice = this.availableVoices()
    console.log("available voices", voice)
  }

  private availableVoices() {
    const availableVoices = this._speechSynthesis.getVoices()
    return availableVoices
  }

  private getVoiceByLangLocale(...lang: string[]) {
    // lang: en-US | ...
    const voices = this.availableVoices()
    const langSet = new Set(lang.map(l => l.toLowerCase()))
    for (const voice of voices) {
      if (langSet.has(voice.lang.toLowerCase())) return voice
    }
    return null

  }

  speak2(message: string) {
    // const commands = this.availableVoices().map(voice => this.speak(message, voice).pipe(switchMap(x => x.onEnd)))

    // concat(...commands).subscribe(x => {
    //   console.log("Speak Done")
    //   console.log(x)
    // })
    console.log("Synth Voice speak:", message)

    const voice = this.getVoiceByLangLocale("de-DE")
    if (!voice) {
      console.error("Synth Language not available")
      return
    }
    this.speak(message, voice).subscribe()
  }



  speak(message: string, voice: SpeechSynthesisVoice) {
    return new Observable<SpeechResult>(subscriber => {

      console.log("Speack now in voice", voice.name)

      const onStart = new Subject<SpeechSynthesisEvent>()
      const onEnd = new Subject<SpeechSynthesisEvent>()
      const onPause = new Subject<SpeechSynthesisEvent>()

      let utterance = new SpeechSynthesisUtterance(message);

      utterance.voice = voice

      utterance.addEventListener("end", e => onEnd.next(e))
      utterance.addEventListener("start", e => onStart.next(e))
      utterance.addEventListener("pause", e => onPause.next(e))

      speechSynthesis.speak(utterance);

      subscriber.next({
        onStart: onStart.asObservable().pipe(first()),
        onEnd: onEnd.asObservable().pipe(first()),
        onPause: onPause.asObservable().pipe(first()),
      });

      return () => subscriber.unsubscribe()
    }).pipe(take(1))
  }
}
