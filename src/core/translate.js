class {
  #engine;
  #key;
  #from;
  #to;

  constructor(engine, key) {
    this.#engine = engine;
    this.#key = key;

    return this;
  }

  prepare() {

  }

  set engine(e) {
    this.#engine = e;

    return this;
  }

  set key(k) {
    this.#key = k;

    return this;
  }

  set from(locale) {
    this.#from = locale;

    return this;
  }

  set to(locales = []) {
    if (!['string', 'object'].includes(typeof(locales))) {
      console.log("Invalid locale! :: " + locales)

      this.#to = [];

      return this;
    }
    this.#to = locales;
    
    return this;
  }
}
