var id = ""
var name = ""
var dob = ""
var department = ""

function check(){
	const xhttp = new XMLHttpRequest();
	var id1 = document.getElementById("id").value;
	var name1 = document.getElementById("name").value;
	var dob1 = document.getElementById("dob").value;
	var department1 = document.getElementById("department").value;
	alert(department)
	
	id = id1
	name = name1
	dob = dob1
	department = department1
	xhttp.onload = function(){
		alert('ss');
		var ResponseJSON = xhttp.responseText
		
		alert(xhttp.status)
		if(xhttp.status == 400 ){
			var iderror = document.getElementById("iderror");
			var nameerror = document.getElementById("nameerror");
			var doberror = document.getElementById("doberror");
			alert('nhi')
			var Response = JSON.parse(ResponseJSON)
			if (Response.hasOwnProperty("id")){
				var html = ''
				html += Response.id
				iderror.innerHTML = html;
			} else iderror.innerHTML = ''
			
			if (Response.hasOwnProperty("name")){
				var html = ''
				html += Response.name
				nameerror.innerHTML = html;
			} else nameerror.innerHTML = ''
			
			if (Response.hasOwnProperty("dob")){
				var html = ''
				html += Response.dob
				doberror.innerHTML = html;
			} else doberror.innerHTML = ''
		}
		else{
			
			var s = document.getElementById("form__Data")
			var s1 = '<H3>id : '+id+'<br> Tên : '+name+'<br> Ngày sinh : '+dob+'<br> Lớp : '+department+'<br></H3><input type="button" onclick="confirm()" value="Confirm"><input type="reset" onclick="Back()" value="Back">'
			s.innerHTML = s1;
		}
		
		
		
	}
	const Stu = {
		id : id,
		name : name,
		dob: dob,
		department : department,
		approved : 0
	}
	
	xhttp.open("POST","/check", false)
	xhttp.setRequestHeader("Content-type","application/json")
	xhttp.send(JSON.stringify(Stu))
}

function Reset(){
	var a = document.getElementById("form__Data");
	var a1 = '<label>Nhap id :</label><input type="text" placeholder="nhap id" id = "id"><p id = "iderror"></p><br><br><label>Nhap ten :</label><input type="text" placeholder="nhap name" id ="name"><p id = "nameerror"></p><br><br><label>Nhap ngay sinh : </label><input type="date" placeholder="nhap dob" id="dob"><p id="doberror"></p><br><br><label>nhap lop :</label><select id="department"><option value="">lop 4</option><option value="">lop 3</option><option value="">lop 2</option><option value="" selected>lop 1</option></select><br><br><input type="button" onclick="check()" value="Add"><input type="reset" onclick="Reset()" value="Reset">';
	a.innerHTML = a1;
}

function confirm(){
	const xhttp = new XMLHttpRequest();
	
	xhttp.onload = function(){
		if (xhttp.status == 201){
			Reset();
		}
	}
	const Stu = {
		id : id,
		name : name,
		dob: dob,
		department : department,
		approved : 0
	}
	xhttp.open("POST","/add", false)
	xhttp.setRequestHeader("Content-type","application/json")
	xhttp.send(JSON.stringify(Stu))
}