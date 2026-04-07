import { Component, computed, signal } from '@angular/core';
import { Expansion } from './types';
import { CARDS } from './config';

@Component({
  selector: 'vcs-root',
  template: `
    <div class="col-start-1 col-end-3
      border-b-2 border-solid border-gray-400 pt-4
      grid grid-cols-[1fr_auto] gap-4 items-start grid-rows-[80px_1fr]
      overflow-hidden
    ">
      @let selectedCard = cardMap[selectedId()];

      
      @if(selectedCard) {
        <h1 class="text-4xl font-bold self-center">
          {{ selectedCard.title }}
        </h1>
        <img
          class="rounded-2xl h-14 w-14 object-contain justify-self-center bg-white self-center"
          [src]="'assets/' + selectedCard.icon + '.jpg'"
          [alt]="selectedCard?.title"
        />

        <div class="text-2xl col-span-2 overflow-auto max-h-full pb-8 whitespace-pre-wrap">
          <span>{{ selectedCard.description }}</span>

          @if (selectedCard.extraInfo) {
            <div class="flex flex-wrap gap-2 justify-around mt-4">
              @for (info of selectedCard.extraInfo; track info.image) {
                <div class="flex flex-col gap-2">
                  <img
                    class="rounded-2xl h-24 w-30 object-contain justify-self-center bg-white self-center"
                    [src]="'assets/' + info.image + '.jpg'"
                    [alt]="info.text"
                  />
                  <span class="text-lg italic text-gray-300">{{ info.text }}</span>
                </div>
              }
            </div>
          }
        </div>
      } @else {
        <p class="text-2xl col-span-2 text-center text-gray-400">
          Selecciona una carta para saber sus detalles
        </p>
      }
    </div>


    <div class="col-start-1 col-end-2
      grid grid-cols-5 gap-1 justify-items-start content-start
      grid-rows-[repeat(4,minmax(4rem,auto))]
      ">
      @for (card of cards(); track card.id) {
        <img
          class="aspect-square w-16 cursor-pointer object-contain
            rounded-xl border-2 border-solid border-gray-500 bg-white
            shadow-xl hover:shadow-[0_0_1rem_0_purple] hover:border-purple-500
            [&.selected]:shadow-[0_0_1rem_0_purple] [&.selected]:border-purple-500
          "
          [class.selected]="selectedId() === card.id"
          [src]="'assets/' + card.icon + '.jpg'"
          (click)="selectedId.set(card.id)"
        />
      }
    </div>

    <div class="col-start-2 col-end-3 flex flex-col gap-2 justify-around bg-purple-700/20 p-1 rounded-xl">
      @let selected = selectedExpansion();

      <img
        class="aspect-square w-10 cursor-pointer object-contain
          rounded-[50%] border-2 border-solid border-gray-500 bg-white opacity-50
          hover:border-orange-500
          [&.selected]:border-purple-500 [&.selected]:opacity-100
        "
        [class.selected]="selected === Expansion.Virus"
        src="assets/virus.jpg"
        (click)="toggleExpansion(Expansion.Virus)"
      />

      <img
        class="aspect-square w-10 cursor-pointer object-contain
          rounded-[50%] border-2 border-solid border-gray-500 bg-white opacity-50
          hover:border-purple-500
          [&.selected]:border-purple-500 [&.selected]:opacity-100
        "
        [class.selected]="selected === Expansion.Virus2"
        src="assets/virus2.jpg"
        (click)="toggleExpansion(Expansion.Virus2)"
      />

      <img
        class="aspect-square w-10 cursor-pointer object-contain
          rounded-[50%] border-2 border-solid border-gray-500 bg-white opacity-50
          hover:border-purple-500
          [&.selected]:border-purple-500 [&.selected]:opacity-100
        "
        [class.selected]="selected === Expansion.Halloween"
        src="assets/virus-halloween.jpg"
        (click)="toggleExpansion(Expansion.Halloween)"
      />
    </div>
  `,
  styles: [`
    :host {
      display: grid;
      height: 100vh;
      padding: 1rem;
      grid-template-columns: 1fr auto;
      grid-template-rows: 1fr auto;
      background-color: #111;
      gap: 0.5rem;
      color: white;
      max-height: min(100dvh, 75rem);
      max-width: 30rem;
      margin: auto;
      border: 1px solid #333;
    }
  `],
})
export class App {
  protected Expansion = Expansion;
  protected selectedId = signal('');
  protected selectedExpansion = signal<Expansion | null>(null);

  protected cardMap = CARDS;
  protected cards = computed(() => {
    const selectedExpansion = this.selectedExpansion();
    return Object.values(CARDS).filter(card => selectedExpansion === card.expansion || !selectedExpansion);
  });
  protected selectedCard = computed(() => CARDS[this.selectedId()]);

  protected toggleExpansion(expansion: Expansion): void {
    if (this.selectedExpansion() === expansion) {
      this.selectedExpansion.set(null);
      return;
    }

    this.selectedExpansion.set(expansion);
  }
}
