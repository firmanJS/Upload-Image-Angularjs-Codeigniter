<?
	Public function simpan()
	{
		$config['upload_path']    = 'asset/gambar/backend/pengumuman/';
    $config['allowed_types']  = 'jpeg|jpg|png|gif';
	
		$this->load->library('upload', $config);
		$this->upload->do_upload('file');
		$nm_file = $config['file_name'];
		$data = $_POST;
		$judul=$data["judul"];
		$isi=$data["isi"];
		if (empty($this->upload->do_upload('file')))
		{
			$vals=array(
	    	'judul' => $judul,
	    	'isi' => $isi
	    );
	    	$this->db->insert('pengumuman',$vals);
	    	return ($this->db->affected_rows()!=1)?false:true;
		}else{
		$val=array(
    	'judul' => $judul,
    	'isi' => $isi,
			'gambar' =>$nm_file
    );
    	$this->db->insert('pengumuman',$val);
    	return ($this->db->affected_rows()!=1)?false:true;
		}
	}
?>
