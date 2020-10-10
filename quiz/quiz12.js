class BangunDatar{
    constructor(){
      this._nama = "";
      this._luas = "";
      this._keliling = "";
    }
  
  
    get nama(){
        return this._nama;
    }
    
    set nama(x){
        return this._nama;
    }
    
    get luas(){
        return this._luas;
    }
    
    set luas(x){
        return this._luas;
    }
    
    get keliling(){
        return this._keliling;
    }
    
    set keliling(x){
        return this._keliling;
    }
}
    
  var pi =3.14
  var nilai = new BangunDatar ();
  
  nilai._nama = "lingkaran"
  nilai._luas = pi*7
  nilai._keliling = 2*pi*7

  console.log(nilai._nama)
  console.log(nilai._luas)
  console.log(nilai._keliling)
  console.log()

  class Persegi extends BangunDatar{
    constructor(){
        super()
   }
    }

  var nilaiPersegi = new Persegi();
  nilaiPersegi._nama = "persegi"
  nilaiPersegi._luas = 8*8
  nilaiPersegi._keliling = 4*8


  console.log(nilaiPersegi._nama)
  console.log(nilaiPersegi._luas)
  console.log(nilaiPersegi._keliling)
 