import { Negotiation } from '../models/negociacao';
import { Negotiations } from '../models/negociacoes.js';

export class NegotiationsView {

  private element: HTMLElement;

  constructor(selector: string){
    this.element = document.querySelector(selector);
  }

  template(model: Negotiations): string {
    return `
      <table class="table  table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody class="table">
          ${model.list().map((negotiation: Negotiation) => {
    return`
      <tr>
        <td>${new Intl.DateTimeFormat().format(negotiation.data)}</td>
        <td>${negotiation.quantidade}</td>
        <td>${negotiation.valor}</td>
      </tr>`;

  })}
        </tbody>
      </table>
    `;
  }

  update(model: Negotiations): void {
    const template = this.template(model);
    console.log(template);
    this.element.innerHTML = template;
  }
}