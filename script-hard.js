$(function(){

    $('#form').submit(function(){
        var answerone = $("#answer-1").val();
        var answertwo = $("#answer-2").val();
        var answerthree = $("#answer-3").val();
        var answerfour = $("#answer-4").val();

        if(answerone==4 && answertwo==3 && answerthree==7 && answerfour==5){
            $('.feedback').addClass('active');
            $('.fake').removeClass('active');
        }else{
            $('.fake').addClass('active');
            $('.feedback').removeClass('active');
            
        }
        return false;
    });
    
    });