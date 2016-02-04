 $scope.perbarui = function(id,id_pengumuman) {
    var file = $scope.dataget.myFile;
    var judul = $scope.dataget.judul;
    var isi = $scope.dataget.isi;
    var fd = new FormData();
    fd.append('file', file);
    fd.append('judul', judul);
    fd.append('isi', isi);
    var uploadUrlupdate =
    LinkServer+'backend/informasi/pengumuman/perbaruipengumuman/'+id;
    $http.post(uploadUrlupdate,fd,
      {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      }
      )
    .success(function (data, status, headers, config) {
      alertService.add("success", "Pengumuman Berhasil Diperbarui", 3000);
    })
    .error(function(data, status, headers, config){
      alert(data, status);
    });
  }
