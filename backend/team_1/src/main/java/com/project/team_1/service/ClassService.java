package com.project.team_1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.team_1.dto.Class.GetCategoryClassListDto;
import com.project.team_1.dto.Class.GetCategoryDto;
import com.project.team_1.dto.Class.GetClassInfoDto;
import com.project.team_1.dto.Class.GetDifficultyClassListDto;
import com.project.team_1.dto.Class.GetDiscountRateClassListDto;
import com.project.team_1.dto.Class.GetMyCourseDto;
import com.project.team_1.dto.MyPage.GetUserIfnoDto;
import com.project.team_1.dto.MyPage.UserIdDto;
import com.project.team_1.dto.orderList.ClassNameDto;
import com.project.team_1.dto.orderList.GetOrderListDto;
import com.project.team_1.dto.response.ResponseDto;
import com.project.team_1.entity.ClassEntity;
import com.project.team_1.entity.InstructorEntity;
import com.project.team_1.entity.OrderDtlEntity;
import com.project.team_1.entity.OrderMstEntity;
import com.project.team_1.entity.ReviewEntity;
import com.project.team_1.repository.ClassRepository;
import com.project.team_1.repository.InstructorRepository;
import com.project.team_1.repository.OrderDtlRepository;
import com.project.team_1.repository.OrderMstRepository;
import com.project.team_1.repository.ReviewRepository;
import com.project.team_1.repository.UserRepository;

@Service
public class ClassService {

   @Autowired
   ClassRepository classRepository;
   @Autowired
   ReviewRepository reviewRepository;
   @Autowired
   OrderDtlRepository orderDtlRepository;
   @Autowired
   OrderMstRepository orderMstRepository;
   @Autowired
   InstructorRepository instructorRepository;

