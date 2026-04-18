class A extends ISO {
  static tamanhoMax = 1000;
  
  constructor() {
    super();
    this.largura = this.tamanhoMax;
    this.comprimento = this.tamanhoMax;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = this.tamanhoMax;
    this.tipos = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
    if (this.constructor === A) {
      throw new Error("Por favor, não tente instanciar a classe abstrata A.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }
  
  mostrarTamanhoFolha() {
    return `${this.tamanhoMax} x ${this.tamanhoMax} mm`;
  }

  retornar_tipos() {
    return this.tipos;
  }
}

class A0 extends A {
  static #instance;

  constructor() {
    super();
    
    if (A0.#instance) {
      return A0.#instance;
    }

    // Aqui estaria a declaração do que muda no tipo A0, ex.:
    // this.largura = 1000;
    // Mas, como a A0 é equivalente à base do tipo A, suas propriedades são iguais
    
    A0.#instance = this;
  }

  static getInstance() {
    if (!A0.#instance) {
      A0.#instance = new A0();
    }

    return A0.#instance;
  }
}

// class A1 extends A { ... }
