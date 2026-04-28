// Descomente apenas para os testes com doctest-js
// import { ISO } from './interfaces.js';

/**
 * @implements {ISO}
 */
class B extends ISO {
  static tipos = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"];
  
  constructor(largura, comprimento, tamanhoMax) {
    super();
    this.largura = largura;
    this.comprimento = comprimento;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = tamanhoMax;
    
    if (this.constructor === B) {
      throw new Error("Por favor, não tente instanciar a classe abstrata B.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }
  
  retornar_tipos() {
    return this.constructor.tipos;
  }
}

class B0 extends B {
  static #instance;

  constructor() {
    super(1000, 1414, 1414000);
    
    if (B0.#instance) {
      return B0.#instance;
    }

    B0.#instance = this;
  }

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "1000 mm, 1414 mm, white, 95 gsm, 1414000 mm2"
   */

  /**
   * Retorna uma string com o formato do papel
   *
   * @example mostrarTamanhoFolha()
   * //=> "1000 x 1414 mm"
   */

  /**
   * Retorna uma string com os tipos da especificação B
   *
   * @example retornar_tipos()
   * //=> ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"]
   */
  
  static getInstance() {
    if (!B0.#instance) {
      B0.#instance = new B0();
    }

    return B0.#instance;
  }
}

class B1 extends B {
  static #instance;

  constructor() {
    super(707, 1000, 707000);
    
    if (B1.#instance) {
      return B1.#instance;
    }

    B1.#instance = this;
  }

  static getInstance() {
    if (!B1.#instance) {
      B1.#instance = new B1();
    }

    return B1.#instance;
  }
}

class B2 extends B {
  static #instance;

  constructor() {
    super(500, 707, 353500);
    
    if (B2.#instance) {
      return B2.#instance;
    }

    B2.#instance = this;
  }

  static getInstance() {
    if (!B2.#instance) {
      B2.#instance = new B2();
    }

    return B2.#instance;
  }
}

class B3 extends B {
  static #instance;

  constructor() {
    super(353, 500, 176500);
    
    if (B3.#instance) {
      return B3.#instance;
    }
    
    B3.#instance = this;
  }

  static getInstance() {
    if (!B3.#instance) {
      B3.#instance = new B3();
    }

    return B3.#instance;
  }
}
class B4 extends B {
  static #instance;

  constructor() {
    super(250, 353, 88250);
    
    if (B4.#instance) {
      return B4.#instance;
    }

    B4.#instance = this;
  }
  
  static getInstance() {
    if (!B4.#instance) {
      B4.#instance = new B4();
    }
    
    return B4.#instance;
  }
}

class B5 extends B {
  static #instance;
  
  constructor() {
    super(176, 250, 44000);
    
    if (B5.#instance) {
      return B5.#instance;
    }

    B5.#instance = this;
  }
  
  static getInstance() {
    if (!B5.#instance) {
      B5.#instance = new B5();
    }
    
    return B5.#instance;
  }
}

class B6 extends B {
  static #instance;
  
  constructor() {
    super(125, 176, 22000);
    
    if (B6.#instance) {
      return B6.#instance;
    }
    
    B6.#instance = this;
  }
  
  static getInstance() {
    if (!B6.#instance) {
      B6.#instance = new B6();
    }
    
    return B6.#instance;
  }
}

class B7 extends B {
  static #instance;
  
  constructor() {
    super(88, 125, 11000);
    
    if (B7.#instance) {
      return B7.#instance;
    }
    
    B7.#instance = this;
  }
  
  static getInstance() {
    if (!B7.#instance) {
      B7.#instance = new B7();
    }
    
    return B7.#instance;
  }
}

class B8 extends B {
  static #instance;
  
  constructor() {
    super(62, 88, 5456);
    
    if (B8.#instance) {
      return B8.#instance;
    }
    
    B8.#instance = this;
  }
  
  static getInstance() {
    if (!B8.#instance) {
      B8.#instance = new B8();
    }
    
    return B8.#instance;
  }
}

class B9 extends B {
  static #instance;
  
  constructor() {
    super(44, 62, 2728);
    
    if (B9.#instance) {
      return B9.#instance;
    }
    
    B9.#instance = this;
  }
  
  static getInstance() {
    if (!B9.#instance) {
      B9.#instance = new B9();
    }
    
    return B9.#instance;
  }
}

class B10 extends B {
  static #instance;
  
  constructor() {
    super(31, 44, 1364);
    
    if (B10.#instance) {
      return B10.#instance;
    }
    
    B10.#instance = this;
  }

  static getInstance() {
    if (!B10.#instance) {
      B10.#instance = new B10();
    }

    return B10.#instance;
  }
}

// Descomente apenas para os testes com doctest-js
// export { B, B0 }