   // FrontEnd List
   public ResponseDto<List<GetClassInfoDto>> showFrontList() {
      String category = "front";

      List<ClassEntity> showFrontList = classRepository.findFirst5ByCategory(category);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

      for (ClassEntity classEntity : showFrontList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
    }
   

   // all FrontList
//   public ResponseDto<List<GetClassInfoDto>> showAllFrontClassList() {
//      String category = "front";
//
//      List<ClassEntity> showFrontList = classRepository.findByCategory(category);
//      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
//
//      for (ClassEntity classEntity/* 변수 내맘대로 써도됨 */ : showFrontList) {
//         List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
//         int avg = 0;
//         reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
//         for (ReviewEntity review : reviewList) {
//            avg += review.getGrade();
//         }
//         if (reviewList.size() != 0) {
//            avg = avg / reviewList.size();
//         }
//         data.add(new GetClassInfoDto(classEntity, avg));
//      }
//      return ResponseDto.setSuccess("getFrontList", data);
//   }
   
   public ResponseDto<List<GetClassInfoDto>> showClassList(String getcategory) {
      String category = getcategory;
      List<ClassEntity> showClassList;
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

      if(category.equals("all")) {
         showClassList = classRepository.findAll();
      } else {
         showClassList = classRepository.findByCategory(category);
      }
//      List<ClassEntity> showFrontList = classRepository.findByCategory(category);
      
      for (ClassEntity classEntity : showClassList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
     }
   

   // BackEnd List
   public ResponseDto<List<GetClassInfoDto>> showBackList() {
      String category = "back";

      List<ClassEntity> showBackList = classRepository.findFirst5ByCategory(category);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

      for (ClassEntity classEntity : showBackList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // all BackList
   public ResponseDto<List<GetClassInfoDto>> showAllBackClassList() {
      String category = "back";

      List<ClassEntity> showBackList = classRepository.findByCategory(category);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

      for (ClassEntity classEntity : showBackList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // Database List
   public ResponseDto<List<GetClassInfoDto>> showDatabaseList() {
      String category = "database";

      List<ClassEntity> showDatabaseList = classRepository.findFirst5ByCategory(category);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
      for (ClassEntity classEntity : showDatabaseList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // all DatabaseList
   public ResponseDto<List<GetClassInfoDto>> showAllDatabaseClassList() {
      String category = "database";

      List<ClassEntity> showDatabaseList = classRepository.findByCategory(category);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

      for (ClassEntity classEntity : showDatabaseList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // FullStack List
   public ResponseDto<List<GetClassInfoDto>> showFullStackList() {
      String category = "fullstack";
      List<ClassEntity> showFullStackList = classRepository.findFirst5ByCategory(category);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
      for (ClassEntity classEntity : showFullStackList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }
   
   // all FullStackList
         public ResponseDto<List<GetClassInfoDto>> showAllFullStackClassList() {
            String category = "fullstack";

            List<ClassEntity> showFullStackList = classRepository.findByCategory(category);
            List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();

            for (ClassEntity classEntity : showFullStackList) {
                  List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
                  List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
                  String instructor = null;
                  int avg = 0;
                  reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
                  instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
                  for (ReviewEntity review : reviewList) {
                     avg += review.getGrade();
                  }
                  if (reviewList.size() != 0) {
                     avg = avg / reviewList.size();
                  }
                  
                  for (InstructorEntity instructor2 : instructorList) {
                     instructor = instructor2.getInstructorName(); 
                  }
                  
                  
                  
                  data.add(new GetClassInfoDto(classEntity, avg, instructor));
               }
               return ResponseDto.setSuccess("success", data);
         }

   // AllCategoryClass List
         public ResponseDto<List<GetClassInfoDto>> showAllClassList() {

               List<ClassEntity> showAllClassList = classRepository.findAll();
               List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
               for (ClassEntity classEntity : showAllClassList) {
                  List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
                  List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
                  String instructor = null;
                  int avg = 0;
                  reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
                  instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
                  for (ReviewEntity review : reviewList) {
                     avg += review.getGrade();
                  }
                  if (reviewList.size() != 0) {
                     avg = avg / reviewList.size();
                  }
                  
                  for (InstructorEntity instructor2 : instructorList) {
                     instructor = instructor2.getInstructorName(); 
                  }
                  
                  
                  
                  data.add(new GetClassInfoDto(classEntity, avg, instructor));
               }
               return ResponseDto.setSuccess("success", data);
            }

   // searchClass List
   public ResponseDto<List<GetClassInfoDto>> SearchClassList(String search) {
      List<ClassEntity> searchClassList = classRepository.findByClassNameContaining(search);
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
      for (ClassEntity classEntity : searchClassList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // categoryClass List
   public ResponseDto<List<GetClassInfoDto>> getCategoryClassList(GetCategoryClassListDto dto) {
      List<ClassEntity> getCategoryClassList = classRepository.findByCategory(dto.getCategory());
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
      for (ClassEntity classEntity : getCategoryClassList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // difficultyClass list
   public ResponseDto<List<GetClassInfoDto>> getDifficultyClassList(GetDifficultyClassListDto dto) {
      List<ClassEntity> getDifficultyClassList = classRepository.findByDifficulty(dto.getDifficulty());
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
      for (ClassEntity classEntity : getDifficultyClassList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }

   // discountClass list
   public ResponseDto<List<GetClassInfoDto>> getDiscountClassList(GetDiscountRateClassListDto dto) {
      List<ClassEntity> getDiscountRateClassList = classRepository.findByDiscountRate(dto.getDiscountRate());
      List<GetClassInfoDto> data = new ArrayList<GetClassInfoDto>();
      for (ClassEntity classEntity : getDiscountRateClassList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
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
      for (ClassEntity classEntity : getSubcategoryClassList) {
            List<ReviewEntity> reviewList = new ArrayList<ReviewEntity>();
            List<InstructorEntity> instructorList = new ArrayList<InstructorEntity>();
            String instructor = null;
            int avg = 0;
            reviewList = reviewRepository.findByIdClass(classEntity.getIdClass());
            instructorList = instructorRepository.findByIdInstructor(classEntity.getInstructor());
            for (ReviewEntity review : reviewList) {
               avg += review.getGrade();
            }
            if (reviewList.size() != 0) {
               avg = avg / reviewList.size();
            }
            
            for (InstructorEntity instructor2 : instructorList) {
               instructor = instructor2.getInstructorName(); 
            }
            
            
            
            data.add(new GetClassInfoDto(classEntity, avg, instructor));
         }
         return ResponseDto.setSuccess("success", data);
   }
   
   // MyCourse List
   public ResponseDto<List<GetOrderListDto>>showOrderList(String idUser){
      List<GetOrderListDto> data = new ArrayList<GetOrderListDto>();
      List<OrderMstEntity> orderMst;
      
      try {
         orderMst = orderMstRepository.findByIdUser(idUser);
      }catch(Exception e){
         return ResponseDto.setFailed("xxx");
      }
      
      for(OrderMstEntity orderMstEntity : orderMst) {
         List<OrderDtlEntity> orderDtl = orderDtlRepository.findByOrderNumber(orderMstEntity.getOrderNumber());
//         List<ClassEntity> classEntity = new ArrayList<ClassEntity>();
//         List<String> className = new ArrayList<String>();
         List<ClassNameDto> className = new ArrayList<ClassNameDto>();
         int priceSum = 0;
         for(OrderDtlEntity orderDtlEntity : orderDtl) {
            int idClass = classRepository.findById(orderDtlEntity.getIdClass()).get().getIdClass();
            String img = classRepository.findById(orderDtlEntity.getIdClass()).get().getImg();
            String name = classRepository.findById(orderDtlEntity.getIdClass()).get().getClassName();
            className.add(new ClassNameDto(idClass, img, name));
            priceSum +=  classRepository.findById(orderDtlEntity.getIdClass()).get().getPrice();
         }
         
         data.add( new GetOrderListDto(orderMstEntity, className, priceSum));
      }
      
      
//      GetOrderListDto data = 
//            GetOrderListDto
//            .builder()
//            .idUser(idUser)
//            .orderNumber(orderMstEntity.getOrderNumber())
//            .orderDate(orderMstEntity.getOrderDate())
//            .status(orderMstEntity.getStatus())
//            .orderDtlList(orderDtl)
//            .classEntity(classEntity)
//            .build();
      
      return ResponseDto.setSuccess("getClassList success", data);
   }

}