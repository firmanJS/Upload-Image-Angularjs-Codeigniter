 $scope.perbarui = function() {
    var file = $scope.myFile;
    var judul = $scope.judul;
    var isi = $scope.isi;
    var fd = new FormData();
    fd.append('file', file);
    fd.append('judul', judul);
    fd.append('isi', isi);
    var uploadurl =
    LinkServer+'backend/informasi/pengumuman/simpan/';
    $http.post(uploadurl,fd,
      {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      }
      )
    .success(function (data, status, headers, config) {
      alertService.add("success", "Pengumuman Berhasil ditambahkan", 3000);
    })
    .error(function(data, status, headers, config){
      alert(data, status);
    });
  }
