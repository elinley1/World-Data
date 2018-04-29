$(document).on('click',function(){
    // var query= {
    //     body: 'something'
    // }
    // $.ajax({
    //     url: 'api/map/',
    //     method: 'GET',
    //     data: queryUrl
    // }).then(function(data){
    //     // handle the data
    // })

    $.ajax({
            url: '/post',
            method: 'POST'
    
        }).then(function(data){
            alert("yeah")
        })
})