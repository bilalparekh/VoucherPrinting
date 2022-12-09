$(function(){
    $(".btn").on('click', function(){
        $("#recvByName").html($("#name").val())
        if($("#fname").val() != ""){
            $("#relTitleSonOf").html("S/O");
            $("#recvBySO").html(" " + $("#fname").val());
        }
        if($("#wname").val() != ""){
            $("#relTitleWifeOf").html("W/O");
            $("#recvByWO").html($("#wname").val())
        }
        
        $("#contactNo").html($("#cNum").val())
        $("#unitNum").html($("#unit").val())
        $(".typeVal").html($("#paymentType").val())
        $("#floorVal").html($("#floor").val())
        $("#PaymentMode").html($("#paymentMode").val())
        $("#cheque").html($("#chequePO").val())
        $("#dateVal").html($("#date").val())
        $("#bankName").html($("#bank").val())
        $("#dateRecv").html($("#date").val())
        $("#recieptNumber").html($("#fname").val())
        $("#amountRecv").html($("#amount").val())
        $("#companyNameValue").html($("#companyName").val())
        if($("#recvByName").html() != ""){
            window.print()
        }
        
    })
    function getDateAndTime(data){
        var dt = new Date(data);
        var dateString = dt.getDate() + '/' + (dt.getMonth() + 1) + '/' + dt.getFullYear();
        var ampm = dt.getHours() >= 12 ? "pm" : "am";
        var min =  dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes() ;
        var hour = (dt.getHours() > 12 ? dt.getHours() % 12 : dt.getHours() == 0 ? "12" : dt.getHours());
        var timeString = (hour < 10 ? "0" + hour : hour) + ':' + min + " " + ampm;
        return {dateString:dateString, timeString:timeString};
    }
    
    
    
})