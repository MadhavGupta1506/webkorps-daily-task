let studentName,rollNo,subject1,subject2,subject3,subject4,subject5;
console.log(studentName)
$(".submit-button").on("click",(evt)=>{  
    // $("body").empty();
    evt.preventDefault();

    studentName= $(".name").val();
    rollNo=$(".rollno").val();
    subject1= $(".subject1").val()
    subject2= $(".subject2").val()
    subject3= $(".subject3").val()
    subject4= $(".subject4").val()
    subject5= $(".subject5").val()
        

})
