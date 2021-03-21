var students = [];
var row;

document.getElementById('Add').addEventListener('click', () => {
    let x = 30;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');
    row=students.length;
	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
	list(students,row);
	// Show success message
	showMessage('success');
	student=null;
	

});


function list(s,i) {
	var table = document.getElementById("sList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
    cell1.innerHTML = s[i].name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = s[i].id;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = s[i].gdpa;
		   
}


document.getElementById('Updata').addEventListener('click', () => {
	  
	let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');
	
	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	updatastudent(nameInputEl.value,idInputEl.value,gdpaInputEl.value);
   
	showMessagee('success');

    student = null;

});









function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
	
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
	
}
function showMessagee(event){
    if (event == 'success') {
        alert('Studnet Update!')
    }else{
        alert('Faild to Update student')
    }
	
}

function updatastudent(names, id, gdpa)
{
	
	var i;
   for (i = 0; i < students.length; i++) 
   {
          if(students[i].id===id)
		  {
			students[i].name=names;
			students[i].gdpa=gdpa;
		
			console.log('students array: ', students);
		  }

   }

   
}




// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.