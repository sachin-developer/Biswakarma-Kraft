

function btnContact() {
    var txtName = $("#txtName").val();
    var txtEmail = $("#txtEmail").val();
    var txtMobile = $("#txtMobile").val();
    var txtMsg = $("#txtMsg").val();

    if (txtName == "" || txtName == null) {
        alert("please enter your name");
        $("#txtName").focus();
        return false;
    }

    if (txtMobile == "" || txtMobile == null) {
        alert("please enter your mobile no");
        $("#txtMobile").focus();
        return false;
    }

    if (txtEmail == "" || txtEmail == null) {
        alert("please enter your email id");
        $("#txtEmail").focus();
        return false;
    }

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(txtEmail)) {
        alert("please enter valid email id");
        $("#txtEmail").focus();
        return false;
    }

    if (txtMsg == "" || txtMsg == null) {
        alert("please enter your msg");
        $("#txtMsg").focus();
        return false;
    }

    $("#btnsubmit").hide();
    $("#btnLoading").fadeIn();
    var postdata = new FormData();
    postdata.append("flag", "Enquiry");
    postdata.append("txtName", txtName);
    postdata.append("txtEmail", txtEmail);
    postdata.append("txtMobile", txtMobile);
    postdata.append("txtMsg", txtMsg);
    $.ajax({
        url: "/contact.ashx",
        type: "POST",
        data: postdata,
        processData: false,
        contentType: false,
        success: function (recievied_data) {
            console.log(recievied_data);
            var objson = JSON.parse(recievied_data);
            if (objson.status == "success") {
                alert("We have recieved your request, our team will get back to you shortly.");
                window.location.href = "/";
            } else {
                alert("Please try after sometime..");
                window.location.href = "/";
            }

        }
    });
}