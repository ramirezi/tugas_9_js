function panggilKaryawan(){
  var karyawan = {
    nama : 'Budi',
    gender : 'Pria',
    umur : 20,
    jabatan : 'Karyawan',
  }
  for(var x in karyawan){
  console.log(karyawan[x]);
  }

}
panggilKaryawan();
