package Nhi;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity

public class student {
	
	public student(String id, String name, Date dob, String department, int approved) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.department = department;
		this.approved = approved;
	}
	
	public student() {}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getApproved() {
		return approved;
	}
	public void setApproved(int approved) {
		this.approved = approved;
	}
	@Id
	@NotNull
	@NotBlank(message = "nhap id")
	private String id;
	
	@NotNull
	@NotBlank(message = "nhap ten")
	private String name;
	
	@NotNull(message = "nhap dob")
	private Date dob;
	
	private String department;
	private int approved;
	
	
}
