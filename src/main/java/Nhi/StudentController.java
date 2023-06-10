package Nhi;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping(path = "/", produces = "application/json")
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;
	
	@PostMapping("add")
	public ResponseEntity<?> addStudent(@RequestBody student stu){
		return new ResponseEntity<>(studentRepository.save(stu),HttpStatus.CREATED);
	}
	
	@PostMapping("check")
	public ResponseEntity<?> checkStudent(@RequestBody @Valid student stu, Errors errors){
		if (errors.hasErrors()) {
			List<ObjectError> errorList = errors.getAllErrors();
			Map<String, String> errorMap = new HashMap<>();
			for (ObjectError error : errorList) {
				if (error instanceof FieldError) {
					FieldError fieldError = (FieldError) error;
					errorMap.put(fieldError.getField(), fieldError.getDefaultMessage());
				}
			}
			return new ResponseEntity<> (errorMap, HttpStatus.BAD_REQUEST);
		}
		Map<String, String> noError = new HashMap<>();
		noError.put("error", "no error");
		return new ResponseEntity<> (noError, HttpStatus.OK);
	}
}
