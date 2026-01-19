function getMark(selector, subjectName) {
    const value = Number($(selector).val());

    if (!Number.isInteger(value) ||!(0<value&& value<=100)) {
        console.log(0<=value,value<=100)
        throw new Error(`Subject ${subjectName} marks must be a valid score`);
    }

    return value;
}
$(".submit-button").on("click",async (evt)=>{  
    // $("body").empty();
    evt.preventDefault();
    let data={
        
        studentName: $(".name").val(),
        rollNo:$(".rollno").val(),
        marks:{
            subject1: getMark(".subject1",1),
            subject2: getMark(".subject2",2),
            subject3: getMark(".subject3",3),
            subject4: getMark(".subject4",4),
            subject5: getMark(".subject5",5)
        }
        
    }
    await process(data);
    
})
async function process(data){
    let totalScore=0;
    let grades={}
    let marks=data.marks
    let isFail=false;

    for(let d in marks){
        totalScore+=marks[d]
        if(marks[d]>=80){
            grades[d]="O"
        }
        else if(70<=marks[d] && marks[d]<80) grades[d]="A+"
        else if(60<=marks[d] && marks[d]<70) grades[d]="A"
        else if(55<=marks[d] && marks[d]<60) grades[d]="B+"
        else if(50<=marks[d] && marks[d]<55) grades[d]="B"
        else if(45<=marks[d] && marks[d]<50) grades[d]="C"
        else if(40<=marks[d] && marks[d]<45) grades[d]="D"
        
        else if(marks[d]<40){
            isFail=true
            grades[d]="F"
        }
        }
        $("body").load("marksheet.html",function (){
            $(".student-name").html(`Name:${data.studentName}`)
            $(".student-rollNo").html(`Roll No.:${data.rollNo}`)
            for(let subject in marks){
                $(`#${subject}`).html(marks[subject]);
            }
            for(let grade in grades){
                $(`#grade-${grade}`).html(grades[grade]);
            }
            $("#marks-total").html(totalScore);

            $(".result").html(isFail?"Result: Fail": "Result: Pass")
            if(isFail){
                $(".result").css({"color":"red", "background-color":"#edd4d4"})
            }
            
        })

        
}