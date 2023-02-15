package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.team_1.service.FileService;

@RestController
@RequestMapping("/api/file/")
public class FileController {

	@Autowired
	FileService fileService;

	@GetMapping(value = "image/{imageName}", produces = { MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE })
	public Resource getImage(@PathVariable("imageName") String imageName) {
		return fileService.getImage(imageName);
	}

	// 파일을 서버에 업로드
	@PostMapping("upload")
	// @RequestParam(field명) : RequestBody에서 특정 필드를 받아옴
	// Request body에 파일을 받아 올땐 MultipartFile 인스턴스로 받음
	public String fileUpload(@RequestParam(value = "file") MultipartFile file) {
		return fileService.fileUpload(file);
	}

}
