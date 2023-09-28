function disableButton() {
    var button = document.getElementById("button");
    button.disabled = true; 
    button.style.backgroundColor = "#cccccc"; 
    button.style.cursor = "not-allowed"; 
  }
  
  function displayInfo() {
      var fullName = "Aayushi Choksi"; 
      var nuid = "002812272"; 
  
      var fullNameNUID = document.getElementById("fullNameNUID");
      fullNameNUID.textContent = "Full Name: " + fullName + "  NUID: " + nuid;
  }
  
  window.onload = displayInfo;
  
  document.getElementById("add").addEventListener("click", function () {
      try{
      
      var table = document.getElementById("myTable");
  
      
      var studentNumber = table.rows.length - 4; 
      var studentName = "Student " + (studentNumber + 1);
      var teacherName = "Teacher " + (studentNumber + 1);
      var awardStatus = "Approved";
      var semester = "Fall";
      var awardType = "TA";
      var budgetNumber = "12345"; 
      var percentage = "100%";
      
  
      
      var newRow = table.insertRow(-1); 

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        var cell9 = newRow.insertCell(8);
        var cell10 = newRow.insertCell(9);
        
        var deleteButtonCell = newRow.insertCell(8); 
        deleteButtonCell.innerHTML = '<button class="delete-button" onclick="deleteRow(this)">Delete</button>';
        
        var editButtonCell = newRow.insertCell(9); 
        editButtonCell.innerHTML = '<button class="edit-button" onclick="editRow(this)">Edit</button>';

        deleteButtonCell.style.display = "none";
        editButtonCell.style.display = "none";


      cell1.innerHTML = '<input type="checkbox" /><br /><br /><img src="down.png" width="25px" />';
      cell2.innerHTML = studentName;
      cell3.innerHTML = teacherName;
      cell4.innerHTML = awardStatus;
      cell5.innerHTML = semester;
      cell6.innerHTML = awardType;
      cell7.innerHTML = budgetNumber;
      cell8.innerHTML = percentage;
      


      
      var newCheckbox = newRow.querySelector('input[type="checkbox"]');
      newCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
          newRow.style.backgroundColor = 'yellow';
          deleteButtonCell.style.display = "block"; 
            editButtonCell.style.display = "block"; 
          deleteColumn = newRow.querySelector('td:last-child');
        } else {
          newRow.style.backgroundColor = '';
          deleteButtonCell.style.display = "none"; 
        editButtonCell.style.display = "none"; 
        }
      });
      
      alert(studentName + " Record added successfully");
     } catch (error) {
         
         alert("Error occurred while adding the record: " + error.message);
     }
  });

  
  
  var table = document.getElementById("myTable");
  var submitButton = document.getElementById("button");
  
  
  
  table.addEventListener('change', function (event) {
    if (event.target.type === 'checkbox') {
      var checkboxes = table.querySelectorAll('input[type="checkbox"]');
      var checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  
     
      if (checkedCheckboxes.length > 0) {
        
        submitButton.style.backgroundColor = 'orange';
      } else {
        
        submitButton.style.backgroundColor = '';
      }
  
    
      var row = event.target.parentNode.parentNode;
      row.style.backgroundColor = event.target.checked ? 'yellow' : '';
      deleteColumn = row.querySelector('td:last-child');
      editColumn = row.querySelector('td:last-child');
    }
    
  });

function toggleDeleteButtons() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var deleteButtons = document.querySelectorAll('.delete-button');
  
    checkboxes.forEach(function (checkbox, index) {
      if (checkbox.checked) {
        deleteButtons[index].style.display = 'block';
      } else {
        deleteButtons[index].style.display = 'none';
      }
    });
  }
  

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', toggleDeleteButtons);
    checkbox.addEventListener('change', toggleEditButtons);
  });
  
  toggleDeleteButtons();
  toggleEditButtons();

  function toggleEditButtons() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var editButtons = document.querySelectorAll('.edit-button');

    checkboxes.forEach(function (checkbox, index) {
        if (checkbox.checked) {
            editButtons[index].style.display = 'block';
        } else {
            editButtons[index].style.display = 'none';
        }
    });
}
function deleteRow(button) {
    var row = button.closest('tr'); 
    var studentName = row.cells[1].textContent;
    var confirmation = confirm("Are you sure you want to delete the record for " + studentName + "?");
    if (confirmation) {
        row.remove(); 
        alert(studentName + " Record deleted successfully");
    }
  
}


let studentName;
function editRow(button){
  var row = button.closest('tr'); 
    var studentName = row.cells[1].textContent;
    window.prompt("Edit " + studentName + " details");
}


function toggleRow(image) {
    var dataRow = image.parentNode.parentNode.nextElementSibling;
  
    if (dataRow.style.display === '' || dataRow.style.display === 'table-row') {
      dataRow.style.display = 'none'; 
    } else {
      dataRow.style.display = 'table-row'; 
    }
  }
  
var toggleImages = document.querySelectorAll('.toggle-image');

toggleImages.forEach(function (image) {
  image.addEventListener('click', function () {
    toggleRow(this);
  });
});
  
function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`Row Deleted Successfully!`);
  hideOnStart();
  selectRow();
}

  
  
    
    
    
    
    
    
  
  
  
  
  
  
  
  
  
    
    