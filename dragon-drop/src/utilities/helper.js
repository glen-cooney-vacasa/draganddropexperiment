class Helper {
  constructor(){

  }

  static enforceRange(min, max, val){
    return ((val > min) && (val < max));
  }
}

export default Helper;
