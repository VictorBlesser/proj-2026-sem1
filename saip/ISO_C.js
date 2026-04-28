// Descomente apenas para os testes com doctest-js
// import { ISO } from './interfaces.js';

/**
 * @implements {ISO}
 */
class C extends ISO {
  static tipos = ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];

  constructor(largura, comprimento, tamanhoMax) {
    super();
    this.largura = largura;
    this.comprimento = comprimento;
    this.cor = "white"; // Significa branco ou #fff
    this.gramatura = 95;
    this.tamanhoMax = tamanhoMax;

    if (this.constructor === C) {
      throw new Error("Por favor, não tente instanciar a classe abstrata C.");
    }
  }

  mostrarPropriedades() {
    return `${this.largura} mm, ${this.comprimento} mm, ${this.cor}, ${this.gramatura} gsm, ${this.tamanhoMax} mm2`;
  }

  retornar_tipos() {
    return this.constructor.tipos;
  }
}

class C0 extends C {
  static #instance;

  constructor() {
    super(917, 1297, 1189349);

    if (C0.#instance) {
      return C0.#instance;
    }
    
    C0.#instance = this;
  }
  
  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "917 mm, 1297 mm, white, 95 gsm, 1189349 mm2"
   */
    

  /**
   * Retorna uma string com os atributos relevantes
   *
   * @example mostrarPropriedades()
   * //=> "917 mm, 1297 mm, white, 95 gsm, 1189349 mm2"
   */

  /**
   * Retorna uma string com o formato do papel
   *
   * @example mostrarTamanhoFolha()
   * //=> "917 x 1297 mm"
   */
  
  /**
   * Retorna uma string com os tipos da especificação C
   *
   * @example retornar_tipos()
   * //=> ["C0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"]
   */

  static getInstance() {
    if (!C0.#instance) {
      C0.#instance = new C0();
    }

    return C0.#instance;
  }
}

class C1 extends C {
  static #instance;

  constructor() {
    super(648, 917, 594216);

    if (C1.#instance) {
      return C1.#instance;
    }

    C1.#instance = this;
  }

  static getInstance() {
    if (!C1.#instance) {
      C1.#instance = new C1();
    }

    return C1.#instance;
  }
}

class C2 extends C {
  static #instance;

  constructor() {
    super(458, 648, 296784);

    if (C2.#instance) {
      return C2.#instance;
    }

    C2.#instance = this;
  }

  static getInstance() {
    if (!C2.#instance) {
      C2.#instance = new C2();
    }

    return C2.#instance;
  }
}

class C3 extends C {
  static #instance;

  constructor() {
    super(324, 458, 14839);

    if (C3.#instance) {
      return C3.#instance;
    }

    C3.#instance = this;
  }

  static getInstance() {
    if (!C3.#instance) {
      C3.#instance = new C3();
    }

    return C3.#instance;
  }
}

class C4 extends C {
  static #instance;

  constructor() {
    super(229, 324, 74196);

    if (C4.#instance) {
      return C4.#instance;
    }

    C4.#instance = this;
  }

  static getInstance() {
    if (!C4.#instance) {
      C4.#instance = new C4();
    }

    return C4.#instance;
  }
}

class C5 extends C {
  static #instance;

  constructor() {
    super(162, 229, 37098);

    if (C5.#instance) {
      return C5.#instance;
    }

    C5.#instance = this;
  }

  static getInstance() {
    if (!C5.#instance) {
      C5.#instance = new C5();
    }

    return C5.#instance;
  }
}

class C6 extends C {
  static #instance;

  constructor() {
    super(114, 162, 18468);

    if (C6.#instance) {
      return C6.#instance;
    }

    C6.#instance = this;
  }

  static getInstance() {
    if (!C6.#instance) {
      C6.#instance = new C6();
    }

    return C6.#instance;
  }
}
class C7 extends C {
  static #instance;

  constructor() {
    super(81, 114, 9234);

    if (C7.#instance) {
      return C7.#instance;
    }

    C7.#instance = this;
  }

  static getInstance() {
    if (!C7.#instance) {
      C7.#instance = new C7();
    }

    return C7.#instance;
  }
}
class C8 extends C {
  static #instance;

  constructor() {
    super(57, 81, 4617);

    if (C8.#instance) {
      return C8.#instance;
    }

    C8.#instance = this;
  }

  static getInstance() {
    if (!C8.#instance) {
      C8.#instance = new C8();
    }

    return C8.#instance;
  }
}

class C9 extends C {
  static #instance;

  constructor() {
    super(40, 57, 2280);

    if (C9.#instance) {
      return C9.#instance;
    }

    C9.#instance = this;
  }

  static getInstance() {
    if (!C9.#instance) {
      C9.#instance = new C9();
    }

    return C9.#instance;
  }
}

class C10 extends C {
  static #instance;

  constructor() {
    super(28, 40, 1120);

    if (C10.#instance) {
      return C10.#instance;
    }

    C10.#instance = this;
  }

  static getInstance() {
    if (!C10.#instance) {
      C10.#instance = new C10();
    }

    return C10.#instance;
  }
}

// Descomente apenas para os testes com doctest-js
// export { C, C0 }
