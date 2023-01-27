package com.project.team_1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.dto.response.ResultResponseDTO;
import com.project.team_1.dto.review.PatchReviewDTO;
import com.project.team_1.dto.review.ReviewDTO;
import com.project.team_1.service.ReviewService;

@RestController
@RequestMapping("main5/review/")
public class ReviewController {
	
	@Autowired ReviewService reviewService;
	
	@PostMapping("write")
	public ResponseDto<ResultResponseDTO> writeReview(@RequestBody ReviewDTO reviewDto) {
		return reviewService.ReviewWrite(reviewDto);
	}
	
	@PatchMapping("update")
	public ResponseDto<ResultResponseDTO> updateReview(@RequestBody PatchReviewDTO patchDto){
		return reviewService.ReviewUpdate(patchDto);
	}
}
