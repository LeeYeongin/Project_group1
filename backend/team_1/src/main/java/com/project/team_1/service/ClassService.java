package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.team_1.dto.Class.GetCategoryClassListDto;
import com.project.team_1.dto.Class.GetCategoryDto;
import com.project.team_1.dto.Class.GetClassInfoDto;
import com.project.team_1.dto.Class.GetDifficultyClassListDto;
import com.project.team_1.dto.Class.GetDiscountRateClassListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.ReviewEntity;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.ReviewRepository;

@Service
public class ClassService {

	@Autowired
	ClassRepository classRepository;
	@Autowired
	ReviewRepository reviewRepository;

	// FrontEnd List
	public ResponseDto<List<GetClassInfoDto>> showFrontList() {
		String category = "front";

		List<ClassEntity> showFrontList = classRepository.findFirst5ByCategory(category);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

		for (ClassEntity classEntity : showFrontList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}

			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}

			data.add(new GetClassInfoDto(classEntity, avg));
		}

		return ResponseDto.setSuccess("getFrontCarousel", data);
	}

	// all FrontList
//	public ResponseDto<List<GetClassInfoDto>> showAllFrontClassList() {
//		String category = "front";
//
//		List<ClassEntity> showFrontList = classRepository.findByCategory(category);
//		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
//
//		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFrontList) {
//			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
//			int avg = 0;
//			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
//			for (ReviewEntity review : reviewList) {
//				avg += review.getGrade();
//			}
//			if (reviewList.size() != 0) {
//				avg = avg / reviewList.size();
//			}
//			data.add(new GetClassInfoDto(classEntity, avg));
//		}
//		return ResponseDto.setSuccess("getFrontList", data);
//	}
	
	public ResponseDto<List<GetClassInfoDto>> showClassList(String getcategory) {
		String category = getcategory;
		List<ClassEntity> showClassList;
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

		if(category.equals("all")) {
			showClassList = classRepository.findAll();
		} else {
			showClassList = classRepository.findByCategory(category);
		}
//		List<ClassEntity> showFrontList = classRepository.findByCategory(category);
		
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showClassList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("getClassList success", data);
	}

	// BackEnd List
	public ResponseDto<List<GetClassInfoDto>> showBackList() {
		String category = "back";

		List<ClassEntity> showBackList = classRepository.findFirst5ByCategory(category);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showBackList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("getBackCarousel", data);
	}

	// all BackList
	public ResponseDto<List<GetClassInfoDto>> showAllBackClassList() {
		String category = "back";

		List<ClassEntity> showBackList = classRepository.findByCategory(category);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showBackList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("getBackList", data);
	}

	// Database List
	public ResponseDto<List<GetClassInfoDto>> showDatabaseList() {
		String category = "database";

		List<ClassEntity> showDatabaseList = classRepository.findFirst5ByCategory(category);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showDatabaseList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			;
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("getDatabaseCarousel", data);
	}

	// all DatabaseList
	public ResponseDto<List<GetClassInfoDto>> showAllDatabaseClassList() {
		String category = "database";

		List<ClassEntity> showDatabaseList = classRepository.findByCategory(category);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showDatabaseList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("getDatabaseList", data);
	}

	// FullStack List
	public ResponseDto<List<GetClassInfoDto>> showFullStackList() {
		String category = "fullstack";
		List<ClassEntity> showFullStackList = classRepository.findFirst5ByCategory(category);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFullStackList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("getFullStackCarousel", data);
	}
	
	// all FullStackList
			public ResponseDto<List<GetClassInfoDto>> showAllFullStackClassList() {
				String category = "fullstack";

				List<ClassEntity> showFullStackList = classRepository.findByCategory(category);
				List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

				for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFullStackList) {
					List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
					int avg = 0;
					reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
					for (ReviewEntity review : reviewList) {
						avg += review.getGrade();
					}
					if (reviewList.size() != 0) {
						avg = avg / reviewList.size();
					}
					data.add(new GetClassInfoDto(classEntity, avg));
				}
				return ResponseDto.setSuccess("getFullStackList", data);
			}

	// AllCategoryClass List
	public ResponseDto<List<GetClassInfoDto>> showAllClassList() {

		List<ClassEntity> showAllClassListkList = classRepository.findAll();
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity : showAllClassListkList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("success", data);
	}

	// searchClass List
	public ResponseDto<List<GetClassInfoDto>> SearchClassList(String search) {
		List<ClassEntity> searchClassList = classRepository.findByClassNameContaining(search);
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : searchClassList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("success", data);
	}

	// categoryClass List
	public ResponseDto<List<GetClassInfoDto>> getCategoryClassList(GetCategoryClassListDto dto) {
		List<ClassEntity> getCategoryClassList = classRepository.findByCategory(dto.getCategory());
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : getCategoryClassList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("success", data);
	}

	// difficultyClass list
	public ResponseDto<List<GetClassInfoDto>> getDifficultyClassList(GetDifficultyClassListDto dto) {
		List<ClassEntity> getDifficultyClassList = classRepository.findByDifficulty(dto.getDifficulty());
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : getDifficultyClassList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("success", data);
	}

	// discountClass list
	public ResponseDto<List<GetClassInfoDto>> getDiscountClassList(GetDiscountRateClassListDto dto) {
		List<ClassEntity> getDiscountRateClassList = classRepository.findByDiscountRate(dto.getDiscountRate());
		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : getDiscountRateClassList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}
		return ResponseDto.setSuccess("success", data);
	}

	// SubcategoryClass List
	public ResponseDto<List<GetClassInfoDto>> getSubcategoryClassList(GetCategoryDto dto) {
		String category = dto.getCategory();
		String difficulty = dto.getDifficulty();
		boolean discountRate = dto.getDiscountRate();

		List<ClassEntity> getSubcategoryClassList;

		if (discountRate) {
			if (category.equals("all")) {
				if (difficulty.equals("notSelect")) {
					getSubcategoryClassList = classRepository.findByDiscountRateNot(0);
				} else {
					getSubcategoryClassList = classRepository.findByDiscountRateNotAndDifficulty(0, difficulty);
				}
			} else {
				if (difficulty.equals("notSelect")) {
					getSubcategoryClassList = classRepository.findByDiscountRateNotAndCategory(0, category);
				} else {
					getSubcategoryClassList = classRepository.findByDiscountRateNotAndCategoryAndDifficulty(0, category,
							difficulty);
				}
			}
		} else {
			if (category.equals("all")) {
				if (difficulty.equals("notSelect")) {
					getSubcategoryClassList = classRepository.findAll();
				} else {
					getSubcategoryClassList = classRepository.findByDifficulty(difficulty);
				}
			} else {
				if (difficulty.equals("notSelect")) {
					getSubcategoryClassList = classRepository.findByCategory(category);
				} else {
					getSubcategoryClassList = classRepository.findByCategoryAndDifficulty(category, difficulty);
				}
			}
		}

		List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
		for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : getSubcategoryClassList) {
			List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
			int avg = 0;
			reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
			for (ReviewEntity review : reviewList) {
				avg += review.getGrade();
			}
			if (reviewList.size() != 0) {
				avg = avg / reviewList.size();
			}
			data.add(new GetClassInfoDto(classEntity, avg));
		}

		return ResponseDto.setSuccess("success", data);
	}

}
